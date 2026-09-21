import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema';
const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
if (!projectId)
  throw new Error(
    'Configura SANITY_STUDIO_PROJECT_ID en apps/studio/.env.local. Consulta docs/CONFIGURACION.md.',
  );
const singletons = new Set(['siteSettings', 'profile']);
export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio · Administración',
  projectId,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido del portfolio')
          .items([
            S.listItem()
              .title('Configuración, contacto y CV')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Perfil profesional')
              .id('profile')
              .child(S.document().schemaType('profile').documentId('profile')),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => !singletons.has(item.getId() || '')),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter((t) => !singletons.has(t.schemaType)),
  },
  document: {
    actions: (actions, context) =>
      singletons.has(context.schemaType)
        ? actions.filter((a) => !['delete', 'duplicate', 'unpublish'].includes(a.action || ''))
        : actions,
  },
});
