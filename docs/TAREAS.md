# Estado de implementación

## Implementado localmente

- [x] Incorporar LinkedIn, GitHub y BecasFind con ficha bilingüe y enlace a repositorio.
- [x] Mantener encabezado visible y comprobar adaptación en cinco anchos de pantalla.
- [x] Incorporar logos GitHub/LinkedIn y ordenar cuatro tarjetas de proyectos en dos filas equilibradas.

- [x] Workspaces Next.js y Sanity Studio.
- [x] Perfil junior sobrio: presentación, proyectos, capacidades, certificaciones, formación y contacto. Dirección visual documentada en DISENO.md.
- [x] Certificaciones con estado vacío honesto y enlaces de verificación seguros al cargar contenido.
- [x] Simplificación completa de estilos y revisión visual en escritorio/móvil con agent-browser.
- [x] Portada, índice, plantilla de casos, privacidad y estados 404/error.
- [x] Idiomas ES/EN con URLs localizadas.
- [x] Contrato tipado y datos iniciales basados en el brief.
- [x] Consulta de contenido publicado y revalidación horaria.
- [x] Endpoint con firma de webhook y tipos permitidos.
- [x] Esquemas administrativos para perfil, proyectos, capacidades, experiencia, educación, certificados y CV.
- [x] Prevención de duplicación de documentos únicos en Studio.
- [x] Metadata, Open Graph, robots, sitemap y modo noindex por defecto.
- [x] Integración de archivos, contacto y analítica condicional.
- [x] Workflow de calidad y pruebas automatizadas.
- [x] Manual de configuración y administración.

## Requiere contenido o cuentas del propietario

- [x] Corregir avisos altos de dependencias indirectas mediante actualizaciones acotadas; auditoría reducida de 13 a 6 avisos moderados.
- [ ] Resolver aviso de uuid vía typeid-js y sus dependientes del editor (6 avisos moderados). Verificar compatibilidad antes de cambiar de versión principal.
- [x] Nombre profesional, correo, CV en español y enlaces reales de LinkedIn/GitHub.
- [x] Siete casos bilingües: BecasFind, SIVIS, LevelUP React, LevelUP Móvil, CasosPrueba, Departamento T7 y Portafolio Web, con capturas identificadas por su origen.
- [x] Revisar dependencias y configuración de BecasFind, ScraperBecasFind, LevelUP React, backend Java, app Android, backend Flask y CasosPrueba; incorporar Playwright y el stack omitido.
- [x] Volver a ejecutar los frontends BecasFind, LevelUP React y Departamento T7; compilar e instalar LevelUP Móvil en emulador y renovar capturas.
- [ ] Rotar las credenciales por defecto expuestas en el backend Flask público y moverlas a configuración segura antes de ejecutarlo contra la base remota.
- [x] Crear el repositorio público `BenjaAranda/Portafolio-web`, subir commits separados y activar informes privados de seguridad.
- [x] Incorporar Departamento T7 desde el repositorio público y la captura proporcionada.
- [x] Leer LinkedIn mediante sesión disponible: perfil, educación, experiencias, ocho credenciales y aptitudes.
- [x] Reorganizar stack, retirar eslóganes ES/EN e incorporar logos y certificados desplegables.
- [x] Incorporar la fotografía personal y el material de Departamento T7 entregados por el propietario.
- [ ] CV en inglés y revisión de traducciones. El CV en español ya está publicado.
- [x] Práctica MasterBase, fechas y tres cursos sustentados por el informe y sus certificados.
- [x] Incorporar enlaces publicados de EF SET, MCCR y validación de Duoc; conservar evidencias locales MasterBase.
- [ ] Recibir archivos o enlaces de los cursos Santander si se desea mostrar el documento.
- [x] Preparar importador no destructivo de contenido e imágenes para Sanity.
- [ ] Crear/configurar Sanity; ejecutar el importador, publicar Studio y verificar acceso con cuenta no autorizada.
- [ ] Cargar y revisar contenido real en CMS.
- [x] Crear proyecto `portafolio-web` en Vercel y verificar primera compilación remota con `SITE_READY=false`.
- [x] Autorizar la conexión GitHub–Vercel y conectar `main` como rama de producción con contenido de Sanity.
- [ ] Probar ciclo remoto crear/editar/retirar y cambiar CV con webhook.
- [ ] Elegir dominio y revisar cuotas/condiciones de servicios.
- [ ] Exportar y probar restauración de contenido real.
- [ ] QA con imágenes y casos reales, Safari/iOS y lector de pantalla.
- [x] Medición Lighthouse local: rendimiento 95, accesibilidad 100 y buenas prácticas 100; informe móvil en backups/research-sivis.
- [ ] Repetir medición en despliegue y revisión final antes de activar indexación.

## Después del MVP

- [ ] Preview autenticado de borradores (distinto de preview de código).
- [ ] Historial/redirecciones de slugs si se necesitan cambios frecuentes.
- [ ] Backups programados y avisos de fallo.
- [ ] Tema oscuro, filtros o blog solo si se aprueban.

No está completada la publicación del MVP. El código local permite avanzar y revisar el diseño sin fabricar contenido ni requerir credenciales para la preview.
