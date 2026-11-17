// Dev-only: lets `npm start` serve the Vercel function at /api/contact,
// so the contact form can be tested locally. Reads RESEND_API_KEY,
// CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL from .env.local.
// Not used in production — Vercel serves /api/* itself.
const contactHandler = require('../api/contact');

module.exports = function (app) {
  app.post('/api/contact', (req, res) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      req.body = raw;
      Promise.resolve(contactHandler(req, res)).catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'server_error' });
      });
    });
  });
};
