import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('BecasFind has a working detail page and supplied links', async ({ page }) => {
  await page.goto('/es');
  await expect(
    page.locator('#contacto a[href="https://www.linkedin.com/in/benjaminarandadev/"]'),
  ).toBeVisible();
  await page
    .locator('.project-card')
    .filter({ has: page.getByRole('heading', { name: 'BecasFind', exact: true }) })
    .getByRole('link', { name: 'Explorar caso', exact: true })
    .click();
  await expect(page).toHaveURL(/\/es\/proyectos\/becasfind$/);
  await expect(page.locator('h1')).toHaveText('BecasFind');
  await expect(page.getByRole('link', { name: 'Ver código' })).toHaveAttribute(
    'href',
    'https://github.com/BenjaAranda/BecasFind',
  );
});

test('header remains visible and layouts fit narrow phones and tablets', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/es');
    if (width <= 960) await page.getByRole('button', { name: 'Abrir navegación' }).click();
    await page.locator('header').getByRole('link', { name: 'Stack', exact: true }).click();
    await expect
      .poll(async () =>
        page
          .locator('header.header')
          .evaluate((element) => Math.round(element.getBoundingClientRect().top)),
      )
      .toBe(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    await expect
      .poll(async () =>
        page.locator('#capacidades').evaluate((element) => element.getBoundingClientRect().top),
      )
      .toBeGreaterThanOrEqual(76);
  }
});

test('junior profile exposes projects, skills and honest certification state', async ({ page }) => {
  await page.goto('/es');
  await expect(page.locator('#perfil h1')).toHaveText('Benjamín Aranda');
  const portrait = page.locator('#perfil .profile-context .media img');
  await expect(portrait).toHaveAttribute('alt', /Benjamín Aranda/);
  await expect
    .poll(() => portrait.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0))
    .toBe(true);
  await expect(page.locator('#proyectos h2')).toHaveText('Proyectos');
  await expect(page.locator('#perfil')).toContainText('automatización de procesos');
  await expect(page.locator('#perfil')).not.toContainText('Android');
  await expect(page.locator('#perfil')).not.toContainText('MasterBase');
  await expect(page.locator('#capacidades h2')).toHaveText('Stack tecnológico');
  await expect(page.locator('#capacidades')).toContainText('Codex');
  await expect(page.locator('#capacidades')).toContainText('OpenCode');
  await expect(page.locator('#capacidades')).toContainText('Warp');
  await expect(page.locator('#capacidades .technology-fallback')).toHaveCount(0);
  await expect(page.locator('#certificaciones')).toContainText('Smartview Avanzado');
  await expect(page.locator('.credential-card')).toHaveCount(9);
  await expect(
    page.locator('#certificaciones a[href="https://cert.efset.org/NEyEWs"]'),
  ).toBeVisible();
  await expect(page.locator('#trayectoria')).toContainText('Walmart Chile');
  await expect(page.locator('#trayectoria')).toContainText('Mar. – jul. 2026');
});

test('social logos load and selected project cards form an even responsive grid', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/es');
  for (const icon of await page
    .locator('.profile-social .social-mark, .social-links .social-mark')
    .all()) {
    await icon.scrollIntoViewIfNeeded();
    await expect
      .poll(() => icon.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0))
      .toBe(true);
    await expect(icon).toHaveAttribute('alt', '');
  }
  for (const route of ['/es', '/es/proyectos']) {
    await page.goto(route);
    const cards = page.locator('.project-grid .project-card');
    await expect(cards).toHaveCount(route === '/es' ? 4 : 7);
    if (route === '/es') {
      await expect(cards.locator('h3')).toHaveText([
        'BecasFind',
        'SIVIS',
        'LevelUP React',
        'CasosPrueba',
      ]);
    }
    const positions = await cards.evaluateAll((elements) =>
      elements.map((element) => {
        const { x, y, width, height } = element.getBoundingClientRect();
        return { x, y, width, height };
      }),
    );
    expect(Math.abs(positions[0].y - positions[1].y)).toBeLessThan(2);
    expect(Math.abs(positions[2].y - positions[3].y)).toBeLessThan(2);
    expect(Math.abs(positions[0].x - positions[2].x)).toBeLessThan(2);
    expect(Math.abs(positions[1].x - positions[3].x)).toBeLessThan(2);
    expect(Math.abs(positions[0].height - positions[1].height)).toBeLessThan(2);
    expect(Math.abs(positions[2].height - positions[3].height)).toBeLessThan(2);
    await page.setViewportSize({ width: 390, height: 844 });
    const mobile = await cards.evaluateAll((elements) =>
      elements.map((element) => {
        const { x, y, width } = element.getBoundingClientRect();
        return { x, y, width };
      }),
    );
    expect(mobile.every(({ y }) => Math.abs(y - mobile[0].y) < 2)).toBe(true);
    expect(mobile[1].x).toBeGreaterThan(mobile[0].x + mobile[0].width);
    expect(
      await page.locator('.project-grid').evaluate((element) => element.scrollWidth > element.clientWidth),
    ).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    await page.setViewportSize({ width: 1440, height: 900 });
  }
});

test('certificates expand and institutional logos load', async ({ page }) => {
  await page.goto('/es#certificaciones');
  const cert = page
    .locator('.credential-card')
    .filter({ has: page.getByRole('heading', { name: 'Smartview Inicial', exact: true }) });
  await cert.locator('summary').click();
  const image = cert.locator('.media img');
  await expect(image).toBeVisible();
  await image.scrollIntoViewIfNeeded();
  await expect
    .poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0))
    .toBe(true);
  for (const logo of await page.locator('.credential-issuer img').all()) {
    await logo.scrollIntoViewIfNeeded();
    await expect
      .poll(() => logo.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0))
      .toBe(true);
  }
  await expect(page.locator('body')).not.toContainText('Lo que hace que todo funcione');
  await expect(page.locator('body')).not.toContainText('Menos tareas repetitivas');
});

test('all documented projects have real images and bilingual detail pages', async ({ page }) => {
  for (const locale of ['es', 'en']) {
    for (const slug of ['becasfind', 'sivis', 'levelup-react', 'levelup-mobile', 'casos-prueba', 'departamento-t7', 'portafolio-web']) {
      await page.goto(`/${locale}/${locale === 'es' ? 'proyectos' : 'projects'}/${slug}`);
      const images = page.locator('.case-page .media img');
      expect(await images.count()).toBeGreaterThan(0);
      for (const image of await images.all()) {
        await image.scrollIntoViewIfNeeded();
        await expect
          .poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0))
          .toBe(true);
        await expect(image).toHaveAttribute('alt', /.+/);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
    }
  }
});

test('Spanish and English pages load and switch language', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/');
  await expect(page).toHaveURL(/\/es$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Benjamín Aranda');
  await page.getByRole('link', { name: 'Read in English' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Benjamín Aranda');
  expect(errors).toEqual([]);
});
test('project index, localized navigation and 404', async ({ page }) => {
  await page.goto('/es');
  await page.getByRole('link', { name: 'Explorar proyectos', exact: true }).click();
  await expect(page).toHaveURL(/\/es\/proyectos$/);
  await page.getByRole('link', { name: 'Read in English' }).click();
  await expect(page).toHaveURL(/\/en\/projects$/);
  const response = await page.goto('/en/projects/does-not-exist');
  expect(response?.status()).toBe(404);
});
test('project pages provide a clear route back home without arrow icons', async ({ page }) => {
  await page.goto('/es/proyectos');
  const home = page.getByRole('link', { name: 'Volver al inicio', exact: true });
  await expect(home).toBeVisible();
  await expect(home.locator('svg')).toHaveCount(0);
  await page.goto('/es/proyectos/becasfind');
  await expect(page.getByRole('link', { name: 'Volver al inicio', exact: true })).toBeVisible();
  await expect(page.locator('.case-navigation svg')).toHaveCount(0);
});
test('project images open at full size without a separate gallery button', async ({ page }) => {
  await page.goto('/es/proyectos/becasfind');
  const imageLinks = page.locator('.project-figure .project-image-link');
  await expect(imageLinks).toHaveCount(4);
  await expect(page.getByText('Abrir imagen completa', { exact: true })).toHaveCount(0);
  for (const link of await imageLinks.all()) {
    const href = await link.getAttribute('href');
    expect(href).toBeTruthy();
    await expect(link.locator('img')).toHaveCount(1);
  }
});
test('returning home restores the previous portfolio position', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 760 });
  await page.goto('/es');
  const card = page
    .locator('#proyectos .project-card')
    .filter({ has: page.getByRole('heading', { name: 'BecasFind', exact: true }) });
  await card.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, 120));
  const previous = await page.evaluate(() => window.scrollY);
  expect(previous).toBeGreaterThan(300);
  await card.getByRole('link', { name: 'Explorar caso', exact: true }).click();
  await expect(page).toHaveURL(/\/es\/proyectos\/becasfind$/);
  await page.getByRole('link', { name: 'Volver al inicio', exact: true }).click();
  await expect(page).toHaveURL(/\/es$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(previous - 8);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(previous + 8);
});
test('English portfolio exposes the translated CV and no development banner', async ({ page }) => {
  await page.goto('/en');
  await expect(page.getByText('Development preview', { exact: false })).toHaveCount(0);
  const cvLinks = page.getByRole('link', { name: 'View CV', exact: true });
  expect(await cvLinks.count()).toBeGreaterThan(0);
  for (const link of await cvLinks.all()) {
    await expect(link).toHaveAttribute('href', /cdn\.sanity\.io\/files\/.*\.pdf/);
  }
});
test('mobile stack cards and all-projects action stay compact', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/es');
  const button = await page.locator('.all-projects-button').boundingBox();
  expect(button).not.toBeNull();
  expect(button!.width).toBeLessThan(220);
  const stackHeights = await page
    .locator('#capacidades .capability-row')
    .evaluateAll((items) => items.map((item) => item.getBoundingClientRect().height));
  expect(Math.max(...stackHeights)).toBeLessThan(270);
});
test('preview is not indexed and only offers the verified email', async ({ page, request }) => {
  await page.goto('/es');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  await expect(
    page.locator('a[href="mailto:benjamin.aranda.dev@gmail.com"]'),
  ).toHaveCount(1);
  expect(await (await request.get('/robots.txt')).text()).toContain('Disallow: /');
  expect((await request.post('/api/revalidate', { data: { _type: 'project' } })).status()).toBe(
    503,
  );
});
test('public pages have no WCAG A/AA violations', async ({ page }) => {
  for (const url of ['/es', '/en', '/es/proyectos', '/en/privacy']) {
    await page.goto(url);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  }
});
test('mobile menu works and viewport does not overflow', async ({ page, isMobile }) => {
  await page.goto('/es');
  if (isMobile) {
    const menu = page.getByRole('button', { name: 'Abrir navegación' });
    await menu.click();
    await expect(page.locator('button[aria-controls="mobile-nav"]')).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    await page.locator('#mobile-nav').getByRole('link', { name: 'Perfil' }).click();
    await expect(page.locator('#mobile-nav')).toHaveCount(0);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
