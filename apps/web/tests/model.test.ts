import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  safeUrl,
  safeEmail,
  portfolioSchema,
  visibleProjects,
  local,
  projectPath,
} from '../src/lib/model';
import { seed } from '../src/lib/seed';
import { isAllowedMedia, isLocalMedia } from '../src/lib/media-url';
import { existsSync } from 'node:fs';
import { formatCredentialDate } from '../src/lib/dates';
import { copy } from '../src/lib/i18n';
test('only HTTPS external URLs without embedded credentials are accepted', () => {
  for (const value of [
    'javascript:alert(1)',
    'data:text/html,bad',
    'http://unsafe.test',
    'https://user:secret@example.com',
    '/relative',
  ])
    assert.equal(safeUrl(value), undefined);
  assert.equal(safeUrl('https://github.com/example'), 'https://github.com/example');
});
test('email cannot inject mailto headers', () => {
  assert.equal(safeEmail('hello@example.com'), 'hello@example.com');
  assert.equal(safeEmail('hello@example.com?bcc=other@example.com'), undefined);
});
test('initial data has reviewed projects and user-supplied contact details', () => {
  assert.doesNotThrow(() => portfolioSchema.parse(seed));
  assert.deepEqual(
    seed.projects.map((project) => project.slug),
    ['becasfind', 'sivis', 'levelup-react', 'levelup-mobile', 'casos-prueba', 'departamento-t7', 'portafolio-web'],
  );
  assert.equal(seed.projects[0].repository, 'https://github.com/BenjaAranda/BecasFind');
  assert.equal(seed.settings?.email, 'benjamin.aranda.dev@gmail.com');
  assert.equal(seed.projects[3].repository, 'https://github.com/BenjaAranda/AplicacionesMoviles');
  assert.equal(seed.projects[4].repository, 'https://github.com/Joaquin-Dev369/CasosPrueba');
  assert.equal(seed.projects[5].repository, 'https://github.com/BenjaAranda/DepartamentoT7');
  assert.equal(seed.projects[6].repository, 'https://github.com/BenjaAranda/Portafolio-web');
  assert.ok(seed.profile?.photo);
  assert.ok(isAllowedMedia(seed.profile.photo.url));
  assert.ok(existsSync(new URL(`../public${seed.profile.photo.url}`, import.meta.url)));
});
test('reviewed project assets exist and media paths cannot escape their directory', () => {
  for (const project of seed.projects) {
    for (const image of [project.image, ...(project.gallery || [])]) {
      if (!image) continue;
      assert.ok(isAllowedMedia(image.url));
      assert.ok(existsSync(new URL(`../public${image.url}`, import.meta.url)));
      assert.ok(image.alt.es && image.alt.en);
    }
  }
  for (const value of [
    '/projects/../secret.webp',
    '/projects/a/%2e%2e.webp',
    '//evil.test/a.webp',
    'javascript:alert(1)',
    '/projects/a/a.svg',
    '/profile/another-person.webp',
  ]) {
    assert.equal(isLocalMedia(value), false);
    assert.equal(isAllowedMedia(value), false);
  }
  assert.equal(isAllowedMedia('https://cdn.sanity.io/images/test/image.webp'), true);
  assert.equal(isAllowedMedia('https://cdn.sanity.io.evil.test/images/a.webp'), false);
});
test('missing translation never silently falls back to Spanish', () => {
  assert.equal(local({ es: 'Español', en: '' }, 'en'), '');
  const data = {
    ...seed,
    projects: [
      {
        _id: 'test',
        slug: 'test',
        title: { es: 'Título', en: '' },
        summary: { es: 'Resumen', en: '' },
      },
    ],
  };
  assert.equal(visibleProjects(data, 'en').length, 0);
  assert.equal(visibleProjects(data, 'es').length, 1);
});

test('LinkedIn credentials, experience and literal copy are preserved', () => {
  assert.equal(seed.certifications.length, 9);
  assert.equal(seed.experience.length, 4);
  assert.equal(seed.certifications.find((c) => c._id === 'mccr')?.expires, '2027-06');
  assert.equal(seed.skills.filter((s) => s.learning).length, 1);
  assert.match(seed.experience[0].period?.es || '', /jul/);
  for (const cert of seed.certifications) {
    if (cert.image) assert.ok(existsSync(new URL(`../public${cert.image.url}`, import.meta.url)));
  }
  const text = JSON.stringify({ seed, copy });
  for (const phrase of [
    'Lo que hace que todo funcione',
    'Menos tareas repetitivas',
    'Hecho con intención',
    'Made with intention',
    'con propósito',
  ])
    assert.equal(text.includes(phrase), false);
});

test('month-only credential dates do not invent a day', () => {
  assert.match(formatCredentialDate('2026-09', 'es'), /2026/);
  assert.equal(formatCredentialDate('2026-09', 'en'), 'Sep 2026');
  assert.equal(formatCredentialDate(null, 'es'), '');
  assert.equal(formatCredentialDate('2026-99', 'es'), '2026-99');
});
test('project routes are localized and slugs encoded', () => {
  assert.equal(projectPath('en', 'sample'), '/en/projects/sample');
  assert.equal(projectPath('es', 'a/b'), '/es/proyectos/a%2Fb');
});
