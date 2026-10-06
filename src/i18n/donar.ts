// Textos de /donar y del cuadro de donación completo. ES: docs/correcciones.md; EN: borrador.
// Mercado Pago: los montos en pesos los define la cooperativa (no se inventan acá).
export const donar = {
  es: {
    meta: {
      title: 'Doná a Amapolas · Ayudanos a comprar el terreno del barrio',
      description: 'Doná a la Cooperativa de Vivienda Amapolas (INAES N°63884): aportes únicos o mensuales por Donorbox desde cualquier país o por Mercado Pago desde Argentina, para adquirir el terreno del barrio.',
      crumb: 'Donar',
    },
    hero: {
      eyebrow: 'Donaciones · Matrícula INAES N°63884',
      title: 'Ayudanos a comprar el terreno',
      body: 'Elegí cómo aportar: desde cualquier país con Donorbox o desde Argentina con Mercado Pago. Aportes únicos o mensuales.',
    },
    left: {
      eyebrow: 'Tu aporte importa',
      title: ['Nuestro barrio', 'necesita su tierra'],
      body: [
        'Estamos construyendo Amapolas: un barrio cooperativo de viviendas diseñado y gestionado por mujeres y disidencias. Un apiario, cultivo de hongos, producción de plantas nativas para reforestación y una escuela de agroecología con perspectiva de género e interculturalidad. Para hacerlo realidad, necesitamos dar el primer gran paso: adquirir el terreno donde el proyecto podrá crecer.',
        'Tu aporte se suma a un fondo colectivo destinado a alcanzar ese objetivo y hacer posible un espacio que integre vivienda, comunidad, agroecología y cuidado del territorio.',
      ],
      impacts: [
        ['USD 35', 'Un aporte para sumar a nuestro fondo colectivo.'],
        ['USD 100', 'Un aporte para acercarnos a nuestro territorio.'],
        ['USD 500', 'Un aporte para hacer posible el primer paso de Amapolas.'],
      ],
      closing: 'Cada aporte cuenta. Cada aporte nos acerca al territorio que hará posible nuestro barrio.',
    },
    box: {
      label: 'Ayudanos a comprar el terreno',
      intro: 'Podés realizar tu aporte de forma segura a través de Donorbox, una plataforma internacional de donaciones, o a través de Mercado Pago, si te encontrás en Argentina. En esta etapa, los fondos recaudados estarán destinados prioritariamente a la adquisición del terreno donde se desarrollará Amapolas.',
      tabs: { donorbox: ['Donación internacional', 'Donorbox · USD'], mp: ['Desde Argentina', 'Mercado Pago · ARS'] },
      once: [
        { a: 35, t: 'Sumás al fondo colectivo.' },
        { a: 100, t: 'Nos acercás a nuestro territorio.', featured: true },
        { a: 500, t: 'Fortalecés el fondo para la adquisición del terreno.' },
        { a: 200, t: 'Impulsás el primer gran paso de Amapolas.' },
      ],
      otro: 'Elegí el monto que quieras aportar →',
      monthlyLabel: 'También podés colaborar todos los meses',
      monthlyIntro: 'Los aportes recurrentes nos permiten sostener una campaña de largo plazo y avanzar de manera colectiva hacia la adquisición del terreno.',
      monthly: [
        { a: 35, t: 'Un aporte sostenido al fondo colectivo.' },
        { a: 100, t: 'Una contribución mensual para acercarnos al objetivo.' },
      ],
      perMonth: 'por mes',
      otroMensual: 'Elegí el monto que quieras aportar mensualmente →',
      secureDonorbox: 'Donaciones seguras y trazables a través de Donorbox · Matrícula INAES N°63884',
      mpIntro: 'Si te encontrás en Argentina, podés aportar en pesos a través de Mercado Pago, con un aporte único o mensual.',
      mpOnce: 'Aporte único con Mercado Pago →',
      mpMonthly: 'Aporte mensual con Mercado Pago →',
      secureMp: 'Pagos seguros a través de Mercado Pago · Matrícula INAES N°63884',
    },
    otras: { text: '¿Querés acompañar de otra forma?', link: 'Conocé otras formas de colaborar →' },
  },
  en: {
    meta: {
      title: 'Donate to Amapolas · Help us buy the land for our neighborhood',
      description: 'Donate to the Amapolas Housing Cooperative (INAES No. 63884): one-time or monthly gifts via Donorbox from any country, or via Mercado Pago from Argentina, to acquire the land for the neighborhood.',
      crumb: 'Donate',
    },
    hero: {
      eyebrow: 'Donations · INAES Registration No. 63884',
      title: 'Help us buy the land',
      body: 'Choose how to give: from any country with Donorbox or from Argentina with Mercado Pago. One-time or monthly gifts.',
    },
    left: {
      eyebrow: 'Your support matters',
      title: ['Our neighborhood', 'needs its land'],
      body: [
        'We are building Amapolas: a cooperative housing neighborhood designed and run by women and gender-diverse people. An apiary, mushroom cultivation, native plant production for reforestation and an agroecology school with a gender and intercultural perspective. To make it real, we need to take the first big step: acquiring the land where the project can grow.',
        'Your contribution joins a collective fund dedicated to reaching that goal and making possible a space that brings together housing, community, agroecology and care for the territory.',
      ],
      impacts: [
        ['USD 35', 'A contribution to our collective fund.'],
        ['USD 100', 'A contribution that brings us closer to our land.'],
        ['USD 500', 'A contribution that makes Amapolas’ first step possible.'],
      ],
      closing: 'Every contribution counts. Every contribution brings us closer to the land that will make our neighborhood possible.',
    },
    box: {
      label: 'Help us buy the land',
      intro: 'You can give securely through Donorbox, an international donation platform, or through Mercado Pago if you are in Argentina. At this stage, funds raised will go primarily toward acquiring the land where Amapolas will be built.',
      tabs: { donorbox: ['International donation', 'Donorbox · USD'], mp: ['From Argentina', 'Mercado Pago · ARS'] },
      once: [
        { a: 35, t: 'You add to the collective fund.' },
        { a: 100, t: 'You bring us closer to our land.', featured: true },
        { a: 500, t: 'You strengthen the fund to acquire the land.' },
        { a: 200, t: 'You drive Amapolas’ first big step.' },
      ],
      otro: 'Choose the amount you want to give →',
      monthlyLabel: 'You can also give every month',
      monthlyIntro: 'Recurring gifts let us sustain a long-term campaign and move together toward acquiring the land.',
      monthly: [
        { a: 35, t: 'A steady contribution to the collective fund.' },
        { a: 100, t: 'A monthly contribution toward the goal.' },
      ],
      perMonth: 'per month',
      otroMensual: 'Choose your monthly amount →',
      secureDonorbox: 'Secure, traceable donations through Donorbox · INAES Registration No. 63884',
      mpIntro: 'If you are in Argentina, you can give in pesos through Mercado Pago, as a one-time or monthly contribution.',
      mpOnce: 'One-time gift with Mercado Pago →',
      mpMonthly: 'Monthly gift with Mercado Pago →',
      secureMp: 'Secure payments through Mercado Pago · INAES Registration No. 63884',
    },
    otras: { text: 'Want to support us in another way?', link: 'See other ways to get involved →' },
  },
} as const;
