import type { Portfolio } from './model';
// Verified public repositories and user-supplied internship evidence. See docs/CONTENIDO-FUENTES.md.
export const seed: Portfolio = {
  settings: {
    name: 'Benjamín Aranda',
    email: 'benjamin.aranda.dev@gmail.com',
    linkedin: 'https://www.linkedin.com/in/benjaminarandadev/',
    github: 'https://github.com/BenjaAranda',
  },
  profile: {
    role: { es: 'Analista Programador · Full Stack', en: 'Software Developer · Full Stack' },
    headline: {
      es: 'Analista Programador. Desarrollo web y automatización.',
      en: 'Software developer. Web development and automation.',
    },
    introduction: {
        es: 'Desarrollo aplicaciones web y Android con Java, Spring Boot, React, TypeScript y Kotlin. También he trabajado en pruebas automatizadas y procesos con MasterBase.',
        en: 'I develop web and Android applications with Java, Spring Boot, React, TypeScript and Kotlin. I have also worked on automated testing and MasterBase workflows.',
    },
    bio: {
        es: 'Analista Programador titulado de Duoc UC. Proyectos en desarrollo Full Stack, Android y pruebas de software. Certificación MasterBase Certified Creator e inglés B2 acreditado por EF SET. Actualmente estudio análisis de datos, SQL y Power BI de forma autodidacta.',
        en: 'Duoc UC Analista Programador graduate. Projects in full-stack development, Android and software testing. MasterBase Certified Creator and EF SET certified B2 English. Currently studying data analysis, SQL and Power BI independently.',
    },
    location: { es: 'Valparaíso, Chile', en: 'Valparaíso, Chile' },
    photo: {
      url: '/profile/benjamin-aranda.webp',
      alt: {
        es: 'Retrato de Benjamín Aranda con traje oscuro sobre fondo gris claro.',
        en: 'Portrait of Benjamín Aranda in a dark suit against a light grey background.',
      },
    },
  },
  projects: [
    {
      _id: 'becasfind',
      slug: 'becasfind',
      featured: true,
      title: { es: 'BecasFind', en: 'BecasFind' },
      category: { es: 'Proyecto de título', en: 'Capstone project' },
      year: '2026',
      summary: {
        es: 'Buscador de becas estudiantiles con filtros, favoritos y recomendaciones por perfil.',
        en: 'Student scholarship search with filters, favourites and profile-based recommendations.',
      },
      problem: {
        es: 'La información sobre beneficios estudiantiles está dispersa.',
        en: 'Information about student funding is scattered.',
      },
      role: {
        es: 'Desarrollé funcionalidades de frontend y backend, y trabajé en la preparación, recopilación e importación de datos de becas. Proyecto de título realizado en equipo entre marzo y julio de 2026.',
        en: 'I developed frontend and backend features and worked on scholarship data preparation, collection and import. A team capstone project developed between March and July 2026.',
      },
      solution: {
        es: 'Frontend React, TypeScript, Vite y Tailwind CSS conectado a una API Spring Boot con Spring Security, JPA y PostgreSQL. Incluye administración, importación CSV y pruebas E2E con Playwright. El proceso de recopilación usa Python y Scrapy en un repositorio complementario.',
        en: 'React, TypeScript, Vite and Tailwind CSS frontend connected to a Spring Boot API with Spring Security, JPA and PostgreSQL. Includes administration, CSV imports and Playwright E2E tests. Scholarship collection uses Python and Scrapy in a companion repository.',
      },
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'Playwright', 'Python', 'Scrapy'],
      repository: 'https://github.com/BenjaAranda/BecasFind',
      image: {
        url: '/projects/becasfind/inicio.webp',
        alt: {
          es: 'Inicio de BecasFind, capturado desde el frontend del repositorio en un entorno local.',
          en: 'BecasFind home page, captured from the repository frontend in a local environment.',
        },
      },
      lessons: {
        es: 'Unir búsqueda, perfiles y preparación de datos. El repositorio contiene pruebas Playwright de portada, inicio de sesión, búsqueda y detalle de beca; no se presentan aquí como pruebas aprobadas en esta revisión. Proyecto en equipo; el repositorio atribuye infraestructura y despliegue a José Naour.',
        en: 'Connecting search, profiles and data preparation. The repository includes Playwright tests for the landing page, login, search and scholarship detail; this review does not claim they passed. A team project; the repository credits José Naour with infrastructure and deployment.',
      },
    },
    {
      _id: 'sivis',
      slug: 'sivis',
      featured: true,
      year: '2026',
      title: { es: 'SIVIS', en: 'SIVIS' },
      category: { es: 'Práctica profesional', en: 'Professional internship' },
      summary: {
        es: 'Gestión de visitas y accesos: del registro de una visita a la notificación automática al residente.',
        en: 'Visitor and access management, from visitor registration to automated resident notifications.',
      },
      problem: {
        es: 'Coordinar residentes, recepción y administración durante el registro, autorización, ingreso y salida de visitantes.',
        en: 'Coordinating residents, reception and administration through visitor registration, authorization, arrival and departure.',
      },
      role: {
        es: 'Diseñé y configuré el MVP en MasterBase durante mi práctica: puntos de acceso, vistas, bases de datos y procesos automáticos. Documenté la solución y sus flujos.',
        en: 'I designed and configured the MVP in MasterBase during my internship: access points, views, databases and automated processes. I documented the solution and its workflows.',
      },
      solution: {
        es: 'Portales diferenciados para residentes, recepción y administración. El flujo principal registra la visita, envía un pase QR, procesa el ingreso y notifica al residente. El diagrama también contempla visitas frecuentes, salidas y recepción de paquetes.',
        en: 'Separate portals for residents, reception and administration. The main workflow registers a visit, emails a QR pass, records arrival and notifies the resident. The process diagram also covers recurring visitors, departures and parcel reception.',
      },
      results: {
        es: 'MVP documentado en el informe de práctica con capturas del registro, envío del pase y confirmación de ingreso. Las imágenes públicas muestran los portales sin registros personales; no se publican correos, códigos QR ni datos de visitantes.',
        en: 'MVP documented in the internship report with evidence of registration, pass delivery and arrival confirmation. Public images show the portals without personal records; emails, QR codes and visitor data are not published.',
      },
      lessons: {
        es: 'Modelar estados, permisos y notificaciones como un flujo completo, combinando lógica de negocio y herramientas de automatización no-code.',
        en: 'Modelling states, permissions and notifications as a complete workflow, combining business logic with no-code automation tools.',
      },
      technologies: ['MasterBase', 'SmartView', 'SmartData', 'Automatización', 'HTML'],
      image: {
        url: '/projects/sivis/residente.webp',
        alt: {
          es: 'Portal del residente de SIVIS: agenda de visitas, listado y visitas frecuentes.',
          en: 'SIVIS resident portal: scheduling, visitor list and recurring visitors.',
        },
      },
      gallery: [
        {
          url: '/projects/sivis/recepcion.webp',
          alt: {
            es: 'Portal de recepción: ingresos, salidas y gestión de paquetes.',
            en: 'Reception portal: arrivals, departures and parcel management.',
          },
        },
        {
          url: '/projects/sivis/administracion.webp',
          alt: {
            es: 'Portal de administración: historial y gestión de bloqueos.',
            en: 'Administration portal: history and access blocking.',
          },
        },
        {
          url: '/projects/sivis/diagrama.webp',
          alt: {
            es: 'Diagrama de procesos SIVIS v3.0: responsabilidades y automatizaciones por tipo de usuario.',
            en: 'SIVIS v3.0 process diagram: responsibilities and automation by user role.',
          },
        },
      ],
    },
    {
      _id: 'levelup-react',
      slug: 'levelup-react',
      featured: true,
      title: { es: 'LevelUP React', en: 'LevelUP React' },
      category: { es: 'Proyecto académico', en: 'Academic project' },
      summary: {
        es: 'Tienda gamer en React con navegación por categorías, carrito, cuenta de usuario y vistas de administración.',
        en: 'React gaming store with category navigation, a cart, user accounts and administration views.',
      },
      problem: {
        es: 'Migrar una tienda construida en HTML a una aplicación React con componentes reutilizables y navegación entre páginas.',
        en: 'Migrating an HTML store to a React application with reusable components and page navigation.',
      },
      role: {
        es: 'Proyecto académico de desarrollo Full Stack alojado en mi GitHub. El repositorio reúne la migración a React y Vite, las vistas de la tienda y pruebas automatizadas.',
        en: 'Academic full-stack development project hosted on my GitHub. The repository contains the React and Vite migration, store views and automated tests.',
      },
      solution: {
        es: 'Componentes React con React Router y Bootstrap. Contextos para autenticación y carrito, cliente Axios hacia una API Java/Spring Boot en un repositorio complementario, y pruebas con Vitest y Testing Library.',
        en: 'React components with React Router and Bootstrap. Authentication and cart contexts, an Axios client for a Java/Spring Boot API in a companion repository, and tests with Vitest and Testing Library.',
      },
      results: {
        es: 'El código incluye pruebas de autenticación, rutas protegidas, carrito, checkout y componentes. La captura corresponde al frontend ejecutado localmente; no implica una tienda publicada ni valida pagos o servicios backend.',
        en: 'The code includes tests for authentication, protected routes, cart, checkout and components. The screenshot shows the frontend running locally; it does not imply a live store or validation of payments or backend services.',
      },
      technologies: ['React', 'JavaScript', 'Vite', 'Bootstrap', 'Axios', 'Vitest', 'Spring Boot'],
      repository: 'https://github.com/BenjaAranda/LevelUP-react',
      image: {
        url: '/projects/levelup-react/inicio.webp',
        alt: {
          es: 'Inicio de LevelUP React con su portada gamer y categorías, capturado en un entorno local sin backend.',
          en: 'LevelUP React home page with its gaming banner and categories, captured locally without the backend.',
        },
      },
    },
    {
      _id: 'levelup-mobile',
      slug: 'levelup-mobile',
      featured: true,
      year: '2025',
      title: { es: 'LevelUP Móvil', en: 'LevelUP Mobile' },
      category: { es: 'Aplicación Android · Equipo', en: 'Android app · Team project' },
      summary: {
        es: 'Versión Android de LevelUP Gamer con catálogo, carrito, cuenta y navegación nativa.',
        en: 'Android version of LevelUP Gamer with a catalogue, cart, account and native navigation.',
      },
      problem: {
        es: 'Llevar la tienda LevelUP a una experiencia móvil con pantallas y almacenamiento propios de Android.',
        en: 'Bringing the LevelUP store to a mobile experience with Android-native screens and storage.',
      },
      role: {
        es: 'Proyecto académico en equipo con Joaquín Robles y Martín Tobar, según el README. El repositorio no desglosa la autoría individual de cada pantalla.',
        en: 'Academic team project with Joaquín Robles and Martín Tobar, according to the README. The repository does not break down individual screen ownership.',
      },
      solution: {
        es: 'App Kotlin con Jetpack Compose y Material 3. Navigation Compose organiza las pantallas de productos, carrito, registro, cuenta y checkout; Room almacena datos locales y Retrofit/OkHttp consulta una API Flask separada. Incluye una llamada demostrativa a PokeAPI.',
        en: 'Kotlin app using Jetpack Compose and Material 3. Navigation Compose links product, cart, registration, account and checkout screens; Room stores local data, while Retrofit/OkHttp calls a separate Flask API. It also includes a PokeAPI demonstration.',
      },
      results: {
        es: 'Compilé e instalé el APK en un emulador Android. La captura muestra la portada real; el catálogo no cargó porque la API de productos configurada para localhost:5000 no estaba disponible. No se verificaron compras ni autenticación de extremo a extremo.',
        en: 'I built and installed the APK on an Android emulator. The screenshot shows the actual home screen; the catalogue did not load because the product API configured at localhost:5000 was unavailable. Purchases and authentication were not verified end to end.',
      },
      technologies: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Room', 'Retrofit', 'Flask'],
      repository: 'https://github.com/BenjaAranda/AplicacionesMoviles',
      image: {
        url: '/projects/levelup-mobile/inicio.webp',
        alt: {
          es: 'Portada de LevelUP Móvil ejecutada en un emulador Android; se ven el banner, la navegación y la sección de productos sin datos de la API local.',
          en: 'LevelUP Mobile home screen running in an Android emulator, showing the banner, navigation and product section without data from the local API.',
        },
      },
    },
    {
      _id: 'casos-prueba',
      slug: 'casos-prueba',
      featured: true,
      year: '2025',
      title: { es: 'CasosPrueba', en: 'CasosPrueba' },
      category: { es: 'Automatización QA · Equipo', en: 'QA automation · Team project' },
      summary: {
        es: 'Suite de escenarios BDD para probar autenticación, búsqueda, formularios y transferencias en Altoro Mutual.',
        en: 'BDD scenario suite covering authentication, search, forms and transfers in Altoro Mutual.',
      },
      problem: {
        es: 'Comprobar flujos funcionales de un sitio bancario de demostración con casos repetibles y datos de prueba.',
        en: 'Checking functional flows of a demo banking site with repeatable cases and test data.',
      },
      role: {
        es: 'Proyecto académico junto a Joaquín Robles. La presentación indica ambos integrantes y GitHub registra contribuciones de mi cuenta al repositorio de Joaquín; no atribuyo la suite completa a una sola persona.',
        en: 'Academic project with Joaquín Robles. The presentation names both members and GitHub records contributions from my account to Joaquín’s repository; I do not claim sole authorship of the suite.',
      },
      solution: {
        es: 'Escenarios Gherkin ejecutados con Java, Cucumber, Selenium WebDriver y Maven. Apache POI lee casos de transferencia desde Excel; los hooks adjuntan capturas cuando falla un escenario y Masterthought genera un reporte HTML.',
        en: 'Gherkin scenarios run with Java, Cucumber, Selenium WebDriver and Maven. Apache POI reads transfer cases from Excel; hooks attach screenshots on scenario failure and Masterthought generates an HTML report.',
      },
      results: {
        es: 'Ejecuté la suite en un navegador sin ventanas visibles: 18 escenarios y 152 pasos aprobados en el sitio de demostración. La captura muestra el reporte generado en esta revisión. Para la prueba local fue necesario aceptar el certificado HTTPS no confiable de la demo; el cambio quedó solo en la copia de investigación.',
        en: 'I ran the suite in a headless browser: 18 scenarios and 152 steps passed on the demo site. The screenshot shows the report generated during this review. The local run required accepting the demo site’s untrusted HTTPS certificate; that change remained only in the research copy.',
      },
      technologies: ['Java', 'Selenium', 'Cucumber', 'Maven', 'JUnit', 'Apache POI'],
      repository: 'https://github.com/Joaquin-Dev369/CasosPrueba',
      image: {
        url: '/projects/casos-prueba/reporte.webp',
        alt: {
          es: 'Reporte HTML generado tras ejecutar CasosPrueba localmente: 18 escenarios y 152 pasos aprobados.',
          en: 'HTML report generated after running CasosPrueba locally: 18 scenarios and 152 steps passed.',
        },
      },
    },
    {
      _id: 'departamento-t7',
      slug: 'departamento-t7',
      featured: true,
      year: '2026',
      title: { es: 'Departamento T7', en: 'Departamento T7' },
      category: { es: 'Simulación 3D', en: '3D simulation' },
      summary: {
        es: 'Simulador de un departamento amueblado con vistas de inspección y recorrido interactivo.',
        en: 'Furnished apartment simulator with inspection views and an interactive walkthrough.',
      },
      problem: {
        es: 'Traducir planos y medidas del departamento Tipo T7 a un modelo tridimensional que permita revisar la distribución y recorrer los espacios.',
        en: 'Translating plans and measurements of the T7 apartment into a three-dimensional model for inspecting its layout and walking through the rooms.',
      },
      role: {
        es: 'Proyecto independiente. Organicé las referencias y medidas, construí el modelo en Blender y desarrollé el simulador web y su versión en Unreal.',
        en: 'Independent project. I organized the references and measurements, built the model in Blender, and developed the web simulator and its Unreal version.',
      },
      solution: {
        es: 'Modelo GLB exportado desde Blender. La web utiliza React Three Fiber y Three.js para las vistas isométrica y de planta; Rapier gestiona las colisiones del recorrido. Incluye puertas y armarios interactivos. El repositorio conserva también el proyecto Unreal.',
        en: 'GLB model exported from Blender. The web app uses React Three Fiber and Three.js for isometric and floor-plan views; Rapier handles walkthrough collisions. Doors and wardrobes are interactive. The repository also contains the Unreal project.',
      },
      results: {
        es: 'Ejecuté el simulador web desde el repositorio y tomé una nueva captura de su vista exterior; la imagen principal fue proporcionada por el propietario. La publicación actual requiere acceso privado del propietario; el enlace público lleva al código, no a una demo abierta.',
        en: 'I ran the web simulator from the repository and captured a new exterior view; the main image was supplied by the owner. The current deployment requires private owner access; the public link leads to the code, not an open demo.',
      },
      lessons: {
        es: 'Mantener las medidas, el modelo, las colisiones y las vistas sincronizadas desde una misma fuente, y documentar los supuestos donde la referencia no aporta cotas.',
        en: 'Keeping measurements, model, collisions and views synchronized from one source, and documenting assumptions where the reference lacks dimensions.',
      },
      technologies: [
        'Blender',
        'Unreal Engine',
        'React',
        'Three.js',
        'React Three Fiber',
        'Rapier',
        'Vinext',
      ],
      repository: 'https://github.com/BenjaAranda/DepartamentoT7',
      image: {
        url: '/projects/departamento-t7/inspeccion.webp',
        alt: {
          es: 'Simulador Departamento T7: vista isométrica del departamento amueblado con tres dormitorios, baño y logia.',
          en: 'Departamento T7 simulator: isometric view of the furnished apartment with three bedrooms, a bathroom and laundry area.',
        },
      },
      gallery: [
        {
          url: '/projects/departamento-t7/exterior.webp',
          alt: {
            es: 'Vista exterior isométrica de Departamento T7, capturada tras ejecutar localmente el simulador web.',
            en: 'Isometric exterior view of Departamento T7, captured from the locally running web simulator.',
          },
        },
      ],
    },
    {
      _id: 'portafolio-web',
      slug: 'portafolio-web',
      featured: false,
      year: '2026',
      title: { es: 'Portafolio Web', en: 'Web Portfolio' },
      category: { es: 'Proyecto personal', en: 'Personal project' },
      summary: {
        es: 'Sitio bilingüe para presentar perfil, proyectos y certificaciones con fichas basadas en evidencia.',
        en: 'Bilingual site presenting my profile, projects and certifications through evidence-based case studies.',
      },
      problem: {
        es: 'Reunir proyectos de web, Android, automatización y 3D en un lugar claro, accesible y fácil de actualizar.',
        en: 'Bringing web, Android, automation and 3D projects into one clear, accessible and maintainable place.',
      },
      solution: {
        es: 'Next.js App Router, React y TypeScript con rutas en español e inglés. El contenido inicial está tipado y preparado para Sanity; incluye diseño responsivo, metadata, controles de enlaces y pruebas de navegación y accesibilidad con Playwright.',
        en: 'Next.js App Router, React and TypeScript with Spanish and English routes. Initial content is typed and ready for Sanity; the site includes responsive layouts, metadata, link validation and Playwright navigation and accessibility tests.',
      },
      results: {
        es: 'La versión local compila y muestra siete casos bilingües. El código tiene pruebas de datos y navegación; la publicación en producción y la conexión del CMS siguen pendientes.',
        en: 'The local version builds and displays seven bilingual case studies. It includes data and navigation tests; production deployment and CMS connection are still pending.',
      },
      technologies: ['Next.js', 'React', 'TypeScript', 'CSS', 'Playwright', 'Sanity', 'GitHub Actions'],
      repository: 'https://github.com/BenjaAranda/Portafolio-web',
      image: {
        url: '/projects/portafolio-web/inicio.webp',
        alt: {
          es: 'Portada del portafolio local: presentación de Benjamín Aranda, fotografía y navegación principal.',
          en: 'Local portfolio home page showing Benjamín Aranda’s introduction, portrait and main navigation.',
        },
      },
    },
  ],
  skills: [
    {
      _id: 'frontend',
      title: { es: 'Frontend', en: 'Frontend' },
      description: {
        es: 'Interfaces web, componentes, formularios y navegación.',
        en: 'Web interfaces, components, forms and navigation.',
      },
      technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'React Router'],
    },
    {
      _id: 'backend',
      title: { es: 'Backend', en: 'Backend' },
      description: {
        es: 'APIs REST, autenticación y persistencia en proyectos web y móvil.',
        en: 'REST APIs, authentication and persistence across web and mobile projects.',
      },
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'Python', 'Flask', 'APIs REST'],
    },
    {
      _id: 'mobile',
      title: { es: 'Android', en: 'Android' },
      description: {
        es: 'Interfaces nativas, navegación, persistencia local y consumo de APIs.',
        en: 'Native interfaces, navigation, local persistence and API consumption.',
      },
      technologies: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Navigation Compose', 'Room', 'Retrofit'],
    },
    {
      _id: 'automation',
      title: { es: 'Automatización de procesos', en: 'Process automation' },
      description: {
        es: 'Formularios, flujos, notificaciones e integración de registros.',
        en: 'Forms, workflows, notifications and record integration.',
      },
      technologies: ['MasterBase', 'SmartView', 'SmartData'],
    },
    {
      _id: 'data',
      title: { es: 'Datos', en: 'Data' },
      description: {
        es: 'Modelamiento relacional, consultas e importación de datos.',
        en: 'Relational modelling, queries and data imports.',
      },
      technologies: ['PostgreSQL', 'SQL', 'Excel', 'CSV', 'Scrapy'],
    },
    {
      _id: 'testing',
      title: { es: 'Pruebas de software', en: 'Software testing' },
      description: {
        es: 'Pruebas de componentes, flujos web E2E y escenarios BDD con datos Excel.',
        en: 'Component tests, end-to-end web flows and BDD scenarios using Excel data.',
      },
      technologies: ['Vitest', 'Testing Library', 'Playwright', 'Selenium', 'Cucumber', 'JUnit', 'Apache POI'],
    },
    {
      _id: 'tools',
      title: { es: 'Herramientas y metodología', en: 'Tools and methodology' },
      description: {
        es: 'Control de versiones, entorno de desarrollo y trabajo colaborativo.',
        en: 'Version control, development environment and collaborative work.',
      },
      technologies: ['Git', 'GitHub', 'Vite', 'Scrum'],
    },
    {
      _id: 'learning',
      title: { es: 'En aprendizaje', en: 'Currently learning' },
      description: {
        es: 'Formación autodidacta en análisis de datos y visualización.',
        en: 'Independent study in data analysis and visualization.',
      },
      technologies: ['Power BI', 'Data analysis'],
      learning: true,
    },
  ],
  experience: [
    {
      _id: 'masterbase-practica',
      organization: 'MasterBase',
      title: { es: 'Flex Partner · Automatización', en: 'Flex Partner · Automation' },
      period: { es: 'Mar. – jul. 2026', en: 'Mar – Jul 2026' },
      description: {
        es: 'Diseño y configuración de soluciones con SmartView y SmartData. Desarrollo del MVP SIVIS, modelamiento de flujos y documentación técnica, en modalidad remota.',
        en: 'Solution design and configuration with SmartView and SmartData. Development of the SIVIS MVP, workflow modelling and technical documentation, working remotely.',
      },
    },
    {
      _id: 'walmart',
      organization: 'Walmart Chile',
      title: { es: 'Bodeguero', en: 'Warehouse assistant' },
      period: { es: 'Ene. – mar. 2026', en: 'Jan – Mar 2026' },
      description: {
        es: 'Control de inventarios mediante sistemas internos, registro en RC, recepción de camiones y control de productos. Contrato temporal en la Región de Valparaíso.',
        en: 'Inventory control using internal systems, RC records, truck reception and product checks. Temporary position in the Valparaíso Region.',
      },
    },
    {
      _id: 'turbus',
      organization: 'Turbus',
      title: { es: 'Cajero y atención al cliente', en: 'Cashier and customer service' },
      period: { es: 'Nov. 2025 – ene. 2026', en: 'Nov 2025 – Jan 2026' },
      description: {
        es: 'Venta de pasajes, devoluciones, atención en oficina, revisión de alcotest y registro de planillas.',
        en: 'Ticket sales, refunds, office customer service, breathalyzer checks and spreadsheet records.',
      },
    },
    {
      _id: 'gemma',
      organization: 'Sociedad Gemma 2 SpA',
      title: {
        es: 'Atención al cliente y apoyo operativo',
        en: 'Customer service and operations support',
      },
      period: { es: 'Dic. 2022 – mar. 2023', en: 'Dec 2022 – Mar 2023' },
      description: {
        es: 'Atención al público, toma de órdenes, resolución de incidencias en caja, reposición y apoyo en cocina. Algarrobo, Región de Valparaíso.',
        en: 'Customer service, order taking, till issue resolution, restocking and kitchen support. Algarrobo, Valparaíso Region.',
      },
    },
  ],
  education: [
    {
      _id: 'duoc',
      organization: 'Duoc UC',
      title: { es: 'Analista Programador', en: 'Analista Programador' },
      period: { es: 'Feb. 2024 – jul. 2026 · Titulado', en: 'Feb 2024 – Jul 2026 · Graduated' },
      description: {
        es: 'Sede Valparaíso. Nota publicada en LinkedIn: 6,1. Formación en requerimientos, arquitectura de software, desarrollo Full Stack, bases de datos, cloud, calidad y pruebas de software.',
        en: 'Valparaíso campus. Grade listed on LinkedIn: 6.1. Training in requirements, software architecture, full-stack development, databases, cloud, quality and software testing.',
      },
    },
  ],
  certifications: [
    {
      _id: 'excel-avanzado',
      title: 'Excel – de intermedio a avanzado',
      issuer: 'Santander Open Academy',
      date: '2026-09',
      credentialId: 'OA-2026-0915003195792',
    },
    {
      _id: 'excel',
      title: 'Excel',
      issuer: 'Santander Open Academy',
      date: '2026-09',
      credentialId: 'OA-2026-0907003165390',
    },
    {
      _id: 'titulo',
      title: 'Analista Programador',
      issuer: 'Duoc UC',
      date: '2026-08',
      credentialId: '1838109900',
      url: 'https://certificadovalida.duoc.cl/ValidacionQr/validaCertificado',
    },
    {
      _id: 'fullstack',
      title: 'Certificación de Módulo en Programación Fullstack',
      issuer: 'Duoc UC',
      date: '2026-08',
      credentialId: '2008103743',
      url: 'https://certificadovalida.duoc.cl/ValidacionQr/validaCertificado',
    },
    {
      _id: 'efset',
      title: 'EF SET English Certificate — B2 Upper Intermediate',
      issuer: 'EF SET',
      date: '2026-07',
      url: 'https://cert.efset.org/NEyEWs',
    },
    {
      _id: 'mccr',
      title: 'MCCR MasterBase Certified Creator',
      issuer: 'MasterBase',
      date: '2026-06',
      expires: '2027-06',
      credentialId: 'TuidT4EmV1er',
      url: 'https://out.filebunker.com/I1013/6a2831c5db8a5500196860b8/0v1exlsrmbjvv79ou9p1hlv3s17k76uf3hzvfo7ny7ffh9k1pw3c6qn78d496f8t75na8c8c9kym2ufghtj2mvcjt5u6chtixn6b',
    },
    {
      _id: 'masterbase-automatizacion',
      title: 'Descubre Automatización',
      issuer: 'MasterBase',
      date: '2026-04',
      image: {
        url: '/credentials/automatizacion.webp',
        alt: {
          es: 'Certificado Descubre Automatización de Benjamín Aranda, MasterBase, abril de 2026.',
          en: 'Benjamín Aranda’s Descubre Automatización certificate, MasterBase, April 2026.',
        },
      },
    },
    {
      _id: 'masterbase-smartview-inicial',
      title: 'Smartview Inicial',
      issuer: 'MasterBase',
      date: '2026-04',
      image: {
        url: '/credentials/smartview-inicial.webp',
        alt: {
          es: 'Certificado Smartview Inicial de Benjamín Aranda, MasterBase, abril de 2026.',
          en: 'Benjamín Aranda’s Smartview Inicial certificate, MasterBase, April 2026.',
        },
      },
    },
    {
      _id: 'masterbase-smartview-avanzado',
      title: 'Smartview Avanzado',
      issuer: 'MasterBase',
      date: '2026-04',
      expires: '2027-04',
      image: {
        url: '/credentials/smartview-avanzado.webp',
        alt: {
          es: 'Certificado Smartview Avanzado de Benjamín Aranda, MasterBase, abril de 2026.',
          en: 'Benjamín Aranda’s Smartview Avanzado certificate, MasterBase, April 2026.',
        },
      },
    },
  ],
};
