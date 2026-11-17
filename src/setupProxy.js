// Dev-only: lets `npm start` serve the Vercel functions in /api,
// so the contact and careers forms can be tested locally. Reads RESEND_API_KEY,
// CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL from .env.local.
// Not used in production — Vercel serves /api/* itself.
const handlers = {
  '/api/contact': require('../api/contact'),
  '/api/careers': require('../api/careers'),
};

module.exports = function (app) {
  app.post(Object.keys(handlers), (req, res) => {
    const handler = handlers[req.path];
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      req.body = raw;
      Promise.resolve(handler(req, res)).catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'server_error' });
      });
    });
  });
};
