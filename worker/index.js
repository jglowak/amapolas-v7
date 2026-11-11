// Worker de Amapolas: sirve el sitio estático (dist/) y atiende /api/* con Brevo.
//   POST /api/contacto   → mail transaccional a MAIL_TO (formularios de prensa, alianzas, sponsors y balance)
//                          + respuesta automática a quien escribió (plantillas BREVO_TPL_REPLY_ES/EN)
//   POST /api/newsletter → doble opt-in: Brevo manda el mail de confirmación (BREVO_TPL_DOI_ES/EN)
//                          y suma el contacto a BREVO_LIST_ID recién cuando lo confirma
//   GET /api/pais        → país de quien visita (request.cf.country)
//   cron semanal         → mantiene activa la clave de Brevo
// Secretos (Cloudflare → Settings → Variables and Secrets): BREVO_API_KEY y, opcional, TURNSTILE_SECRET.
// Variables: MAIL_TO, MAIL_FROM, BREVO_LIST_ID y los IDs de plantillas (wrangler.jsonc).

const BREVO = 'https://api.brevo.com/v3';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMS = { prensa: 'Prensa', alianzas: 'Fundaciones y organizaciones', sponsors: 'Sponsors', balance: 'Pedido de balance' };
// Nombre del formulario en la respuesta automática, según el idioma de la página
const FORMS_EN = { prensa: 'press', alianzas: 'foundations and organizations', sponsors: 'sponsors', balance: 'financial statements request' };

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
  if (!res.ok) return json({ ok: false, error: 'send' }, 502);

  // Respuesta automática: si falla, el mensaje ya llegó a info@, así que no se informa error
  if (replyTo) {
    const en = d.lang === 'en';
    await brevo(env, '/smtp/email', {
      templateId: Number(en ? env.BREVO_TPL_REPLY_EN : env.BREVO_TPL_REPLY_ES),
      to: [{ email: replyTo }],
      params: {
        ...(d.name ? { NOMBRE: String(d.name).trim().slice(0, 80) } : {}),
        FORMULARIO: en ? FORMS_EN[d.form] : FORMS[d.form],
      },
    });
  }
  return json({ ok: true });
}

async function newsletter(req, env) {
  const d = await req.json().catch(() => null);
  const email = String(d?.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) return json({ ok: false, error: 'email' }, 400);
  if (d.website) return json({ ok: true });
  if (!(await turnstileOk(env, d.turnstile, req.headers.get('CF-Connecting-IP')))) return json({ ok: false, error: 'turnstile' }, 403);
  const en = d.lang === 'en';
  const res = await brevo(env, '/contacts/doubleOptinConfirmation', {
    email,
    includeListIds: [Number(env.BREVO_LIST_ID)],
    templateId: Number(en ? env.BREVO_TPL_DOI_EN : env.BREVO_TPL_DOI_ES),
    redirectionUrl: `${new URL(req.url).origin}${en ? '/en' : ''}/newsletter-confirmado`,
  });
  return res.ok ? json({ ok: true }) : json({ ok: false, error: 'subscribe' }, 502);
}

export default {
  async fetch(req, env) {
    const { pathname } = new URL(req.url);
    // País de quien visita (Cloudflare): /donar2 elige Mercado Pago o Donorbox según el país
    if (pathname === '/api/pais') {
      return new Response(JSON.stringify({ country: req.cf?.country || null }), {
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' },
      });
    }
    if (pathname.startsWith('/api/')) {
      if (req.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
      if (!env.BREVO_API_KEY) return json({ ok: false, error: 'not_configured' }, 503);
      if (pathname === '/api/contacto') return contacto(req, env);
      if (pathname === '/api/newsletter') return newsletter(req, env);
      return json({ ok: false, error: 'not_found' }, 404);
    }
    return env.ASSETS.fetch(req);
  },

  // Cron semanal (wrangler.jsonc → triggers): una lectura mínima para que Brevo no dé de baja
  // la clave tras 90 días sin uso. Usa el permiso de contactos que ya tiene la clave.
  async scheduled(_event, env) {
    if (!env.BREVO_API_KEY) return;
    const res = await fetch(`${BREVO}/contacts/lists/${Number(env.BREVO_LIST_ID)}`, {
      headers: { 'api-key': env.BREVO_API_KEY, Accept: 'application/json' },
    });
    if (!res.ok) console.error('Brevo keep-alive', res.status, await res.text());
  },
};
