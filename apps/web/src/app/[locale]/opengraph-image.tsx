import { ImageResponse } from 'next/og';
import { getPortfolio } from '@/lib/content';
import { isLocale, local } from '@/lib/model';
export const alt = 'Portfolio — Full Stack';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await getPortfolio();
  const headline = isLocale(locale) ? local(data.profile?.headline, locale) : 'Full Stack';
  return new ImageResponse(
    <div
      style={{
        background: '#f0f5fc',
        color: '#152640',
        width: '100%',
        height: '100%',
        padding: 80,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', fontSize: 24 }}>
        {data.settings?.name || 'PORTFOLIO'} · FULL STACK
      </div>
      <div style={{ display: 'flex', fontSize: 80, letterSpacing: -4, maxWidth: 1000 }}>
        {headline}
      </div>
      <div
        style={{ display: 'flex', borderTop: '4px solid #175bcc', paddingTop: 24, fontSize: 22 }}
      >
        React / TypeScript / Java / Spring Boot
      </div>
    </div>,
    size,
  );
}
