# Verificación local — 18 de septiembre de 2026

## Actualización del 21 de septiembre

- BecasFind y LevelUP React: portadas ejecutadas con Vite y capturadas de nuevo. Departamento T7: simulador web ejecutado con Vinext y nueva captura exterior. Las tres páginas cargaron sin overlay de error. No se validaron los backends de BecasFind ni de LevelUP React.
- LevelUP Móvil: `:app:assembleDebug` correcto con JDK 17; APK instalado y portada capturada en un emulador Android. El catálogo no recibió datos al no estar disponible su API local. No se ejecutó el backend Flask con credenciales por defecto vinculadas a una base remota.
- CasosPrueba: compilación Maven correcta. La primera ejecución encontró un certificado HTTPS no confiable en el sitio de prueba; la segunda, con Chrome headless y aceptación de ese certificado solo en la copia ignorada, produjo 18 escenarios y 152 pasos aprobados. Se confirmaron `target/cucumber.json` y Surefire XML; el `pom.xml` ignora fallos para el código de salida, por lo que este se verificó aparte. Se capturó el reporte HTML nuevo.
- El portafolio muestra seis fichas destacadas en el inicio y una séptima del propio sitio en el índice. TypeScript de web y Studio, ESLint, compilación de producción y 13 pruebas de datos pasaron. También pasaron 22 pruebas de navegador en escritorio y móvil, incluidas carga de imágenes de las siete fichas en ambos idiomas, cuadrícula responsiva y comprobaciones automáticas de accesibilidad en las rutas cubiertas.
- `BenjaAranda/Portafolio-web` se creó como repositorio público. Se activaron alertas de dependencias, actualizaciones de seguridad y reporte privado de vulnerabilidades. La publicación en GitHub no equivale a un despliegue de la web en Vercel.

## Actualización del 20 de septiembre

### Reorganización posterior de tarjetas y redes

- Reorganización de proyectos: cuatro tarjetas en cuadrícula 2×2 en escritorio y una columna en móvil; alturas y acciones alineadas por fila. Iconos GitHub/LinkedIn visibles en perfil y contacto, y GitHub en cada tarjeta con repositorio público. Capturas de revisión en `backups/research-sivis/cards-after-desktop.png` y `cards-after-mobile.png`.
- Compilación de producción, TypeScript, ESLint y 13 pruebas unitarias correctos. Las 22 pruebas de navegador pasan en escritorio y móvil, incluidas las nuevas comprobaciones de logos cargados y posiciones de las tarjetas. La primera ejecución reveló que imágenes diferidas fuera de pantalla no se cargan hasta desplazarse; la prueba ahora reproduce ese comportamiento del navegador.

### Incorporación previa de Departamento T7

- Departamento T7 incorporado como cuarto caso bilingüe con enlace al repositorio público y captura entregada por el propietario. La foto personal se muestra en el perfil, con texto alternativo. Ambas imágenes están optimizadas en WebP; el enlace privado al simulador no se presenta como demo pública.
- Compilación de producción, TypeScript, ESLint y 13 pruebas unitarias correctos. Las 20 pruebas de navegador pasan en escritorio y móvil: comprueban retrato, imágenes de los cuatro casos en ambos idiomas, navegación, anchuras y accesibilidad automática WCAG A/AA en las rutas cubiertas.
- Revisión visual del inicio en escritorio/móvil y del detalle T7 a 390 px con agent-browser: contenido presente, imágenes cargadas y sin desbordamiento horizontal ni pantalla de error. Capturas en `backups/research-sivis/`, fuera de Git.

## Actualización del 19 de septiembre

- Revisión posterior LinkedIn/diseño: 13 pruebas unitarias y 20 de navegador aprobadas; build web y Studio, TypeScript y lint correctos. Nueve credenciales, cuatro experiencias y categorías del stack verificadas en datos y páginas. Certificados desplegables y logos institucionales cargan correctamente.
- La prueba responsive ahora recorre el menú real para cada anchura. El fallo inicial ocurría al redimensionar y reutilizar la misma URL con fragmento, conservando el desplazamiento anterior; se eliminó esa dependencia del test y se comprobó el flujo de navegación del usuario.
- Lighthouse móvil local (/es, compilación de producción): rendimiento 95, accesibilidad 100, buenas prácticas 100; LCP 2,8 s, CLS 0. Informe completo sin runtimeError en backups/research-sivis/lighthouse-mobile.json. El comando terminó con EPERM durante limpieza de su carpeta temporal de Chrome después de generar el informe; no se borró manualmente. Resultado de laboratorio, no medición del despliegue ni garantía de accesibilidad completa.
- Revisión visual: stack a 390 px y certificaciones a 1440 px. Se verificaron las imágenes institucionales seleccionadas y los logos de SIVIS/LevelUP. No se añadieron recursos remotos en tiempo de ejecución.

### Ampliación anterior del mismo día

- Ampliación de contenido: tres casos bilingües (BecasFind, SIVIS y LevelUP React), seis imágenes reales optimizadas, práctica MasterBase y tres cursos acreditados en el informe suministrado.
- Verificación más reciente: build de producción, TypeScript web/Studio y ESLint correctos; 11 pruebas unitarias y 18 pruebas de navegador aprobadas. Se comprueba la carga de todas las imágenes y los seis detalles localizados, además del encabezado y ausencia de desbordamiento en cinco anchuras.
- Revisión visual con agent-browser: proyectos en escritorio a 1440 px y detalle SIVIS a 390 px, sin errores de página registrados. Las galerías preservan el encuadre y enlazan la imagen completa. Capturas de revisión en backups/research-sivis, excluidas del repositorio.
- Alcance de proyectos externos: se ejecutaron los frontends de BecasFind y LevelUP para capturas locales; no sus backends ni sus suites. LinkedIn bloqueado y Departamento T7 pendiente de enlace. Ver CONTENIDO-FUENTES.md.

### Revisión anterior del mismo día

- LinkedIn y GitHub proporcionados por el propietario; BecasFind incorporado con fuentes documentadas en CONTENIDO-FUENTES.md.
- Encabezado sticky y navegación a secciones con compensación para no tapar los títulos.
- Perfil azul profundo y portada tipográfica de proyecto. No se presenta la portada como captura del producto.
- TypeScript, ESLint, compilación y 10 pruebas unitarias correctos. 16 pruebas de navegador correctas: incluyendo detalle de BecasFind, enlaces reales, encabezado visible y ausencia de desbordamiento a 320/390/768/1024/1440 px.
- Validación visual desktop/móvil con agent-browser. No se probó el funcionamiento del proyecto externo BecasFind.

## Historial anterior

Entorno: Windows, Node.js 24.19.0. Datos iniciales sin conexión a Sanity.

Rediseño aprobado de perfil junior: presentación personal, proyectos, capacidades, certificaciones y formación. Se aplicó frontend-design, ahora disponible mediante Skills CLI, junto con Next.js y React. Las 10 pruebas unitarias y 12 pruebas de navegador pasaron. Revisión visual con agent-browser en escritorio y a 390 px, sin añadir datos profesionales ficticios.

- TypeScript de web y Studio: correcto.
- Compilación optimizada de Next.js: correcta.
- Compilación de Studio: correcta con ID sintético `localtest`; esto no verifica acceso ni publicación remota.
- ESLint: sin errores ni advertencias.
- Pruebas unitarias: 10 correctas, incluyendo validación de enlaces y firma/límites del webhook.
- Pruebas de navegador: 12 correctas en Chromium escritorio y móvil emulado. Incluyen estructura de perfil junior, certificaciones pendientes sin enlaces ficticios, navegación ES/EN, 404, menú móvil, ausencia de desbordamiento horizontal y modo noindex.
- Axe: sin infracciones detectadas WCAG A/AA en las cuatro rutas analizadas, tanto escritorio como móvil. Se corrigieron dos contrastes insuficientes.
- Revisión visual de la portada local en escritorio y a 390 px: contenido y navegación visibles, sin pantalla de error.

## Pendientes y límites

- La auditoría npm se redujo de 13 avisos a 6 moderados, sin altos ni críticos. Se fijaron overrides acotados: `@vercel/frameworks` usa `js-yaml@3.15.2` y `smol-toml@1.8.0`; `@module-federation/dts-plugin` usa `adm-zip@0.6.1`. El lockfile y el árbol instalado reflejan los cambios. Los avisos restantes derivan de `uuid<11.1.1` vía `typeid-js` en las herramientas de Sanity. No se forzó un cambio mayor de uuid ni una bajada de Sanity. Revisar estos overrides cuando los paquetes ascendentes incorporen las correcciones; una auditoría sin avisos tampoco sustituye pruebas de seguridad.
- Las pruebas actuales verifican las imágenes locales reales, pero no CV, despliegues de proyectos ni el ciclo remoto del CMS. Tampoco sustituyen revisión manual con lector de pantalla ni Safari real.
- No hay despliegue en Vercel, conexión de cuenta CMS ni dominio configurado.
- `node_modules.incomplete` conserva una instalación fallida previa, está excluida de Git y no se utiliza. No contiene código fuente del proyecto.
