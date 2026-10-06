import type { Lang } from './utils';

type L = Record<Lang, string>;
export interface MenuChild { label: L; href: string }
export interface MenuItem {
  key: string;
  label: L;
  /** Sin href = el ítem NO lleva a ningún lado, solo despliega el submenú. */
  href?: string;
  children?: MenuChild[];
}

// Fuente única del menú (Nav desktop + overlay mobile). Se copia del texto de correcciones.
export const menu: MenuItem[] = [
  { key: 'home', label: { es: 'Home', en: 'Home' }, href: '/' },
  {
    key: 'nosotras',
    label: { es: 'Nosotras', en: 'About us' },
    children: [
      { label: { es: '¿Quiénes somos?', en: 'Who we are' }, href: '/nosotras' },
      { label: { es: 'Género', en: 'Gender' }, href: '/nosotras/genero' },
      { label: { es: 'Hábitat Sustentable', en: 'Sustainable Habitat' }, href: '/nosotras/sustentabilidad' },
      { label: { es: 'Interculturalidad', en: 'Interculturality' }, href: '/nosotras/interculturalidad' },
      { label: { es: 'Cuidado y Cohousing', en: 'Care & Cohousing' }, href: '/nosotras/cohousing' },
    ],
  },
  {
    key: 'proyectos',
    label: { es: 'Proyectos', en: 'Projects' },
    children: [
      { label: { es: 'Barrio Amapolas', en: 'Barrio Amapolas' }, href: '/proyectos/vivienda' },
      // Sin submenú: Apicultura / Plantas Nativas / Hongos Comestibles se recorren con scroll dentro de la página.
      { label: { es: 'Proyectos agroecológicos', en: 'Agroecological projects' }, href: '/proyectos/productivos' },
    ],
  },
  { key: 'formacion', label: { es: 'Formación y Capacitaciones', en: 'Training & Workshops' }, href: '/formacion' },
  {
    key: 'prensa',
    label: { es: 'Acciones y Prensa', en: 'Actions & Press' },
    children: [
      { label: { es: 'Eventos y Acciones', en: 'Events & Actions' }, href: '/prensa#eventos' },
      { label: { es: 'Prensa', en: 'Press' }, href: '/prensa#prensa' },
      { label: { es: 'Kit de Prensa', en: 'Press Kit' }, href: '/prensa#kit' },
    ],
  },
  {
    key: 'comunidad',
    label: { es: 'Comunidad', en: 'Community' },
    children: [
      { label: { es: 'Red de Alianzas', en: 'Alliance Network' }, href: '/comunidad#alianzas' },
      { label: { es: 'Fundaciones y Organizaciones', en: 'Foundations & Organizations' }, href: '/comunidad#fundaciones' },
      { label: { es: 'Sponsors', en: 'Sponsors' }, href: '/comunidad#sponsors' },
      { label: { es: 'Donantes', en: 'Donors' }, href: '/comunidad#donantes' },
    ],
  },
];

export const donateLabel: L = { es: 'Donar ahora', en: 'Donate now' };
