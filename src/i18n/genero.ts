// Textos de /nosotras/genero. ES: docs/correcciones.md; EN: borrador para revisar.
export const genero = {
  es: {
    meta: {
      title: 'Género y hábitat · Amapolas, cooperativa de vivienda feminista en Bariloche',
      description: 'La habitación propia como derecho: por qué Amapolas construye vivienda cooperativa con perspectiva de género, conducida íntegramente por mujeres y disidencias en Bariloche.',
      crumb: 'Género',
    },
    hero: {
      home: 'Inicio', parent: 'Nosotras', here: 'Género',
      title: ['La habitación propia', 'como derecho'],
      subtitle: 'Reivindicamos la casa propia no como sueño sino como derecho esencial para el desarrollo humano de mujeres y disidencias.',
      missing: 'Imagen pendiente: hero/genero.webp',
    },
    b1: {
      eyebrow: 'La habitación propia',
      title: ['Un espacio donde', 'desarrollarnos y crecer'],
      prose: [
        'Como mujeres sudamericanas, conocemos las desigualdades que nos atraviesan y reconocemos las luchas que nos precedieron. Desde una perspectiva feminista, nos organizamos para construir formas más justas, autónomas y comunitarias de habitar y proyectar nuestro futuro.',
        'Virginia Woolf escribió sobre la habitación propia. Nosotras reivindicamos ese espacio y apostamos por la casa propia: no como sueño, sino como <strong>derecho y condición esencial para el desarrollo humano</strong>.',
      ],
      odsNum: 'ODS 5 — Igualdad de género',
      ods: 'Amapolas es una <strong>cooperativa de viviendas íntegramente conducida por mujeres y disidencias</strong>. Todas las decisiones, la gestión financiera y la representación institucional están en manos de mujeres.',
      photo: 'Asamblea / organización · foto pendiente',
    },
    cifras: {
      eyebrow: 'El contexto',
      title: ['Datos que explican', 'por qué existimos'],
      items: [
        { v: '30% ↓', k: 'Ingresos', d: 'Las mujeres perciben 30% menos que los hombres por su ocupación principal.' },
        { v: '70% ↑', k: 'Cuidados', d: 'Las mujeres realizan 7 de cada 10 tareas domésticas.' },
        { v: '15–20%', k: 'Propiedad', d: 'de las propiedades registradas en Argentina están a nombre de mujeres, según documentación oficial.' },
      ],
      sources: 'Fuentes: <a href="https://ecofeminita.com" target="_blank" rel="noopener">Ecofeminita.com</a>, <a href="https://latfem.org" target="_blank" rel="noopener">Latfem.org</a>, Observatorio de Igualdad de Género de América Latina y el Caribe.',
    },
    donar: {
      eyebrow: 'Sumate al proyecto',
      title: ['Tu aporte construye', 'esta comunidad'],
      body: 'Tu aporte se suma al fondo colectivo para adquirir el terreno donde crecerá Amapolas, un barrio pensado por y para mujeres y disidencias.',
      cta: 'Donar ahora →',
      other: 'Otras formas de colaborar',
      note: 'Cooperativa de Vivienda Amapolas Ltda. · Matrícula INAES N°63884',
    },
  },
  en: {
    meta: {
      title: 'Gender and habitat · Amapolas, feminist housing cooperative in Bariloche',
      description: 'A room of one’s own as a right: why Amapolas builds cooperative housing with a gender perspective, led entirely by women and gender-diverse people in Bariloche, Argentina.',
      crumb: 'Gender',
    },
    hero: {
      home: 'Home', parent: 'About us', here: 'Gender',
      title: ['A room of one’s own', 'as a right'],
      subtitle: 'We claim a home of our own not as a dream but as an essential right for the human development of women and gender-diverse people.',
      missing: 'Image pending: hero/genero.webp',
    },
    b1: {
      eyebrow: 'A room of one’s own',
      title: ['A space to develop', 'and grow'],
      prose: [
        'As South American women, we know the inequalities that shape our lives and we honor the struggles that came before us. From a feminist perspective, we organize to build fairer, more autonomous and community-based ways of living and planning our future.',
        'Virginia Woolf wrote about a room of one’s own. We claim that space and go further, for a home of our own: not as a dream, but as <strong>a right and an essential condition for human development</strong>.',
      ],
      odsNum: 'SDG 5 — Gender equality',
      ods: 'Amapolas is a <strong>housing cooperative led entirely by women and gender-diverse people</strong>. All decisions, financial management and institutional representation are in the hands of women.',
      photo: 'Assembly / organization · photo pending',
    },
    cifras: {
      eyebrow: 'The context',
      title: ['Data that explains', 'why we exist'],
      items: [
        { v: '30% ↓', k: 'Income', d: 'Women earn 30% less than men in their main occupation.' },
        { v: '70% ↑', k: 'Care', d: 'Women do 7 out of 10 household tasks.' },
        { v: '15–20%', k: 'Property', d: 'of registered properties in Argentina are in women’s names, according to official records.' },
      ],
      sources: 'Sources: <a href="https://ecofeminita.com" target="_blank" rel="noopener">Ecofeminita.com</a>, <a href="https://latfem.org" target="_blank" rel="noopener">Latfem.org</a>, Gender Equality Observatory for Latin America and the Caribbean.',
    },
    donar: {
      eyebrow: 'Join the project',
      title: ['Your support builds', 'this community'],
      body: 'Your contribution joins the collective fund to acquire the land where Amapolas will grow, a neighborhood designed by and for women and gender-diverse people.',
      cta: 'Donate now →',
      other: 'Other ways to get involved',
      note: 'Cooperativa de Vivienda Amapolas Ltda. · INAES Registration No. 63884',
    },
  },
} as const;
