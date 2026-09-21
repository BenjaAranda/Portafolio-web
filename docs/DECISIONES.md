# Decisiones de arquitectura

## ADR 001: Next.js en Vercel

Elegido explícitamente por el propietario. React y TypeScript representan su perfil y Next.js permite cachear contenido sin exportación estática. Vercel simplifica despliegue y revalidación. No se requieren funciones de servidor por cada visita ni un backend Java.

## ADR 002: Sanity separado

Editor alojado por Sanity con cuenta autorizada, sin incrustar el administrador en el bundle público. Un proyecto CMS, documentos publicados de lectura pública y ningún secreto de escritura en la web. Los cambios de esquema requieren despliegue de Studio; los cambios de contenido no requieren despliegue de Next.js.

## ADR 003: Una etiqueta de caché

El contenido del portfolio es pequeño y está relacionado entre páginas. Una consulta agregada y etiqueta `portfolio` simplifican la invalidación correcta de páginas, metadata e índices. Deduplicación dentro de cada render con React.cache. Revalidación cada hora para recuperación bajo tráfico. Si el contenido crece sustancialmente, dividir consultas y etiquetas por entidad.

## ADR 004: Datos iniciales honestos

Sin configuración CMS se muestra una vista basada solo en el brief con estados vacíos. Con CMS configurado no hay fallback silencioso ante un fallo. La indexación requiere activación explícita y no aplica a previews Vercel. Esto no protege contenido confidencial: se debe usar acceso restringido si se necesita privacidad de previews.

## ADR 005: Interacciones pequeñas

Server Components para contenido; cliente únicamente en navegación y copiar email. Sin librería de animaciones, base de datos duplicada ni UI kit completo. Tipografía del sistema para evitar solicitudes externas y asegurar build reproducible. Iconos simples vectoriales y composición CSS abstracta, sin fotos o capturas ficticias.

## ADR 006: CSP inicial

La política restringe orígenes, frames, objetos, formularios y conexiones. Next.js necesita scripts inline para el payload de renderizado; la primera política permite `unsafe-inline` para scripts/estilos. Esto es una limitación documentada, no una CSP estricta con nonces. Nonces por solicitud exigirían revisar renderizado y caché antes de adoptarlos. Texto CMS se escapa con React; no se permite HTML arbitrario.
