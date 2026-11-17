// Vercel serverless function: POST /api/contact
// Sends contact-form submissions to the firm through Resend.
//
// Environment variables (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY      required  API key from https://resend.com/api-keys
//   CONTACT_TO_EMAIL    required  where submissions are delivered (comma-separated for several)
//   CONTACT_FROM_EMAIL  optional  verified sender, e.g. "Bytyqi & Partners <noreply@bytyqipartners.com>".
//                                 Defaults to Resend's test sender, which can only deliver to the
//                                 email address that owns the Resend account.

const { buildContactEmail, SUBJECT_LABELS } = require('./_lib/contactEmail');

const DEFAULT_FROM = 'Bytyqi & Partners <onboarding@resend.dev>';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 200, phone: 40, message: 5000 };

function clean(value, max) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'invalid_json' });
    }
  }
  body = body || {};

  // Honeypot: real visitors never fill this hidden field. Pretend success for bots.
  if (body.company) {
    return res.status(200).json({ ok: true });
  }

  const data = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    phone: clean(body.phone, LIMITS.phone),
    subject: clean(body.subject, 40),
    message: clean(body.message, LIMITS.message),
    language: clean(body.language, 5),
  };

  if (!data.name || !EMAIL_RE.test(data.email) || !data.message || !SUBJECT_LABELS[data.subject]) {
    return res.status(400).json({ error: 'invalid_input' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.CONTACT_TO_EMAIL || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (!apiKey || to.length === 0) {
    console.error('Contact form is not configured: RESEND_API_KEY or CONTACT_TO_EMAIL missing');
    return res.status(500).json({ error: 'not_configured' });
  }

  const { subject, html, text } = buildContactEmail(data);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
        to,
        reply_to: data.email,
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Resend error', response.status, detail);
      return res.status(502).json({ error: 'send_failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend request failed', err);
    return res.status(502).json({ error: 'send_failed' });
  }
};
