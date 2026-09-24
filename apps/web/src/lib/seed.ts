import type { Portfolio } from './model';
// Verified public repositories and user-supplied internship evidence. See docs/CONTENIDO-FUENTES.md.
export const seed: Portfolio = {
  settings: {
    name: 'Benjamín Aranda',
    email: 'benjamin.aranda.dev@gmail.com',
    linkedin: 'https://www.linkedin.com/in/benjaminarandadev/',
    github: 'https://github.com/BenjaAranda',
    cvEs: '/documents/cv-benjamin-aranda-2026-es.pdf',
    cvEn: '/documents/cv-benjamin-aranda-2026-en.pdf',
  },
  profile: {
    role: {
      es: 'Analista Programador · Desarrollo Full Stack',
      en: 'Software Developer · Full-Stack Development',
    },
    headline: {
      es: 'Desarrollo Full Stack, automatización y análisis de datos.',
      en: 'Full-stack development, automation and data analysis.',
    },
    introduction: {
      es: 'Analista Programador titulado de Duoc UC, con experiencia práctica en desarrollo web Full Stack, automatización de procesos y pruebas de software. Trabajo con Java, Spring Boot, React, TypeScript, SQL y APIs REST.',
      en: 'Duoc UC graduate in software development with practical experience in full-stack web development, process automation and software testing. I work with Java, Spring Boot, React, TypeScript, SQL and REST APIs.',
    },
    bio: {
      es: 'Me interesa desarrollar soluciones claras y mantenibles, desde interfaces web y servicios backend hasta flujos automatizados. He trabajado en proyectos académicos y personales, además de experiencia práctica modelando procesos, validando datos y documentando resultados. Actualmente profundizo mis conocimientos en SQL, Excel, Power BI y análisis de datos.',
      en: 'I am interested in building clear, maintainable solutions, from web interfaces and backend services to automated workflows. My background includes academic and personal projects as well as practical experience modelling processes, validating data and documenting results. I am currently developing my skills in SQL, Excel, Power BI and data analysis.',
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
        es: 'Plataforma para centralizar becas chilenas y encontrar beneficios mediante búsqueda, filtros por perfil y fichas detalladas.',
        en: 'A platform that centralizes Chilean scholarships and finds relevant funding through search, profile filters and detailed listings.',
      },
      problem: {
        es: 'La información de becas estatales, municipales e institucionales está repartida entre múltiples portales. Comparar requisitos como NEM, PAES, tramo del Registro Social de Hogares y ubicación obliga al estudiante a revisar fuentes por separado, con riesgo de perder oportunidades o postular a beneficios incompatibles.',
        en: 'Information about national, municipal and institutional scholarships is spread across multiple portals. Comparing requirements such as grades, PAES scores, household income band and location forces students to check sources separately, increasing the risk of missing opportunities or applying for incompatible funding.',
      },
      role: {
        es: 'Desarrollé funcionalidades de frontend y backend, y trabajé en la preparación, recopilación e importación de datos de becas. Proyecto de título realizado en equipo entre marzo y julio de 2026.',
        en: 'I developed frontend and backend features and worked on scholarship data preparation, collection and import. A team capstone project developed between March and July 2026.',
      },
      solution: {
        es: 'Frontend React, TypeScript, Vite y Tailwind CSS conectado a una API Spring Boot con Spring Security, JPA y PostgreSQL. El catálogo contempla búsqueda libre, combinación y limpieza de filtros, paginación, estados de carga, resultados vacíos, manejo de errores y una ficha con requisitos y enlace oficial. Incluye administración, importación CSV y pruebas E2E con Playwright; la recopilación usa Python y Scrapy en un repositorio complementario.',
        en: 'React, TypeScript, Vite and Tailwind CSS frontend connected to a Spring Boot API with Spring Security, JPA and PostgreSQL. The catalogue covers free-text search, combinable and removable filters, pagination, loading, empty and error states, plus a detailed listing with requirements and the official application link. It includes administration, CSV imports and Playwright E2E tests; collection uses Python and Scrapy in a companion repository.',
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
      gallery: [
        {
          url: '/projects/becasfind/catalogo.webp',
          alt: {
            es: 'Buscador de BecasFind ejecutado localmente, con filtros por RSH, NEM, región, tipo, institución y categoría.',
            en: 'Locally running BecasFind catalogue with filters for household income band, grades, region, scholarship type, institution and category.',
          },
        },
        {
          url: '/projects/becasfind/detalle.webp',
          alt: {
            es: 'Ficha local de una beca con institución, cobertura, fechas, requisitos y acceso a la convocatoria oficial.',
            en: 'Local scholarship detail page showing institution, coverage, dates, requirements and a link to the official call.',
          },
        },
        {
          url: '/projects/becasfind/admin-beca.webp',
          alt: {
            es: 'Formulario administrativo local para crear una beca y registrar sus fechas, requisitos y descripciones.',
            en: 'Local administration form for creating a scholarship and recording its dates, requirements and descriptions.',
          },
        },
      ],
      results: {
        es: 'El informe final documenta 67 casos de prueba y una matriz de trazabilidad. Las imágenes seleccionadas muestran la portada, el catálogo, el detalle y la administración en un entorno local; no se publican credenciales, conexiones de base de datos ni datos de usuarios.',
        en: 'The final report documents 67 test cases and a traceability matrix. The selected images show the landing page, catalogue, detail view and administration in a local environment; credentials, database connections and user data are not published.',
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
        es: 'MVP no-code para digitalizar el control de visitas residenciales: pre-registro, pases QR, validación en portería, estados y notificaciones.',
        en: 'A no-code MVP for digitising residential visitor access: pre-registration, QR passes, reception validation, status tracking and notifications.',
      },
      problem: {
        es: 'El proceso tradicional dependía de libros físicos o planillas aisladas, llamadas por citófono y validaciones visuales. Esto generaba demoras, poca trazabilidad para auditorías, riesgo de suplantación y una comunicación fragmentada entre residentes y portería.',
        en: 'The traditional process relied on paper logbooks or isolated spreadsheets, intercom calls and visual checks. This caused delays, poor audit traceability, impersonation risks and fragmented communication between residents and reception staff.',
      },
      role: {
        es: 'Durante mi práctica profesional en MasterBase analicé el problema, diseñé y configuré el MVP. Construí Access Points para Administración, Residente y Recepción; modelé bases relacionales en SmartData; preparé SmartViews, formularios y procesos automáticos; y documenté la arquitectura y el flujo operativo.',
        en: 'During my professional internship at MasterBase, I analysed the problem and designed and configured the MVP. I built Access Points for Administration, Residents and Reception, modelled relational data in SmartData, prepared SmartViews, forms and automated processes, and documented the architecture and operating flow.',
      },
      solution: {
        es: 'La solución separa las tareas por rol mediante portales para residentes, recepción y administración. También contempla visitas frecuentes, listas negras, salidas, historial de accesos y recepción de paquetes.\n\nEn el flujo principal, el residente completa el pre-registro; un proceso guarda la visita en la base maestra, confirma el agendamiento y envía por correo un pase QR. En portería se verifica el pase, se registra el ingreso, se actualiza el estado y se notifica al residente. La arquitectura se configuró dentro del ecosistema SaaS de MasterBase, sin servidores dedicados para este MVP.',
        en: 'The solution separates tasks by role through portals for residents, reception staff and administrators. It also covers recurring visitors, blocklists, departures, access history and parcel reception.\n\nIn the main flow, the resident completes pre-registration; a process stores the visit in the master database, confirms the booking and emails a QR pass. Reception staff verify the pass, record arrival, update its status and notify the resident. The architecture was configured within the MasterBase SaaS ecosystem, without dedicated servers for this MVP.',
      },
      results: {
        es: 'El informe de práctica documenta una primera versión funcional estimada en 4 a 5 semanas de configuración y pruebas QA, con 12 figuras que recorren los portales, el pre-registro, las automatizaciones y las confirmaciones. La evidencia pública se limita a interfaces vacías o anonimizadas: se excluyen correos, códigos QR, identificadores internos y datos de visitantes.',
        en: 'The internship report documents a first functional version estimated at four to five weeks of configuration and QA, with 12 figures covering the portals, pre-registration, automations and confirmations. Public evidence is limited to empty or anonymised interfaces: emails, QR codes, internal identifiers and visitor data are excluded.',
      },
      lessons: {
        es: 'Aprendí a traducir una operación real a estados, permisos, datos relacionales y notificaciones coordinadas. El proyecto reforzó mi capacidad para combinar análisis funcional, diseño de procesos, seguridad de la información y automatización no-code/low-code.',
        en: 'I learned to translate a real operation into coordinated states, permissions, relational data and notifications. The project strengthened my ability to combine functional analysis, process design, information security and no-code/low-code automation.',
      },
      technologies: ['MasterBase', 'SmartView', 'SmartData', 'No-Code/Low-Code', 'HTML', 'QR'],
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
          url: '/projects/sivis/pre-registro.webp',
          alt: {
            es: 'Formulario vacío de pre-registro SIVIS para datos del invitado, fecha de llegada y datos del residente.',
            en: 'Empty SIVIS pre-registration form for visitor details, arrival date and resident details.',
          },
        },
        {
          url: '/projects/sivis/visita-agendada.webp',
          alt: {
            es: 'Confirmación de SIVIS tras agendar una visita y generar el pase de acceso; la barra de cuenta fue retirada por privacidad.',
            en: 'SIVIS confirmation after scheduling a visitor and generating the access pass; the account toolbar was removed for privacy.',
          },
        },
        {
          url: '/projects/sivis/ingreso-completado.webp',
          alt: {
            es: 'Confirmación de ingreso completado con los registros de acceso y las notificaciones activadas.',
            en: 'Completed arrival confirmation with access records and notifications activated.',
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
        es: 'E-commerce gamer full stack con catálogo, carrito, autenticación, rutas protegidas y panel de administración.',
        en: 'Full-stack gaming e-commerce with a catalogue, cart, authentication, protected routes and an administration panel.',
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
        es: 'Componentes React con React Router y React-Bootstrap, contextos para autenticación y carrito, y cliente Axios. El backend complementario usa Java 21, Spring Boot 3.4, controladores REST bajo /api/v1, Spring Data JPA/Hibernate, PostgreSQL y autenticación stateless con JWT. La interfaz incorpora búsqueda, filtros, control de stock, checkout y CRUD de productos, categorías, usuarios y órdenes.',
        en: 'React components with React Router and React-Bootstrap, authentication and cart contexts, and an Axios client. The companion backend uses Java 21, Spring Boot 3.4, REST controllers under /api/v1, Spring Data JPA/Hibernate, PostgreSQL and stateless JWT authentication. The interface includes search, filters, stock control, checkout and CRUD flows for products, categories, users and orders.',
      },
      results: {
        es: 'El código incluye pruebas de autenticación, rutas protegidas, carrito, checkout y componentes. Las capturas muestran el frontend, el panel administrativo y la documentación OpenAPI en entornos locales; no implican una tienda publicada ni validan pagos reales.',
        en: 'The code includes tests for authentication, protected routes, cart, checkout and components. The screenshots show the frontend, administration panel and OpenAPI documentation in local environments; they do not imply a live store or validate real payments.',
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
      gallery: [
        {
          url: '/projects/levelup-react/catalogo.webp',
          alt: {
            es: 'Catálogo local de LevelUP React con búsqueda, filtros de categoría y precio, stock y acciones de carrito.',
            en: 'Local LevelUP React catalogue with search, category and price filters, stock and cart actions.',
          },
        },
        {
          url: '/projects/levelup-react/administracion.webp',
          alt: {
            es: 'Panel de administración con gestión de productos, categorías, usuarios, órdenes y stock crítico.',
            en: 'Administration panel covering products, categories, users, orders and low-stock management.',
          },
        },
        {
          url: '/projects/levelup-react/api-openapi.webp',
          alt: {
            es: 'Documentación OpenAPI local del backend Spring Boot con endpoints versionados de ventas, productos y autenticación.',
            en: 'Local OpenAPI documentation for the Spring Boot backend, showing versioned sales, product and authentication endpoints.',
          },
        },
      ],
    },
    {
      _id: 'levelup-mobile',
      slug: 'levelup-mobile',
      featured: false,
      year: '2025',
      title: { es: 'LevelUP Móvil', en: 'LevelUP Mobile' },
      category: { es: 'Aplicación Android · Equipo', en: 'Android app · Team project' },
      summary: {
        es: 'Versión Android de LevelUP Gamer con arquitectura MVVM, catálogo, carrito, cuenta, Room e integraciones nativas.',
        en: 'Android version of LevelUP Gamer with MVVM architecture, a catalogue, cart, account, Room and native integrations.',
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
        es: 'App Kotlin con Jetpack Compose y Material 3 organizada con MVVM. Navigation Compose conecta catálogo, filtros por categoría y precio, carrito con descuento Duoc, registro, cuenta y checkout. Room estructura entidades, DAO y base local; Retrofit/OkHttp consulta una API Flask separada. También integra soporte por WhatsApp y calendario para eventos del blog.',
        en: 'Kotlin app using Jetpack Compose and Material 3, organized with MVVM. Navigation Compose connects the catalogue, category and price filters, a cart with a Duoc discount, registration, account and checkout. Room structures entities, DAOs and the local database; Retrofit/OkHttp calls a separate Flask API. It also integrates WhatsApp support and calendar events from the blog.',
      },
      results: {
        es: 'Las capturas aportadas muestran la portada, el filtrado de productos y el carrito en Android. En mi verificación independiente compilé e instalé el APK, pero la API local configurada en localhost:5000 no estuvo disponible; por eso no afirmo una compra o autenticación validada de extremo a extremo.',
        en: 'The supplied screenshots show the Android home screen, product filtering and cart. In my independent review I built and installed the APK, but the local API configured at localhost:5000 was unavailable, so I do not claim end-to-end purchase or authentication validation.',
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
      gallery: [
        {
          url: '/projects/levelup-mobile/filtros.webp',
          alt: {
            es: 'Pantalla Android de productos con buscador, filtros de orden, categoría y precio, y navegación inferior.',
            en: 'Android product screen with search, order, category and price filters, plus bottom navigation.',
          },
        },
        {
          url: '/projects/levelup-mobile/carrito.webp',
          alt: {
            es: 'Carrito de LevelUP Móvil con cantidades, precio unitario, subtotal y eliminación de productos.',
            en: 'LevelUP Mobile cart with quantities, unit price, subtotal and product removal.',
          },
        },
      ],
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
        es: 'Escenarios Gherkin ejecutados con Java 17, Cucumber, Selenium WebDriver y Maven. Apache POI lee usuarios, cuentas y montos desde Excel para pruebas data-driven; hooks adjuntan capturas en pasos críticos y fallos, y Masterthought genera el reporte HTML. La suite incorporó esperas explícitas y manejo defensivo de alertas para reducir fallos intermitentes.',
        en: 'Gherkin scenarios run with Java 17, Cucumber, Selenium WebDriver and Maven. Apache POI reads users, accounts and amounts from Excel for data-driven tests; hooks attach screenshots at critical steps and on failure, while Masterthought generates the HTML report. The suite added explicit waits and defensive alert handling to reduce intermittent failures.',
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
      gallery: [
        {
          url: '/projects/casos-prueba/altoro-demo.webp',
          alt: {
            es: 'Sitio bancario Altoro Mutual, identificado explícitamente como demostración, usado como objetivo de la suite automatizada.',
            en: 'Altoro Mutual banking site, explicitly labelled as a demo, used as the target for the automated suite.',
          },
        },
        {
          url: '/projects/casos-prueba/traceability.webp',
          alt: {
            es: 'Matriz que vincula requerimientos, funcionalidades y escenarios de prueba automatizados.',
            en: 'Traceability matrix linking requirements, features and automated test scenarios.',
          },
        },
        {
          url: '/projects/casos-prueba/quality-metrics.webp',
          alt: {
            es: 'Resumen de métricas de la ejecución documentada para login, transferencias, búsqueda, feedback y cierre de sesión.',
            en: 'Quality metrics summary for the documented login, transfer, search, feedback and logout execution.',
          },
        },
      ],
    },
    {
      _id: 'departamento-t7',
      slug: 'departamento-t7',
      featured: false,
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
        {
          url: '/projects/departamento-t7/referencia-plano.webp',
          alt: {
            es: 'Referencia isométrica entregada para modelar la distribución, terminaciones y equipamiento del departamento T7.',
            en: 'Supplied isometric reference used to model the T7 apartment layout, finishes and fixtures.',
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
      title: { es: 'Desarrollo móvil', en: 'Mobile development' },
      description: {
        es: 'Interfaces móviles, navegación, persistencia local y consumo de APIs.',
        en: 'Mobile interfaces, navigation, local persistence and API consumption.',
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
        es: 'Control de versiones, asistentes de desarrollo, terminal y trabajo colaborativo.',
        en: 'Version control, development assistants, terminal and collaborative work.',
      },
      technologies: ['Git', 'GitHub', 'Vite', 'Scrum', 'Codex', 'OpenCode', 'Warp'],
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
      _id: 'ibm-sql-relational-databases',
      title: 'SQL and Relational Databases 101',
      issuer: 'IBM Skills Network',
      date: '2026-09',
      credentialId: 'f0d0dbf99cbe43dda89d4f9f9f2f9d26',
      url: 'https://courses.cognitiveclass.ai/certificates/f0d0dbf99cbe43dda89d4f9f9f2f9d26',
      file: '/credentials/sql-and-relational-databases-101.pdf',
    },
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
