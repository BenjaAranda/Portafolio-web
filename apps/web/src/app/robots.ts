import type { MetadataRoute } from 'next';
import { siteOrigin, siteReady } from '@/lib/content';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      ...(siteReady ? { allow: '/', disallow: ['/api/'] } : { disallow: '/' }),
    },
    ...(siteReady ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}),
  };
}
