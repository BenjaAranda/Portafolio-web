import { defineType, defineField } from 'sanity';
const required = <T extends { required(): T }>(rule: T): T => rule.required();
const localized = (name: string, title: string, mandatory = false, long = false) =>
  defineField({
    name,
    title,
    type: long ? 'localizedText' : 'localizedString',
    ...(mandatory ? { validation: required } : {}),
  });
const url = (name: string, title: string) =>
  defineField({ name, title, type: 'url', validation: (rule) => rule.uri({ scheme: ['https'] }) });
const order = defineField({
  name: 'order',
  title: 'Orden (menor primero)',
  type: 'number',
  initialValue: 0,
  validation: (rule) => rule.integer().min(0),
});
const technologies = defineField({
  name: 'technologies',
  title: 'Tecnologías',
  type: 'array',
  of: [{ type: 'string' }],
  options: { layout: 'tags' },
  validation: (rule) => rule.required().min(1).unique(),
});
const photo = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'image',
    options: { hotspot: true },
    fields: [localized('alt', 'Descripción accesible (ES / EN)', true)],
    validation: (rule) =>
      rule.custom((value) =>
        !value || value.asset ? true : 'Selecciona una imagen o elimina este campo.',
      ),
  });
const pdf = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'file',
    options: { accept: 'application/pdf' },
    description: 'PDF público sin RUT, domicilio ni datos privados. Preferiblemente menos de 5 MB.',
  });
const preview = { select: { title: 'title.es', subtitle: 'organization' } };
export const schemaTypes = [
  defineType({
    name: 'localizedString',
    title: 'Texto ES / EN',
    type: 'object',
    fields: [
      defineField({ name: 'es', title: 'Español', type: 'string', validation: required }),
      defineField({ name: 'en', title: 'English', type: 'string', validation: required }),
    ],
  }),
  defineType({
    name: 'localizedText',
    title: 'Texto largo ES / EN',
    type: 'object',
    fields: [
      defineField({ name: 'es', title: 'Español', type: 'text', rows: 5, validation: required }),
      defineField({ name: 'en', title: 'English', type: 'text', rows: 5, validation: required }),
    ],
  }),
  defineType({
    name: 'siteSettings',
    title: 'Configuración',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Nombre profesional',
        type: 'string',
        validation: required,
      }),
      defineField({
        name: 'email',
        title: 'Correo público',
        type: 'string',
        validation: (rule) => rule.email(),
      }),
      url('github', 'GitHub'),
      url('linkedin', 'LinkedIn'),
      pdf('cvEs', 'CV en español'),
      pdf('cvEn', 'CV en inglés'),
    ],
    preview: { prepare: () => ({ title: 'Configuración, contacto y CV' }) },
  }),
  defineType({
    name: 'profile',
    title: 'Perfil',
    type: 'document',
    fields: [
      localized('role', 'Rol profesional', true),
      localized('headline', 'Titular principal (salto de línea permitido)', true, true),
      localized('introduction', 'Presentación breve', true, true),
      localized('bio', 'Acerca de mí', true, true),
      localized('location', 'Ubicación o modalidad pública'),
      photo('photo', 'Foto profesional (opcional)'),
    ],
    preview: { prepare: () => ({ title: 'Perfil profesional' }) },
  }),
  defineType({
    name: 'project',
    title: 'Proyectos',
    type: 'document',
    fields: [
      localized('title', 'Título', true),
      defineField({
        name: 'slug',
        title: 'Dirección permanente',
        type: 'slug',
        options: { source: 'title.es', maxLength: 90 },
        description: 'No cambiar después de publicar sin preparar una redirección.',
        validation: (rule) =>
          rule
            .required()
            .custom((value) =>
              !value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current)
                ? true
                : 'Usa letras minúsculas, números y guiones.',
            ),
      }),
      localized('summary', 'Resumen', true, true),
      localized('category', 'Categoría'),
      defineField({ name: 'year', title: 'Año o período', type: 'string' }),
      photo('image', 'Portada'),
      defineField({
        name: 'gallery',
        title: 'Galería',
        type: 'array',
        of: [
          {
            type: 'image',
            options: { hotspot: true },
            fields: [localized('alt', 'Descripción accesible', true)],
          },
        ],
      }),
      localized('problem', 'Problema y contexto', true, true),
      localized('role', 'Tu contribución personal', true, true),
      localized('solution', 'Solución y decisiones técnicas', true, true),
      localized('results', 'Resultados verificables', true, true),
      localized('lessons', 'Aprendizajes', false, true),
      technologies,
      url('repository', 'Repositorio público'),
      url('demo', 'Demo pública'),
      defineField({
        name: 'featured',
        title: 'Destacar en inicio',
        type: 'boolean',
        initialValue: false,
      }),
      order,
    ],
    preview: { select: { title: 'title.es', subtitle: 'slug.current', media: 'image' } },
    validation: (rule) =>
      rule
        .custom((doc) =>
          doc?.repository || doc?.demo ? true : 'Agrega repositorio o demo cuando esté disponible.',
        )
        .warning(),
  }),
  defineType({
    name: 'skillGroup',
    title: 'Capacidades',
    type: 'document',
    fields: [
      localized('title', 'Nombre del grupo', true),
      localized('description', 'Descripción'),
      technologies,
      defineField({
        name: 'learning',
        title: 'En aprendizaje',
        type: 'boolean',
        initialValue: false,
      }),
      order,
    ],
    preview,
  }),
  ...(['experience', 'education'] as const).map((name) =>
    defineType({
      name,
      title: name === 'experience' ? 'Experiencia' : 'Educación',
      type: 'document',
      fields: [
        defineField({
          name: 'organization',
          title: 'Organización / institución',
          type: 'string',
          validation: required,
        }),
        localized('title', 'Cargo / programa', true),
        localized('period', 'Período o estado', true),
        localized('description', 'Descripción', false, true),
        order,
      ],
      preview,
    }),
  ),
  defineType({
    name: 'certification',
    title: 'Certificados',
    type: 'document',
    fields: [
      defineField({ name: 'title', title: 'Nombre oficial', type: 'string', validation: required }),
      defineField({
        name: 'issuer',
        title: 'Institución emisora',
        type: 'string',
        validation: required,
      }),
      defineField({ name: 'date', title: 'Fecha de emisión', type: 'date' }),
      defineField({ name: 'expires', title: 'Fecha de vencimiento (opcional)', type: 'date' }),
      defineField({
        name: 'credentialId',
        title: 'Identificador público de la credencial',
        type: 'string',
      }),
      photo('image', 'Imagen del certificado (sin datos privados)'),
      url('url', 'Enlace de verificación'),
      pdf('file', 'Certificado PDF (opcional)'),
      order,
    ],
    preview: { select: { title: 'title', subtitle: 'issuer' } },
  }),
];
