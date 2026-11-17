// Email template for job applications from the Careers page.
// Same look as the contact email (see contactEmail.js); the CV travels as an attachment.

const { escapeHtml, formatDate, row, GOLD, DARK, MUTED, BORDER } = require('./contactEmail');

const POSITION_LABELS = {
  lawyer: 'Avokat',
  paralegal: 'Paraligjor',
  'legal-assistant': 'Asistent Ligjor',
  intern: 'Praktikant Ligjor',
  administrative: 'Staf Administrativ',
};

const EXPERIENCE_LABELS = {
  '0-2': '0–2 vite',
  '3-5': '3–5 vite',
  '5-10': '5–10 vite',
  '10+': '10+ vite',
};

const LANGUAGE_LABELS = { al: 'Shqip', en: 'Anglisht', de: 'Gjermanisht', tr: 'Turqisht' };

function formatSize(bytes) {
  return bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

function buildCareersEmail(
  { fullName, email, phone, position, experience, coverLetter, language, cvName, cvSize },
  receivedAt = new Date()
) {
  const positionLabel = POSITION_LABELS[position] || position;
  const experienceLabel = EXPERIENCE_LABELS[experience] || experience;
  const lang = LANGUAGE_LABELS[language] || '';
  const when = formatDate(receivedAt);

  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safePosition = escapeHtml(positionLabel);
  const safeLetter = escapeHtml(coverLetter).replace(/\r?\n/g, '<br>');

  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    `Re: Aplikimi për ${positionLabel} – Bytyqi & Partners`
  )}`;
  const phoneHref = `tel:${String(phone || '').replace(/[^\d+]/g, '')}`;

  const emailSubject = `💼 Aplikim i ri: ${positionLabel} – ${fullName}`;

  const html = `<!DOCTYPE html>
<html lang="sq">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>${escapeHtml(emailSubject)}</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${safeName} ka aplikuar për pozicionin ${safePosition} – CV e bashkangjitur
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:${DARK};padding:26px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:bold;color:${GOLD};">Bytyqi &amp; Partners</td>
                  <td align="right" style="font-size:12px;color:#9ca3af;">Karriera</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr><td style="background:${GOLD};height:5px;line-height:5px;font-size:0;">&nbsp;</td></tr>

          <!-- Title -->
          <tr>
            <td style="padding:32px 32px 8px;">
              <span style="display:inline-block;background:#FFF7CC;color:#7a6400;font-size:12px;font-weight:700;padding:6px 12px;border-radius:999px;letter-spacing:0.03em;">${safePosition}</span>
              <h1 style="margin:16px 0 6px;font-size:24px;line-height:1.3;color:${DARK};">Aplikim i ri për punë</h1>
              <p style="margin:0;font-size:15px;color:${MUTED};">Dërguar më ${escapeHtml(when)}</p>
            </td>
          </tr>

          <!-- Applicant details -->
          <tr>
            <td style="padding:16px 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row('Kandidati', safeName)}
                ${row('Email', `<a href="mailto:${safeEmail}" style="color:${DARK};text-decoration:underline;">${safeEmail}</a>`)}
                ${row('Telefoni', `<a href="${escapeHtml(phoneHref)}" style="color:${DARK};text-decoration:none;">${safePhone}</a>`)}
                ${row('Pozicioni', safePosition)}
                ${row('Përvoja', escapeHtml(experienceLabel))}
                ${lang ? row('Gjuha', escapeHtml(lang)) : ''}
              </table>
            </td>
          </tr>

          <!-- CV attachment notice -->
          <tr>
            <td style="padding:24px 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px dashed ${GOLD};border-radius:10px;background:#FFFBEA;">
                <tr>
                  <td style="padding:14px 18px;font-size:28px;width:40px;">📎</td>
                  <td style="padding:14px 18px 14px 0;">
                    <div style="font-size:15px;font-weight:700;color:${DARK};word-break:break-all;">${escapeHtml(cvName)}</div>
                    <div style="font-size:13px;color:${MUTED};">CV e bashkangjitur në këtë email${cvSize ? ` · ${formatSize(cvSize)}` : ''}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Cover letter -->
          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0 0 10px;font-size:13px;color:${MUTED};text-transform:uppercase;letter-spacing:0.04em;">Letra e motivimit</p>
              <div style="background:#fafafa;border-left:4px solid ${GOLD};border-radius:8px;padding:18px 20px;font-size:16px;line-height:1.65;color:${DARK};">${safeLetter}</div>
            </td>
          </tr>

          <!-- Actions -->
          <tr>
            <td style="padding:24px 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:${GOLD};border-radius:8px;">
                    <a href="${escapeHtml(replyHref)}" style="display:inline-block;padding:14px 26px;font-size:15px;font-weight:700;color:${DARK};text-decoration:none;">✉️&nbsp; Përgjigju kandidatit</a>
                  </td>
                  <td style="width:12px;"></td>
                  <td style="border:2px solid ${DARK};border-radius:8px;">
                    <a href="${escapeHtml(phoneHref)}" style="display:inline-block;padding:12px 22px;font-size:15px;font-weight:700;color:${DARK};text-decoration:none;">📞&nbsp; Telefono</a>
                  </td>
                </tr>
              </table>
              <p style="margin:16px 0 0;font-size:13px;color:${MUTED};">Mund të shtypni edhe “Reply” direkt – përgjigjja shkon te ${safeEmail}.</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#fafafa;border-top:1px solid ${BORDER};padding:18px 32px;font-size:12px;line-height:1.6;color:${MUTED};">
              Ky email u gjenerua automatikisht nga faqja e Karrierës në <a href="https://www.bytyqipartners.com/careers" style="color:${MUTED};">bytyqipartners.com</a>.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    'Aplikim i ri për punë nga faqja bytyqipartners.com',
    `Dërguar më: ${when}`,
    '',
    `Kandidati: ${fullName}`,
    `Email: ${email}`,
    `Telefoni: ${phone}`,
    `Pozicioni: ${positionLabel}`,
    `Përvoja: ${experienceLabel}`,
    lang ? `Gjuha: ${lang}` : null,
    `CV: ${cvName} (e bashkangjitur)`,
    '',
    'Letra e motivimit:',
    coverLetter,
  ]
    .filter((line) => line !== null)
    .join('\n');

  return { subject: emailSubject, html, text };
}

module.exports = { buildCareersEmail, POSITION_LABELS, EXPERIENCE_LABELS };
