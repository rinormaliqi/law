// Vercel serverless function: POST /api/careers
// Sends job applications from the Careers page, with the CV attached, through Resend.
//
// Uses the same environment variables as /api/contact, plus:
//   CAREERS_TO_EMAIL  optional  where applications go; falls back to CONTACT_TO_EMAIL
//
// The CV arrives base64-encoded in the JSON body. Vercel caps request bodies at 4.5 MB,
// so the file itself is limited to 3 MB (base64 adds ~33%).

const { buildCareersEmail, POSITION_LABELS, EXPERIENCE_LABELS } = require('./_lib/careersEmail');
const { parseBody, clean, recipients, sendEmail } = require('./_lib/resend');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CV_BYTES = 3 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx'];
const BASE64_RE = /^[A-Za-z0-9+/]+={0,2}$/;

function safeFilename(name) {
  const cleaned = String(name || '')
    .replace(/[\\/:*?"<>|\r\n]+/g, '_')
    .trim()
    .slice(0, 120);
  return cleaned || 'CV';
}

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
    fullName: clean(body.fullName, 120),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    position: clean(body.position, 40),
    experience: clean(body.experience, 10),
    coverLetter: clean(body.coverLetter, 8000),
    language: clean(body.language, 5),
  };

  if (
    !data.fullName ||
    !EMAIL_RE.test(data.email) ||
    !data.phone ||
    !data.coverLetter ||
    !POSITION_LABELS[data.position] ||
    !EXPERIENCE_LABELS[data.experience]
  ) {
    return res.status(400).json({ error: 'invalid_input' });
  }

  // CV validation
  const cv = body.cv || {};
  const cvName = safeFilename(cv.name);
  const extension = cvName.split('.').pop().toLowerCase();
  const content = typeof cv.content === 'string' ? cv.content.replace(/\s/g, '') : '';

  if (!ALLOWED_EXTENSIONS.includes(extension) || !content || !BASE64_RE.test(content)) {
    return res.status(400).json({ error: 'invalid_file' });
  }
  const cvSize = Buffer.byteLength(content, 'base64');
  if (cvSize > MAX_CV_BYTES) {
    return res.status(413).json({ error: 'file_too_large' });
  }

  const result = await sendEmail({
    to: recipients('CAREERS_TO_EMAIL', 'CONTACT_TO_EMAIL'),
    replyTo: data.email,
    ...buildCareersEmail({ ...data, cvName, cvSize }),
    attachments: [{ filename: cvName, content }],
  });

  return result.ok
    ? res.status(200).json({ ok: true })
    : res.status(result.status).json({ error: result.error });
};
