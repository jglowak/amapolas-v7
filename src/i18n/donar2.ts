// Textos de /donar2 (propuesta de rediseño de /donar, de una columna y orientada a conversión).
// Los datos salen del documento de correcciones y de /nosotras; no se agregan cifras nuevas.
export const donar2 = {
  es: {
    meta: {
      title: 'Doná para comprar la tierra de Amapolas · Barrio cooperativo en Bariloche',
      description: 'Ayudanos a comprar el terreno donde mujeres y disidencias vamos a construir un barrio cooperativo en Bariloche. Doná desde Argentina con Mercado Pago o desde cualquier país con Donorbox.',
      crumb: 'Donar',
    },
    hero: {
      eyebrow: 'Campaña · Tierra para Amapolas',
      title: ['Ayudanos a comprar', 'la tierra', 'donde vamos a construir nuestro barrio'],
      body: 'Somos una cooperativa de mujeres y disidencias de Bariloche. Ya tenemos el proyecto, la organización y la comunidad. Nos falta el primer gran paso: el terreno.',
      cta: 'Quiero donar',
      trust: 'Cooperativa con Matrícula Nacional INAES N°63884 · Bariloche, Río Negro',
      photo: 'Producción de plantas nativas de la cooperativa',
    },
    porque: {
      eyebrow: 'Por qué la tierra',
      title: 'Sin tierra no hay barrio',
      body: [
        'Amapolas es un barrio cooperativo de viviendas diseñado y gestionado por mujeres y disidencias, con un apiario, cultivo de hongos, producción de plantas nativas y un espacio de formación en agroecología.',
        'Todo eso necesita un lugar donde crecer. Tu aporte se suma a un fondo colectivo destinado, en esta etapa, a la adquisición del terreno.',
      ],
      quote: 'Destinar el 75% del salario a un alquiler nos empobrece y no nos deja proyectar.',
      quoteAttr: 'Por qué existe Amapolas',
    },
    impacto: {
      eyebrow: 'Tu aporte',
      title: 'Cada aporte nos acerca al terreno',
      items: [
        ['USD 35', 'Un aporte para sumar a nuestro fondo colectivo.'],
        ['USD 100', 'Un aporte para acercarnos a nuestro territorio.'],
        ['USD 500', 'Un aporte para hacer posible el primer paso de Amapolas.'],
      ],
    },
    form: {
      eyebrow: 'Doná ahora',
      title: 'Elegí cómo aportar',
      tabs: { mp: ['Desde Argentina', 'Mercado Pago · ARS'], db: ['Desde otro país', 'Donorbox · USD · tarjeta o PayPal'] },
      freq: { once: 'Una vez', monthly: 'Todos los meses' },
      monthlyHint: 'Los aportes mensuales sostienen la campaña en el tiempo.',
      perMonth: '/mes',
      other: 'Otro monto',
      cta: (amount: string, monthly: boolean) => `Donar ${amount}${monthly ? ' por mes' : ''} con Mercado Pago`,
      ctaOther: 'Elegir otro monto en Mercado Pago',
      mpNote: 'Te llevamos a Mercado Pago para completar el pago de forma segura.',
      dbNote: 'Pago seguro a través de Donorbox, plataforma internacional de donaciones.',
    },
    confianza: {
      eyebrow: 'Por qué confiar',
      title: 'Una cooperativa real, con cuentas claras',
      items: [
        ['Formalmente constituida', 'Cooperativa de Vivienda Amapolas Ltda., Matrícula Nacional INAES N°63884, desde 2022.'],
        ['Cuentas aprobadas', 'Celebramos asambleas ordinarias donde se presentan y aprueban los balances y se eligen autoridades.'],
        ['Respaldo internacional', 'Recibimos tres ciclos consecutivos de financiamiento internacional (2023, 2024 y 2025).'],
        ['En red', 'Integramos la Coalición Internacional para el Hábitat (HIC-AL) y la red latinoamericana TEC IN HAB.'],
      ],
      balance: 'Pedir balance e información financiera',
      balanceSubject: 'Solicitud de balance e información financiera',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      items: [
        ['¿A dónde va mi aporte?', 'A un fondo colectivo destinado, en esta etapa, prioritariamente a la compra del terreno donde se va a construir el barrio.'],
        ['¿Puedo donar desde fuera de Argentina?', 'Sí. Desde cualquier país podés donar en dólares con Donorbox, con tarjeta o PayPal. Desde Argentina, en pesos con Mercado Pago.'],
        ['¿Puedo aportar todos los meses?', 'Sí. En las dos opciones podés elegir un aporte mensual, y cancelarlo cuando quieras desde la plataforma.'],
        ['¿Es seguro?', 'Los pagos los procesan Donorbox y Mercado Pago. Nosotras no vemos ni guardamos los datos de tu tarjeta.'],
        ['¿Hay otras formas de ayudar?', 'Sí: alianzas institucionales, sponsors y difusión. Conocé todas en la página Comunidad.'],
      ],
    },
    final: {
      title: 'La tierra es el primer paso. Dalo con nosotras.',
      cta: 'Donar ahora',
      other: 'Otras formas de colaborar →',
    },
    sticky: 'Donar para comprar la tierra',
  },
  en: {
    meta: {
      title: 'Donate to buy the land for Amapolas · Cooperative neighborhood in Bariloche',
      description: 'Help us buy the land where women and gender-diverse people will build a cooperative neighborhood in Bariloche, Argentina. Donate from any country with Donorbox or from Argentina with Mercado Pago.',
      crumb: 'Donate',
    },
    hero: {
      eyebrow: 'Campaign · Land for Amapolas',
      title: ['Help us buy', 'the land', 'where we will build our neighborhood'],
      body: 'We are a cooperative of women and gender-diverse people in Bariloche, Argentina. We already have the project, the organization and the community. What we need now is the first big step: the land.',
      cta: 'I want to donate',
      trust: 'Cooperative registered with INAES (No. 63884) · Bariloche, Río Negro, Argentina',
      photo: 'Native plant production by the cooperative',
    },
    porque: {
      eyebrow: 'Why the land',
      title: 'No land, no neighborhood',
      body: [
        'Amapolas is a cooperative housing neighborhood designed and run by women and gender-diverse people, with an apiary, mushroom cultivation, native plant production and an agroecology training space.',
        'All of this needs a place to grow. Your gift joins a collective fund that, at this stage, goes toward acquiring the land.',
      ],
      quote: 'Spending 75% of our income on rent impoverishes us and keeps us from planning ahead.',
      quoteAttr: 'Why Amapolas exists',
    },
    impacto: {
      eyebrow: 'Your gift',
      title: 'Every gift brings us closer to the land',
      items: [
        ['USD 35', 'A gift that adds to our collective fund.'],
        ['USD 100', 'A gift that brings us closer to our land.'],
        ['USD 500', 'A gift that makes the first step of Amapolas possible.'],
      ],
    },
    form: {
      eyebrow: 'Donate now',
      title: 'Choose how to give',
      tabs: { mp: ['From Argentina', 'Mercado Pago · ARS'], db: ['From another country', 'Donorbox · USD · card or PayPal'] },
      freq: { once: 'One time', monthly: 'Monthly' },
      monthlyHint: 'Monthly gifts keep the campaign going over time.',
      perMonth: '/mo',
      other: 'Other amount',
      cta: (amount: string, monthly: boolean) => `Donate ${amount}${monthly ? ' per month' : ''} with Mercado Pago`,
      ctaOther: 'Choose another amount on Mercado Pago',
      mpNote: 'You will be taken to Mercado Pago to complete your payment securely.',
      dbNote: 'Secure payment through Donorbox, an international donation platform.',
    },
    confianza: {
      eyebrow: 'Why trust us',
      title: 'A real cooperative with clear accounts',
      items: [
        ['Formally registered', 'Cooperativa de Vivienda Amapolas Ltda., INAES registration No. 63884, since 2022.'],
        ['Approved accounts', 'We hold ordinary general assemblies where financial statements are presented and approved and officers are elected.'],
        ['International support', 'We have received three consecutive cycles of international funding (2023, 2024 and 2025).'],
        ['Part of networks', 'We are members of Habitat International Coalition (HIC-AL) and the Latin American TEC IN HAB network.'],
      ],
      balance: 'Request financial statements',
      balanceSubject: 'Request for financial statements',
    },
    faq: {
      eyebrow: 'FAQ',
      items: [
        ['Where does my gift go?', 'To a collective fund that, at this stage, goes primarily toward buying the land where the neighborhood will be built.'],
        ['Can I donate from outside Argentina?', 'Yes. From any country you can give in US dollars through Donorbox, by card or PayPal. From Argentina, in pesos through Mercado Pago.'],
        ['Can I give every month?', 'Yes. Both options let you choose a monthly gift, which you can cancel anytime from the platform.'],
        ['Is it secure?', 'Payments are processed by Donorbox and Mercado Pago. We never see or store your card details.'],
        ['Are there other ways to help?', 'Yes: institutional partnerships, sponsorships and spreading the word. See them all on our Community page.'],
      ],
    },
    final: {
      title: 'The land is the first step. Take it with us.',
      cta: 'Donate now',
      other: 'Other ways to get involved →',
    },
    sticky: 'Donate to buy the land',
  },
};
