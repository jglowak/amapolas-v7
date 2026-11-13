// Configuración única de contacto, redes y dominio.
// TODO: todo lo marcado con TODO son datos de ejemplo; reemplazar por los reales antes de publicar.
export const site = {
  // TODO: dominio provisorio
  url: 'https://amapolas.org',
  name: 'Amapolas Cooperativa de Viviendas',
  legalName: 'Cooperativa de Vivienda Amapolas Ltda.',
  foundingYear: '2022',
  inaes: '63884',
  locality: 'San Carlos de Bariloche',
  region: 'Río Negro',
  country: 'AR',

  // TODO: mail institucional único (ejemplo)
  email: 'info@amapolas.org',

  // TODO: URLs de ejemplo
  social: {
    whatsapp: 'https://wa.me/5492940000000',
    linkedin: 'https://www.linkedin.com/company/amapolas-cooperativa',
    instagram: 'https://www.instagram.com/amapolas.cooperativa',
    facebook: 'https://www.facebook.com/amapolas.cooperativa',
    youtube: 'https://www.youtube.com/@amapolascooperativadevivie5740',
  },

  // TODO: links reales de las plataformas de donación
  donate: {
    donorbox: 'https://donorbox.org/ayudanos-a-comprar-el-terreno',
    // Campaña del formulario embebido por idioma (el idioma del formulario se configura en la
    // campaña de Donorbox). Para inglés: duplicar la campaña en inglés y poner su slug en `en`.
    donorboxCampaign: { es: 'ayudanos-a-comprar-el-terreno', en: 'ayudanos-a-comprar-el-terreno' },
    mercadoPago: 'https://link.mercadopago.com.ar/amapolas', // TODO: ejemplo
    // Montos de Mercado Pago (ARS) para /donar2. Cada monto necesita su propio link de pago
    // (único) o de suscripción (mensual). TODO: montos y links reales; mientras `url` esté vacío,
    // el botón lleva al link general de arriba.
    mercadoPagoAmounts: {
      once: [
        { ars: 10000, url: '' },
        { ars: 25000, url: '', featured: true },
        { ars: 50000, url: '' },
        { ars: 100000, url: '' },
      ],
      monthly: [
        { ars: 5000, url: '' },
        { ars: 10000, url: '', featured: true },
        { ars: 25000, url: '' },
        { ars: 50000, url: '' },
      ],
      otherOnce: '', // link con monto libre (opcional)
      otherMonthly: '',
    },
  },

  // Formularios y newsletter: worker/index.js (Brevo). Turnstile: site key pública (vacía = sin captcha).
  forms: {
    prensa: '/api/contacto',
    alianzas: '/api/contacto',
    sponsors: '/api/contacto',
    newsletter: '/api/newsletter',
    balance: '/api/contacto',
    turnstileSiteKey: '0x4AAAAAAF8KCfbaAXwpCNt7',
  },

  // Analítica y verificación de buscadores. Vacío = desactivado. Google Analytics y Clarity se cargan
  // solo si la persona acepta las cookies de analítica (src/components/CookieConsent.astro).
  analytics: {
    ga4: '', // TODO: ID de medición de Google Analytics 4 (G-XXXXXXXXXX)
    clarity: '', // TODO (más adelante): ID de proyecto de Microsoft Clarity
    googleVerification: '', // Search Console: valor de la meta google-site-verification (o verificar por DNS)
    bingVerification: '', // Bing Webmaster Tools: valor de la meta msvalidate.01 (o importar desde Search Console)
  },

  // Datos legales para la política de privacidad. TODO: completar con la cooperativa.
  legal: {
    cuit: '',
    address: '',
  },

  // Mientras estén en false, el JSON-LD no publica sameAs ni ContactPoint
  // (no exponer datos de ejemplo como si fueran reales).
  verified: {
    social: false,
    contact: false,
    donate: false, // links de Donorbox / Mercado Pago reales
  },
} as const;
