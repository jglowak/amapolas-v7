export const languages = { es: 'es-AR', en: 'en' } as const;
export type Lang = keyof typeof languages;

/** Ruta localizada: ES sin prefijo, EN bajo /en. Los slugs no se traducen. */
export function localePath(lang: Lang, path: string): string {
  if (lang === 'es') return path;
  if (path === '/') return '/en';
  if (path.startsWith('/#')) return '/en' + path.slice(1);
  return '/en' + path;
}

/** Ruta equivalente en el otro idioma. */
export function stripLang(pathname: string): string {
  // build.format 'file' entrega rutas como /en.html o /nosotras.html
  const clean = pathname.replace(/(\/index)?\.html$/, '') || '/';
  const p = clean.replace(/^\/en(?=\/|$)/, '') || '/';
  return p.length > 1 ? p.replace(/\/$/, '') : p;
}

export const ui = {
  es: {
    logoAlt: 'Amapolas Cooperativa de Viviendas',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    skip: 'Saltar al contenido',
    backToTop: 'Volver arriba',
    nav: {
      home: 'Home',
      nosotras: 'Nosotras',
      quienes: '¿Quiénes somos?',
      genero: 'Género',
      sustentabilidad: 'Hábitat Sustentable',
      interculturalidad: 'Interculturalidad',
      cohousing: 'Cuidado y Cohousing',
      proyectos: 'Proyectos',
      vivienda: 'Barrio Amapolas',
      productivos: 'Proyectos agroecológicos',
      formacion: 'Formación y Capacitaciones',
      prensa: 'Acciones y Prensa',
      eventos: 'Eventos y Acciones',
      prensaItem: 'Prensa',
      kit: 'Kit de Prensa',
      comunidad: 'Comunidad',
      alianzas: 'Red de Alianzas',
      fundaciones: 'Fundaciones y Organizaciones',
      sponsors: 'Sponsors',
      donantes: 'Donantes',
      donar: 'Donar ahora',
    },
    footer: {
      desc: 'Una cooperativa de viviendas conducida por mujeres y disidencias en la Patagonia Argentina. Construimos autonomía y comunidad desde Bariloche.',
      coop: 'La cooperativa',
      quienes: 'Quiénes somos',
      proyectos: 'Proyectos',
      prensa: 'Acciones y Prensa',
      comunidad: 'Comunidad',
      colaborar: 'Colaborar',
      donar: 'Donar',
      alianzas: 'Alianzas',
      kit: 'Kit de Prensa',
      contacto: 'Contacto',
      legal: 'Cooperativa de Vivienda Amapolas Ltda. · Matrícula INAES N°63884 obtenida en 2022 · Bariloche, Río Negro, Argentina',
    },
  },
  en: {
    logoAlt: 'Amapolas Housing Cooperative',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skip: 'Skip to content',
    backToTop: 'Back to top',
    nav: {
      home: 'Home',
      nosotras: 'About us',
      quienes: 'Who we are',
      genero: 'Gender',
      sustentabilidad: 'Sustainable Habitat',
      interculturalidad: 'Interculturality',
      cohousing: 'Care and Cohousing',
      proyectos: 'Projects',
      vivienda: 'Barrio Amapolas',
      productivos: 'Agroecological projects',
      formacion: 'Training and Workshops',
      prensa: 'Actions and Press',
      eventos: 'Events and Actions',
      prensaItem: 'Press',
      kit: 'Press Kit',
      comunidad: 'Community',
      alianzas: 'Alliance Network',
      fundaciones: 'Foundations and Organizations',
      sponsors: 'Sponsors',
      donantes: 'Donors',
      donar: 'Donate now',
    },
    footer: {
      desc: 'A housing cooperative led by women and gender-diverse people in Argentine Patagonia. We build autonomy and community from Bariloche.',
      coop: 'The cooperative',
      quienes: 'Who we are',
      proyectos: 'Projects',
      prensa: 'Actions and Press',
      comunidad: 'Community',
      colaborar: 'Get involved',
      donar: 'Donate',
      alianzas: 'Alliances',
      kit: 'Press Kit',
      contacto: 'Contact',
      legal: 'Cooperativa de Vivienda Amapolas Ltda. · INAES Registration No. 63884, obtained in 2022 · Bariloche, Río Negro, Argentina',
    },
  },
} as const;
