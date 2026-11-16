// Todo el texto del sitio vive acá. Para cambiar un dato, editá este archivo:
// cada idioma tiene exactamente la misma forma.

export const links = {
  email: 'owencaminosdolhartz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/owen-caminos-dolhartz',
  github: 'https://github.com/owenelectronics',
  cv: '/cv/CV_Owen_Caminos_Dolhartz.pdf',
  game: '/juego/',
};

const stack = {
  estampados: ['PHP', 'MySQL', 'JavaScript', 'Playwright', 'GitHub Actions', 'Kiro', 'MCP'],
  clariz: ['Laravel 12', 'PHP 8.3', 'Alpine.js', 'Tailwind', 'MariaDB', 'Playwright', 'PHPUnit', 'Kiro', 'MCP'],
  agentic: ['Claude Code', 'MCP', 'Gherkin', 'Playwright', 'GitHub Actions'],
  game: ['JavaScript', 'HTML5 Canvas', 'Web Audio'],
  bienestar: ['React 19', 'TypeScript', 'Tailwind', 'Gemini', 'Firebase'],
};

const marquee = [
  'Playwright', 'Selenium', 'Gherkin', 'Claude Code', 'MCP', 'GitHub Actions', 'Postman', 'SQL',
  'PHP', 'Laravel', 'JavaScript', 'Python', 'Jira', 'Xray', 'Robot Framework', 'Jenkins', 'Figma', 'Kiro',
];

export const es = {
  lang: 'es',
  otherLang: { label: 'EN', href: '/en/', title: 'English version' },
  meta: {
    title: 'Owen Caminos Dolhartz | QA Senior, Analista Funcional y Test Automation con IA',
    description:
      'Portfolio de Owen Caminos Dolhartz: QA Senior y Analista Funcional con más de 10 años de experiencia. Test automation con Playwright y desarrollo full stack con IA y agentes.',
  },
  nav: {
    projects: 'Proyectos',
    method: 'Cómo trabajo',
    experience: 'Experiencia',
    skills: 'Skills',
    contact: 'Contacto',
  },
  hero: {
    badge: 'Disponible · Remoto o híbrido · Buenos Aires (UTC-3)',
    name: 'Owen Caminos Dolhartz',
    lead: 'QA Senior y Analista Funcional.',
    rotatingPrefix: 'Construyo y pruebo software con',
    rotating: ['agentes de IA', 'Playwright', 'Claude Code y MCP', 'criterio de negocio'],
    intro:
      'Más de 10 años asegurando la calidad de punta a punta. Entiendo el negocio, lo traduzco en requerimientos claros, lo pruebo y lo construyo con desarrollo asistido por IA.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    terminalTitle: 'agente-qa · del requerimiento al reporte',
    terminal: {
      command: 'agente-qa run --historia HU-142',
      steps: [
        { text: 'Leyendo la historia de usuario', result: 'ok' },
        { text: 'Generando 12 escenarios en Gherkin', result: 'ok' },
        { text: 'Automatizando con Playwright', result: 'ok' },
        { text: 'Ejecutando en GitHub Actions', result: 'ok' },
      ],
      summary: '28 passed · 0 failed · 41s',
      final: 'Reporte publicado. Esperando revisión humana.',
    },
  },
  stats: [
    { value: 10, suffix: '+', label: 'años en calidad de software' },
    { value: 100, suffix: '+', label: 'historias de usuario analizadas y validadas' },
    { value: 6, suffix: '×', label: 'más rápido: CapMan llevó un proceso de 1 hora a 10 minutos' },
    { value: 2, suffix: '', label: 'ERPs a medida desplegados para clientes' },
  ],
  marquee,
  pillars: {
    kicker: 'Qué hago',
    title: 'Tres miradas en una misma persona',
    items: [
      {
        icon: 'analysis',
        title: 'Análisis funcional',
        text: 'Relevo con el negocio y lo bajo a historias de usuario, criterios de aceptación y backlog. Soy el nexo entre quien pide y quien construye.',
      },
      {
        icon: 'qa',
        title: 'QA y test automation',
        text: 'Testing funcional, regresión, UAT y APIs. Automatizo con Playwright y Selenium, y dejo la evidencia corriendo en CI.',
      },
      {
        icon: 'ai',
        title: 'Desarrollo con IA y agentes',
        text: 'Construyo full stack con Claude Code, Kiro y servidores MCP. Los agentes hacen el trabajo; yo defino qué se pide y valido lo que entregan.',
      },
    ],
  },
  projects: {
    kicker: 'Proyectos',
    title: 'Trabajo que se puede abrir y ver',
    roleLabel: 'Mi rol',
    items: [
      {
        id: 'estampados',
        kind: 'shots',
        status: 'En producción',
        title: 'Estampados Pro',
        subtitle: 'ERP a medida para un taller de estampado',
        summary:
          'El dueño manejaba pedidos, pagos y empleados a mano. Hoy todo el taller trabaja sobre un único sistema, en uso diario.',
        role: 'Análisis funcional, desarrollo full stack y QA de punta a punta',
        bullets: [
          'Relevé los requerimientos con el dueño y los traduje en módulos: pedidos, clientes, empleados, contabilidad y reportes.',
          'Desarrollo asistido por IA con Kiro y servidores MCP, con usuarios, perfiles y permisos.',
          'Playwright automatiza las pruebas y genera las capturas del manual de usuario interactivo.',
          'GitHub Actions controla los despliegues y las ejecuciones automáticas.',
        ],
        stack: stack.estampados,
        images: [
          { src: '/img/estampados/dashboard.png', alt: 'Panel principal de Estampados Pro con resumen del mes y últimos pedidos' },
          { src: '/img/estampados/nuevo-pedido.png', alt: 'Formulario de nuevo pedido en Estampados Pro' },
          { src: '/img/estampados/empleado.png', alt: 'Panel del empleado con los pedidos del taller' },
          { src: '/img/estampados/pedidos.png', alt: 'Listado de pedidos con su estado' },
        ],
        links: [],
      },
      {
        id: 'clariz',
        kind: 'shots',
        status: 'Desplegado para el cliente',
        title: 'Clariz Viste',
        subtitle: 'ERP textil y punto de venta',
        summary:
          'Un taller que fabrica y vende ropa necesitaba seguir cada prenda desde la mesa de corte hasta la venta. El sistema cubre el ciclo completo.',
        role: 'Relevamiento y análisis funcional, desarrollo full stack con IA, diseño de interfaz y QA',
        bullets: [
          'Corte, lotes, taller, control de calidad, stock por talle y color, y punto de venta con pago mixto y Mercado Pago.',
          'Pruebas con Playwright: 18 de 18 rutas sin errores, 28 de 28 verificaciones del punto de venta y revisión en 4 tamaños de pantalla.',
          'Tests de PHPUnit sobre autorización por rol y el ciclo de vida del lote.',
          'Auditorías de QA y de seguridad hechas con agentes; cada hallazgo se corrigió en un commit con su ID.',
        ],
        stack: stack.clariz,
        images: [
          { src: '/img/clariz/dashboard.png', alt: 'Panel de inicio de Clariz Viste con el estado del taller' },
          { src: '/img/clariz/pos.png', alt: 'Punto de venta de Clariz Viste' },
          { src: '/img/clariz/checkout.png', alt: 'Cobro con pago mixto en el punto de venta' },
          { src: '/img/clariz/lotes.png', alt: 'Seguimiento de lotes en el taller' },
        ],
        links: [],
      },
      {
        id: 'agentic',
        kind: 'pipeline',
        status: 'En construcción',
        title: 'QA agéntico con reportes en vivo',
        subtitle: 'De la historia de usuario al reporte publicado',
        summary:
          'Un repositorio público donde un agente toma una historia de usuario, escribe los escenarios, los automatiza y publica el resultado. Cada paso queda a la vista.',
        role: 'Diseño del flujo, definición de los agentes y validación de lo que generan',
        bullets: [
          'La historia de usuario entra como texto y sale como escenarios en Gherkin.',
          'Los escenarios se convierten en pruebas de Playwright.',
          'GitHub Actions las ejecuta en cada cambio y publica el reporte.',
          'Nada se da por bueno sin revisión humana.',
        ],
        stack: stack.agentic,
        pipeline: ['Historia', 'Gherkin', 'Playwright', 'CI', 'Reporte'],
        code: [
          ['Scenario:', 'Cobro con pago mixto', ''],
          ['Given', 'un carrito con 2 prendas', ''],
          ['When', 'cobro parte en efectivo y parte con tarjeta', ''],
          ['Then', 'el comprobante muestra ambos pagos', 'ok'],
        ],
        images: [],
        links: [],
      },
      {
        id: 'bienestar',
        kind: 'shots',
        status: 'Prototipo para cliente',
        title: 'Bienestar Corpo',
        subtitle: 'Backoffice para un centro de estética',
        summary:
          'Un centro de estética necesitaba ver en una sola pantalla los turnos, los pedidos y el stock del día. El prototipo le permitió validar el flujo antes de construir el sistema final.',
        role: 'Relevamiento, definición funcional y prototipado asistido por IA',
        bullets: [
          'Panel del día con turnos, retiros en mostrador, envíos e ingresos.',
          'Agenda de cabinas, pedidos, productos, tratamientos y fichas de clientes.',
          'Un asistente con Gemini que prioriza las tareas urgentes de la recepción.',
        ],
        stack: stack.bienestar,
        images: [
          { src: '/img/bienestar/panel.png', alt: 'Panel operativo del backoffice de Bienestar Corpo' },
          { src: '/img/bienestar/stock.png', alt: 'Gestión de productos y stock en Bienestar Corpo' },
        ],
        links: [],
      },
      {
        id: 'game',
        kind: 'shots',
        status: 'Jugable',
        title: 'Invasión de drones',
        subtitle: 'Un juego de navegador, para jugar ahora',
        summary:
          'Un arcade hecho con JavaScript puro, sin motores ni librerías. Funciona con teclado y también en el celular.',
        role: 'Idea, dirección y pruebas; desarrollo asistido por IA',
        bullets: [
          'Todo el dibujo se hace sobre Canvas y el sonido se genera en el navegador.',
          'Guarda el puntaje más alto en el dispositivo.',
        ],
        stack: stack.game,
        images: [{ src: '/img/juego/portada.jpg', alt: 'Pantalla de inicio del juego Invasión de drones' }],
        links: [{ label: 'Jugar ahora', href: links.game, primary: true, external: true }],
      },
    ],
    moreTitle: 'Más trabajo',
    more: [
      {
        title: 'Timbre inteligente',
        tag: 'IoT',
        text: 'Timbre con ESP32-CAM: al tocarlo saca una foto y la envía por Telegram. Se configura desde un portal web y se controla por MQTT.',
        stack: ['C++', 'ESP32', 'MQTT', 'Telegram'],
      },
      {
        title: 'CapMan',
        tag: 'Herramienta interna · 2018',
        text: 'Sistema web de gestión de bugs y solicitudes que creé por iniciativa propia en DirecTV. Redujo un proceso manual de 1 hora a 10 minutos.',
        stack: ['Full stack', 'Automatización de reportes'],
      },
    ],
  },
  method: {
    kicker: 'Cómo trabajo',
    title: 'Los agentes ejecutan. El criterio lo pongo yo.',
    intro:
      'La IA acelera, pero no decide qué construir ni si quedó bien. Ese es mi trabajo, y es el mismo que hice durante diez años como QA y analista.',
    steps: [
      { title: 'Requerimiento', text: 'Relevo con el negocio y escribo la historia con sus criterios de aceptación.' },
      { title: 'Especificación', text: 'Bajo los criterios a escenarios en Gherkin que cualquiera puede leer.' },
      { title: 'Agentes', text: 'Cada agente tiene un rol: backend, interfaz, QA, seguridad. Trabajan con MCP sobre el repositorio.' },
      { title: 'Pruebas', text: 'Playwright y tests unitarios corren en cada cambio, sin intervención manual.' },
      { title: 'Revisión', text: 'Leo el resultado, valido contra el negocio y recién ahí se despliega.' },
    ],
  },
  experience: {
    kicker: 'Experiencia',
    title: 'Once años en Globant',
    items: [
      {
        period: '2024 – 2026',
        company: 'Globant · Federación Patronal Seguros',
        role: 'Referente QA del POD y Analista Funcional',
        text: 'Migración y actualización de una plataforma de seguros.',
        bullets: [
          'Referente QA en un POD de 8 personas; coordinación del backlog junto al PM.',
          'Análisis y validación de más de 50 épicas y 100 historias de usuario en Jira y Figma.',
          'Casos de prueba estandarizados en Gherkin, con IA generativa para ampliar la cobertura.',
          'Demos y UAT con el cliente; validación de APIs REST con Postman y de datos con SQL.',
        ],
      },
      {
        period: '2015 – 2024',
        company: 'Globant · DirecTV',
        role: 'Testing funcional, UAT y performance',
        text: 'Firmware de decodificadores.',
        bullets: [
          'Creé CapMan, que redujo un proceso de 1 hora a 10 minutos y automatizó los envíos por correo.',
          'Referente de un equipo de 10 a 20 personas: onboarding, buenas prácticas y documentación.',
          'Reconocimiento “TOP SPIRA Test Runner” (2018), otorgado por el cliente.',
          'Participación en una prueba de concepto de automatización con Jenkins.',
        ],
      },
    ],
  },
  skills: {
    kicker: 'Skills',
    title: 'Con qué trabajo',
    groups: [
      { title: 'Testing y QA', items: ['Funcional', 'Regresión', 'Exploratorio', 'UAT', 'Performance', 'Gherkin', 'TestLink', 'Xray'] },
      { title: 'Automatización y CI/CD', items: ['Playwright', 'Selenium', 'Robot Framework', 'GitHub Actions', 'Jenkins', 'Python'] },
      { title: 'IA aplicada', items: ['Claude Code', 'Claude', 'Kiro', 'Cline', 'Servidores MCP', 'Prompt engineering'] },
      { title: 'Análisis funcional', items: ['Relevamiento', 'Historias de usuario', 'Criterios de aceptación', 'Backlog', 'Demos con cliente'] },
      { title: 'Desarrollo', items: ['PHP', 'Laravel', 'JavaScript', 'Python', 'HTML y CSS', 'MySQL', 'Git'] },
      { title: 'APIs y herramientas', items: ['Postman', 'Insomnia', 'SQL', 'Jira', 'Confluence', 'Figma', 'Scrum', 'Kanban'] },
    ],
    educationTitle: 'Formación',
    education: [
      { title: 'Consultor en IA', place: 'Educación IT', when: 'En curso' },
      { title: 'AI Fluency y Claude Code in Action', place: 'Anthropic', when: '2026' },
      { title: 'Python Programming y JavaScript Total', place: 'Udemy', when: '2025' },
      { title: 'Ingeniería Informática', place: 'Universidad Nacional Arturo Jauretche', when: 'Cursada parcial' },
    ],
    languagesTitle: 'Idiomas',
    languages: 'Español nativo · Inglés B1+ (intermedio alto)',
  },
  contact: {
    kicker: 'Contacto',
    title: '¿Hablamos?',
    text: 'Busco sumarme a un equipo que valore la comunicación entre negocio y tecnología. Trabajo remoto o híbrido desde Buenos Aires.',
    emailCta: 'Escribime',
    copy: 'Copiar email',
    copied: 'Copiado',
    cv: 'Descargar CV',
  },
  footer: 'Hecho con Astro y publicado en GitHub Pages.',
  a11y: { photo: 'Foto de Owen Caminos Dolhartz', skip: 'Saltar al contenido', gallery: 'Ver captura', menu: 'Secciones' },
};

export type Content = typeof es;

export const en: Content = {
  lang: 'en',
  otherLang: { label: 'ES', href: '/', title: 'Versión en español' },
  meta: {
    title: 'Owen Caminos Dolhartz | Senior QA, Functional Analyst and AI-driven Test Automation',
    description:
      'Portfolio of Owen Caminos Dolhartz: Senior QA and Functional Analyst with 10+ years of experience. Test automation with Playwright and full-stack development with AI agents.',
  },
  nav: {
    projects: 'Projects',
    method: 'How I work',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    badge: 'Available · Remote or hybrid · Buenos Aires (UTC-3)',
    name: 'Owen Caminos Dolhartz',
    lead: 'Senior QA and Functional Analyst.',
    rotatingPrefix: 'I build and test software with',
    rotating: ['AI agents', 'Playwright', 'Claude Code and MCP', 'business judgment'],
    intro:
      'Over 10 years ensuring quality end to end. I understand the business, turn it into clear requirements, test it, and build it with AI-assisted development.',
    ctaProjects: 'See projects',
    ctaCv: 'Download CV',
    terminalTitle: 'qa-agent · from requirement to report',
    terminal: {
      command: 'qa-agent run --story US-142',
      steps: [
        { text: 'Reading the user story', result: 'ok' },
        { text: 'Generating 12 Gherkin scenarios', result: 'ok' },
        { text: 'Automating with Playwright', result: 'ok' },
        { text: 'Running on GitHub Actions', result: 'ok' },
      ],
      summary: '28 passed · 0 failed · 41s',
      final: 'Report published. Waiting for human review.',
    },
  },
  stats: [
    { value: 10, suffix: '+', label: 'years in software quality' },
    { value: 100, suffix: '+', label: 'user stories analyzed and validated' },
    { value: 6, suffix: '×', label: 'faster: CapMan took a process from 1 hour to 10 minutes' },
    { value: 2, suffix: '', label: 'custom ERPs deployed for clients' },
  ],
  marquee,
  pillars: {
    kicker: 'What I do',
    title: 'Three perspectives in one person',
    items: [
      {
        icon: 'analysis',
        title: 'Functional analysis',
        text: 'I gather requirements with the business and turn them into user stories, acceptance criteria and a backlog. I am the link between who asks and who builds.',
      },
      {
        icon: 'qa',
        title: 'QA and test automation',
        text: 'Functional, regression, UAT and API testing. I automate with Playwright and Selenium and leave the evidence running in CI.',
      },
      {
        icon: 'ai',
        title: 'Development with AI agents',
        text: 'I build full stack with Claude Code, Kiro and MCP servers. Agents do the work; I define what is asked and validate what they deliver.',
      },
    ],
  },
  projects: {
    kicker: 'Projects',
    title: 'Work you can open and see',
    roleLabel: 'My role',
    items: [
      {
        id: 'estampados',
        kind: 'shots',
        status: 'In production',
        title: 'Estampados Pro',
        subtitle: 'Custom ERP for a garment printing workshop',
        summary:
          'The owner tracked orders, payments and staff by hand. Today the whole workshop runs on a single system, used every day.',
        role: 'Functional analysis, full-stack development and end-to-end QA',
        bullets: [
          'Gathered requirements with the owner and turned them into modules: orders, customers, employees, accounting and reports.',
          'AI-assisted development with Kiro and MCP servers, including users, profiles and permissions.',
          'Playwright automates the tests and generates the screenshots for the interactive user manual.',
          'GitHub Actions controls deployments and scheduled runs.',
        ],
        stack: stack.estampados,
        images: [
          { src: '/img/estampados/dashboard.png', alt: 'Estampados Pro main dashboard with monthly summary and latest orders' },
          { src: '/img/estampados/nuevo-pedido.png', alt: 'New order form in Estampados Pro' },
          { src: '/img/estampados/empleado.png', alt: 'Employee panel with workshop orders' },
          { src: '/img/estampados/pedidos.png', alt: 'Order list with status' },
        ],
        links: [],
      },
      {
        id: 'clariz',
        kind: 'shots',
        status: 'Deployed for the client',
        title: 'Clariz Viste',
        subtitle: 'Textile ERP and point of sale',
        summary:
          'A workshop that makes and sells clothing needed to follow every garment from the cutting table to the sale. The system covers the full cycle.',
        role: 'Requirements gathering and functional analysis, AI-assisted full-stack development, interface design and QA',
        bullets: [
          'Cutting, batches, workshop, quality control, stock by size and color, and a point of sale with split payments and Mercado Pago.',
          'Playwright testing: 18 of 18 routes with no errors, 28 of 28 point-of-sale checks, and a review across 4 screen sizes.',
          'PHPUnit tests covering role-based authorization and the batch life cycle.',
          'QA and security audits run with agents; every finding was fixed in a commit carrying its ID.',
        ],
        stack: stack.clariz,
        images: [
          { src: '/img/clariz/dashboard.png', alt: 'Clariz Viste home dashboard with workshop status' },
          { src: '/img/clariz/pos.png', alt: 'Clariz Viste point of sale' },
          { src: '/img/clariz/checkout.png', alt: 'Split payment checkout at the point of sale' },
          { src: '/img/clariz/lotes.png', alt: 'Batch tracking in the workshop' },
        ],
        links: [],
      },
      {
        id: 'agentic',
        kind: 'pipeline',
        status: 'In progress',
        title: 'Agentic QA with live reports',
        subtitle: 'From user story to published report',
        summary:
          'A public repository where an agent takes a user story, writes the scenarios, automates them and publishes the result. Every step is visible.',
        role: 'Workflow design, agent definition and validation of what they produce',
        bullets: [
          'The user story goes in as text and comes out as Gherkin scenarios.',
          'Scenarios become Playwright tests.',
          'GitHub Actions runs them on every change and publishes the report.',
          'Nothing is accepted without human review.',
        ],
        stack: stack.agentic,
        pipeline: ['Story', 'Gherkin', 'Playwright', 'CI', 'Report'],
        code: [
          ['Scenario:', 'Split payment checkout', ''],
          ['Given', 'a cart with 2 garments', ''],
          ['When', 'I pay part in cash and part by card', ''],
          ['Then', 'the receipt shows both payments', 'ok'],
        ],
        images: [],
        links: [],
      },
      {
        id: 'bienestar',
        kind: 'shots',
        status: 'Client prototype',
        title: 'Bienestar Corpo',
        subtitle: 'Backoffice for a beauty center',
        summary:
          'A beauty center needed to see the day’s appointments, orders and stock on a single screen. The prototype let them validate the workflow before building the final system.',
        role: 'Requirements gathering, functional definition and AI-assisted prototyping',
        bullets: [
          'Daily panel with appointments, counter pickups, deliveries and income.',
          'Room schedule, orders, products, treatments and customer records.',
          'A Gemini assistant that prioritizes the front desk’s urgent tasks.',
        ],
        stack: stack.bienestar,
        images: [
          { src: '/img/bienestar/panel.png', alt: 'Operations panel of the Bienestar Corpo backoffice' },
          { src: '/img/bienestar/stock.png', alt: 'Product and stock management in Bienestar Corpo' },
        ],
        links: [],
      },
      {
        id: 'game',
        kind: 'shots',
        status: 'Playable',
        title: 'Invasión de drones',
        subtitle: 'A browser game you can play right now',
        summary:
          'An arcade game built with plain JavaScript, no engines or libraries. It works with a keyboard and on a phone. The game is in Spanish.',
        role: 'Concept, direction and testing; AI-assisted development',
        bullets: [
          'All drawing happens on Canvas and the sound is generated in the browser.',
          'It stores the high score on the device.',
        ],
        stack: stack.game,
        images: [{ src: '/img/juego/portada.jpg', alt: 'Start screen of the game Invasión de drones' }],
        links: [{ label: 'Play now', href: links.game, primary: true, external: true }],
      },
    ],
    moreTitle: 'More work',
    more: [
      {
        title: 'Smart doorbell',
        tag: 'IoT',
        text: 'ESP32-CAM doorbell: when pressed it takes a photo and sends it over Telegram. Configured from a web portal and controlled over MQTT.',
        stack: ['C++', 'ESP32', 'MQTT', 'Telegram'],
      },
      {
        title: 'CapMan',
        tag: 'Internal tool · 2018',
        text: 'Web system for bug and request management that I built on my own initiative at DirecTV. It cut a manual process from 1 hour to 10 minutes.',
        stack: ['Full stack', 'Report automation'],
      },
    ],
  },
  method: {
    kicker: 'How I work',
    title: 'Agents execute. The judgment is mine.',
    intro:
      'AI speeds things up, but it does not decide what to build or whether it turned out right. That is my job, and it is the same one I did for ten years as a QA and analyst.',
    steps: [
      { title: 'Requirement', text: 'I gather it with the business and write the story with its acceptance criteria.' },
      { title: 'Specification', text: 'I turn the criteria into Gherkin scenarios anyone can read.' },
      { title: 'Agents', text: 'Each agent has a role: backend, interface, QA, security. They work on the repository through MCP.' },
      { title: 'Tests', text: 'Playwright and unit tests run on every change, with no manual step.' },
      { title: 'Review', text: 'I read the result, validate it against the business, and only then it ships.' },
    ],
  },
  experience: {
    kicker: 'Experience',
    title: 'Eleven years at Globant',
    items: [
      {
        period: '2024 – 2026',
        company: 'Globant · Federación Patronal Seguros',
        role: 'POD QA Lead and Functional Analyst',
        text: 'Migration and upgrade of an insurance platform.',
        bullets: [
          'QA lead in a POD of 8 people; backlog coordination alongside the PM.',
          'Analysis and validation of more than 50 epics and 100 user stories in Jira and Figma.',
          'Test cases standardized in Gherkin, using generative AI to widen coverage.',
          'Demos and UAT with the client; REST API validation with Postman and data checks with SQL.',
        ],
      },
      {
        period: '2015 – 2024',
        company: 'Globant · DirecTV',
        role: 'Functional testing, UAT and performance',
        text: 'Set-top box firmware.',
        bullets: [
          'Built CapMan, which cut a process from 1 hour to 10 minutes and automated email delivery.',
          'Point of reference for a team of 10 to 20 people: onboarding, good practices and documentation.',
          '“TOP SPIRA Test Runner” award (2018), granted by the client.',
          'Took part in a test automation proof of concept with Jenkins.',
        ],
      },
    ],
  },
  skills: {
    kicker: 'Skills',
    title: 'What I work with',
    groups: [
      { title: 'Testing and QA', items: ['Functional', 'Regression', 'Exploratory', 'UAT', 'Performance', 'Gherkin', 'TestLink', 'Xray'] },
      { title: 'Automation and CI/CD', items: ['Playwright', 'Selenium', 'Robot Framework', 'GitHub Actions', 'Jenkins', 'Python'] },
      { title: 'Applied AI', items: ['Claude Code', 'Claude', 'Kiro', 'Cline', 'MCP servers', 'Prompt engineering'] },
      { title: 'Functional analysis', items: ['Requirements gathering', 'User stories', 'Acceptance criteria', 'Backlog', 'Client demos'] },
      { title: 'Development', items: ['PHP', 'Laravel', 'JavaScript', 'Python', 'HTML and CSS', 'MySQL', 'Git'] },
      { title: 'APIs and tools', items: ['Postman', 'Insomnia', 'SQL', 'Jira', 'Confluence', 'Figma', 'Scrum', 'Kanban'] },
    ],
    educationTitle: 'Education',
    education: [
      { title: 'AI Consultant', place: 'Educación IT', when: 'In progress' },
      { title: 'AI Fluency and Claude Code in Action', place: 'Anthropic', when: '2026' },
      { title: 'Python Programming and JavaScript Total', place: 'Udemy', when: '2025' },
      { title: 'Computer Engineering', place: 'Universidad Nacional Arturo Jauretche', when: 'Partially completed' },
    ],
    languagesTitle: 'Languages',
    languages: 'Spanish (native) · English B1+ (upper intermediate)',
  },
  contact: {
    kicker: 'Contact',
    title: 'Let’s talk',
    text: 'I am looking to join a team that values communication between business and technology. Remote or hybrid, based in Buenos Aires.',
    emailCta: 'Email me',
    copy: 'Copy email',
    copied: 'Copied',
    cv: 'Download CV',
  },
  footer: 'Built with Astro and published on GitHub Pages.',
  a11y: { photo: 'Photo of Owen Caminos Dolhartz', skip: 'Skip to content', gallery: 'Show screenshot', menu: 'Sections' },
};
