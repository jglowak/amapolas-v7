import type { Lang } from '../i18n/utils';

/**
 * ESQUELETO de páginas según el texto de correcciones (no incluye nada que el texto no diga).
 * Cada sección se reemplaza luego, página por página, por su componente real.
 * `note` = guía interna de qué va en la sección (solo visible en el esqueleto).
 */
export interface Section { id: string; eyebrow?: string; title: string; note?: string }
export interface Cta { label: string; href: string; ghost?: boolean }
export interface PageDef {
  title: string;
  lead?: string;
  hero?: 'image' | 'plain';
  ctas?: Cta[];
  sections: Section[];
}
type Pages = Record<string, Record<Lang, PageDef>>;

export const pages: Pages = {
  // ───────────────────────── HOME ─────────────────────────
  home: {
    es: {
      title: 'Un modelo de hábitat liderado por mujeres',
      lead: 'Una propuesta colectiva, feminista y sustentable que entiende la vivienda como un derecho y el habitar como práctica política.',
      hero: 'image',
      ctas: [
        { label: 'Donar ahora', href: '/#donar' },
        { label: 'Conocé el proyecto', href: '/proyectos/vivienda', ghost: true },
      ],
      sections: [
        { id: 'quienes-somos', eyebrow: 'Quiénes somos', title: 'Un modelo integral de hábitat comunitario', note: '3 pilares 01/02/03 · CTA "Ver nuestra historia completa" → Quiénes somos' },
        { id: 'quote', title: 'Buscamos construir un barrio cooperativo diseñado y gestionado por mujeres y disidencias…', note: 'Cita + firma "Amapolas — Cooperativa de Viviendas · Bariloche, Patagonia Argentina"' },
        { id: 'proyectos', eyebrow: 'Lo que hacemos', title: 'Nuestros proyectos', note: '3 cards: Barrio Amapolas · Proyectos agroecológicos · Formación y Capacitaciones · CTA "Ver todos los proyectos"' },
        { id: 'socias', title: 'Las socias', note: 'Solo fotos (placeholders), sin texto ni nombres' },
        { id: 'ods', eyebrow: 'Agenda 2030 - Naciones Unidas', title: '7 ODS con Amapolas', note: 'ODS 1, 3, 5, 10, 11, 12, 15' },
        { id: 'dossier', eyebrow: 'Documentación institucional', title: 'Conocé el proyecto en profundidad', note: 'CTA descarga ES + EN' },
        { id: 'donar', eyebrow: 'Tu aporte importa', title: 'Nuestro barrio necesita su tierra', note: 'Texto + montos (USD 35/100/500) · Cuadro "Ayudanos a comprar el terreno": Mercado Pago (AR) / Donorbox (internacional), único + mensual · Matrícula INAES' },
        { id: 'numeros', title: 'Datos', note: '1 modelo · 80% explotaciones · 7 ODS · 6 h 31 min · 70% trabajo doméstico' },
        { id: 'newsletter', title: 'Conocé los avances del proyecto', note: 'Mail + CTA "Suscribirme"' },
      ],
    },
    en: {
      title: 'A women-led habitat model',
      lead: 'A collective, feminist and sustainable proposal that understands housing as a right and dwelling as a political practice.',
      hero: 'image',
      ctas: [
        { label: 'Donate now', href: '/#donar' },
        { label: 'Discover the project', href: '/proyectos/vivienda', ghost: true },
      ],
      sections: [
        { id: 'quienes-somos', eyebrow: 'Who we are', title: 'A comprehensive community habitat model' },
        { id: 'quote', title: 'We seek to build a cooperative neighbourhood designed and run by women and gender-diverse people…' },
        { id: 'proyectos', eyebrow: 'What we do', title: 'Our projects' },
        { id: 'socias', title: 'Our members' },
        { id: 'ods', eyebrow: 'Agenda 2030 - United Nations', title: '7 SDGs with Amapolas' },
        { id: 'dossier', eyebrow: 'Institutional documentation', title: 'Get to know the project in depth' },
        { id: 'donar', eyebrow: 'Your contribution matters', title: 'Our neighbourhood needs its land' },
        { id: 'numeros', title: 'Facts' },
        { id: 'newsletter', title: 'Follow the project’s progress' },
      ],
    },
  },

  // ─────────────── NOSOTRAS · QUIÉNES SOMOS ───────────────
  nosotras: {
    es: {
      title: 'Nosotras',
      lead: 'Apostamos por formas de habitar que cuestionen las desigualdades existentes y fortalezcan el acceso justo a la tierra, la vivienda y los bienes comunes.',
      sections: [
        { id: 'cooperativa', eyebrow: 'La cooperativa', title: 'Construimos hábitat, comunidad y autonomía.', note: 'Izq.: cita + 4 datos (2022 · Matrícula INAES #63884 · 20+ · 100%)' },
        { id: 'quienes-somos', eyebrow: 'Quiénes somos', title: 'Una cooperativa que transforma una necesidad compartida en un proyecto colectivo.', note: 'Der.: texto institucional' },
        { id: 'socias', eyebrow: 'Las socias', title: 'Caras, historias, oficios', note: '11 socias con cargo y frase (fotos placeholder)' },
        { id: 'historia', eyebrow: 'Nuestra historia', title: 'Construcción colectiva', note: 'Timeline 2022 → 2026' },
        { id: 'organizacion', eyebrow: 'Cómo nos organizamos', title: 'Construcción colectiva', note: '3 ítems 01/02/03 + cita' },
        { id: 'cta', eyebrow: 'Tu aporte construye', title: 'Tu aporte también construye comunidad', note: 'CTA donar' },
      ],
    },
    en: {
      title: 'About us',
      lead: 'We champion ways of living that challenge existing inequalities and strengthen fair access to land, housing and the commons.',
      sections: [
        { id: 'cooperativa', eyebrow: 'The cooperative', title: 'We build habitat, community and autonomy.' },
        { id: 'quienes-somos', eyebrow: 'Who we are', title: 'A cooperative that turns a shared need into a collective project.' },
        { id: 'socias', eyebrow: 'Our members', title: 'Faces, stories, trades' },
        { id: 'historia', eyebrow: 'Our story', title: 'Collective construction' },
        { id: 'organizacion', eyebrow: 'How we organize', title: 'Collective construction' },
        { id: 'cta', eyebrow: 'Your contribution builds', title: 'Your contribution also builds community' },
      ],
    },
  },

  // ───────────────────────── GÉNERO ─────────────────────────
  genero: {
    es: {
      title: 'La habitación propia',
      lead: 'Un espacio donde desarrollarnos y crecer.',
      sections: [
        { id: 'habitacion', title: 'La habitación propia', note: 'Texto feminista + Virginia Woolf' },
        { id: 'ods5', eyebrow: 'ODS 5', title: 'Igualdad de género' },
        { id: 'cifras', title: 'Cifras', note: '30% ingresos · 70% cuidados · 15–20% propiedades · Fuentes (chiquito): Ecofeminita, Latfem, Observatorio de Igualdad de Género de ALC' },
      ],
    },
    en: {
      title: 'A room of one’s own',
      lead: 'A space to develop and grow.',
      sections: [
        { id: 'habitacion', title: 'A room of one’s own' },
        { id: 'ods5', eyebrow: 'SDG 5', title: 'Gender equality' },
        { id: 'cifras', title: 'Key figures' },
      ],
    },
  },

  // ───────────────────── HÁBITAT SUSTENTABLE ─────────────────────
  sustentabilidad: {
    es: {
      title: 'Cuidar el territorio, cuidar la vida',
      lead: 'Proyectos agroecológicos, protección de la biodiversidad y guardianas del agua. La sustentabilidad como práctica cotidiana en cada decisión del proyecto.',
      sections: [
        { id: 'forma', eyebrow: 'Una forma de habitar', title: 'Un vínculo respetuoso con la naturaleza' },
        { id: 'ods', title: 'ODS', note: 'Apartados ODS: quedan como v5' },
        { id: 'enfoque', eyebrow: 'Enfoque', title: 'Herramientas que nos guían', note: 'Küme Mogen · Bioconstrucción · Diseño participativo del hábitat' },
        { id: 'comunidad', eyebrow: 'Comunidad y vínculos', title: 'La sustentabilidad habita en los vínculos', note: 'Permacultura Social' },
        { id: 'cta', eyebrow: 'Sumate al proyecto', title: 'Construimos desde el cuidado' },
      ],
    },
    en: {
      title: 'Caring for the land, caring for life',
      lead: 'Agroecological projects, biodiversity protection and water guardians. Sustainability as a daily practice in every decision of the project.',
      sections: [
        { id: 'forma', eyebrow: 'A way of dwelling', title: 'A respectful bond with nature' },
        { id: 'ods', title: 'SDGs' },
        { id: 'enfoque', eyebrow: 'Approach', title: 'Tools that guide us' },
        { id: 'comunidad', eyebrow: 'Community and bonds', title: 'Sustainability lives in our bonds' },
        { id: 'cta', eyebrow: 'Join the project', title: 'We build from care' },
      ],
    },
  },

  // ───────────────────── INTERCULTURALIDAD ─────────────────────
  interculturalidad: {
    es: {
      title: 'Construimos futuro desde el reconocimiento y el respeto/justicia',
      lead: 'Reconocemos la preexistencia mapuche y tejemos alianzas reales con las comunidades del territorio que habitamos.',
      sections: [
        { id: 'territorio', eyebrow: 'Territorio y memoria', title: 'Furilofche' },
        { id: 'alianzas', eyebrow: 'Alianzas reales', title: 'Alianzas que transforman', note: 'Barrio Intercultural de San Martín de los Andes · Comunidad Tambo Báez · Lofche Buenuleo' },
        { id: 'cta', title: 'CTA', note: 'Queda como v5' },
      ],
    },
    en: {
      title: 'Building the future from recognition and respect/justice',
      lead: 'We acknowledge the pre-existence of the Mapuche people and weave real alliances with the communities of the territory we inhabit.',
      sections: [
        { id: 'territorio', eyebrow: 'Territory and memory', title: 'Furilofche' },
        { id: 'alianzas', eyebrow: 'Real alliances', title: 'Alliances that transform' },
        { id: 'cta', title: 'Call to action' },
      ],
    },
  },

  // ───────────────────── CUIDADO Y COHOUSING ─────────────────────
  cohousing: {
    es: {
      title: 'El cuidado como infraestructura',
      lead: 'Buscamos integrar el cuidado al diseño del barrio desde el inicio, como una responsabilidad compartida que atraviesa los espacios, la organización y la vida comunitaria.',
      sections: [
        { id: 'cohousing', eyebrow: 'Cohousing', title: 'Un modelo pensado para la vida comunitaria' },
        { id: 'importa', title: 'Por qué importa para Amapolas', note: 'Queda como v5' },
        { id: 'diferencia', eyebrow: 'Lo que nos diferencia', title: 'El cuidado como eje central', note: 'Cohousing con perspectiva feminista · Construcción: diseño bioclimático y sustentabilidad' },
        { id: 'cta', title: 'Sumate a construir otra forma de habitar' },
      ],
    },
    en: {
      title: 'Care as infrastructure',
      lead: 'We seek to build care into the neighbourhood’s design from the start, as a shared responsibility that runs through spaces, organization and community life.',
      sections: [
        { id: 'cohousing', eyebrow: 'Cohousing', title: 'A model designed for community life' },
        { id: 'importa', title: 'Why it matters for Amapolas' },
        { id: 'diferencia', eyebrow: 'What sets us apart', title: 'Care at the centre' },
        { id: 'cta', title: 'Join us in building another way of living' },
      ],
    },
  },

  // ───────────────── PROYECTOS (landing, sin link en el menú) ─────────────────
  proyectos: {
    es: {
      title: 'Proyectos',
      lead: 'Barrio Amapolas y proyectos agroecológicos.',
      sections: [
        { id: 'barrio', title: 'Barrio Amapolas', note: 'Card principal → /proyectos/vivienda (estructura base de v5; el texto no la modifica)' },
        { id: 'agroecologicos', title: 'Proyectos agroecológicos', note: 'Card → /proyectos/productivos' },
      ],
    },
    en: {
      title: 'Projects',
      lead: 'Barrio Amapolas and agroecological projects.',
      sections: [
        { id: 'barrio', title: 'Barrio Amapolas' },
        { id: 'agroecologicos', title: 'Agroecological projects' },
      ],
    },
  },

  // ───────────────────── BARRIO AMAPOLAS ─────────────────────
  vivienda: {
    es: {
      title: 'Barrio Amapolas',
      lead: 'Un barrio cooperativo con perspectiva feminista, diseñado desde el cuidado, la sustentabilidad y la vida comunitaria.',
      sections: [
        { id: 'proyecto', eyebrow: 'El proyecto', title: 'La vivienda como derecho colectivo' },
        { id: 'implementacion', title: 'Cómo lo implementa Amapolas', note: '4 apartados: Unidades privadas · Espacios comunitarios · Diseño participativo · Sustentabilidad integrada' },
        { id: 'enfoque', eyebrow: 'Enfoque constructivo', title: 'Cómo queremos construir' },
        { id: 'replicable', eyebrow: 'De experiencia local a propuesta colectiva', title: 'Un modelo replicable', note: '4 ítems (01 Modelo cooperativo · 02 Metodología documentada · 04 Evidencia de impacto · 06 Para fondos que buscan proyección)' },
        { id: 'estado', title: 'Estado actual', note: 'Agrega: Proyectos agroecológicos (en consolidación) · Gestión de terreno y financiamiento (en curso)' },
        { id: 'apoyo', eyebrow: 'Apoyá este proyecto', title: 'Tu aporte acerca el barrio a la realidad', note: 'CTAs: Donar ahora → cuadro de la home · Otras formas de colaborar → Comunidad' },
      ],
    },
    en: {
      title: 'Barrio Amapolas',
      lead: 'A cooperative neighbourhood with a feminist perspective, designed around care, sustainability and community life.',
      sections: [
        { id: 'proyecto', eyebrow: 'The project', title: 'Housing as a collective right' },
        { id: 'implementacion', title: 'How Amapolas implements it' },
        { id: 'enfoque', eyebrow: 'Building approach', title: 'How we want to build' },
        { id: 'replicable', eyebrow: 'From local experience to collective proposal', title: 'A replicable model' },
        { id: 'estado', title: 'Current status' },
        { id: 'apoyo', eyebrow: 'Support this project', title: 'Your contribution brings the neighbourhood closer to reality' },
      ],
    },
  },

  // ─────────────── PROYECTOS AGROECOLÓGICOS (una página, solo scroll) ───────────────
  productivos: {
    es: {
      title: 'Producir en armonía con el territorio',
      lead: 'Tres iniciativas que transforman la forma de producir: sin agroquímicos, cuidando la naturaleza, fortaleciendo las comunidades y generando desarrollo local.',
      sections: [
        { id: 'apicultura', eyebrow: 'Proyecto agroecológico', title: 'Apiario Colectivo', note: 'Volanta "Una experiencia en territorio": Miel patagónica, biodiversidad que se cultiva · Autonomía económica (23 kg de miel en 2026)' },
        { id: 'plantas-nativas', eyebrow: 'Proyecto agroecológico · Soberanía alimentaria', title: 'Plantas Nativas', note: 'Raíces patagónicas · cuadritos 2025/2026 · "Dónde estamos": Nativas Activas (ONU Mujeres, UTT Patagonia)' },
        { id: 'hongos-comestibles', eyebrow: 'Proyecto agroecológico · Economía regenerativa', title: 'Hongos Comestibles', note: 'Del bosque a la mesa · ODS 12 + ODS 03 · "Un proyecto que puede crecer y multiplicarse" (solo texto)' },
        { id: 'cta', title: 'Tres experiencias que articulan tierra, biodiversidad, aprendizaje y comunidad.', note: 'Único CTA: Donar ahora → cuadro de la home' },
      ],
    },
    en: {
      title: 'Producing in harmony with the land',
      lead: 'Three initiatives that transform how we produce: agrochemical-free, caring for nature, strengthening communities and generating local development.',
      sections: [
        { id: 'apicultura', eyebrow: 'Agroecological project', title: 'Collective Apiary' },
        { id: 'plantas-nativas', eyebrow: 'Agroecological project · Food sovereignty', title: 'Native Plants' },
        { id: 'hongos-comestibles', eyebrow: 'Agroecological project · Regenerative economy', title: 'Edible Mushrooms' },
        { id: 'cta', title: 'Three experiences that bring together land, biodiversity, learning and community.' },
      ],
    },
  },

  // ───────────────────── FORMACIÓN Y CAPACITACIONES ─────────────────────
  formacion: {
    es: {
      title: 'Formación y Capacitaciones',
      lead: 'Entendemos que el camino hacia nuestro sueño se construye colectivamente y en constante estado de aprendizaje, por eso Amapolas organiza diversas instancias de intercambio de saberes y diálogo en torno a las temáticas que nos importan: hábitat, género, sustentabilidad e interculturalidad.',
      sections: [
        { id: 'plantas', title: 'Capacitación en reproducción de plantas nativas (2026)', note: 'UTT Patagonia · ONU Mujeres - Fondo Regional' },
        { id: 'incidencia', title: 'Construyendo incidencia política desde el territorio', note: 'Charlas y capacitaciones abiertas en Diseño Participativo del Hábitat 2026–2027' },
        { id: 'escuela', title: 'Escuela de agroecología', note: 'Objetivo macro a largo plazo dentro del barrio' },
      ],
    },
    en: {
      title: 'Training & Workshops',
      lead: 'We understand that the path to our dream is built collectively and in constant learning, which is why Amapolas organizes different spaces for knowledge exchange and dialogue on the topics that matter to us: habitat, gender, sustainability and interculturality.',
      sections: [
        { id: 'plantas', title: 'Native plant propagation training (2026)' },
        { id: 'incidencia', title: 'Building political advocacy from the territory' },
        { id: 'escuela', title: 'Agroecology school' },
      ],
    },
  },

  // ───────────────────── ACCIONES Y PRENSA ─────────────────────
  prensa: {
    es: {
      title: 'Acciones y Prensa',
      lead: 'Creemos que lo que hacemos también necesita ser contado. Comunicar nuestras experiencias, aprendizajes y desafíos nos permite ampliar las redes, visibilizar otras formas de habitar y producir, y acercar nuestra voz a quienes pueden contribuir a que estos proyectos sigan creciendo.',
      sections: [
        { id: 'eventos', eyebrow: 'Eventos y Acciones', title: 'Hitos', note: 'Sin números · hitos de financiamiento 1°–4°, hito internacional (Encuentro) con links, integración HIC, ONU Mujeres' },
        { id: 'prensa', eyebrow: 'Para periodistas', title: '¿Querés cubrir nuestra historia?', note: 'Julieta Linares — Presidenta / Referente de prensa · mail · formulario' },
        { id: 'kit', eyebrow: 'Kit de prensa', title: 'Para periodistas y comunicadores', note: 'Gacetilla ES/EN · Fotos y videos · Logo · Dossier ES/EN · Boilerplate' },
      ],
    },
    en: {
      title: 'Actions & Press',
      lead: 'We believe that what we do also needs to be told. Sharing our experiences, lessons and challenges lets us widen our networks, make other ways of living and producing visible, and bring our voice to those who can help these projects keep growing.',
      sections: [
        { id: 'eventos', eyebrow: 'Events & Actions', title: 'Milestones' },
        { id: 'prensa', eyebrow: 'For journalists', title: 'Want to cover our story?' },
        { id: 'kit', eyebrow: 'Press kit', title: 'For journalists and communicators' },
      ],
    },
  },

  // ───────────────────────── COMUNIDAD ─────────────────────────
  comunidad: {
    es: {
      title: 'Sumate a construir con nosotras',
      lead: 'Hay muchas formas de ser parte de Amapolas. Cada vínculo hace posible que este proyecto crezca, se fortalezca y llegue más lejos.',
      sections: [
        { id: 'participar', eyebrow: '¿Cómo querés participar?', title: 'Cada vínculo tiene su propio camino', note: '3 cards: Quiero acompañar → cuadro de donaciones · Quiero desarrollar una propuesta → dossier · Quiero hablar de Amapolas → Kit de prensa' },
        { id: 'alianzas', eyebrow: 'Red de Alianzas', title: 'Quiénes confían en el proyecto', note: 'FMS 2023 2024 2025 · organizaciones amigas (4 recuadros, con Barrio Intercultural)' },
        { id: 'fundaciones', eyebrow: 'Para fondos y organizaciones', title: 'Construimos desde evidencia y trazabilidad', note: 'Dossier ES/EN · Solicitar balance e información financiera · Matrícula INAES' },
        { id: 'sponsors', title: 'Compromiso que se transforma en impacto', note: 'Texto + formulario de interés (nombre, país, tipo de organización, qué parte del proyecto [multi], cómo acompañar [multi], email, propuesta) · CTA "Enviar propuesta"' },
        { id: 'donantes', eyebrow: 'Red de apoyo', title: 'Quienes aportan, hacen posible el proyecto.', note: 'Mismo cuadro de donación completo de la home' },
      ],
    },
    en: {
      title: 'Join us in building together',
      lead: 'There are many ways to be part of Amapolas. Every bond helps this project grow, strengthen and reach further.',
      sections: [
        { id: 'participar', eyebrow: 'How would you like to take part?', title: 'Every bond has its own path' },
        { id: 'alianzas', eyebrow: 'Alliance Network', title: 'Who trusts the project' },
        { id: 'fundaciones', eyebrow: 'For funders and organizations', title: 'We build from evidence and traceability' },
        { id: 'sponsors', title: 'Commitment that turns into impact' },
        { id: 'donantes', eyebrow: 'Support network', title: 'Those who contribute make the project possible.' },
      ],
    },
  },
};
