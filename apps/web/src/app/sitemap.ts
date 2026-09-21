import type { MetadataRoute } from 'next';
import { getPortfolio, siteOrigin, siteReady } from '@/lib/content';
import { locales, privacyPath, projectPath, visibleProjects } from '@/lib/model';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!siteReady) return [];
  const data = await getPortfolio();
  return locales.flatMap((locale) =>
    [
      `/${locale}`,
      projectPath(locale),
      privacyPath(locale),
      ...visibleProjects(data, locale).map((p) => projectPath(locale, p.slug)),
    ].map((path) => ({ url: `${siteOrigin}${path}` })),
  );
}
