import type { MetadataRoute } from 'next';
import { siteOrigin, siteReady } from '@/lib/content';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: siteReady
      ? { userAgent: '*', allow: '/', disallow: ['/api/'] }
      : [
          // Permit LinkedIn to read Open Graph metadata while the preview stays noindex elsewhere.
          { userAgent: 'LinkedInBot', allow: '/' },
          { userAgent: '*', disallow: '/' },
        ],
    ...(siteReady ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}),
  };
}
