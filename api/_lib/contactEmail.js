// Email template for contact-form submissions sent to the firm.
// Table-based layout with inline styles so it renders the same in Gmail,
// Outlook and Apple Mail. Written in Albanian, since the recipient reads it.

const GOLD = '#FFD700';
const DARK = '#111111';
const MUTED = '#6b7280';
const BORDER = '#e5e7eb';

const SUBJECT_LABELS = {
  consultation: 'Konsultim',
  corporate: 'Ligji i Shoqërive',
  litigation: 'Procesi Gjyqësor',
  realestate: 'Pasuri e Paluajtshme',
  family: 'Ligji i Familjes',
  other: 'Tjetër',
};

const LANGUAGE_LABELS = {
  al: 'Shqip',
  en: 'Anglisht',
  de: 'Gjermanisht',
  tr: 'Turqisht',
};

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function subjectLabel(key) {
  return SUBJECT_LABELS[key] || key || '—';
}

function formatDate(date) {
  return new Intl.DateTimeFormat('sq-AL', {
    timeZone: 'Europe/Belgrade', // Kosovo time
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(date).replace(' në ', ', ora ');
}

function row(label, valueHtml) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${BORDER};width:130px;vertical-align:top;font-size:13px;color:${MUTED};text-transform:uppercase;letter-spacing:0.04em;">${label}</td>
      <td style="padding:14px 0;border-bottom:1px solid ${BORDER};vertical-align:top;font-size:16px;color:${DARK};font-weight:600;">${valueHtml}</td>
    </tr>`;
}

function buildContactEmail({ name, email, phone, subject, message, language }, receivedAt = new Date()) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeSubject = escapeHtml(subjectLabel(subject));
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');
  const when = formatDate(receivedAt);
  const lang = LANGUAGE_LABELS[language] || '';

  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    `Re: ${subjectLabel(subject)} – Bytyqi & Partners`
  )}`;
  const phoneHref = `tel:${String(phone || '').replace(/[^\d+]/g, '')}`;

  const emailSubject = `📩 Mesazh i ri: ${subjectLabel(subject)} – ${name}`;

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
    ${safeName} ju ka dërguar një mesazh nga faqja – ${safeSubject}
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
                  <td align="right" style="font-size:12px;color:#9ca3af;">Formulari i kontaktit</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr><td style="background:${GOLD};height:5px;line-height:5px;font-size:0;">&nbsp;</td></tr>

          <!-- Title -->
          <tr>
            <td style="padding:32px 32px 8px;">
              <span style="display:inline-block;background:#FFF7CC;color:#7a6400;font-size:12px;font-weight:700;padding:6px 12px;border-radius:999px;letter-spacing:0.03em;">${safeSubject}</span>
              <h1 style="margin:16px 0 6px;font-size:24px;line-height:1.3;color:${DARK};">Keni një mesazh të ri</h1>
              <p style="margin:0;font-size:15px;color:${MUTED};">Dërguar më ${escapeHtml(when)}</p>
            </td>
          </tr>

          <!-- Sender details -->
          <tr>
            <td style="padding:16px 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row('Emri', safeName)}
                ${row('Email', `<a href="mailto:${safeEmail}" style="color:${DARK};text-decoration:underline;">${safeEmail}</a>`)}
                ${row('Telefoni', phone ? `<a href="${escapeHtml(phoneHref)}" style="color:${DARK};text-decoration:none;">${safePhone}</a>` : `<span style="color:${MUTED};font-weight:400;">Nuk është dhënë</span>`)}
                ${row('Tema', safeSubject)}
                ${lang ? row('Gjuha', escapeHtml(lang)) : ''}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0 0 10px;font-size:13px;color:${MUTED};text-transform:uppercase;letter-spacing:0.04em;">Mesazhi</p>
              <div style="background:#fafafa;border-left:4px solid ${GOLD};border-radius:8px;padding:18px 20px;font-size:16px;line-height:1.65;color:${DARK};">${safeMessage}</div>
            </td>
          </tr>

          <!-- Actions -->
          <tr>
            <td style="padding:24px 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:${GOLD};border-radius:8px;">
                    <a href="${escapeHtml(replyHref)}" style="display:inline-block;padding:14px 26px;font-size:15px;font-weight:700;color:${DARK};text-decoration:none;">✉️&nbsp; Përgjigju me email</a>
                  </td>
                  ${phone ? `<td style="width:12px;"></td>
                  <td style="border:2px solid ${DARK};border-radius:8px;">
                    <a href="${escapeHtml(phoneHref)}" style="display:inline-block;padding:12px 22px;font-size:15px;font-weight:700;color:${DARK};text-decoration:none;">📞&nbsp; Telefono</a>
                  </td>` : ''}
                </tr>
              </table>
              <p style="margin:16px 0 0;font-size:13px;color:${MUTED};">Mund të shtypni edhe “Reply” direkt – përgjigjja shkon te ${safeEmail}.</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#fafafa;border-top:1px solid ${BORDER};padding:18px 32px;font-size:12px;line-height:1.6;color:${MUTED};">
              Ky email u gjenerua automatikisht nga formulari i kontaktit në <a href="https://www.bytyqipartners.com" style="color:${MUTED};">bytyqipartners.com</a>.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    'Keni një mesazh të ri nga faqja bytyqipartners.com',
    `Dërguar më: ${when}`,
    '',
    `Emri: ${name}`,
    `Email: ${email}`,
    `Telefoni: ${phone || 'Nuk është dhënë'}`,
    `Tema: ${subjectLabel(subject)}`,
    lang ? `Gjuha: ${lang}` : null,
    '',
    'Mesazhi:',
    message,
  ]
    .filter((line) => line !== null)
    .join('\n');

  return { subject: emailSubject, html, text };
}

module.exports = { buildContactEmail, SUBJECT_LABELS, escapeHtml, formatDate, row, GOLD, DARK, MUTED, BORDER };
