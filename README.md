# Portafolio web · Benjamín Aranda

Sitio bilingüe de perfil profesional, proyectos y certificaciones. Usa Next.js App Router, React y TypeScript; incluye un Studio Sanity opcional y está preparado para Vercel.

## Desarrollo local

Node.js 22 LTS (22.12 o superior), npm.

1. `npm ci`
2. `npm run dev`
3. Abrir http://localhost:3000/es

La vista local usa contenido contrastado con los repositorios públicos y materiales facilitados por el propietario. No publica un correo ni un CV que aún no se han definido. Muestra un aviso de preparación y bloquea la indexación hasta completar la configuración.

## Comandos

| Comando                       | Función                                              |
| ----------------------------- | ---------------------------------------------------- |
| `npm run dev`                 | Sitio en desarrollo                                  |
| `npm run studio`              | Administrador Sanity, requiere proyecto configurado  |
| `npm run build` / `npm start` | Producción local                                     |
| `npm run typecheck`           | Comprobar tipos web y Studio                         |
| `npm run lint`                | Revisar frontend                                     |
| `npm test`                    | Validaciones del contrato y enlaces                  |
| `npm run test:e2e`            | Navegación y accesibilidad sobre build de producción |

Para instalar el navegador de pruebas: `npx playwright install chromium` desde `apps/web`.

## Estado

El sitio local incluye siete fichas bilingües: BecasFind, SIVIS, LevelUP React, LevelUP Móvil, CasosPrueba, Departamento T7 y este portafolio. Las capturas muestran aplicaciones ejecutadas localmente o material del propietario, con el origen y las limitaciones descritos en [fuentes](docs/CONTENIDO-FUENTES.md). La publicación en Vercel y la conexión del CMS siguen pendientes.

## Arquitectura

- `apps/web/src/app`: rutas ES/EN, metadata, sitemap y webhook.
- `apps/web/src/components`: presentación y pequeñas interacciones.
- `apps/web/src/lib`: datos tipados, consultas y traducciones.
- `apps/studio`: esquemas y editor con cuenta autorizada.
- `docs`: configuración, operación y backlog.

El sitio consulta únicamente documentos publicados. Las lecturas se cachean una hora y se invalidan con el webhook firmado de Sanity. El frontend no recibe tokens de escritura. Si el CMS configurado falla, el error no se oculta sustituyendo contenido real por datos iniciales.

Consulta [configuración](docs/CONFIGURACION.md), [administración](docs/ADMINISTRACION.md) y [tareas](docs/TAREAS.md).

## Uso del contenido

Este repositorio es público para mostrar el trabajo y revisar su implementación. No se concede una licencia general de reutilización del código, los textos ni las fotografías. Los iconos de terceros conservan las licencias indicadas junto a sus archivos en `apps/web/public/brands/`.
