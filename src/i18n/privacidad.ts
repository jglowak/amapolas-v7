// Política de privacidad (/privacidad). BORRADOR para revisión legal de la cooperativa.
// Lo marcado [COMPLETAR …] se muestra resaltado en la página hasta que se complete.
// Los textos admiten HTML simple (strong, a). Fecha de actualización (al final, sección 10): cambiarla con cada revisión.

type Block = { p: string } | { ul: string[] } | { table: { head: string[]; rows: string[][] } };
export interface Section { id: string; h: string; blocks: Block[] }

const es = {
  meta: {
    title: 'Política de privacidad · Amapolas Cooperativa de Viviendas',
    description: 'Cómo la Cooperativa de Vivienda Amapolas trata los datos personales que recibe a través de su sitio web, qué cookies usa y cómo ejercer tus derechos.',
    crumb: 'Política de privacidad',
  },
  hero: { home: 'Inicio', here: 'Política de privacidad', title: 'Política de privacidad', subtitle: 'Cómo cuidamos los datos que compartís con nosotras.' },
  intro: 'En Amapolas cuidamos los datos personales de quienes nos escriben, se suman a nuestra newsletter o nos apoyan con una donación. Esta política explica qué datos recibimos a través de este sitio, para qué los usamos, con quién los compartimos y cómo podés ejercer tus derechos, de acuerdo con la Ley N° 25.326 de Protección de los Datos Personales de la República Argentina.',
  toc: 'Contenido',
  sections: [
    {
      id: 'responsable', h: '1. Quién es responsable de tus datos',
      blocks: [
        { p: '<strong>Cooperativa de Vivienda Amapolas Ltda.</strong>, matrícula INAES N°63884.' },
        { ul: ['CUIT: {cuit}', 'Domicilio: {address}', 'Correo para consultas sobre datos personales: <a href="mailto:{email}">{email}</a>'] },
      ],
    },
    {
      id: 'datos', h: '2. Qué datos recibimos',
      blocks: [
        { p: 'Solo recibimos los datos que nos das y los mínimos necesarios para que el sitio funcione:' },
        { ul: [
          '<strong>Formularios</strong> (contacto de prensa, alianzas institucionales, sponsors y pedido de balance): nombre, correo electrónico, organización o medio, país, tipo de organización, áreas de interés y el mensaje que escribas.',
          '<strong>Newsletter</strong>: tu correo electrónico. La suscripción se confirma con un correo (doble confirmación) y podés darte de baja en cualquier momento desde el enlace que incluye cada envío.',
          '<strong>Donaciones</strong>: se realizan en las plataformas de Donorbox (internacional) o Mercado Pago (Argentina). Esas plataformas procesan el pago y nos informan los datos de la donación (por ejemplo, nombre, correo, monto y fecha). <strong>Amapolas no recibe ni guarda datos de tarjetas ni de cuentas bancarias.</strong>',
          '<strong>Navegación</strong>: solo si aceptás las cookies de analítica, datos de uso del sitio (páginas visitadas, tiempo de visita, tipo de dispositivo y navegador, país o ciudad aproximados) a través de Google Analytics y Microsoft Clarity.',
          '<strong>Datos técnicos</strong>: para elegir el medio de pago que mostramos primero, el sitio consulta el país aproximado de tu conexión. Ese dato no se guarda. Los formularios usan un control antispam de Cloudflare.',
        ] },
      ],
    },
    {
      id: 'finalidad', h: '3. Para qué los usamos',
      blocks: [
        { ul: [
          'Responder tus consultas y coordinar entrevistas, alianzas o propuestas de sponsors.',
          'Enviarte la newsletter con novedades del proyecto, si te suscribiste.',
          'Gestionar las donaciones, emitir comprobantes y rendir cuentas sobre el uso de los fondos.',
          'Medir y mejorar el funcionamiento del sitio (solo con tu consentimiento).',
          'Proteger los formularios contra el spam y el uso indebido.',
        ] },
        { p: 'No vendemos ni alquilamos tus datos, y no los usamos para fines distintos de los indicados. Tratamos tus datos sobre la base de tu consentimiento, que podés retirar en cualquier momento.' },
      ],
    },
    {
      id: 'proveedores', h: '4. Con quién los compartimos',
      blocks: [
        { p: 'Para que el sitio funcione trabajamos con proveedores que tratan datos por cuenta nuestra o como servicios independientes. Algunos tienen servidores fuera de Argentina, por lo que tus datos pueden ser transferidos internacionalmente; elegimos proveedores con políticas de protección de datos reconocidas.' },
        { ul: [
          '<strong>Cloudflare</strong>: alojamiento del sitio, seguridad y control antispam (Turnstile).',
          '<strong>Brevo</strong>: envío de los mensajes de los formularios, respuestas automáticas y newsletter.',
          '<strong>Donorbox</strong> y sus procesadores de pago (por ejemplo, Stripe o PayPal): donaciones internacionales.',
          '<strong>Mercado Pago</strong>: donaciones desde Argentina.',
          '<strong>Google Analytics</strong> y <strong>Microsoft Clarity</strong>: analítica del sitio, solo si la aceptás.',
          '<strong>Google Search Console</strong> y <strong>Bing Webmaster Tools</strong>: estadísticas de búsqueda agregadas; no usan cookies en tu navegador.',
        ] },
        { p: 'El sitio también enlaza a redes sociales y plataformas externas (Instagram, YouTube, LinkedIn, Facebook y medios de prensa). Al visitarlas se aplican sus propias políticas de privacidad.' },
      ],
    },
    {
      id: 'cookies', h: '5. Cookies',
      blocks: [
        { p: 'Las cookies y tecnologías similares son pequeños archivos que se guardan en tu navegador. Usamos dos tipos:' },
        { p: '<strong>Necesarias</strong> (no requieren consentimiento):' },
        { table: { head: ['Nombre', 'Proveedor', 'Para qué', 'Duración'], rows: [
          ['amapolas-consent', 'Amapolas', 'Recordar tu elección sobre cookies', '12 meses'],
          ['amapolas-nl, amapolas-nl-closed', 'Amapolas', 'Recordar si te suscribiste o cerraste el aviso de newsletter', 'Persistente / sesión'],
          ['Cloudflare Turnstile', 'Cloudflare', 'Verificar que quien envía un formulario no es un robot', 'Sesión'],
          ['Donorbox y procesadores de pago', 'Donorbox, Stripe, PayPal', 'Procesar la donación, solo si abrís el formulario de donación internacional', 'Según cada proveedor'],
        ] } },
        { p: '<strong>Analítica</strong> (solo si las aceptás):' },
        { table: { head: ['Nombre', 'Proveedor', 'Para qué', 'Duración'], rows: [
          ['_ga, _ga_*', 'Google Analytics', 'Distinguir visitas y medir el uso del sitio', 'Hasta 2 años'],
          ['_clck, _clsk, CLID, MUID', 'Microsoft Clarity', 'Medir cómo se usa el sitio (mapas de calor y grabaciones de sesión sin datos de formularios)', 'Hasta 1 año'],
        ] } },
        { p: 'Podés cambiar tu elección en cualquier momento desde <strong>“Configurar cookies”</strong>, al pie de cada página. Si retirás el consentimiento, borramos las cookies de analítica de este sitio. También podés borrar o bloquear cookies desde la configuración de tu navegador.' },
      ],
    },
    {
      id: 'conservacion', h: '6. Cuánto tiempo los guardamos',
      blocks: [
        { ul: [
          'Mensajes de formularios: mientras sea necesario para responder tu consulta y mantener el vínculo con la cooperativa, o hasta que nos pidas que los eliminemos.',
          'Newsletter: mientras sigas suscripta/o; al darte de baja dejamos de enviarte correos.',
          'Donaciones: el tiempo que exijan las normas contables y fiscales aplicables a la cooperativa.',
          'Analítica: según los plazos indicados en la tabla de cookies.',
        ] },
      ],
    },
    {
      id: 'derechos', h: '7. Tus derechos',
      blocks: [
        { p: 'Podés pedir en cualquier momento <strong>acceder</strong> a tus datos, <strong>rectificarlos</strong>, <strong>actualizarlos</strong> o <strong>suprimirlos</strong>, y retirar tu consentimiento, escribiendo a <a href="mailto:{email}">{email}</a>. Te responderemos dentro de los plazos de la Ley N° 25.326.' },
        { p: 'El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley N° 25.326.' },
        { p: 'La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.' },
        { p: 'Si nos visitás desde la Unión Europea, también podés ejercer los derechos que te reconoce el Reglamento General de Protección de Datos (RGPD), incluidos los de oposición, limitación del tratamiento y portabilidad.' },
      ],
    },
    {
      id: 'seguridad', h: '8. Seguridad',
      blocks: [{ p: 'El sitio funciona con conexión cifrada (HTTPS) y aplicamos medidas razonables para proteger tus datos. Solo acceden a ellos las personas de la cooperativa que los necesitan para responderte o gestionar tu aporte.' }],
    },
    {
      id: 'menores', h: '9. Menores de edad',
      blocks: [{ p: 'Este sitio no está dirigido a menores de 13 años y no recopilamos sus datos de forma intencional. Si creés que una persona menor nos envió datos, escribinos y los eliminaremos.' }],
    },
    {
      id: 'cambios', h: '10. Cambios en esta política',
      blocks: [{ p: 'Podemos actualizar esta política para reflejar cambios en el sitio o en la normativa. Última actualización: 13 de noviembre de 2026.' }],
    },
  ] as Section[],
};

const en: typeof es = {
  meta: {
    title: 'Privacy policy · Amapolas Housing Cooperative',
    description: 'How the Amapolas Housing Cooperative handles the personal data it receives through its website, which cookies it uses and how to exercise your rights.',
    crumb: 'Privacy policy',
  },
  hero: { home: 'Home', here: 'Privacy policy', title: 'Privacy policy', subtitle: 'How we take care of the data you share with us.' },
  intro: 'At Amapolas we take care of the personal data of everyone who writes to us, joins our newsletter or supports us with a donation. This policy explains what data we receive through this website, what we use it for, who we share it with and how you can exercise your rights, in accordance with Argentina’s Personal Data Protection Law No. 25,326.',
  toc: 'Contents',
  sections: [
    {
      id: 'responsable', h: '1. Who is responsible for your data',
      blocks: [
        { p: '<strong>Cooperativa de Vivienda Amapolas Ltda.</strong>, INAES Registration No. 63884.' },
        { ul: ['Tax ID (CUIT): {cuit}', 'Address: {address}', 'Contact for personal data requests: <a href="mailto:{email}">{email}</a>'] },
      ],
    },
    {
      id: 'datos', h: '2. What data we receive',
      blocks: [
        { p: 'We only receive the data you give us and the minimum needed for the site to work:' },
        { ul: [
          '<strong>Forms</strong> (press contact, institutional alliances, sponsors and financial statement requests): name, email, organization or media outlet, country, type of organization, areas of interest and the message you write.',
          '<strong>Newsletter</strong>: your email address. Your subscription is confirmed by email (double opt-in) and you can unsubscribe at any time using the link included in every email.',
          '<strong>Donations</strong>: they are made on Donorbox (international) or Mercado Pago (Argentina). These platforms process the payment and share the donation details with us (for example, name, email, amount and date). <strong>Amapolas does not receive or store card or bank account details.</strong>',
          '<strong>Browsing</strong>: only if you accept analytics cookies, data about how the site is used (pages visited, visit length, device and browser type, approximate country or city) through Google Analytics and Microsoft Clarity.',
          '<strong>Technical data</strong>: to choose which payment method to show first, the site checks the approximate country of your connection. This data is not stored. Forms use a Cloudflare anti-spam check.',
        ] },
      ],
    },
    {
      id: 'finalidad', h: '3. What we use it for',
      blocks: [
        { ul: [
          'Answering your questions and arranging interviews, alliances or sponsor proposals.',
          'Sending you our newsletter with project news, if you subscribed.',
          'Managing donations, issuing receipts and reporting on how funds are used.',
          'Measuring and improving how the site works (only with your consent).',
          'Protecting forms against spam and misuse.',
        ] },
        { p: 'We do not sell or rent your data, and we do not use it for purposes other than those listed. We process your data on the basis of your consent, which you can withdraw at any time.' },
      ],
    },
    {
      id: 'proveedores', h: '4. Who we share it with',
      blocks: [
        { p: 'To run the site we work with providers that process data on our behalf or as independent services. Some of them have servers outside Argentina, so your data may be transferred internationally; we choose providers with recognized data protection policies.' },
        { ul: [
          '<strong>Cloudflare</strong>: website hosting, security and anti-spam checks (Turnstile).',
          '<strong>Brevo</strong>: delivery of form messages, automatic replies and the newsletter.',
          '<strong>Donorbox</strong> and its payment processors (for example, Stripe or PayPal): international donations.',
          '<strong>Mercado Pago</strong>: donations from Argentina.',
          '<strong>Google Analytics</strong> and <strong>Microsoft Clarity</strong>: site analytics, only if you accept them.',
          '<strong>Google Search Console</strong> and <strong>Bing Webmaster Tools</strong>: aggregated search statistics; they do not set cookies in your browser.',
        ] },
        { p: 'The site also links to social networks and external platforms (Instagram, YouTube, LinkedIn, Facebook and media outlets). Their own privacy policies apply when you visit them.' },
      ],
    },
    {
      id: 'cookies', h: '5. Cookies',
      blocks: [
        { p: 'Cookies and similar technologies are small files stored in your browser. We use two types:' },
        { p: '<strong>Necessary</strong> (no consent required):' },
        { table: { head: ['Name', 'Provider', 'Purpose', 'Duration'], rows: [
          ['amapolas-consent', 'Amapolas', 'Remember your cookie choice', '12 months'],
          ['amapolas-nl, amapolas-nl-closed', 'Amapolas', 'Remember whether you subscribed or closed the newsletter pop-up', 'Persistent / session'],
          ['Cloudflare Turnstile', 'Cloudflare', 'Check that whoever submits a form is not a bot', 'Session'],
          ['Donorbox and payment processors', 'Donorbox, Stripe, PayPal', 'Process the donation, only if you open the international donation form', 'Set by each provider'],
        ] } },
        { p: '<strong>Analytics</strong> (only if you accept them):' },
        { table: { head: ['Name', 'Provider', 'Purpose', 'Duration'], rows: [
          ['_ga, _ga_*', 'Google Analytics', 'Tell visits apart and measure site usage', 'Up to 2 years'],
          ['_clck, _clsk, CLID, MUID', 'Microsoft Clarity', 'Measure how the site is used (heatmaps and session recordings without form data)', 'Up to 1 year'],
        ] } },
        { p: 'You can change your choice at any time from <strong>“Cookie settings”</strong> at the bottom of every page. If you withdraw your consent, we delete this site’s analytics cookies. You can also delete or block cookies in your browser settings.' },
      ],
    },
    {
      id: 'conservacion', h: '6. How long we keep it',
      blocks: [
        { ul: [
          'Form messages: for as long as needed to answer your inquiry and keep in touch with the cooperative, or until you ask us to delete them.',
          'Newsletter: while you remain subscribed; once you unsubscribe we stop emailing you.',
          'Donations: for as long as required by the accounting and tax rules that apply to the cooperative.',
          'Analytics: according to the periods listed in the cookie table.',
        ] },
      ],
    },
    {
      id: 'derechos', h: '7. Your rights',
      blocks: [
        { p: 'You can ask at any time to <strong>access</strong>, <strong>correct</strong>, <strong>update</strong> or <strong>delete</strong> your data, and withdraw your consent, by writing to <a href="mailto:{email}">{email}</a>. We will reply within the time limits set by Law No. 25,326.' },
        { p: 'Data subjects may exercise their right of access free of charge at intervals of no less than six months, unless a legitimate interest is shown, as provided in Article 14(3) of Law No. 25,326.' },
        { p: 'The Agency for Access to Public Information (AAIP), as the supervisory authority of Law No. 25,326, is empowered to handle complaints and claims from anyone whose rights are affected by non-compliance with personal data protection rules.' },
        { p: 'If you visit us from the European Union, you may also exercise the rights granted by the General Data Protection Regulation (GDPR), including the rights to object, to restrict processing and to data portability.' },
      ],
    },
    {
      id: 'seguridad', h: '8. Security',
      blocks: [{ p: 'The site uses an encrypted connection (HTTPS) and we apply reasonable measures to protect your data. Only the cooperative members who need it to reply to you or manage your contribution have access to it.' }],
    },
    {
      id: 'menores', h: '9. Minors',
      blocks: [{ p: 'This site is not aimed at children under 13 and we do not knowingly collect their data. If you believe a minor has sent us data, write to us and we will delete it.' }],
    },
    {
      id: 'cambios', h: '10. Changes to this policy',
      blocks: [{ p: 'We may update this policy to reflect changes to the site or to the law. Last updated: November 13, 2026.' }],
    },
  ],
};

export const privacidad = { es, en };
