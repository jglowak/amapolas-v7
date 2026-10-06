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
  email: 'contacto@amapolas.org',

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
    donorbox: 'https://donorbox.org/amapolas', // TODO: ejemplo
    mercadoPago: 'https://link.mercadopago.com.ar/amapolas', // TODO: ejemplo
  },

  // TODO: endpoint de formularios (p. ej. Formspree, Basin o un Worker) y site key de Turnstile.
  // Mientras estén vacíos, los formularios abren el cliente de correo con los datos completados.
  forms: {
    prensa: '',
    sponsors: '',
    turnstileSiteKey: '',
  },

  // Mientras estén en false, el JSON-LD no publica sameAs ni ContactPoint
  // (no exponer datos de ejemplo como si fueran reales).
  verified: {
    social: false,
    contact: false,
  },
} as const;
