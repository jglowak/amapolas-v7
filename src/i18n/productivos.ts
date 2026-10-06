// Textos de /proyectos/productivos (Proyectos agroecológicos). ES: docs/correcciones.md + v5; EN: borrador.
type Dato = [string, string, string?];
type Tl = { dot: string; h: string; p: string; y: string };

const es = {
  meta: {
    title: 'Proyectos agroecológicos · Apicultura, plantas nativas y hongos · Amapolas',
    description: 'Apiario colectivo, producción de plantas nativas (Nativas Activas) y cultivo de hongos comestibles sin agroquímicos: los proyectos agroecológicos de Amapolas en Bariloche.',
    crumb: 'Proyectos agroecológicos',
  },
  hero: {
    home: 'Inicio', parent: 'Proyectos', here: 'Proyectos agroecológicos',
    title: ['Producir en armonía', 'con el territorio'],
    subtitle: 'Tres iniciativas que transforman la forma de producir: sin agroquímicos, cuidando la naturaleza, fortaleciendo las comunidades y generando desarrollo local.',
    missing: 'Imagen pendiente: /proyectos/productivos_hero.jpg',
  },
  zoom: 'Ampliar', clickNote: 'Click para ampliar', pending: 'foto pendiente', close: 'Cerrar', prev: 'Anterior', next: 'Siguiente',
  api: {
    tag: 'Proyecto agroecológico · Economía regenerativa', title: 'Apiario Colectivo',
    eyebrow: 'Una experiencia en territorio',
    h2: ['Miel patagónica,', 'biodiversidad que se cultiva'],
    prose: [
      'Veintitrés kilos de miel en la primera cosecha. Un número pequeño con un significado enorme.',
      'El apiario está alojado en territorio de una comunidad mapuche, producto de una alianza en donde cada parte aporta: la comunidad, el espacio y el vínculo con el territorio; Amapolas, el trabajo, la formación y la gestión. Las abejas, mientras tanto, <strong>polinizan el bosque patagónico</strong> y contribuyen a fortalecer su biodiversidad nativa.',
      'Cada tarro de miel Amapolas es producción sin agroquímicos, con manejo agroecológico y respeto por los ciclos naturales. <strong>Una forma de producir que acompaña y protege la vida del bosque.</strong>',
    ],
    ods: [
      ['ODS 12 — Producción y consumo responsables', 'Producción apícola <strong>sin agroquímicos</strong>, con manejo agroecológico y respeto de los ciclos del ecosistema andino-patagónico.'],
      ['ODS 15 — Vida de ecosistemas terrestres', 'El apiario en territorio mapuche <strong>fortalece la polinización de especies nativas</strong> del bosque patagónico y protege la biodiversidad local.'],
    ],
    datos: [
      ['Estado', 'Activo', 'estado'],
      ['Especie', 'Apis mellifera — miel artesanal patagónica'],
      ['Territorio', 'Comunidad Mapuche Tambo Báez, Bariloche'],
      ['Financiamiento', 'Fondo Mujeres del Sur — 3 ciclos consecutivos'],
    ] as Dato[],
    galeriaTitle: 'Imágenes del apiario',
    galeria: ['Apiario Colectivo', 'Colmenas en el bosque', 'Trabajo con colmenas'],
    objEyebrow: 'Para qué lo hacemos', objTitle: 'Más que producir miel',
    objetivos: [
      ['Biodiversidad', 'Las abejas son indicadoras de ambientes saludables y contribuyen a la polinización de especies nativas del bosque patagónico.'],
      ['Comunidad y territorio', 'Fortalecemos lazos con la Comunidad Mapuche Tambo Báez a través del trabajo colectivo en el territorio.'],
      ['Nuestra cosecha', 'El primer ingreso productivo propio: 23 kg de miel en 2026. Una fuente de ingresos sustentable para las socias.'],
      ['Educación ambiental', 'Aprender a interpretar el clima y revalorizar el vínculo entre las personas y la naturaleza patagónica.'],
    ],
    estadoEyebrow: 'Dónde estamos', estadoTitle: 'Estado actual',
    timeline: [
      { dot: 'done', h: 'Formación en apicultura', p: 'Capacitación de las integrantes en manejo de colmenas y prácticas agroecológicas.', y: '2024' },
      { dot: 'done', h: 'Instalación de 5 colmenas', p: 'Adquisición y mantenimiento en el territorio de la Comunidad Mapuche Tambo Báez.', y: '2024' },
      { dot: 'done', h: 'Primera cosecha: 23 kg', p: 'Primer ingreso productivo propio de la cooperativa.', y: '2026' },
      { dot: 'pending', h: 'Comercialización regional', p: 'Ampliar la distribución de la miel Amapolas a mercados locales y regionales.', y: 'A definir' },
    ] as Tl[],
  },
  plantas: {
    tag: 'Proyecto agroecológico · Soberanía alimentaria', title: 'Plantas Nativas',
    eyebrow: 'Narrativa de impacto',
    h2: ['Raíces patagónicas,', 'diversidad que florece'],
    prose: [
      'Trabajar con especies nativas patagónicas significa recuperar la relación de las personas con el ecosistema que habitan, sin depender de semillas comerciales ni de cadenas externas de distribución.',
      'En este camino se recuperan y desarrollan saberes agroecológicos vinculados al <strong>compostaje, la recolección y conservación de semillas, la reproducción por esquejes</strong> y el reconocimiento de especies nativas según las características de cada territorio.',
    ],
    ods: [
      ['ODS 15 — Vida de ecosistemas terrestres', 'La <strong>reproducción de especies nativas patagónicas</strong> protege activamente la biodiversidad del ecosistema andino y reduce la dependencia de especies exóticas.', ''],
      ['ODS 12 — Producción responsable', 'Técnicas de reproducción vegetativa sin agroquímicos. <strong>Compostaje como práctica de economía circular</strong> y reducción de residuos orgánicos.', 'rojo'],
    ],
    datos: [
      ['Estado', 'Activo — en desarrollo', 'estado'],
      ['2025', 'Capacitación de asociadas en compostaje y reproducción por esquejes'],
      ['2026', 'Obtención de fondos a través de ONU Mujeres para el desarrollo del proyecto "Nativas Activas": capacitación en reproducción de plantas nativas'],
      ['Técnica principal', 'Reproducción por esquejes · Compostaje · Semillero nativo'],
    ] as Dato[],
    galeriaTitle: 'Imágenes del proyecto',
    galeria: ['Plantas nativas', 'Reproducción por esquejes', 'Taller de compostaje'],
    resEyebrow: 'Lo que logramos', resTitle: 'Primeros resultados',
    resultados: [
      ['Formación inicial', 'Capacitación en tipos de plantas acordes a los distintos territorios patagónicos y sus características ecológicas.'],
      ['Técnicas de compostaje', 'Formación en distintos tipos de compostaje como práctica de soberanía alimentaria y reducción de residuos orgánicos.'],
      ['Reproducción por esquejes', 'Primeras reproducciones exitosas de especies nativas patagónicas sin depender de semillas comerciales.'],
    ],
    aliEyebrow: 'Con quiénes trabajamos', aliTitle: 'Organizaciones aliadas',
    aliadas: [
      ['Vivero de Plantas Nativas — Parques Nacionales', 'Vínculo técnico para el trabajo con especies nativas patagónicas y buenas prácticas de reproducción vegetal.'],
      ['Circuito Verde Bariloche', 'Organización local que trabaja en la promoción de prácticas sustentables y economía circular en la ciudad.'],
      ['Jóvenes por Bariloche', 'Organización juvenil local con trabajo en territorio y cuidado ambiental con quienes construimos vínculo activo.'],
    ],
    estadoEyebrow: 'Dónde estamos', estadoTitle: 'Estado actual',
    estado: ['"Nativas Activas", programa financiado por ONU Mujeres, dictado por UTT Patagonia y Cooperativa Amapolas.', 'Capacitación en producción de plantas nativas con perspectiva de género e interculturalidad dirigida a mujeres y disidencias de la Patagonia.'],
  },
  hongos: {
    tag: 'Proyecto agroecológico · Economía regenerativa · Potencia en escala', title: 'Hongos Comestibles',
    eyebrow: 'Alimento con identidad',
    h2: ['Del bosque a la mesa,', 'saberes del territorio'],
    prose: [
      'El cultivo de gírgolas en territorio de la Comunidad Mapuche Tambo Báez nace del encuentro entre el aprendizaje, el cuidado de la tierra y el trabajo comunitario. Las gírgolas fueron elegidas por su <strong>adaptabilidad al clima patagónico</strong> y por las posibilidades que ofrece su cultivo en este territorio.',
      'La construcción de un espacio adecuado para el cultivo y la instalación de un sistema de riego automático forman parte de este proceso de aprendizaje y fortalecimiento.',
    ],
    ods: [
      ['ODS 12 — Producción y consumo responsables', 'Cultivo <strong>sin agroquímicos</strong>. Economía regenerativa integrada al ecosistema del bosque andino.'],
      ['ODS 3 — Salud y bienestar', 'La producción de gírgolas sin agroquímicos y el trabajo colectivo contribuyen al <strong>fortalecimiento de lazos sociales y a una mejor alimentación</strong>.'],
    ],
    datos: [
      ['Estado', 'Activo — 2ª etapa', 'estado'],
      ['Nota sobre cosechas', 'Las cosechas iniciales fueron pequeñas. Se está analizando y mejorando en 2ª inoculación.', 'atencion'],
      ['Especie', 'Gírgolas (Pleurotus ostreatus)'],
      ['Infraestructura', 'Cobertizo + riego automático instalado'],
      ['Apoyo técnico', 'CIEFAP · Parques y Jardines Municipio Bariloche'],
      ['Financiamiento', 'Fondo Mujeres del Sur — 2° y 3° ciclo'],
    ] as Dato[],
    galeriaTitle: 'Imágenes del cultivo',
    galeria: ['Cobertizo en Tambo Báez', 'Cultivo de gírgolas', 'Proceso de inoculación'],
    regenEyebrow: 'Experiencias que abren camino',
    regenTitle: ['Un proyecto que puede', 'crecer y multiplicarse'],
    regen: [
      'El cultivo de gírgolas abre la posibilidad de ampliar la producción, fortalecer el vínculo con el territorio y generar nuevos aprendizajes que puedan ser compartidos y adaptados a otros espacios.',
      'Lo que hoy comienza como una experiencia concreta puede convertirse en un <strong>modelo replicable de producción sustentable</strong>: una forma de producir alimentos, fortalecer comunidades y cuidar los ecosistemas al mismo tiempo.',
    ],
    procEyebrow: 'Cómo lo hacemos', procTitle: 'El proceso de cultivo',
    proceso: [
      ['Etapa 01', 'Preparación del sustrato', 'Preparación de troncos y sustratos aptos para la inoculación de micelio de gírgolas según las características del bosque andino.'],
      ['Etapa 02', 'Inoculación', 'Siembra del micelio en los sustratos. El cobertizo cuenta con sistema de riego automático para mantener condiciones óptimas de humedad.'],
      ['Etapa 03', 'Cosecha y mejoras', 'Las cosechas iniciales fueron pequeñas. La segunda inoculación de troncos está en curso con ajustes técnicos apoyados por CIEFAP.'],
    ],
    terEyebrow: 'Territorio e interculturalidad', terTitle: ['Un proyecto arraigado', 'en Tambo Báez'],
    terDesc: 'El cobertizo donde se desarrolla el cultivo fue construido en el territorio de la Comunidad Mapuche Tambo Báez, fortaleciendo el vínculo intercultural entre la cooperativa y la comunidad. No es una decisión logística: es política.',
    terCards: [
      ['Comunidad Mapuche Tambo Báez', 'A través de su referente Mirta, la comunidad cedió el espacio para el cobertizo. El proyecto también alberga el apiario colectivo.'],
      ['CIEFAP', 'Centro de Investigación y Extensión Forestal Andino Patagónico. Acompañamiento técnico para el cultivo de gírgolas en el ecosistema patagónico.'],
      ['Dirección de Parques y Jardines — Municipio Bariloche', 'Apoyo técnico municipal para el desarrollo del proyecto y la capacitación de las integrantes.'],
    ],
    estadoEyebrow: 'Dónde estamos', estadoTitle: 'Estado actual',
    timeline: [
      { dot: 'done', h: 'Construcción del cobertizo', p: 'Construcción de un espacio apto para el cultivo en el territorio de Tambo Báez.', y: '2024' },
      { dot: 'done', h: 'Sistema de riego automático', p: 'Instalación de infraestructura para mantener condiciones óptimas de humedad.', y: '2024' },
      { dot: 'done', h: 'Primera inoculación y cosechas iniciales', p: 'Primera etapa realizada. Cosechas pequeñas — se está analizando la situación y posibles mejoras.', y: '2024 — 2025' },
      { dot: 'active', h: 'Segunda etapa de inoculación', p: 'En curso con incorporación de nuevos sustratos y ajuste de condiciones en base a la primera etapa.', y: '2025 — en curso' },
      { dot: 'pending', h: 'Escalado de la producción', p: 'Una vez consolidadas las mejoras, ampliar la producción y explorar canales de comercialización regional.', y: 'A definir' },
    ] as Tl[],
  },
  donar: {
    eyebrow: 'Apoyá los proyectos',
    title: ['Tres proyectos,', 'una misma raíz'],
    body: 'Tres experiencias que articulan tierra, biodiversidad, aprendizaje y comunidad.',
    cta: 'Donar ahora →',
  },
};

const en: typeof es = {
  meta: {
    title: 'Agroecological projects · Beekeeping, native plants and mushrooms · Amapolas',
    description: 'A collective apiary, native plant production (Nativas Activas) and agrochemical-free edible mushroom cultivation: the agroecological projects of Amapolas in Bariloche, Argentina.',
    crumb: 'Agroecological projects',
  },
  hero: {
    home: 'Home', parent: 'Projects', here: 'Agroecological projects',
    title: ['Producing in harmony', 'with the land'],
    subtitle: 'Three initiatives that change the way we produce: no agrochemicals, caring for nature, strengthening communities and fostering local development.',
    missing: 'Image pending: /proyectos/productivos_hero.jpg',
  },
  zoom: 'Enlarge', clickNote: 'Click to enlarge', pending: 'photo pending', close: 'Close', prev: 'Previous', next: 'Next',
  api: {
    tag: 'Agroecological project · Regenerative economy', title: 'Collective Apiary',
    eyebrow: 'An experience on the land',
    h2: ['Patagonian honey,', 'cultivated biodiversity'],
    prose: [
      'Twenty-three kilos of honey in the first harvest. A small number with an enormous meaning.',
      'The apiary is hosted on the land of a Mapuche community through an alliance in which each party contributes: the community provides the space and the bond with the territory; Amapolas, the work, training and management. Meanwhile, the bees <strong>pollinate the Patagonian forest</strong> and help strengthen its native biodiversity.',
      'Every jar of Amapolas honey is produced without agrochemicals, with agroecological management and respect for natural cycles. <strong>A way of producing that accompanies and protects the life of the forest.</strong>',
    ],
    ods: [
      ['SDG 12 — Responsible consumption and production', 'Beekeeping <strong>without agrochemicals</strong>, with agroecological management and respect for the cycles of the Andean-Patagonian ecosystem.'],
      ['SDG 15 — Life on land', 'The apiary on Mapuche land <strong>strengthens the pollination of native species</strong> of the Patagonian forest and protects local biodiversity.'],
    ],
    datos: [
      ['Status', 'Active', 'estado'],
      ['Species', 'Apis mellifera — artisanal Patagonian honey'],
      ['Territory', 'Tambo Báez Mapuche Community, Bariloche'],
      ['Funding', 'Fondo Mujeres del Sur — 3 consecutive cycles'],
    ],
    galeriaTitle: 'Apiary images',
    galeria: ['Collective Apiary', 'Hives in the forest', 'Working with the hives'],
    objEyebrow: 'Why we do it', objTitle: 'More than producing honey',
    objetivos: [
      ['Biodiversity', 'Bees are indicators of healthy environments and help pollinate native species of the Patagonian forest.'],
      ['Community and territory', 'We strengthen ties with the Tambo Báez Mapuche Community through collective work on the land.'],
      ['Our harvest', 'Our first income from our own production: 23 kg of honey in 2026. A sustainable source of income for members.'],
      ['Environmental education', 'Learning to read the weather and renewing the bond between people and Patagonian nature.'],
    ],
    estadoEyebrow: 'Where we are', estadoTitle: 'Current status',
    timeline: [
      { dot: 'done', h: 'Beekeeping training', p: 'Training members in hive management and agroecological practices.', y: '2024' },
      { dot: 'done', h: 'Five hives installed', p: 'Purchase and upkeep on the land of the Tambo Báez Mapuche Community.', y: '2024' },
      { dot: 'done', h: 'First harvest: 23 kg', p: 'The cooperative’s first income from its own production.', y: '2026' },
      { dot: 'pending', h: 'Regional sales', p: 'Expanding distribution of Amapolas honey to local and regional markets.', y: 'To be defined' },
    ],
  },
  plantas: {
    tag: 'Agroecological project · Food sovereignty', title: 'Native Plants',
    eyebrow: 'Impact story',
    h2: ['Patagonian roots,', 'diversity in bloom'],
    prose: [
      'Working with native Patagonian species means restoring people’s relationship with the ecosystem they inhabit, without depending on commercial seeds or outside distribution chains.',
      'Along the way we recover and develop agroecological knowledge around <strong>composting, seed collection and conservation, propagation from cuttings</strong> and identifying native species according to each territory’s characteristics.',
    ],
    ods: [
      ['SDG 15 — Life on land', '<strong>Propagating native Patagonian species</strong> actively protects the biodiversity of the Andean ecosystem and reduces dependence on exotic species.', ''],
      ['SDG 12 — Responsible production', 'Vegetative propagation without agrochemicals. <strong>Composting as a circular economy practice</strong> that reduces organic waste.', 'rojo'],
    ],
    datos: [
      ['Status', 'Active — in development', 'estado'],
      ['2025', 'Members trained in composting and propagation from cuttings'],
      ['2026', 'Funding obtained from UN Women to develop the "Nativas Activas" project: training in native plant propagation'],
      ['Main technique', 'Propagation from cuttings · Composting · Native seed bank'],
    ],
    galeriaTitle: 'Project images',
    galeria: ['Native plants', 'Propagation from cuttings', 'Composting workshop'],
    resEyebrow: 'What we have achieved', resTitle: 'First results',
    resultados: [
      ['Initial training', 'Training on plant types suited to different Patagonian territories and their ecological characteristics.'],
      ['Composting techniques', 'Training in different composting methods as a food sovereignty practice that reduces organic waste.'],
      ['Propagation from cuttings', 'First successful propagation of native Patagonian species without relying on commercial seeds.'],
    ],
    aliEyebrow: 'Who we work with', aliTitle: 'Partner organizations',
    aliadas: [
      ['Native Plant Nursery — National Parks', 'Technical ties for working with native Patagonian species and good plant propagation practices.'],
      ['Circuito Verde Bariloche', 'A local organization promoting sustainable practices and the circular economy in the city.'],
      ['Jóvenes por Bariloche', 'A local youth organization working on the ground and on environmental care, with whom we have an active relationship.'],
    ],
    estadoEyebrow: 'Where we are', estadoTitle: 'Current status',
    estado: ['"Nativas Activas", a program funded by UN Women and taught by UTT Patagonia and the Amapolas Cooperative.', 'Training in native plant production with a gender and intercultural perspective for women and gender-diverse people in Patagonia.'],
  },
  hongos: {
    tag: 'Agroecological project · Regenerative economy · Potential to scale', title: 'Edible Mushrooms',
    eyebrow: 'Food with identity',
    h2: ['From forest to table,', 'knowledge of the land'],
    prose: [
      'Oyster mushroom cultivation on the land of the Tambo Báez Mapuche Community was born from the meeting of learning, care for the land and community work. Oyster mushrooms were chosen for their <strong>adaptability to the Patagonian climate</strong> and for the possibilities their cultivation offers in this territory.',
      'Building a suitable growing space and installing an automatic irrigation system are part of this process of learning and strengthening.',
    ],
    ods: [
      ['SDG 12 — Responsible consumption and production', 'Cultivation <strong>without agrochemicals</strong>. A regenerative economy integrated into the Andean forest ecosystem.'],
      ['SDG 3 — Good health and well-being', 'Agrochemical-free oyster mushroom production and collective work contribute to <strong>stronger social ties and better nutrition</strong>.'],
    ],
    datos: [
      ['Status', 'Active — 2nd stage', 'estado'],
      ['Note on harvests', 'Initial harvests were small. We are analyzing and improving in the 2nd inoculation.', 'atencion'],
      ['Species', 'Oyster mushroom (Pleurotus ostreatus)'],
      ['Infrastructure', 'Shed + automatic irrigation installed'],
      ['Technical support', 'CIEFAP · Bariloche Municipal Parks and Gardens'],
      ['Funding', 'Fondo Mujeres del Sur — 2nd and 3rd cycles'],
    ],
    galeriaTitle: 'Cultivation images',
    galeria: ['Shed at Tambo Báez', 'Oyster mushroom cultivation', 'Inoculation process'],
    regenEyebrow: 'Experiences that open the way',
    regenTitle: ['A project that can', 'grow and multiply'],
    regen: [
      'Oyster mushroom cultivation opens the possibility of expanding production, strengthening our bond with the territory and generating new knowledge that can be shared and adapted to other places.',
      'What begins today as a concrete experience can become a <strong>replicable model of sustainable production</strong>: a way to produce food, strengthen communities and care for ecosystems at the same time.',
    ],
    procEyebrow: 'How we do it', procTitle: 'The growing process',
    proceso: [
      ['Stage 01', 'Substrate preparation', 'Preparing logs and substrates suitable for inoculation with oyster mushroom mycelium, according to the characteristics of the Andean forest.'],
      ['Stage 02', 'Inoculation', 'Seeding the mycelium into the substrates. The shed has an automatic irrigation system to keep humidity at optimal levels.'],
      ['Stage 03', 'Harvest and improvements', 'Initial harvests were small. The second log inoculation is underway with technical adjustments supported by CIEFAP.'],
    ],
    terEyebrow: 'Territory and interculturality', terTitle: ['A project rooted', 'in Tambo Báez'],
    terDesc: 'The shed where cultivation takes place was built on the land of the Tambo Báez Mapuche Community, strengthening the intercultural bond between the cooperative and the community. It is not a logistical decision: it is a political one.',
    terCards: [
      ['Tambo Báez Mapuche Community', 'Through its leader Mirta, the community provided the space for the shed. The site also hosts the collective apiary.'],
      ['CIEFAP', 'Andean Patagonian Forest Research and Extension Center. Technical support for oyster mushroom cultivation in the Patagonian ecosystem.'],
      ['Parks and Gardens Department — Bariloche Municipality', 'Municipal technical support for the project and for training members.'],
    ],
    estadoEyebrow: 'Where we are', estadoTitle: 'Current status',
    timeline: [
      { dot: 'done', h: 'Building the shed', p: 'Building a space suitable for cultivation on Tambo Báez land.', y: '2024' },
      { dot: 'done', h: 'Automatic irrigation system', p: 'Installing infrastructure to keep humidity at optimal levels.', y: '2024' },
      { dot: 'done', h: 'First inoculation and initial harvests', p: 'First stage completed. Small harvests — we are analyzing the situation and possible improvements.', y: '2024 — 2025' },
      { dot: 'active', h: 'Second inoculation stage', p: 'Underway with new substrates and conditions adjusted based on the first stage.', y: '2025 — ongoing' },
      { dot: 'pending', h: 'Scaling up production', p: 'Once improvements are consolidated, expand production and explore regional sales channels.', y: 'To be defined' },
    ],
  },
  donar: {
    eyebrow: 'Support the projects',
    title: ['Three projects,', 'one root'],
    body: 'Three experiences that bring together land, biodiversity, learning and community.',
    cta: 'Donate now →',
  },
};

export const productivos = { es, en };
