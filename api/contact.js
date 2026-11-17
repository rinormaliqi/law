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
const { parseBody, clean, recipients, sendEmail } = require('./_lib/resend');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const body = parseBody(req);
  if (!body) return res.status(400).json({ error: 'invalid_json' });

  // Honeypot: real visitors never fill this hidden field. Pretend success for bots.
  if (body.company) return res.status(200).json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    subject: clean(body.subject, 40),
    message: clean(body.message, 5000),
    language: clean(body.language, 5),
  };

  if (!data.name || !EMAIL_RE.test(data.email) || !data.message || !SUBJECT_LABELS[data.subject]) {
    return res.status(400).json({ error: 'invalid_input' });
  }

  const result = await sendEmail({
    to: recipients('CONTACT_TO_EMAIL'),
    replyTo: data.email,
    ...buildContactEmail(data),
  });

  return result.ok
    ? res.status(200).json({ ok: true })
    : res.status(result.status).json({ error: result.error });
};
