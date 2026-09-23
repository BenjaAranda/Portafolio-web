import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Suspense } from 'react';
import { getPortfolio, siteOrigin, siteReady } from '@/lib/content';
import { isLocale, local, safeUrl } from '@/lib/model';
import { copy } from '@/lib/i18n';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/portfolio';
import { PortfolioScrollRestorer } from '@/components/portfolio-navigation';
import '../globals.css';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };
export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const data = await getPortfolio();
  const name = data.settings?.name || 'Portfolio';
  return {
    metadataBase: new URL(siteOrigin),
    title: { default: `${name} — Full Stack`, template: `%s | ${name}` },
    description: local(data.profile?.introduction, locale),
    robots: { index: siteReady, follow: siteReady },
    openGraph: { type: 'website', siteName: name, locale: locale === 'es' ? 'es_CL' : 'en_US' },
    twitter: { card: 'summary_large_image' },
  };
}
export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const data = await getPortfolio();
  const cv = safeUrl(locale === 'es' ? data.settings?.cvEs : data.settings?.cvEn);
  const analytics = siteReady && process.env.CLOUDFLARE_ANALYTICS_TOKEN;
  return (
    <html lang={locale}>
      <body>
        <a className="skip-link" href="#main">
          {copy[locale].skip}
        </a>
        <Navigation locale={locale} name={data.settings?.name} cv={cv} />
        <main id="main">{children}</main>
        <Footer locale={locale} name={data.settings?.name} />
        <Suspense fallback={null}>
          <PortfolioScrollRestorer locale={locale} />
        </Suspense>
        {analytics && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
            data-cf-beacon={JSON.stringify({ token: analytics })}
          />
        )}
      </body>
    </html>
  );
}
