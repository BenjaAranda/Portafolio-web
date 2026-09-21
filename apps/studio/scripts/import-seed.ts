/** One-time, non-destructive migration of the reviewed portfolio content. */
import { createReadStream, existsSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { getCliClient } from 'sanity/cli';
import { seed } from '../../web/src/lib/seed';
import type { Localized, Project } from '../../web/src/lib/model';

const client = getCliClient({ apiVersion: '2026-03-01' });
const mediaRoot = resolve(process.cwd(), '../web/public');
const uploaded = new Map<string, string>();
type Image = NonNullable<Project['image']>;

function localized(value: Localized | null | undefined, type: 'localizedString' | 'localizedText') {
  return value ? { _type: type, es: value.es, en: value.en } : undefined;
}

async function image(value: Image | null | undefined, key?: string) {
  if (!value) return undefined;
  if (!value.url.startsWith('/') || value.url.includes('..')) {
    throw new Error(`Ruta de imagen no local: ${value.url}`);
  }
  const file = resolve(mediaRoot, value.url.slice(1));
  if (!file.startsWith(mediaRoot) || !existsSync(file)) {
    throw new Error(`No se encontró la imagen pública: ${value.url}`);
  }
  let assetId = uploaded.get(file);
  if (!assetId) {
    const asset = await client.assets.upload('image', createReadStream(file), {
      filename: basename(file),
    });
    assetId = asset._id;
    uploaded.set(file, assetId);
  }
  return {
    _type: 'image',
    ...(key ? { _key: key } : {}),
    asset: { _type: 'reference', _ref: assetId },
    alt: localized(value.alt, 'localizedString'),
  };
}

async function createMissing(id: string, type: string, build: () => Promise<Record<string, unknown>>) {
  if (await client.getDocument(id)) {
    console.log(`Conservado: ${id}`);
    return;
  }
  await client.createIfNotExists({ _id: id, _type: type, ...(await build()) });
  console.log(`Importado: ${id}`);
}

async function main() {
  if (!process.env.SANITY_STUDIO_PROJECT_ID) {
    throw new Error('Falta SANITY_STUDIO_PROJECT_ID en apps/studio/.env.local');
  }
  if (!existsSync(mediaRoot)) throw new Error(`No existe el directorio de imágenes: ${mediaRoot}`);

  await createMissing('siteSettings', 'siteSettings', async () => ({ ...seed.settings }));
  await createMissing('profile', 'profile', async () => ({
    role: localized(seed.profile?.role, 'localizedString'),
    headline: localized(seed.profile?.headline, 'localizedText'),
    introduction: localized(seed.profile?.introduction, 'localizedText'),
    bio: localized(seed.profile?.bio, 'localizedText'),
    location: localized(seed.profile?.location, 'localizedString'),
    photo: await image(seed.profile?.photo),
  }));

  for (const [index, project] of seed.projects.entries()) {
    await createMissing(`project.${project.slug}`, 'project', async () => ({
      slug: { _type: 'slug', current: project.slug },
      title: localized(project.title, 'localizedString'),
      summary: localized(project.summary, 'localizedText'),
      category: localized(project.category, 'localizedString'),
      year: project.year,
      problem: localized(project.problem, 'localizedText'),
      role: localized(project.role, 'localizedText'),
      solution: localized(project.solution, 'localizedText'),
      results: localized(project.results, 'localizedText'),
      lessons: localized(project.lessons, 'localizedText'),
      technologies: project.technologies,
      repository: project.repository,
      demo: project.demo,
      featured: project.featured ?? false,
      order: index,
      image: await image(project.image),
      gallery: project.gallery
        ? await Promise.all(project.gallery.map((item, galleryIndex) => image(item, `gallery-${galleryIndex}`)))
        : undefined,
    }));
  }

  for (const [index, skill] of seed.skills.entries()) {
    await createMissing(`skillGroup.${skill._id}`, 'skillGroup', async () => ({
      title: localized(skill.title, 'localizedString'),
      description: localized(skill.description, 'localizedString'),
      technologies: skill.technologies,
      learning: skill.learning ?? false,
      order: index,
    }));
  }

  for (const type of ['experience', 'education'] as const) {
    for (const [index, item] of seed[type].entries()) {
      await createMissing(`${type}.${item._id}`, type, async () => ({
        organization: item.organization,
        title: localized(item.title, 'localizedString'),
        period: localized(item.period, 'localizedString'),
        description: localized(item.description, 'localizedText'),
        order: index,
      }));
    }
  }

  for (const [index, credential] of seed.certifications.entries()) {
    await createMissing(`certification.${credential._id}`, 'certification', async () => ({
      title: credential.title,
      issuer: credential.issuer,
      date: credential.date,
      expires: credential.expires,
      credentialId: credential.credentialId,
      url: credential.url,
      image: await image(credential.image),
      order: index,
    }));
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
