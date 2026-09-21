import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Home } from '@/components/portfolio';
import { getPortfolio, siteOrigin, siteReady } from '@/lib/content';
import { isLocale, safeUrl } from '@/lib/model';
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: { canonical: `/${locale}`, languages: { es: '/es', en: '/en' } } };
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const data = await getPortfolio();
  const structured =
    siteReady && data.settings?.name
      ? {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          url: `${siteOrigin}/${locale}`,
          mainEntity: {
            '@type': 'Person',
            name: data.settings.name,
            sameAs: [safeUrl(data.settings.github), safeUrl(data.settings.linkedin)].filter(
              Boolean,
            ),
          },
        }
      : null;
  return (
    <>
      {structured && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\\u003c') }}
        />
      )}
      <Home data={data} locale={locale} />
    </>
  );
}
