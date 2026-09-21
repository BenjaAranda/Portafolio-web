import { z } from 'zod';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export function isLocale(value: string): value is Locale {
  return value === 'es' || value === 'en';
}
export const localizedSchema = z.object({ es: z.string().default(''), en: z.string().default('') });
export type Localized = z.infer<typeof localizedSchema>;
export function local(value: Localized | null | undefined, locale: Locale): string {
  return value?.[locale] ?? '';
}
const text = z.string().nullish();
const translated = localizedSchema.nullish();
const image = z.object({ url: z.string(), alt: localizedSchema }).nullable().optional();
export const projectSchema = z.object({
  _id: z.string(),
  slug: z.string(),
  title: localizedSchema,
  summary: localizedSchema,
  problem: translated,
  role: translated,
  solution: translated,
  results: translated,
  lessons: translated,
  category: translated,
  year: text,
  technologies: z.array(z.string()).nullish(),
  featured: z.boolean().nullish(),
  repository: text,
  demo: text,
  image,
  gallery: z.array(z.object({ url: z.string(), alt: localizedSchema })).nullish(),
});
export type Project = z.infer<typeof projectSchema>;
export const portfolioSchema = z.object({
  settings: z
    .object({ name: text, email: text, github: text, linkedin: text, cvEs: text, cvEn: text })
    .nullable(),
  profile: z
    .object({
      role: translated,
      headline: translated,
      introduction: translated,
      bio: translated,
      location: translated,
      photo: image,
    })
    .nullable(),
  projects: z.array(projectSchema),
  skills: z.array(
    z.object({
      _id: z.string(),
      title: localizedSchema,
      description: translated,
      technologies: z.array(z.string()),
      learning: z.boolean().nullish(),
    }),
  ),
  experience: z.array(
    z.object({
      _id: z.string(),
      organization: z.string(),
      title: localizedSchema,
      period: translated,
      description: translated,
    }),
  ),
  education: z.array(
    z.object({
      _id: z.string(),
      organization: z.string(),
      title: localizedSchema,
      period: translated,
      description: translated,
    }),
  ),
  certifications: z.array(
    z.object({
      _id: z.string(),
      title: z.string(),
      issuer: z.string(),
      date: text,
      expires: text,
      credentialId: text,
      image,
      url: text,
      file: text,
    }),
  ),
});
export type Portfolio = z.infer<typeof portfolioSchema>;
export { projectPath, privacyPath } from './routing';
export function safeUrl(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}
export function safeEmail(value: string | null | undefined): string | undefined {
  return value && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value) && !/[?&#%]/.test(value)
    ? value
    : undefined;
}
export function visibleProjects(data: Portfolio, locale: Locale) {
  return data.projects.filter(
    (p) => local(p.title, locale).trim() && local(p.summary, locale).trim(),
  );
}
