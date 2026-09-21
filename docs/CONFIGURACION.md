# Configuración y publicación

## Sanity

1. Crear un proyecto Sanity Free, dataset público `production`, y conservar solo el administrador autorizado. Activar segundo factor en el proveedor de identidad.
2. Copiar `apps/studio/.env.example` a `.env.local` en esa misma carpeta y completar el ID del proyecto.
3. Ejecutar `npm run studio`. Añadir el origen local exacto en CORS cuando Sanity lo solicite. No usar comodines con credenciales.
4. Para una instancia nueva, ejecutar una sola vez `npm run import:seed --workspace @portfolio/studio`. Importa los contenidos revisados y sus imágenes locales. Conserva cualquier documento que ya exista con el mismo ID y nunca reemplaza cambios editoriales. Revisar los documentos publicados en Studio y completar correo y CV cuando estén disponibles.
5. Desplegar Studio con `npm run deploy --workspace @portfolio/studio`. Ese comando publica el administrador en Sanity; requiere login.

El ID de proyecto es público. Las contraseñas, tokens y secretos no deben guardarse en documentos del CMS ni en Git.

## Next.js local

Copiar `apps/web/.env.example` a `apps/web/.env.local` y establecer `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SITE_URL`. Reiniciar después de modificar variables.

Sin ID se usa la vista inicial. Con ID se exige contenido válido de Sanity; un error de conexión o contrato debe corregirse, no ocultarse.

## Vercel

1. Subir el repositorio a GitHub.
2. Importarlo a Vercel con framework Next.js, Root Directory `apps/web` y Node 22.x. Mantener instalación automática desde el workspace raíz y habilitar acceso a archivos fuera de Root Directory si Vercel lo solicita.
3. Configurar variables del archivo de ejemplo por entorno. No usar un token de escritura.
4. Mantener `SITE_READY=false` durante preparación. Los previews de Vercel permanecen noindex aunque se copie `true`.
5. Vercel usa automáticamente su dominio de producción como origen canónico. Al conectar un dominio propio, establecer `SITE_URL` con ese origen HTTPS y volver a desplegar.
6. Probar build, metadata, CV, contacto, enlaces y publicación CMS antes de activar `SITE_READY=true` en producción y volver a desplegar.

Vercel Hobby queda sujeto a sus condiciones personales/no comerciales y cuotas actuales. El proyecto `portafolio-web` ya fue creado en Vercel y tiene una primera publicación de preparación; la conexión Git automática y Sanity siguen requiriendo la autorización de las cuentas.

## Webhook

En Sanity Manage, crear un webhook HTTPS dirigido a `https://TU-DOMINIO/api/revalidate`, dataset `production`, métodos Create/Update/Delete. Excluir drafts (dejar desactivada la opción de disparar por borradores).

Filtro GROQ:

```
_type in ["siteSettings", "profile", "project", "skillGroup", "experience", "education", "certification"] && !(_id in path("drafts.**"))
```

Proyección GROQ:

```
{ "_type": coalesce(after()._type, before()._type) }
```

Configurar un secreto aleatorio fuerte en el webhook y el mismo valor en `SANITY_WEBHOOK_SECRET` de Vercel. No agregarlo a la URL ni al CMS. El endpoint rechaza firmas inválidas, JSON inválido y tipos ajenos al contenido. Usa la cadena original del cuerpo para comprobar la firma.

La proyección con `before()` cubre retiradas y eliminaciones. Verificar en el log de entrega los eventos de crear, editar y retirar. El pequeño portfolio utiliza una etiqueta global: invalidar todo el contenido evita desincronizar el índice, tarjetas, metadata y páginas de casos. Sin webhook, las lecturas se revalidan después de una hora cuando hay tráfico.

## Analytics

Opcional: configurar `CLOUDFLARE_ANALYTICS_TOKEN`. Se carga solo con `SITE_READY=true` fuera de preview. El aviso de privacidad refleja la activación real. No hay eventos personalizados ni cookies publicitarias.

## Pendientes antes de producción

Nombre, contactos, proyectos reales, CV, credenciales, revisión de inglés y diseño; cuentas, prueba remota de webhook, backup, dominio y revisión de condiciones gratuitas. Noindex es una indicación a buscadores y no un control de acceso; usar Deployment Protection de Vercel si se necesita una preview privada.
