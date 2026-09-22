# Contenido incorporado el 19 de septiembre de 2026

## Contacto y CV

- Correo profesional facilitado directamente por Benjamín: `benjamin.aranda.dev@gmail.com`.
- CV en español `CV-BenjaminAranda-2026.pdf`, facilitado por Benjamín y revisado visualmente antes de publicarlo como archivo en Sanity.

## Auditoría de repositorios y nuevas capturas · 20 de septiembre de 2026

- Portafolio Web: proyecto personal de este repositorio. La captura de la ficha procede del inicio local a 1440×900. La ficha no anuncia una demo pública ni presenta la integración de Sanity o el despliegue Vercel como terminados.

- [BecasFind](https://github.com/BenjaAranda/BecasFind): se revisaron README, `frontend/package.json`, `frontend/playwright.config.ts`, los cuatro archivos E2E, `backend/pom.xml` y `application.yml`. Stack confirmado: React, TypeScript, Vite, Tailwind CSS, Java/Spring Boot, Spring Security, JPA, PostgreSQL y Playwright. El README conserva menciones antiguas de MySQL, pero la configuración principal del backend usa PostgreSQL por defecto. [ScraperBecasFind](https://github.com/BenjaAranda/ScraperBecasFind) es un repositorio complementario con Python, Scrapy y Scrapy-Playwright. Se arrancó el frontend sin backend y se renovó su captura; no se afirma que búsqueda, login o pruebas E2E hayan pasado en esta revisión.
- [LevelUP React](https://github.com/BenjaAranda/LevelUP-react): se revisó la aplicación anidada `LevelUP-react/LevelUP-react`, su `package.json`, rutas y cliente Axios. El frontend React/Vite/Bootstrap/Vitest apunta a una API Java/Spring Boot en localhost:8080 documentada por [Backend-LevelUP-fullstack](https://github.com/BenjaAranda/Backend-LevelUP-fullstack), cuya configuración incluye PostgreSQL, Spring Security y JWT. Se ejecutó el frontend sin backend y se renovó la captura de su portada. No se probó checkout ni pago.
- [AplicacionesMoviles](https://github.com/BenjaAranda/AplicacionesMoviles): README y código Android confirman proyecto en equipo de Benjamín Aranda, Joaquín Robles y Martín Tobar. Gradle y fuentes muestran Kotlin, Jetpack Compose, Material 3, Navigation Compose, Room, Retrofit/OkHttp, pruebas JUnit/MockK y pantallas de tienda. Compilación `:app:assembleDebug` correcta; APK instalado en `Medium_Phone_API_36.1`, con captura real del inicio. El catálogo quedó vacío porque espera una API local en el puerto 5000. El repositorio [Backend-LevelUP](https://github.com/BenjaAranda/Backend-LevelUP) contiene un servidor Flask/PostgreSQL relacionado; no se ejecutó porque su arranque puede modificar una base remota y su código expone credenciales por defecto. Se debe rotar cualquier credencial real antes de publicarlo o desplegarlo.
- [CasosPrueba](https://github.com/Joaquin-Dev369/CasosPrueba): repositorio de Joaquín Robles con contribuciones registradas de `BenjaAranda`; la presentación del propietario nombra a ambos integrantes. `pom.xml`, archivos `.feature`, steps y utilidades confirman Java, Selenium, Cucumber, Maven, JUnit, Apache POI y reporte Masterthought. Compiló con Maven/JDK 17. La primera ejecución falló antes de alcanzar la app por el certificado HTTPS no confiable de `demo.testfire.net`. En la copia ignorada de investigación se activó Chrome headless y `acceptInsecureCerts`; la segunda ejecución generó `target/cucumber.json` y Surefire XML con 18 escenarios, 152 pasos y cero fallos. Maven tiene `testFailureIgnore=true`, por lo que se verificaron los reportes y no solo el código de salida. La captura pública proviene del HTML nuevo generado con Masterthought, no de la presentación histórica. Ninguno de esos ajustes se hizo en el repositorio de origen.
- [DepartamentoT7](https://github.com/BenjaAranda/DepartamentoT7): se clonó el repositorio, se ejecutó `web/` con Vinext/Vite y se capturó una vista exterior. La captura principal de inspección sigue siendo la proporcionada por el propietario; la nueva captura aparece como imagen adicional. La app cargó sin overlay de error y mostró sus controles de inspección.
- Las capturas se convirtieron mecánicamente a WebP. Las fuentes originales y clones de investigación están en `backups/research-repos/`, excluido de Git. No se publicaron credenciales, datos de usuarios ni material de sistemas ajenos.

## Material incorporado el 20 de septiembre de 2026

- Ajuste visual posterior: iconos GitHub y LinkedIn procedentes de [Devicon](https://github.com/devicons/devicon), revisión `7330accdbc47e2dc0c19789a48533c4a3c50fe58`, convertidos a WebP de 64 px. La licencia MIT se conserva junto a los iconos en `public/brands/social/LICENSE.txt`. Son decorativos junto a enlaces con texto accesible. Las cuatro tarjetas se organizan en dos filas parejas en escritorio y se apilan en móvil.

- Departamento T7: [repositorio público del propietario](https://github.com/BenjaAranda/DepartamentoT7), README raíz, `web/README.md`, `web/package.json` y estructura de archivos consultados. Incluye fuentes de Blender, modelo GLB, simulador web con Three.js/React Three Fiber y Rapier, y proyecto Unreal. Se redactó un caso bilingüe sin atribuir métricas de uso o rendimiento.
- La captura de inspección isométrica del simulador fue proporcionada directamente por el propietario. Se convirtió a WebP sin cambiar su composición; la ficha enlaza al código público. El propio README del repositorio indica que el despliegue actual requiere acceso privado y que GitHub Pages todavía está pendiente, por lo que no se añadió una demo pública.
- El retrato fue proporcionado directamente por el propietario. Se convirtió a WebP y se muestra en el panel de perfil con texto alternativo; no se generó un rostro nuevo ni se incorporó una imagen de terceros.
- Las dos conversiones WebP pesan 93.556 y 44.300 bytes, respectivamente. Se preservan las fuentes originales fuera de la carpeta pública del sitio.

## Revisión posterior con LinkedIn accesible

Esta sección sustituye las limitaciones de lectura de LinkedIn descritas en el historial inferior. Se leyó el perfil mediante la sesión de navegador disponible, incluyendo Acerca de, experiencias, educación, ocho certificaciones, proyecto BecasFind y treinta aptitudes. Se excluyeron la cuenta autenticada, mensajes, contactos y recomendaciones de terceros.

- Perfil: Analista Programador titulado; Valparaíso, Chile; desarrollo Full Stack y backend Java/Spring Boot. Análisis de datos y Power BI se mantienen como estudio autodidacta, no experiencia laboral acreditada. Inglés B2 según EF SET.
- Educación: Duoc UC, febrero 2024–julio 2026, nota 6,1 publicada en el perfil, título expedido en agosto 2026.
- MasterBase: Flex Partner marzo–julio de 2026. El propietario confirmó expresamente mantener julio pese a la fecha de cierre de práctica del informe. No se presentan las 360 horas como duración de todo el período.
- Experiencias adicionales: Walmart Chile enero–marzo 2026; Turbus noviembre 2025–enero 2026; Sociedad Gemma 2 SpA diciembre 2022–marzo 2023. Descripciones concretas, sin métricas de impacto inventadas.
- Ocho credenciales de LinkedIn: dos cursos Excel de Santander Open Academy (septiembre 2026), título y módulo Fullstack de Duoc UC (agosto 2026), EF SET B2 (julio 2026), MCCR (junio 2026, vencimiento junio 2027), Descubre Automatización y Smartview Avanzado (abril 2026; este último vence abril 2027). Se conserva Smartview Inicial del informe, total nueve.
- Duoc enlaza al formulario de validación y muestra el ID requerido, no un enlace que se describa como validación automática. EF SET y MCCR utilizan destinos publicados en el perfil. No se realizó una validación independiente de autenticidad de todas las credenciales.
- Certificados MasterBase desplegables: imágenes extraídas previamente del informe, con nombre, título y fecha legibles. No contienen RUT, dirección ni contactos privados.

### Imágenes y licencias

- Logos de Duoc UC, MasterBase, Santander Open Academy y EF SET: descargados exclusivamente desde los elementos institucionales visibles del perfil mediante el inventario de recursos del navegador. No se copió la fotografía de la cuenta autenticada ni imágenes de personas sugeridas. Guardados como WebP de 100 px para uso identificativo.
- Logos SIVIS y LevelUP: material suministrado y repositorio del propietario, respectivamente. Versiones pequeñas en /brands.
- Iconos tecnológicos: [Devicon](https://github.com/devicons/devicon), revisión `7330accdbc47e2dc0c19789a48533c4a3c50fe58`; doce recursos seleccionados, convertidos a WebP de 64 px. Licencia MIT conservada en public/brands/tech/LICENSE.txt. Las marcas pertenecen a sus titulares; su uso identifica tecnologías y no implica respaldo.
- No se añadieron fotos de stock. Posteriormente, el propietario entregó un retrato para el perfil, documentado en la sección del 20 de septiembre.

### Redacción y estructura

Eliminadas las frases motivacionales en ES/EN, incluido metadata, contacto y pie de página. Stack separado en frontend, backend, automatización, datos, pruebas, herramientas/metodología y aprendizaje. Los iconos no representan niveles de dominio. Revisión de diseño en DISENO-ACTUAL.md.

## Historial previo

- LinkedIn entregado por el propietario: https://www.linkedin.com/in/benjaminarandadev/. La lectura automática fue bloqueada; solo se incorporó el enlace.
- Repositorio entregado: https://github.com/BenjaAranda/BecasFind. README público consultado para nombre, descripción, tecnologías y atribución de contribuciones. No se publicaron correos institucionales del README ni datos del coautor.
- Se ejecutó el frontend público de BecasFind localmente para capturar su inicio. No se validó el backend ni se ejecutaron sus pruebas. No se atribuyen métricas de impacto o despliegue. El README contiene referencias tanto a MySQL como PostgreSQL: no se eligió un motor como dato definitivo.
- La portada tipográfica inicial se reemplazó por una captura real del frontend, sin simular becas ni usuarios.

Diseño: fondo de presentación azul #183a4b, panel #234959, acción menta #b4e8dc y portada de proyecto #daebe5; resto blanco y tinta. Segoe UI para identidad y navegación. El proyecto real es el foco visual tras el perfil. Encabezado sticky y menú móvil desde 960px; desplazamiento con espacio para títulos.

## Ampliación con repositorios y documentos del propietario

- GitHub: en la primera revisión del listado público de BenjaAranda no aparecía Departamento T7. Se incorporó posteriormente cuando el repositorio pasó a ser público y el propietario entregó su captura.
- LevelUP React: https://github.com/BenjaAranda/LevelUP-react. Se inspeccionaron package.json, Home.jsx, AuthProvider.jsx, el cliente Axios, rutas y nombres de pruebas. El README conserva el texto de la plantilla y no se utilizó como descripción del producto. La contribución individual detallada sigue pendiente de confirmación; no se afirma autoría exclusiva.
- Captura LevelUP: frontend del repositorio ejecutado localmente, sin backend ni datos simulados. Solo se captura el inicio con categorías estáticas. La existencia de pruebas no equivale a que hayan pasado: no se ejecutó la suite de ese repositorio.
- SIVIS: informe de práctica DOCX, PDF DiagramaSIVIS v3.0 y revisión visual parcial del video suministrados por el propietario. El texto del informe acredita práctica remota en MasterBase, del 30 de marzo al 3 de junio de 2026, 360 horas, y describe el MVP de control de visitas.
- Imágenes SIVIS: image3.png (residente), image2.png (administración) e image4.png (recepción), extraídas del DOCX; diagrama renderizado desde el PDF. Inspeccionadas visualmente antes de publicar. No se incluyen datos de visitantes, correos, QR, identificadores de cuentas, firmas de validación ni enlaces privados del informe.
- Certificaciones: anexos image17.png, image18.png e image19.png del DOCX, con nombre Benjamín Aranda y fecha abril de 2026. Títulos mostrados: Descubre Automatización, Smartview Avanzado y Smartview Inicial. Se publican título, emisor y mes; no se inventan enlaces de verificación ni días de emisión.
- Video SIVIS: dura aproximadamente 129 segundos; se revisaron fotogramas, no el audio completo. No se publica el MP4 de 255 MB ni se considera evidencia adicional de funcionalidad. El logo suministrado es una imagen PNG codificada en base64; no fue necesario añadir otra imagen decorativa a las capturas de portales.
- LinkedIn rechaza la lectura pública automática (999). Se solicitó PDF o capturas del perfil. Firecrawl CLI está disponible pero sin autenticar; se usaron GitHub público/API y archivos locales, sin subir documentos a servicios de scraping.

## Tratamiento visual y medios

Plan de diseño: conservar blanco #ffffff, tinta #243746, azul #183a4b, panel #234959, menta #b4e8dc y fondo suave #f1f5f6. Segoe UI para títulos e interfaz, textos alineados a la izquierda. BecasFind ocupa la fila principal en escritorio; SIVIS y LevelUP comparten la siguiente. En móvil, una columna. Las interfaces reales aportan identidad sin añadir decoraciones genéricas.

Seis imágenes WebP locales, aproximadamente 411 KiB en total, con carga diferida salvo la portada del detalle. Se preservan los encuadres completos (object-fit contain), se ofrecen pies de imagen bilingües y apertura de galerías a tamaño completo. Solo se aceptan rutas locales estrictas bajo /projects y el CDN de Sanity. Las fuentes de investigación permanecen en backups, fuera del control de versiones y de la carpeta pública.
