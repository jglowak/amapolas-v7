// Worker de Amapolas: sirve el sitio estático (dist/) y atiende /api/* con Brevo.
//   POST /api/contacto   → mail transaccional a MAIL_TO (formularios de prensa, alianzas y sponsors)
//   POST /api/newsletter → alta del contacto en la lista BREVO_LIST_ID
// Secretos (Cloudflare → Settings → Variables and Secrets): BREVO_API_KEY y, opcional, TURNSTILE_SECRET.
// Variables: MAIL_TO, MAIL_FROM, BREVO_LIST_ID (wrangler.jsonc).

const BREVO = 'https://api.brevo.com/v3';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMS = { prensa: 'Prensa', alianzas: 'Fundaciones y organizaciones', sponsors: 'Sponsors' };

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

async function brevo(env, path, body) {
  const res = await fetch(BREVO + path, {
    method: 'POST',
    headers: { 'api-key': env.BREVO_API_KEY, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) console.error('Brevo', path, res.status, await res.text());
  return res;
}

async function turnstileOk(env, token, ip) {
  if (!env.TURNSTILE_SECRET) return true;
  if (!token) return false;
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token, remoteip: ip || '' }),
  });
  return (await res.json()).success === true;
}

async function contacto(req, env) {
  const d = await req.json().catch(() => null);
  if (!d || !FORMS[d.form] || !Array.isArray(d.fields)) return json({ ok: false, error: 'bad_request' }, 400);
  if (d.website) return json({ ok: true }); // honeypot: bots completan el campo oculto
  if (!(await turnstileOk(env, d.turnstile, req.headers.get('CF-Connecting-IP')))) return json({ ok: false, error: 'turnstile' }, 403);

  const fields = d.fields
    .filter((f) => Array.isArray(f) && f.length === 2)
    .slice(0, 30)
    .map(([k, v]) => [String(k).slice(0, 200), String(v).slice(0, 5000)]);
  const replyTo = fields.map(([, v]) => v.trim()).find((v) => EMAIL_RE.test(v));
  const subject = `[Web · ${FORMS[d.form]}] ${String(d.subject || 'Nuevo mensaje').slice(0, 150)}`;
  const rows = fields
    .map(([k, v]) => `<tr><th align="left" valign="top" style="padding:6px 12px 6px 0">${esc(k)}</th><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join('');

  const res = await brevo(env, '/smtp/email', {
    sender: { name: 'Web Amapolas', email: env.MAIL_FROM },
    to: [{ email: env.MAIL_TO }],
    ...(replyTo ? { replyTo: { email: replyTo } } : {}),
    subject,
    htmlContent: `<p>Nuevo mensaje desde el formulario <strong>${esc(FORMS[d.form])}</strong> de amapolas.org</p><table>${rows}</table>`,
    textContent: fields.map(([k, v]) => `${k}: ${v}`).join('\n'),
  });
  return res.ok ? json({ ok: true }) : json({ ok: false, error: 'send' }, 502);
}

async function newsletter(req, env) {
  const d = await req.json().catch(() => null);
  const email = String(d?.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) return json({ ok: false, error: 'email' }, 400);
  if (d.website) return json({ ok: true });
  const res = await brevo(env, '/contacts', {
    email,
    listIds: [Number(env.BREVO_LIST_ID)],
    updateEnabled: true,
  });
  return res.ok ? json({ ok: true }) : json({ ok: false, error: 'subscribe' }, 502);
}

export default {
  async fetch(req, env) {
    const { pathname } = new URL(req.url);
    if (pathname.startsWith('/api/')) {
      if (req.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
      if (!env.BREVO_API_KEY) return json({ ok: false, error: 'not_configured' }, 503);
      if (pathname === '/api/contacto') return contacto(req, env);
      if (pathname === '/api/newsletter') return newsletter(req, env);
      return json({ ok: false, error: 'not_found' }, 404);
    }
    return env.ASSETS.fetch(req);
  },
};
