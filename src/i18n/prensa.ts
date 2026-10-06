// Textos de /prensa (Acciones y Prensa). ES: docs/correcciones.md + v5; EN: borrador para revisar.
type Link = [string, string];
type Ev = { tag: string; tc?: 'rojo' | 'verde'; hito?: boolean; h: string; p: string; links?: Link[] };
type Medio = { s: string; h: string; p: string; type: 'radio' | 'nota' | 'video'; tl: string; href: string; cta: string };

const YT = 'https://www.youtube.com/@amapolascooperativadevivie5740';
const ANB = 'https://www.anbariloche.com.ar/noticias/2024/11/13/96117-invitan-al-encuentro-internacional-sobre-derecho-al-habitat-y-los-bienes-comunes';

const es = {
  meta: {
    title: 'Acciones y prensa · Amapolas, cooperativa de vivienda en Bariloche',
    description: 'Eventos, capacitaciones, financiamientos y cobertura en medios de la Cooperativa Amapolas desde 2022. Kit de prensa con gacetilla, fotos, logo y dossier, y contacto para periodistas.',
    crumb: 'Acciones y Prensa',
  },
  hero: {
    home: 'Inicio', here: 'Acciones y Prensa',
    title: ['Acciones', 'y Prensa'],
    subtitle: 'Creemos que lo que hacemos también necesita ser contado. Comunicar nuestras experiencias, aprendizajes y desafíos nos permite ampliar las redes, visibilizar otras formas de habitar y producir, y acercar nuestra voz a quienes pueden contribuir a que estos proyectos sigan creciendo.',
    tabs: [['#eventos', 'Eventos y Acciones'], ['#prensa', 'Prensa'], ['#contacto-prensa', 'Contacto de prensa'], ['#kit', 'Kit de Prensa']] as Link[],
  },
  eventos: {
    eyebrow: 'Registro cronológico',
    title: 'Acciones y eventos',
    years: [
      ['2022', [
        { tag: 'Hito institucional · Alto impacto', tc: 'rojo', hito: true, h: 'Obtención de la matrícula INAES N°63884', p: 'Constitución formal de la cooperativa con matrícula nacional otorgada por el Instituto Nacional de Asociativismo y Economía Social. Entrega por parte de Fernando Tarzia, autoridad regional.', links: [['Ver documento →', 'https://drive.google.com/file/d/1JSwHew096U3ihRokgTz8neNsmdoiDOuS/view']] },
        { tag: 'Evento', tc: 'verde', h: 'Congreso de Cooperativas Rionegrinas — FECORN', p: 'Participación en el Congreso organizado por la Federación de Cooperativas de Río Negro. Primer espacio de inserción en redes cooperativas provinciales.', links: [['Ver en Instagram →', 'https://www.instagram.com/p/CrKFnY1sdXe/']] },
      ]],
      ['2023', [
        { tag: 'Financiamiento · Alto impacto', tc: 'rojo', hito: true, h: '1° Fondo Internacional obtenido — Diseño de estrategias para la producción social del suelo', p: 'Inicio de un ciclo de tres fondos consecutivos (2023, 2024, 2025) que representa la prueba más concreta de rendición de cuentas y confianza acumulada.' },
        { tag: 'Evento', h: '36° Encuentro Plurinacional de Mujeres y Disidencias — Bariloche', p: 'Participación en la organización del encuentro realizado en Bariloche. Fortalecimiento de las integrantes e inserción en redes feministas locales y nacionales.', links: [['Ver en Instagram →', 'https://www.instagram.com/36encpluri.mujeresydisidencias']] },
        { tag: 'Formación internacional · Alto impacto', tc: 'rojo', hito: true, h: 'Beca UNAM — Diplomado de Diseño Participativo del Hábitat', p: 'Visita al Barrio Intercultural de San Martín de los Andes — resultado de la alianza con la Comunidad Mapuche Curruhuinca — que derivó en la obtención de una beca para el Diplomado de Diseño Participativo del Hábitat de la UNAM México. Formación de excelencia que pocos proyectos cooperativos locales han alcanzado.', links: [['Ver en Instagram →', 'https://www.instagram.com/p/CytPmO_uN0m/'], ['Diplomado UNAM →', 'https://hic-al.org/diplomado-dpsh/']] },
      ]],
      ['2024', [
        { tag: 'Evento', h: 'Charla abierta: Hábitat, Género y Sustentabilidad — Arq. Mariana Enet', p: 'Charla-debate en el Centro Municipal de Arte, Ciencia y Tecnología de Bariloche. Resultado: visibilidad, nuevas redes feministas y actoras políticas.', links: [['Ver en Instagram →', 'https://www.instagram.com/p/C2StzhqOoRH/']] },
        { tag: 'Financiamiento · Alto impacto', tc: 'rojo', hito: true, h: '2° Fondo Internacional obtenido — Proyectos productivos y formativos', p: 'Segundo financiamiento consecutivo. Proyecto: "Desde el sueño de la casa propia hacia la fuerza colectiva". Inicio de proyectos de hongos, apicultura y plantas nativas.' },
        { tag: 'Hito internacional · Alto impacto', tc: 'rojo', hito: true, h: 'Primer Encuentro Internacional Autogestionario de Diseño Participativo — Declarado de interés por el Concejo Deliberante', p: 'Organización junto a TecInHab, HIC, La Remolinera y el Barrio Intercultural de San Martín de los Andes. Declarado de interés por el Concejo Deliberante de Bariloche. Obtención del Fondo de Ayuda Urgente de Colombia para producción audiovisual.', links: [['Ver en Instagram →', 'https://www.instagram.com/tecinhab/'], ['Nota de prensa →', ANB], ['Canal de YouTube →', YT], ['NOSOTRAS. Una biografía situada. EP 1: Filomena Catricura →', 'https://www.youtube.com/watch?v=IQ9uA_EKg-8&t=58s'], ['EP 2: Vanesa Buchile →', 'https://www.youtube.com/watch?v=Ajd6wTA_cBw&t=17s'], ['EP 3: Valeska Baradit →', 'https://www.youtube.com/watch?v=n24z1iEYvPg&t=16s']] },
      ]],
      ['2025', [
        { tag: 'Financiamiento · Alto impacto', tc: 'rojo', hito: true, h: '3° Fondo Internacional obtenido — Consolidación de proyectos agroecológicos', p: 'Tercer financiamiento consecutivo. Proyecto: consolidación de proyectos agroecológicos e interculturales con foco en equidad de género y participación política. Tres ciclos seguidos son la evidencia más concreta de rendición de cuentas.' },
        { tag: 'Alianza', tc: 'verde', h: 'Proyecto con Fundación Gente Nueva — Senderos Interpretativos', p: 'Invitación a participar del proyecto integral con MISEREOR. Registro y creación de senderos interpretativos con perspectiva de género e interculturalidad.', links: [['Ver en Instagram →', 'https://www.instagram.com/p/DFoJh7TuuZs/']] },
        { tag: 'Evento', h: 'Congreso de Economía Feminista de Abya Yala', p: 'Participación en el congreso de economía feminista latinoamericana.', links: [['Ver en Instagram →', 'https://www.instagram.com/p/DIEqe8UuVRw/']] },
      ]],
      ['2026', [
        { tag: 'Integración', tc: 'verde', h: 'Nos constituimos como miembro oficial de HIC', p: 'Amapolas amplía su participación en redes nacionales e internacionales que trabajan por el derecho al hábitat y la vivienda.' },
        { tag: 'Financiamiento · Alto impacto', tc: 'rojo', hito: true, h: 'ONU Mujeres — Fondo Regional de apoyo a organizaciones y movimientos de mujeres y feministas', p: 'Diseño de capacitación en reproducción de plantas nativas con el apoyo técnico de la UTT Patagonia dirigida a asociadas de la cooperativa y personas de la comunidad LGBTQ+.' },
        { tag: 'Financiamiento · Alto impacto', tc: 'rojo', hito: true, h: '4° Fondo Internacional obtenido — Capacitaciones en Diseño Participativo del Hábitat', p: 'En el marco del proyecto "Construyendo incidencia política desde el territorio", Amapolas brinda charlas y capacitaciones abiertas a la comunidad en Diseño Participativo del Hábitat.' },
        { tag: 'Territorio', tc: 'verde', h: 'Visitas a Lofche Buenuleo y Lofche Melo — Senderos Interpretativos', p: 'Visitas en el marco del proyecto con Fundación Gente Nueva. Exploración del territorio y fortalecimiento del vínculo intercultural.', links: [['Ver reel 1 →', 'https://www.instagram.com/reel/DUeXBRdDo0g/'], ['Ver reel 2 →', 'https://www.instagram.com/reel/DVrAW8XDolC/']] },
        { tag: 'En curso', tc: 'rojo', h: 'Desarrollo de campaña comunicacional y sitio web', p: 'Creación de la página web institucional y campaña de comunicación externa en el marco del tercer financiamiento internacional.' },
      ]],
    ] as [string, Ev[]][],
  },
  medios: {
    eyebrow: 'En los medios',
    title: 'Cobertura mediática',
    items: [
      { s: 'Radio Nacional Bariloche', h: 'Entrevista a la presidenta sobre el proyecto cooperativo y acceso a vivienda', p: 'Julieta Linares habló sobre el modelo cooperativo, la perspectiva de género en el hábitat y los proyectos de la cooperativa.', type: 'radio', tl: 'Radio', href: 'https://www.4shared.com/s/fkuWJQSO9ku', cta: 'Escuchar →' },
      { s: 'ANBariloche.com.ar', h: 'Encuentro internacional sobre derecho al hábitat y bienes comunes en Bariloche', p: 'Cobertura del primer encuentro autogestionario de diseño participativo organizado junto a HIC y organizaciones de Latinoamérica.', type: 'nota', tl: 'Nota', href: ANB, cta: 'Leer nota →' },
      { s: 'Economía Solidaria', h: 'Amapolas se integra a la red latinoamericana TEC IN HAB', p: 'La cooperativa se une a la red que reúne organizaciones y profesionales de Latinoamérica para el intercambio de conocimientos sobre hábitat.', type: 'nota', tl: 'Nota', href: 'https://economiasolidaria.com.ar/rio-negro-una-cooperativa-de-bariloche-se-integra-a-una-red-latinoamericana-sobre-diseno-del-habitat/', cta: 'Leer nota →' },
      { s: 'Cadena Nueve Streaming', h: 'Cobertura audiovisual de la cooperativa Amapolas', p: 'Nota televisiva sobre la cooperativa, sus proyectos y la problemática habitacional para mujeres y disidencias en Bariloche.', type: 'video', tl: 'Video', href: 'https://www.youtube.com/watch?v=RtIEAbTHq-0', cta: 'Ver →' },
      { s: 'Radio Nacional Viedma', h: 'Entrevista sobre vivienda cooperativa y perspectiva de género', p: 'Cobertura desde la capital provincial sobre el modelo de vivienda cooperativa feminista en desarrollo en Bariloche.', type: 'radio', tl: 'Radio', href: 'https://www.4shared.com/s/fR55v22mGge', cta: 'Escuchar →' },
      { s: 'Radio Nacional · Invitación charla', h: 'Cooperativa Amapolas invita a charla-debate sobre hábitat, género y sustentabilidad', p: 'Convocatoria a la charla abierta dictada por la Arq. Mariana Enet en el Centro Municipal de Arte de Bariloche.', type: 'radio', tl: 'Radio', href: 'https://www.radionacional.com.ar/cooperativa-de-viviendas-amapolas-invita-a-charla-debate/', cta: 'Leer →' },
      { s: 'Radio comunitaria La Montonera', h: 'Nota a la presidenta de la cooperativa', p: 'Entrevista a Julieta Linares, presidenta de la Cooperativa Amapolas.', type: 'radio', tl: 'Radio', href: 'https://www.4s.io/mp3/Yi1QRv8Zfa/Julieta_Linares_en_Radio_comun.html', cta: 'Escuchar →' },
      { s: 'Radio Comunitaria Ore Tape', h: 'Entrevista a la Cooperativa Amapolas', p: 'Nota radial desde Benito Juárez, provincia de Buenos Aires.', type: 'radio', tl: 'Radio', href: 'https://www.4shared.com/s/fqSCMfw4qge', cta: 'Escuchar →' },
      { s: 'Radio Pública de Marcos Paz', h: 'Entrevista a la Cooperativa Amapolas', p: 'Nota radial en la Radio Pública de Marcos Paz.', type: 'radio', tl: 'Radio', href: 'https://www.4shared.com/s/ftnmigZzEge', cta: 'Escuchar →' },
    ] as Medio[],
  },
  contacto: {
    eyebrow: 'Para periodistas',
    title: ['¿Querés', 'cubrir nuestra', 'historia?'],
    desc: 'Si sos periodista o comunicador/a y querés entrevistarnos, solicitar material adicional de prensa o coordinar una visita, completá el formulario o escribinos directamente.',
    persona: 'Julieta Linares — Presidenta / Referente de prensa',
    lugar: 'Bariloche, Río Negro, Patagonia Argentina',
    form: { nombre: 'Nombre', nombrePh: 'Tu nombre', medio: 'Medio', medioPh: 'Nombre del medio', email: 'Email', emailPh: 'tu@email.com', consulta: 'Consulta', consultaPh: 'Contanos sobre la nota que estás preparando...', enviar: 'Enviar consulta', subject: 'Consulta de prensa' },
    ok: ['¡Consulta enviada!', 'Gracias por tu interés. Nos ponemos en contacto a la brevedad.'],
  },
  kit: {
    eyebrow: 'Para periodistas y comunicadores',
    title: 'Kit de Prensa',
    body: 'Ponemos a disposición información y recursos sobre Amapolas para facilitar la difusión de nuestro trabajo y acercar nuestra experiencia a medios, periodistas y comunicadores.',
    contactoLabel: 'Referente de comunicación y prensa',
    contactoNombre: 'Julieta Linares',
    contactoCargo: 'Presidenta · Referente de prensa institucional',
    materiales: [
      { tag: 'Para conocer Amapolas', h: 'Gacetilla institucional', p: 'Una síntesis institucional de Amapolas, su origen, propósito y principales líneas de trabajo. Disponible en español e inglés, para facilitar su incorporación en artículos, notas y publicaciones.', links: [['Descargar ES →', '/prensa/gacetilla-amapolas-es.pdf'], ['Download EN →', '/prensa/gacetilla-amapolas-en.pdf']] as Link[] },
      { tag: 'Para contar nuestra historia', h: 'Fotos y videos del proyecto', p: 'Una selección de fotografías de los proyectos y del trabajo en territorio, en alta resolución y con información de cada imagen. Disponibles para uso editorial con atribución.', links: [['Descargar pack →', '/prensa/fotos-amapolas.zip']] as Link[] },
      { tag: 'Identidad visual de Amapolas', h: 'Logo institucional', p: 'Versiones del logo en alta resolución y formatos adaptados para publicaciones digitales e impresas. Disponible con fondo transparente.', links: [['Descargar logo →', '/prensa/logo-amapolas.zip']] as Link[] },
      { tag: 'Una mirada en profundidad', h: 'Dossier institucional', p: 'Un recorrido por la historia de Amapolas, sus proyectos, el enfoque que las articula y las alianzas que hacen posible su desarrollo. Disponible en español e inglés para medios y organizaciones que quieran conocer nuestra experiencia en profundidad.', links: [['Descargar ES →', '/dossier-amapolas-es.pdf'], ['Download EN →', '/dossier-amapolas-en.pdf']] as Link[] },
    ],
    boilerLabel: 'Boilerplate institucional — Texto de uso libre para medios',
    boiler: 'Amapolas es una cooperativa de viviendas conducida íntegramente por mujeres y disidencias, fundada en 2022 en Bariloche, Patagonia Argentina (INAES N°63884). Desarrolla un modelo de hábitat comunitario con perspectiva feminista y enfoque regenerativo que articula vivienda cooperativa, proyectos agroecológicos e interculturalidad. Es una cooperativa de vivienda en Patagonia de conducción 100% femenina y ha recibido tres ciclos consecutivos de financiamiento internacional de una misma ONG (2023, 2024 y 2025). Integra la Coalición Internacional para el Hábitat en Latinoamérica (HIC - AL) y la red latinoamericana TEC IN HAB (tecnologías integrales del hábitat).',
  },
};

const en: typeof es = {
  meta: {
    title: 'Actions and press · Amapolas, housing cooperative in Bariloche',
    description: 'Events, training, funding and media coverage of the Amapolas Cooperative since 2022. Press kit with press release, photos, logo and dossier, plus contact for journalists.',
    crumb: 'Actions and Press',
  },
  hero: {
    home: 'Home', here: 'Actions and Press',
    title: ['Actions', 'and Press'],
    subtitle: 'We believe what we do also needs to be told. Sharing our experiences, lessons and challenges helps us widen our networks, make other ways of living and producing visible, and bring our voice to those who can help these projects keep growing.',
    tabs: [['#eventos', 'Events and Actions'], ['#prensa', 'Press'], ['#contacto-prensa', 'Press contact'], ['#kit', 'Press Kit']],
  },
  eventos: {
    eyebrow: 'Timeline',
    title: 'Actions and events',
    years: [
      ['2022', [
        { tag: 'Institutional milestone · High impact', tc: 'rojo', hito: true, h: 'INAES registration No. 63884', p: 'Formal constitution of the cooperative with national registration from the National Institute of Associations and Social Economy, delivered by regional authority Fernando Tarzia.', links: [['See document →', 'https://drive.google.com/file/d/1JSwHew096U3ihRokgTz8neNsmdoiDOuS/view']] },
        { tag: 'Event', tc: 'verde', h: 'Río Negro Cooperatives Congress — FECORN', p: 'Participation in the congress organized by the Federation of Cooperatives of Río Negro. Our first step into provincial cooperative networks.', links: [['See on Instagram →', 'https://www.instagram.com/p/CrKFnY1sdXe/']] },
      ]],
      ['2023', [
        { tag: 'Funding · High impact', tc: 'rojo', hito: true, h: '1st international fund — Strategies for the social production of land', p: 'The start of three consecutive funding cycles (2023, 2024, 2025), the most concrete proof of accountability and accumulated trust.' },
        { tag: 'Event', h: '36th Plurinational Gathering of Women and Gender-Diverse People — Bariloche', p: 'Participation in organizing the gathering held in Bariloche. Members grew stronger and joined local and national feminist networks.', links: [['See on Instagram →', 'https://www.instagram.com/36encpluri.mujeresydisidencias']] },
        { tag: 'International training · High impact', tc: 'rojo', hito: true, h: 'UNAM scholarship — Diploma in Participatory Habitat Design', p: 'A visit to the Intercultural Neighborhood of San Martín de los Andes — the result of the alliance with the Curruhuinca Mapuche Community — led to a scholarship for UNAM Mexico’s Diploma in Participatory Habitat Design.', links: [['See on Instagram →', 'https://www.instagram.com/p/CytPmO_uN0m/'], ['UNAM diploma →', 'https://hic-al.org/diplomado-dpsh/']] },
      ]],
      ['2024', [
        { tag: 'Event', h: 'Open talk: Habitat, Gender and Sustainability — Arch. Mariana Enet', p: 'Talk and debate at Bariloche’s Municipal Center for Art, Science and Technology. Result: visibility, new feminist networks and political allies.', links: [['See on Instagram →', 'https://www.instagram.com/p/C2StzhqOoRH/']] },
        { tag: 'Funding · High impact', tc: 'rojo', hito: true, h: '2nd international fund — Productive and training projects', p: 'Second consecutive funding cycle. Project: "From the dream of a home of our own to collective strength". Launch of the mushroom, beekeeping and native plant projects.' },
        { tag: 'International milestone · High impact', tc: 'rojo', hito: true, h: 'First Self-Organized International Gathering on Participatory Design — Declared of interest by the City Council', p: 'Organized with TecInHab, HIC, La Remolinera and the Intercultural Neighborhood of San Martín de los Andes. Declared of interest by the Bariloche City Council. Colombia’s Urgent Action Fund supported our audiovisual production.', links: [['See on Instagram →', 'https://www.instagram.com/tecinhab/'], ['Press article (ES) →', ANB], ['YouTube channel →', YT], ['NOSOTRAS. A situated biography. EP 1: Filomena Catricura →', 'https://www.youtube.com/watch?v=IQ9uA_EKg-8&t=58s'], ['EP 2: Vanesa Buchile →', 'https://www.youtube.com/watch?v=Ajd6wTA_cBw&t=17s'], ['EP 3: Valeska Baradit →', 'https://www.youtube.com/watch?v=n24z1iEYvPg&t=16s']] },
      ]],
      ['2025', [
        { tag: 'Funding · High impact', tc: 'rojo', hito: true, h: '3rd international fund — Consolidating agroecological projects', p: 'Third consecutive funding cycle. Project: consolidating agroecological and intercultural projects with a focus on gender equity and political participation. Three cycles in a row are the clearest evidence of accountability.' },
        { tag: 'Alliance', tc: 'verde', h: 'Project with Fundación Gente Nueva — Interpretive Trails', p: 'Invitation to join the comprehensive project with MISEREOR. Documenting and creating interpretive trails with a gender and intercultural perspective.', links: [['See on Instagram →', 'https://www.instagram.com/p/DFoJh7TuuZs/']] },
        { tag: 'Event', h: 'Abya Yala Feminist Economics Congress', p: 'Participation in the Latin American feminist economics congress.', links: [['See on Instagram →', 'https://www.instagram.com/p/DIEqe8UuVRw/']] },
      ]],
      ['2026', [
        { tag: 'Membership', tc: 'verde', h: 'We became an official member of HIC', p: 'Amapolas expands its participation in national and international networks working for the right to habitat and housing.' },
        { tag: 'Funding · High impact', tc: 'rojo', hito: true, h: 'UN Women — Regional Fund supporting women’s and feminist organizations and movements', p: 'Design of a training in native plant propagation, with technical support from UTT Patagonia, for cooperative members and people from the LGBTQ+ community.' },
        { tag: 'Funding · High impact', tc: 'rojo', hito: true, h: '4th international fund — Training in Participatory Habitat Design', p: 'As part of the project "Building political advocacy from the territory", Amapolas offers talks and training on Participatory Habitat Design open to the community.' },
        { tag: 'Territory', tc: 'verde', h: 'Visits to Lofche Buenuleo and Lofche Melo — Interpretive Trails', p: 'Visits as part of the project with Fundación Gente Nueva. Exploring the territory and strengthening intercultural ties.', links: [['See reel 1 →', 'https://www.instagram.com/reel/DUeXBRdDo0g/'], ['See reel 2 →', 'https://www.instagram.com/reel/DVrAW8XDolC/']] },
        { tag: 'In progress', tc: 'rojo', h: 'Communications campaign and website', p: 'Building the institutional website and an external communications campaign as part of the third international funding cycle.' },
      ]],
    ],
  },
  medios: {
    eyebrow: 'In the media',
    title: 'Media coverage',
    items: [
      { s: 'Radio Nacional Bariloche', h: 'Interview with the president on the cooperative project and access to housing', p: 'Julieta Linares spoke about the cooperative model, the gender perspective on habitat and the cooperative’s projects.', type: 'radio', tl: 'Radio', href: 'https://www.4shared.com/s/fkuWJQSO9ku', cta: 'Listen (ES) →' },
      { s: 'ANBariloche.com.ar', h: 'International gathering on the right to habitat and the commons in Bariloche', p: 'Coverage of the first self-organized gathering on participatory design, organized with HIC and Latin American organizations.', type: 'nota', tl: 'Article', href: ANB, cta: 'Read (ES) →' },
      { s: 'Economía Solidaria', h: 'Amapolas joins the Latin American TEC IN HAB network', p: 'The cooperative joins a network of Latin American organizations and professionals that share knowledge on habitat.', type: 'nota', tl: 'Article', href: 'https://economiasolidaria.com.ar/rio-negro-una-cooperativa-de-bariloche-se-integra-a-una-red-latinoamericana-sobre-diseno-del-habitat/', cta: 'Read (ES) →' },
      { s: 'Cadena Nueve Streaming', h: 'Video coverage of the Amapolas cooperative', p: 'A TV segment on the cooperative, its projects and the housing problem for women and gender-diverse people in Bariloche.', type: 'video', tl: 'Video', href: 'https://www.youtube.com/watch?v=RtIEAbTHq-0', cta: 'Watch (ES) →' },
      { s: 'Radio Nacional Viedma', h: 'Interview on cooperative housing and a gender perspective', p: 'Coverage from the provincial capital on the feminist cooperative housing model being developed in Bariloche.', type: 'radio', tl: 'Radio', href: 'https://www.4shared.com/s/fR55v22mGge', cta: 'Listen (ES) →' },
      { s: 'Radio Nacional · Talk announcement', h: 'Amapolas invites to a talk on habitat, gender and sustainability', p: 'Announcement of the open talk by architect Mariana Enet at Bariloche’s Municipal Arts Center.', type: 'radio', tl: 'Radio', href: 'https://www.radionacional.com.ar/cooperativa-de-viviendas-amapolas-invita-a-charla-debate/', cta: 'Read (ES) →' },
      { s: 'La Montonera community radio', h: 'Interview with the cooperative’s president', p: 'Interview with Julieta Linares, president of the Amapolas Cooperative.', type: 'radio', tl: 'Radio', href: 'https://www.4s.io/mp3/Yi1QRv8Zfa/Julieta_Linares_en_Radio_comun.html', cta: 'Listen (ES) →' },
      { s: 'Ore Tape community radio', h: 'Interview with the Amapolas Cooperative', p: 'Radio segment from Benito Juárez, Buenos Aires province.', type: 'radio', tl: 'Radio', href: 'https://www.4shared.com/s/fqSCMfw4qge', cta: 'Listen (ES) →' },
      { s: 'Radio Pública de Marcos Paz', h: 'Interview with the Amapolas Cooperative', p: 'Radio segment on Marcos Paz public radio.', type: 'radio', tl: 'Radio', href: 'https://www.4shared.com/s/ftnmigZzEge', cta: 'Listen (ES) →' },
    ],
  },
  contacto: {
    eyebrow: 'For journalists',
    title: ['Want to', 'cover our', 'story?'],
    desc: 'If you are a journalist or communicator and would like to interview us, request additional press material or arrange a visit, fill in the form or write to us directly.',
    persona: 'Julieta Linares — President / Press contact',
    lugar: 'Bariloche, Río Negro, Argentine Patagonia',
    form: { nombre: 'Name', nombrePh: 'Your name', medio: 'Outlet', medioPh: 'Name of the outlet', email: 'Email', emailPh: 'you@email.com', consulta: 'Your inquiry', consultaPh: 'Tell us about the story you are working on...', enviar: 'Send inquiry', subject: 'Press inquiry' },
    ok: ['Inquiry sent!', 'Thank you for your interest. We will get back to you soon.'],
  },
  kit: {
    eyebrow: 'For journalists and communicators',
    title: 'Press Kit',
    body: 'We offer information and resources about Amapolas to help share our work and bring our experience to media outlets, journalists and communicators.',
    contactoLabel: 'Communications and press contact',
    contactoNombre: 'Julieta Linares',
    contactoCargo: 'President · Institutional press contact',
    materiales: [
      { tag: 'Getting to know Amapolas', h: 'Press release', p: 'An institutional summary of Amapolas, its origins, purpose and main lines of work. Available in Spanish and English, ready to use in articles, stories and publications.', links: [['Descargar ES →', '/prensa/gacetilla-amapolas-es.pdf'], ['Download EN →', '/prensa/gacetilla-amapolas-en.pdf']] },
      { tag: 'Telling our story', h: 'Project photos and videos', p: 'A selection of high-resolution photographs of the projects and our work on the ground, with information on each image. Available for editorial use with attribution.', links: [['Download pack →', '/prensa/fotos-amapolas.zip']] },
      { tag: 'Amapolas visual identity', h: 'Institutional logo', p: 'High-resolution logo versions in formats suited to digital and print publications. Available with a transparent background.', links: [['Download logo →', '/prensa/logo-amapolas.zip']] },
      { tag: 'An in-depth look', h: 'Institutional dossier', p: 'A journey through Amapolas’ history, its projects, the approach that connects them and the alliances that make them possible. Available in Spanish and English for media and organizations wanting to learn about our experience in depth.', links: [['Descargar ES →', '/dossier-amapolas-es.pdf'], ['Download EN →', '/dossier-amapolas-en.pdf']] },
    ],
    boilerLabel: 'Institutional boilerplate — Free to use by media',
    boiler: 'Amapolas is a housing cooperative led entirely by women and gender-diverse people, founded in 2022 in Bariloche, Argentine Patagonia (INAES No. 63884). It develops a community habitat model with a feminist perspective and a regenerative approach that brings together cooperative housing, agroecological projects and interculturality. It is a 100% women-led housing cooperative in Patagonia and has received three consecutive cycles of international funding from the same NGO (2023, 2024 and 2025). It is a member of Habitat International Coalition Latin America (HIC-AL) and of the Latin American TEC IN HAB network (integrated habitat technologies).',
  },
};

export const prensa = { es, en };
