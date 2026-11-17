// Shared helpers for the /api functions: request parsing and sending through Resend.

const DEFAULT_FROM = 'Bytyqi & Partners <onboarding@resend.dev>';

function parseBody(req) {
  const body = req.body;
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return null;
    }
  }
  return body || {};
}

function clean(value, max) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function recipients(...envNames) {
  for (const name of envNames) {
    const list = (process.env[name] || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    if (list.length) return list;
  }
  return [];
}

// Returns { ok: true } or { ok: false, status, error } ready to send back to the browser.
async function sendEmail({ to, replyTo, subject, html, text, attachments }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !to || to.length === 0) {
    console.error('Email is not configured: RESEND_API_KEY or recipient env var missing');
    return { ok: false, status: 500, error: 'not_configured' };
  }

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
        reply_to: replyTo,
        subject,
        html,
        text,
        ...(attachments ? { attachments } : {}),
      }),
    });

    if (!response.ok) {
      console.error('Resend error', response.status, await response.text());
      return { ok: false, status: 502, error: 'send_failed' };
    }
    return { ok: true };
  } catch (err) {
    console.error('Resend request failed', err);
    return { ok: false, status: 502, error: 'send_failed' };
  }
}

module.exports = { parseBody, clean, recipients, sendEmail };
