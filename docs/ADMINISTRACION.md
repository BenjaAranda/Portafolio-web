# Manual editorial

El propietario entra al Studio con su cuenta autorizada. Los visitantes no pueden editar. Los controles de acceso los aplica Sanity, no un botón oculto.

## Operaciones

- **Presentación:** abrir Perfil, editar ambos idiomas y publicar.
- **Contacto y CV:** abrir Configuración, cambiar enlaces o adjuntar PDFs y publicar.
- **Proyecto nuevo:** completar título, slug, resumen, contexto, contribución, solución y resultados ES/EN. Adjuntar portada con texto alternativo y enlaces de evidencia. Publicar.
- **Orden:** menor número aparece primero. Activar Destacar para priorizar en la portada.
- **Retirar proyecto:** usar Unpublish. Se elimina del sitio al revalidar pero se conserva el borrador en Studio. No existe un campo «oculto» que prometa privacidad.
- **Eliminar:** después de retirar, borrar solo si ya no se necesita. Guardar exportación previa para contenido importante.
- **Tecnologías:** editar capacidades y la lista específica de cada proyecto. Las capacidades «En aprendizaje» se presentan diferenciadas.
- **Certificados:** nombre oficial y emisor; adjuntar enlace de verificación o PDF cuando sea público.

Los campos ES y EN no se sustituyen automáticamente. Una página de proyecto sin título/resumen en un idioma no se publica en ese idioma. Las validaciones editoriales exigen traducciones en los campos completados.

## URLs y archivos

No cambiar un slug publicado sin una redirección revisada en código. La primera versión no implementa historial automático de slugs.

Imágenes y PDFs en Sanity deben considerarse públicos. Nunca subir RUT, dirección privada o certificados sin revisar. Retirar un documento no garantiza eliminar los archivos enlazados ni las copias descargadas. Los archivos antiguos se mantienen hasta una limpieza deliberada, para no romper enlaces accidentalmente.

## Recuperación

Antes de cambiar esquemas, exportar documentos y assets: desde `apps/studio`, `npx sanity dataset export production ../../backups/portfolio.tar.gz`. Crear previamente `backups` y conservar la copia fuera del equipo. Las copias pueden contener borradores; no subirlas al repositorio público.

Mensualmente repetir la exportación. Probar restauración en un dataset de prueba mediante `sanity dataset import`, revisando las opciones antes de ejecutar. Una importación puede modificar contenido; no restaurar sobre producción sin revisar el objetivo y conservar una copia actual.

El rollback de Vercel restaura código, no documentos de Sanity. La restauración real y la publicación del Studio deben verificarse una vez creado el proyecto remoto. El importador inicial conserva documentos existentes; no sirve como restauración de un backup.

## Si Publish no actualiza el sitio

Comprobar publicación (no solo guardado), entrega del webhook, secreto configurado y respuesta HTTP. Sin notificación, existe recuperación por revalidación horaria bajo tráfico. Un error del CMS aparece como error de contenido, no como una página aparentemente vacía.
