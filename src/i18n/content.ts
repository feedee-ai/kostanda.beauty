export type Lang = 'es' | 'ru';

export const CONTACT = {
  phoneDisplay: '+34 622 65 02 02',
  phoneHref: 'tel:+34622650202',
  whatsapp: 'https://wa.me/34622650202',
  instagram: 'https://www.instagram.com/kostanda.beauty/',
  instagramHandle: '@kostanda.beauty',
  street: 'C/ de Guillem de Castro, 8',
  district: 'Ciutat Vella, 46001 València',
  maps: 'https://www.google.com/maps/search/?api=1&query=Kostanda+Beauty+C%2F+de+Guillem+de+Castro+8+Valencia',
  mapsEmbed:
    'https://www.google.com/maps?q=Kostanda+Beauty,+Carrer+de+Guillem+de+Castro+8,+46001+Val%C3%A8ncia&output=embed',
  registry: '45856',
};

export const waLink = (text: string) => `${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

type Item = { name: string; note: string };
type Category = { id: string; title: string; lead: string; items: Item[] };

const es = {
  meta: {
    title: 'Kostanda Beauty — Clínica de medicina estética en Valencia',
    description:
      'Clínica de medicina estética de la Dra. Marina Kostanda en el centro de Valencia: diagnóstico de la piel, IPL Candela, Frax 1550, RF, inyectables y cuidados Biologique Recherche. Atención en español, ruso y ucraniano.',
  },
  nav: [
    { href: '#resultados', label: 'Resultados' },
    { href: '#tratamientos', label: 'Tratamientos' },
    { href: '#doctora', label: 'La doctora' },
    { href: '#ventajas', label: 'Ventajas' },
    { href: '#opiniones', label: 'Opiniones' },
    { href: '#contacto', label: 'Contacto' },
  ],
  book: 'Reservar',
  menu: 'Menú',
  close: 'Cerrar',
  waHello: 'Hola, quiero reservar una consulta en Kostanda Beauty.',
  waOnline: 'Hola, me gustaría una consulta online gratuita.',
  hero: {
    title: ['Tu piel no necesita', 'más tratamientos.'],
    accent: 'Necesita los adecuados.',
    lead:
      'Soy la Dra. Marina Kostanda. En mi clínica del centro de Valencia todo empieza por un diagnóstico: vemos lo que el espejo no enseña y te proponemos solo lo que de verdad va a funcionar.',
    primary: 'Reservar por WhatsApp',
    secondary: 'Consulta online gratuita',
    hint: 'Mueve la lente sobre la foto',
    scanNote: 'Así se ve la piel en el análisis UV · ilustración',
    badgeNum: '1000+',
    badge: 'pacientes nos confiaron su piel',
    caption: 'Dra. Marina Kostanda, fundadora',
  },
  reveal: {
    title: 'Una clínica médica, no un salón de belleza.',
    lead: 'Médicos con título homologado en España, equipos certificados y cosmética profesional que no encontrarás en una tienda.',
    stats: [
      { n: '1000+', l: 'pacientes confiaron su piel a la clínica' },
      { n: '9', l: 'equipos certificados, del escáner Observ 520 al láser Frax 1550' },
      { n: '8', l: 'marcas de cosmética profesional, de Biologique Recherche a iS Clinical' },
    ],
  },
  fears: {
    title: 'Lo que da miedo antes de ir a una clínica estética',
    lead: 'Lo escuchamos cada semana. Te respondo con la misma honestidad que en consulta.',
    sign: 'Dra. Marina Kostanda',
    items: [
      {
        fear: '«Me van a vender tratamientos que no necesito»',
        answer: 'Nunca impongo. Mi trabajo es recomendar con honestidad, y la decisión siempre es tuya. Si algo no te hace falta, te lo digo.',
        proof: { text: 'Лишнего не назначает.', name: 'Kateryna Kharechko' },
      },
      {
        fear: '«Me quedará la cara hinchada y artificial»',
        answer: 'Creo en la belleza natural, sin exceso de rellenos. Si ya tienes ácido hialurónico, primero lo vemos en ecografía y solo después decidimos.',
        proof: { text: 'Губы идеальные и натуральные.', name: 'Maya Linková' },
      },
      {
        fear: '«Me atenderá alguien sin formación médica»',
        answer: 'Aquí trabajan médicos. Homologué mi título y volví a obtener mi número de colegiada en España. La clínica es un centro sanitario registrado (Nº 45856).',
        proof: { text: 'Врачи — профессионалы, всё объясняют детально и понятно.', name: 'Анна Ковтун' },
      },
      {
        fear: '«Va a doler y saldrán moratones»',
        answer: 'Antes de empezar te explico cada paso y elegimos la técnica más cómoda para ti. Esto es lo que cuentan nuestras pacientes:',
        proof: { text: 'Всё прошло совершенно безболезненно.', name: 'Valery Ivanova' },
      },
      {
        fear: '«Gastaré dinero y no veré resultado»',
        answer: 'El resultado empieza en el diagnóstico. Observ 520 y la ecografía muestran lo que pasa en las capas profundas; con eso armamos el protocolo y te acompañamos hasta el final.',
        proof: { text: 'Свое лицо доверяю только Kostanda Beauty уже более 2х лет!', name: 'Darina Derzkaya' },
      },
    ],
  },
  method: {
    title: 'Primero, diagnóstico. Después, un plan. Solo entonces, tratamientos.',
    lead: 'Así cada sesión suma hacia un resultado, en lugar de ser un intento suelto.',
    steps: [
      {
        t: 'Diagnóstico',
        d: 'Analizamos la piel por capas con el escáner Observ 520 y, si hubo rellenos antes, con ecografía facial de alta frecuencia. Vemos lo que el espejo no enseña.',
      },
      {
        t: 'Plan a tu medida',
        d: 'Combinamos aparatología, inyectables y cuidados en un protocolo pensado para tu caso. No existe una única «inyección mágica»: existe una estrategia.',
      },
      {
        t: 'Acompañamiento',
        d: 'Seguimos tu evolución sesión a sesión y te pautamos un cuidado en casa profesional para que el resultado se mantenga.',
      },
    ],
  },
  treatments: {
    title: 'Tratamientos',
    lead: 'Cosmetología médica, aparatología e inyectables bajo un mismo techo. Elige por tratamiento o por lo que te preocupa.',
    concernsLabel: '¿Qué te preocupa?',
    concerns: [
      { label: 'Acné', target: 'cuidados' },
      { label: 'Rojeces y rosácea', target: 'aparatologia' },
      { label: 'Manchas y melasma', target: 'aparatologia' },
      { label: 'Flacidez', target: 'aparatologia' },
      { label: 'Labios', target: 'inyectables' },
      { label: 'Rellenos antiguos', target: 'diagnostico' },
      { label: 'Caída del cabello', target: 'tricologia' },
    ],
    ask: 'Preguntar por este tratamiento',
    categories: [
      {
        id: 'diagnostico',
        title: 'Diagnóstico',
        lead: 'El punto de partida de cualquier tratamiento.',
        items: [
          { name: 'Escáner Observ 520', note: 'Estado real de las capas profundas de la piel, vasos y pigmento' },
          { name: 'Ecografía facial', note: 'Si quedan rellenos, dónde están, a qué profundidad y si se han desplazado' },
          { name: 'Tricoscopia · Trichoscan', note: 'Cabello y cuero cabelludo, para encontrar la causa de la caída' },
          { name: 'Consulta presencial u online', note: 'Plan de tratamiento y de cuidado en casa, por escrito' },
        ],
      },
      {
        id: 'aparatologia',
        title: 'Aparatología',
        lead: 'Tono, firmeza, textura y luminosidad con equipos certificados.',
        items: [
          { name: 'IPL Candela Nordlys', note: 'Rojeces, cuperosis, rosácea y pigmentación' },
          { name: 'Candela Frax 1550', note: 'Láser fraccionado no ablativo: textura, poros, cicatrices de acné y estrías' },
          { name: 'RF lifting · Classys Volnewmer', note: 'Firmeza y contorno con radiofrecuencia' },
          { name: 'Secret RF', note: 'Radiofrecuencia con microagujas para densidad, poros y signos de la edad' },
          { name: 'DermaLux LED', note: 'Calma, regeneración y apoyo a otros protocolos' },
          { name: 'AquaPure', note: 'Limpieza e hidratación profunda en varios pasos' },
        ],
      },
      {
        id: 'cuidados',
        title: 'Cuidados faciales',
        lead: 'Protocolos de cabina con cosmética profesional.',
        items: [
          { name: 'Biologique Recherche', note: 'Tratamientos a medida, como Biosensible o Lait VIP O2' },
          { name: 'Peelings', note: 'BioRePeel y peelings químicos para piel apagada, acné o tono irregular' },
          { name: 'iS Clinical Fire & Ice', note: 'Renovación intensiva con efecto glow' },
          { name: 'Limpieza facial', note: 'Profunda pero suave con la barrera cutánea' },
          { name: 'Exosomas', note: 'Medicina regenerativa a nivel celular, sola o tras aparatología' },
        ],
      },
      {
        id: 'inyectables',
        title: 'Inyectables',
        lead: 'Naturalidad primero. Restauramos el tejido, no añadimos volumen por añadir.',
        items: [
          { name: 'Labios', note: 'Ácido hialurónico con un resultado natural' },
          { name: 'Armonización facial', note: 'Corrección sutil de proporciones: mentón, línea mandibular, pómulos' },
          { name: 'Toxina botulínica', note: 'Frente, entrecejo y otras zonas de expresión' },
          { name: 'Polinucleótidos y biorrevitalización', note: 'Calidad, hidratación y densidad de la piel' },
          { name: 'Hialuronidasa', note: 'Corrección de rellenos de forma localizada y con control ecográfico' },
          { name: 'Plasma', note: 'Plasmaterapia para piel y cabello' },
        ],
      },
      {
        id: 'tricologia',
        title: 'Tricología',
        lead: 'Caída, pérdida de densidad y salud del cuero cabelludo.',
        items: [
          { name: 'Diagnóstico con Trichoscan', note: 'Identificamos la causa antes de tratar' },
          { name: 'Mesoterapia capilar', note: 'Nutrición directa del folículo' },
          { name: 'Plasmaterapia', note: 'Estimulación con plasma propio' },
          { name: 'Terapia LED', note: 'Apoyo al cuero cabelludo' },
        ],
      },
      {
        id: 'cuerpo',
        title: 'Masajes y cuerpo',
        lead: 'Para relajarte o para trabajar la silueta y la piel del cuerpo.',
        items: [
          { name: 'Masajes', note: 'Relajante, de espalda, general, deportivo y con miel' },
          { name: 'Drenaje linfático', note: 'Y masaje modelador corporal' },
          { name: 'Envolturas', note: 'Vendaje frío y envoltura detox' },
          { name: 'Frax 1550 corporal', note: 'Estrías y textura de la piel tras el embarazo o cambios de peso' },
        ],
      },
    ] as Category[],
  },
  results: {
    title: 'Resultados de nuestras pacientes',
    lead: 'Desliza para comparar. Hemos alineado cada par para que veas solo lo que ha cambiado.',
    before: 'Antes',
    after: 'Después',
    drag: 'Comparar antes y después',
    cases: [
      { id: 'lips', label: 'Labios', note: 'Ácido hialurónico' },
      { id: 'pigment', label: 'Pigmentación', note: 'Manchas y pecas' },
      { id: 'redness', label: 'Rojeces', note: 'Tono y vasos' },
      { id: 'acne', label: 'Acné', note: 'Inflamación activa' },
      { id: 'body', label: 'Abdomen', note: 'Calidad de la piel' },
    ],
    note: 'Fotos de pacientes de Kostanda Beauty. Cada piel responde de forma distinta: el resultado depende del diagnóstico y del protocolo.',
  },
  doctor: {
    title: 'De endocrinóloga en Járkov a su propia clínica en Valencia',
    body: [
      'Marina empezó como endocrinóloga, porque eso era ser «una doctora seria». Pero lo que de verdad le interesaba siempre fue la piel y la estética.',
      'En España tuvo que empezar de cero: aprender el idioma, aprobar el DELE, homologar el título y volver a conseguir su número de colegiada. Empezó en un pequeño gabinete. A los seis meses tenía la agenda llena y un año después abrió Kostanda Beauty.',
      'Hoy dirige un equipo médico, sigue formándose en congresos internacionales como IMCAS en París y trabaja solo con equipos y cosmética certificados.',
    ],
    quote: 'Quiero que cada mujer se sienta bella y segura.',
    sign: 'Dra. Marina Kostanda',
  },
  team: {
    title: 'Tu rostro, en manos de médicos',
    lead: 'Especialistas con formación médica que te explican cada paso antes de empezar y trabajan solo con protocolos seguros y equipos certificados.',
    people: [
      { n: 'Dra. Marina Kostanda', r: 'Fundadora · medicina estética' },
      { n: 'Anastasia', r: 'Doctora' },
      { n: 'Alena', r: 'Doctora' },
      { n: 'Lilia', r: 'Cosmetóloga' },
      { n: 'Polina', r: 'Recepción y atención' },
    ],
  },
  craft: {
    title: 'Equipos y marcas con los que trabajamos',
    equipment: ['Candela Nordlys', 'Candela Frax 1550', 'Classys Volnewmer', 'Secret RF', 'Observ 520', 'Trichoscan', 'DermaLux LED', 'AquaPure', 'Ecógrafo de alta frecuencia'],
    brands: ['Biologique Recherche', 'iS Clinical', 'HydroPeptide', 'Jan Marini', 'Celtermi', 'Cyspera', 'Medik8', 'Biokiss'],
    shop: 'También puedes llevarte a casa la cosmética que te recomendemos en consulta.',
  },
  perks: {
    title: 'Ventajas para nuestras pacientes',
    lead: 'Pregunta las condiciones vigentes al reservar.',
    packs: [
      { t: 'AquaPure Medium', d: '3 sesiones', price: '390 €', old: '450 €' },
      { t: 'IPL facial', d: '3 sesiones', price: '690 €', old: '750 €' },
      { t: 'RF · cualquier zona', d: 'al reservar 3 sesiones', price: '−10 %', old: '' },
    ],
    list: [
      { t: '−15 % en tu primer tratamiento', d: 'Tratamiento de bienvenida Biosensible de Biologique Recherche para nuevas pacientes.' },
      { t: '20 € para ti y para tu amiga', d: 'Cuando la persona que invitas hace su primera visita, las dos recibís 20 € de cashback.' },
      { t: 'Tarjeta de fidelidad', d: 'Cashback después de cada visita y un regalo en tu cumpleaños.' },
      { t: 'Consulta online gratuita', d: 'Aunque no estés en Valencia. Después, 5 % de descuento en cosmética profesional durante 7 días.' },
    ],
  },
  details: {
    title: 'Los detalles también cuentan',
    items: [
      { t: 'Matcha al llegar', d: 'y los caramelos «Korovka» que nuestras pacientes ya conocen' },
      { t: 'Sala infantil', d: 'para que puedas venir con tus hijos' },
      { t: 'Esterilidad', d: 'material desechable y protocolos clínicos en cada cabina' },
      { t: 'En pleno centro', d: 'en Ciutat Vella, a pie desde cualquier punto del centro' },
    ],
  },
  reviews: {
    title: 'Lo que dicen nuestras pacientes',
    lead: 'Opiniones reales de Google, en el idioma en que se escribieron.',
    more: 'Ver todas las opiniones en Google',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: 'No sé qué necesita mi piel. ¿Por dónde empiezo?',
        a: 'Por una consulta. Analizamos tu piel, te explicamos qué vemos y te proponemos un plan de tratamientos y de cuidado en casa. La decisión siempre es tuya.',
      },
      {
        q: '¿Puedo hacer la consulta sin estar en Valencia?',
        a: 'Sí. La consulta online es gratuita: revisamos tu cuidado actual y te recomendamos productos. Después tienes un 5 % de descuento en cosmética profesional durante 7 días.',
      },
      {
        q: 'Tengo rellenos de otra clínica. ¿Podéis valorarlos?',
        a: 'Sí. Con la ecografía facial vemos si queda producto, dónde y a qué profundidad. Si hay que corregirlo, la hialuronidasa se aplica de forma localizada y con control ecográfico, no a ciegas.',
      },
      {
        q: '¿Atendéis en ruso y en ucraniano?',
        a: 'Sí. Atendemos en español, ruso y ucraniano.',
      },
      {
        q: '¿Tratáis también a hombres?',
        a: 'Sí. Cada vez más hombres vienen a cuidar su piel: limpiezas, aparatología, tricología y masajes.',
      },
      {
        q: '¿Cómo reservo?',
        a: 'Por WhatsApp, por teléfono o por mensaje directo en Instagram. Te respondemos y te proponemos un hueco.',
      },
    ],
  },
  contact: {
    title: 'Te esperamos en Valencia',
    lead: 'Escríbenos y te proponemos día y hora. Atención con cita previa.',
    address: 'Dirección',
    phone: 'Teléfono',
    hours: 'Horario',
    hoursValue: 'Desde las 10:00 · con cita previa',
    route: 'Cómo llegar',
    formTitle: 'Prepara tu mensaje',
    formLead: 'Rellena dos datos y se abrirá WhatsApp con el mensaje listo para enviar.',
    fName: 'Tu nombre',
    fTreatment: 'Qué te interesa',
    fTreatmentDefault: 'Consulta y diagnóstico',
    fWhen: 'Cuándo te viene bien',
    fWhenPh: 'Ej.: martes por la tarde',
    send: 'Abrir WhatsApp',
    msg: (name: string, t: string, when: string) =>
      `Hola, soy ${name || '…'}. Me interesa: ${t}.${when ? ` Me viene bien: ${when}.` : ''}`,
  },
  footer: {
    tagline: 'Cosmetología médica en el centro de Valencia.',
    registry: 'Centro sanitario · Nº de registro 45856',
    rights: 'Todos los derechos reservados.',
  },
  langSwitch: { href: '/ru/', label: 'RU', title: 'Версия на русском' },
};

const ru: typeof es = {
  meta: {
    title: 'Kostanda Beauty — клиника эстетической медицины в Валенсии',
    description:
      'Клиника эстетической медицины доктора Марины Костанды в центре Валенсии: диагностика кожи, IPL Candela, Frax 1550, RF-лифтинг, инъекции и уходы Biologique Recherche. Говорим по-русски, по-украински и по-испански.',
  },
  nav: [
    { href: '#resultados', label: 'Результаты' },
    { href: '#tratamientos', label: 'Процедуры' },
    { href: '#doctora', label: 'О докторе' },
    { href: '#ventajas', label: 'Привилегии' },
    { href: '#opiniones', label: 'Отзывы' },
    { href: '#contacto', label: 'Контакты' },
  ],
  book: 'Записаться',
  menu: 'Меню',
  close: 'Закрыть',
  waHello: 'Здравствуйте! Хочу записаться на консультацию в Kostanda Beauty.',
  waOnline: 'Здравствуйте! Хочу записаться на бесплатную онлайн-консультацию.',
  hero: {
    title: ['Вашей коже не нужно', 'больше процедур.'],
    accent: 'Ей нужны правильные.',
    lead:
      'Я — доктор Марина Костанда. В моей клинике в центре Валенсии всё начинается с диагностики: мы видим то, что не видно в зеркале, и предлагаем только то, что действительно сработает.',
    primary: 'Записаться в WhatsApp',
    secondary: 'Бесплатная онлайн-консультация',
    hint: 'Проведите линзой по фото',
    scanNote: 'Так выглядит кожа в UV-режиме диагностики · иллюстрация',
    badgeNum: '1000+',
    badge: 'пациентов доверили нам свою кожу',
    caption: 'Доктор Марина Костанда, основательница',
  },
  reveal: {
    title: 'Медицинская клиника, а не салон красоты.',
    lead: 'Врачи с подтверждённым в Испании дипломом, сертифицированное оборудование и профессиональная косметика, которой нет в магазинах.',
    stats: [
      { n: '1000+', l: 'пациентов доверили клинике свою кожу' },
      { n: '9', l: 'сертифицированных аппаратов — от сканера Observ 520 до лазера Frax 1550' },
      { n: '8', l: 'брендов профессиональной косметики — от Biologique Recherche до iS Clinical' },
    ],
  },
  fears: {
    title: 'Чего боятся перед походом к косметологу',
    lead: 'Мы слышим это каждую неделю. Отвечаю так же честно, как на консультации.',
    sign: 'Доктор Марина Костанда',
    items: [
      {
        fear: '«Мне навяжут кучу процедур»',
        answer: 'Я никогда не навязываю. Моя задача — честно рекомендовать, а решение всегда за вами. Если процедура не нужна, я так и скажу.',
        proof: { text: 'Лишнего не назначает.', name: 'Kateryna Kharechko' },
      },
      {
        fear: '«Лицо станет перекачанным и неестественным»',
        answer: 'Я за натуральную красоту — без лишних филлеров и перегруза лица. Если филлер уже есть, сначала смотрим его на УЗИ и только потом решаем.',
        proof: { text: 'Губы идеальные и натуральные.', name: 'Maya Linková' },
      },
      {
        fear: '«Попаду к мастеру без медицинского образования»',
        answer: 'Здесь работают врачи. Я подтвердила диплом и заново получила номер врача в Испании, а клиника — зарегистрированный медицинский центр (№ 45856).',
        proof: { text: 'Врачи — профессионалы, всё объясняют детально и понятно.', name: 'Анна Ковтун' },
      },
      {
        fear: '«Будет больно, останутся синяки»',
        answer: 'До начала объясняю каждый шаг и подбираю самую комфортную технику. Вот что рассказывают пациенты:',
        proof: { text: 'Всё прошло совершенно безболезненно.', name: 'Valery Ivanova' },
      },
      {
        fear: '«Потрачу деньги, а результата не будет»',
        answer: 'Результат начинается с диагностики. Observ 520 и УЗИ показывают, что происходит в глубоких слоях, — под это собираем протокол и ведём вас до результата.',
        proof: { text: 'Свое лицо доверяю только Kostanda Beauty уже более 2х лет!', name: 'Darina Derzkaya' },
      },
    ],
  },
  method: {
    title: 'Сначала диагностика. Потом план. И только потом процедуры.',
    lead: 'Так каждая процедура работает на результат, а не становится разовой попыткой.',
    steps: [
      {
        t: 'Диагностика',
        d: 'Изучаем кожу по слоям на сканере Observ 520, а если раньше вводились филлеры, делаем высокочастотное УЗИ лица. Видим то, что не видно в зеркале.',
      },
      {
        t: 'План под вас',
        d: 'Сочетаем аппараты, инъекции и уходы в протокол под вашу задачу. Не одна «волшебная» инъекция, а стратегия.',
      },
      {
        t: 'Сопровождение',
        d: 'Следим за результатом от процедуры к процедуре и подбираем профессиональный домашний уход, чтобы эффект держался.',
      },
    ],
  },
  treatments: {
    title: 'Процедуры',
    lead: 'Медицинская косметология, аппараты и инъекции в одном месте. Выбирайте по процедуре или по запросу.',
    concernsLabel: 'Что беспокоит?',
    concerns: [
      { label: 'Акне', target: 'cuidados' },
      { label: 'Покраснения и розацеа', target: 'aparatologia' },
      { label: 'Пигмент и мелазма', target: 'aparatologia' },
      { label: 'Потеря упругости', target: 'aparatologia' },
      { label: 'Губы', target: 'inyectables' },
      { label: 'Старые филлеры', target: 'diagnostico' },
      { label: 'Выпадение волос', target: 'tricologia' },
    ],
    ask: 'Спросить об этой процедуре',
    categories: [
      {
        id: 'diagnostico',
        title: 'Диагностика',
        lead: 'С неё начинается любое лечение.',
        items: [
          { name: 'Сканер Observ 520', note: 'Реальное состояние глубоких слоёв кожи, сосудов и пигмента' },
          { name: 'УЗИ лица', note: 'Остался ли филлер, где он, на какой глубине и не сместился ли' },
          { name: 'Трихоскопия · Trichoscan', note: 'Волосы и кожа головы: ищем причину выпадения' },
          { name: 'Очная или онлайн-консультация', note: 'План процедур и домашнего ухода в письменном виде' },
        ],
      },
      {
        id: 'aparatologia',
        title: 'Аппаратная косметология',
        lead: 'Тон, упругость, текстура и сияние на сертифицированном оборудовании.',
        items: [
          { name: 'IPL Candela Nordlys', note: 'Покраснения, купероз, розацеа и пигментация' },
          { name: 'Candela Frax 1550', note: 'Неабляционный фракционный лазер: текстура, поры, постакне и растяжки' },
          { name: 'RF-лифтинг · Classys Volnewmer', note: 'Упругость и контур с помощью радиочастоты' },
          { name: 'Микроигольчатый RF · Secret RF', note: 'Плотность кожи, поры и возрастные изменения' },
          { name: 'DermaLux LED', note: 'Успокоение, восстановление и поддержка других протоколов' },
          { name: 'AquaPure', note: 'Многоэтапное глубокое очищение и увлажнение' },
        ],
      },
      {
        id: 'cuidados',
        title: 'Уходы за лицом',
        lead: 'Кабинетные протоколы на профессиональной косметике.',
        items: [
          { name: 'Biologique Recherche', note: 'Индивидуальные уходы, например Biosensible или Lait VIP O2' },
          { name: 'Пилинги', note: 'BioRePeel и химические пилинги при тусклой коже, акне и неровном тоне' },
          { name: 'iS Clinical «Огонь и лёд»', note: 'Интенсивное обновление с эффектом сияния' },
          { name: 'Чистка лица', note: 'Глубокая, но бережная к барьеру кожи' },
          { name: 'Экзосомы', note: 'Регенеративная медицина на клеточном уровне, отдельно или после аппаратов' },
        ],
      },
      {
        id: 'inyectables',
        title: 'Инъекции',
        lead: 'Естественность прежде всего. Восстанавливаем ткани, а не добавляем объём ради объёма.',
        items: [
          { name: 'Губы', note: 'Гиалуроновая кислота с естественным результатом' },
          { name: 'Контурная пластика', note: 'Деликатная коррекция пропорций: подбородок, линия челюсти, скулы' },
          { name: 'Ботулинотерапия', note: 'Лоб, межбровье и другие мимические зоны' },
          { name: 'Полинуклеотиды и биоревитализация', note: 'Качество, увлажнение и плотность кожи' },
          { name: 'Гиалуронидаза', note: 'Коррекция филлера точечно и под контролем УЗИ' },
          { name: 'Плазмотерапия', note: 'Для кожи и волос' },
        ],
      },
      {
        id: 'tricologia',
        title: 'Трихология',
        lead: 'Выпадение, потеря густоты и здоровье кожи головы.',
        items: [
          { name: 'Диагностика на Trichoscan', note: 'Сначала находим причину, потом лечим' },
          { name: 'Мезотерапия кожи головы', note: 'Питание фолликула напрямую' },
          { name: 'Плазмотерапия', note: 'Стимуляция собственной плазмой' },
          { name: 'LED-терапия', note: 'Поддержка кожи головы' },
        ],
      },
      {
        id: 'cuerpo',
        title: 'Массаж и тело',
        lead: 'Чтобы расслабиться или поработать над силуэтом и кожей тела.',
        items: [
          { name: 'Массажи', note: 'Релакс, спина, общий, спортивный и медовый' },
          { name: 'Лимфодренаж', note: 'И моделирующий массаж тела' },
          { name: 'Обёртывания', note: 'Холодное бандажное и детокс-обёртывание' },
          { name: 'Frax 1550 для тела', note: 'Растяжки и текстура кожи после беременности или изменения веса' },
        ],
      },
    ],
  },
  results: {
    title: 'Результаты наших пациентов',
    lead: 'Потяните ползунок. Мы совместили каждую пару, чтобы было видно только то, что изменилось.',
    before: 'До',
    after: 'После',
    drag: 'Сравнить до и после',
    cases: [
      { id: 'lips', label: 'Губы', note: 'Гиалуроновая кислота' },
      { id: 'pigment', label: 'Пигментация', note: 'Пятна и веснушки' },
      { id: 'redness', label: 'Покраснения', note: 'Тон и сосуды' },
      { id: 'acne', label: 'Акне', note: 'Активные воспаления' },
      { id: 'body', label: 'Живот', note: 'Качество кожи' },
    ],
    note: 'Фото пациентов Kostanda Beauty. Каждая кожа реагирует по-своему: результат зависит от диагностики и протокола.',
  },
  doctor: {
    title: 'От эндокринолога в Харькове до своей клиники в Валенсии',
    body: [
      'Марина начинала как эндокринолог, потому что так было принято: быть «серьёзным врачом». Но по-настоящему её всегда тянуло к дерматологии и эстетике.',
      'В Испании всё пришлось начинать заново: выучить язык, сдать DELE, подтвердить диплом и снова получить номер врача. Сначала был маленький кабинет. Через полгода запись была заполнена, а через год открылась Kostanda Beauty.',
      'Сегодня Марина руководит командой врачей, учится на международных конгрессах, включая IMCAS в Париже, и работает только с сертифицированным оборудованием и косметикой.',
    ],
    quote: 'Хочу, чтобы каждая женщина чувствовала себя красивой и уверенной.',
    sign: 'Доктор Марина Костанда',
  },
  team: {
    title: 'Ваше лицо — в руках врачей',
    lead: 'Специалисты с медицинским образованием, которые объясняют каждый шаг до начала процедуры и работают только по безопасным протоколам на сертифицированном оборудовании.',
    people: [
      { n: 'Доктор Марина Костанда', r: 'Основательница · эстетическая медицина' },
      { n: 'Анастасия', r: 'Врач' },
      { n: 'Алёна', r: 'Врач' },
      { n: 'Лилия', r: 'Косметолог' },
      { n: 'Полина', r: 'Администратор' },
    ],
  },
  craft: {
    title: 'Оборудование и бренды, с которыми мы работаем',
    equipment: es.craft.equipment.slice(0, 8).concat('Высокочастотный УЗИ-аппарат'),
    brands: es.craft.brands,
    shop: 'Косметику, которую мы подберём на консультации, можно купить прямо в клинике.',
  },
  perks: {
    title: 'Привилегии для пациентов',
    lead: 'Актуальные условия уточняйте при записи.',
    packs: [
      { t: 'AquaPure Medium', d: '3 процедуры', price: '390 €', old: '450 €' },
      { t: 'IPL (лицо)', d: '3 процедуры', price: '690 €', old: '750 €' },
      { t: 'RF · любая зона', d: 'при покупке 3 процедур', price: '−10 %', old: '' },
    ],
    list: [
      { t: '−15 % на первую процедуру', d: 'Процедура знакомства Biosensible от Biologique Recherche для новых клиентов.' },
      { t: '20 € вам и подруге', d: 'После первого визита приглашённой вы обе получаете по 20 € кешбэка.' },
      { t: 'Карта лояльности', d: 'Кешбэк после каждого визита и подарок ко дню рождения.' },
      { t: 'Бесплатная онлайн-консультация', d: 'Даже если вы не в Валенсии. После неё 7 дней действует скидка 5 % на профессиональную косметику.' },
    ],
  },
  details: {
    title: 'Детали тоже важны',
    items: [
      { t: 'Матча при встрече', d: 'и конфеты «Коровка», которые наши пациенты уже знают' },
      { t: 'Детская комната', d: 'можно прийти на процедуру с ребёнком' },
      { t: 'Стерильность', d: 'одноразовые материалы и клинические протоколы в каждом кабинете' },
      { t: 'В самом центре', d: 'в Ciutat Vella, пешком из любой точки центра' },
    ],
  },
  reviews: {
    title: 'Что говорят наши пациенты',
    lead: 'Настоящие отзывы из Google на языке оригинала.',
    more: 'Все отзывы в Google',
  },
  faq: {
    title: 'Частые вопросы',
    items: [
      {
        q: 'Не знаю, что нужно моей коже. С чего начать?',
        a: 'С консультации. Мы изучаем кожу, объясняем, что видим, и предлагаем план процедур и домашнего ухода. Решение всегда остаётся за вами.',
      },
      {
        q: 'Можно ли получить консультацию, если я не в Валенсии?',
        a: 'Да. Онлайн-консультация бесплатная: разберём ваш уход и подберём средства. После неё 7 дней действует скидка 5 % на профессиональную косметику.',
      },
      {
        q: 'У меня филлеры из другой клиники. Вы можете их оценить?',
        a: 'Да. На УЗИ лица видно, остался ли препарат, где и на какой глубине. Если нужна коррекция, гиалуронидазу вводим точечно и под контролем УЗИ, а не «на глаз».',
      },
      {
        q: 'Вы говорите по-русски и по-украински?',
        a: 'Да. Мы говорим по-русски, по-украински и по-испански.',
      },
      {
        q: 'Мужчин тоже принимаете?',
        a: 'Да. Всё больше мужчин приходят ухаживать за кожей: чистки, аппаратные процедуры, трихология и массаж.',
      },
      {
        q: 'Как записаться?',
        a: 'В WhatsApp, по телефону или в директ Instagram. Мы ответим и предложим время.',
      },
    ],
  },
  contact: {
    title: 'Ждём вас в Валенсии',
    lead: 'Напишите нам, и мы предложим день и время. Приём по предварительной записи.',
    address: 'Адрес',
    phone: 'Телефон',
    hours: 'Время работы',
    hoursValue: 'С 10:00 · по записи',
    route: 'Построить маршрут',
    formTitle: 'Подготовьте сообщение',
    formLead: 'Заполните пару полей, и откроется WhatsApp с готовым сообщением.',
    fName: 'Ваше имя',
    fTreatment: 'Что интересует',
    fTreatmentDefault: 'Консультация и диагностика',
    fWhen: 'Когда удобно',
    fWhenPh: 'Например: вторник вечером',
    send: 'Открыть WhatsApp',
    msg: (name: string, t: string, when: string) =>
      `Здравствуйте! Меня зовут ${name || '…'}. Интересует: ${t}.${when ? ` Удобно: ${when}.` : ''}`,
  },
  footer: {
    tagline: 'Медицинская косметология в центре Валенсии.',
    registry: 'Медицинский центр · Регистрационный № 45856',
    rights: 'Все права защищены.',
  },
  langSwitch: { href: '/', label: 'ES', title: 'Versión en español' },
};

export const content = { es, ru };

export const reviews = [
  {
    name: 'Olga Gvo',
    text: 'Хожу в эту клинику уже 2 года и решила написать отзыв, так как понимаю, как сложно найти профессиональную клинику в Валенсии. Делаю здесь, в основном, IPL, микроигольчатый RF и полинуклеотиды.',
  },
  {
    name: 'A R',
    text: 'Un precioso lugar donde ser muy bien atendida, mimada y comprendida. En el centro de Valencia, cuentan con especialistas muy profesionales y atentas. Me realizaron un tratamiento de hidratación y glow y quedé encantada.',
  },
  {
    name: 'Kateryna Kharechko',
    text: 'Марина прекрасный специалист, все разложила мне по полочкам и дала отличные рекомендации по уходу и процедурам. Лишнего не назначает.',
  },
  {
    name: 'Lorena Planells',
    text: 'La clínica está impoluta, todo te transmite paz y además las chicas son muy delicadas y profesionales. Sin duda la recomendaría con los ojos cerrados.',
  },
  {
    name: 'Анна Ковтун',
    text: 'Врачи — профессионалы, всё объясняют детально и понятно. Внутри идеально чисто и стерильно, сразу чувствуешь себя в надёжных руках. Делала уход на Biologique Recherche — кожа после процедуры просто сияет!',
  },
  {
    name: 'Layla Hammouda',
    text: 'Me realicé el tratamiento de AquaPure que consiste en varios pasos. Salí con la piel limpia, renovada y radiante.',
  },
  {
    name: 'Юля Стадник',
    text: 'Делаю уход Biologique Recherche раз в 3 недели и это лучшее, что было с моей кожей! И отдельная благодарность администратору за матчу.',
  },
  {
    name: 'Elizabet Raiska',
    text: 'Me han hecho un tratamiento facial y me quedé con una piel radiante, como si hubiera estado una semana de vacaciones. Muy recomendable.',
  },
  {
    name: 'Daria',
    text: 'El ambiente es muy agradable desde que entras y te reciben con los caramelos «Korovka», y los médicos son muy profesionales. Me ayudaron a elegir justo lo que necesitaba mi piel.',
  },
];
