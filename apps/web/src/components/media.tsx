import Image from 'next/image';
import type { Locale, Localized } from '@/lib/model';
import { local } from '@/lib/model';
import { isAllowedMedia, isLocalMedia } from '@/lib/media-url';
export function Media({
  image,
  locale,
  priority = false,
  className = '',
  fullSize = false,
  sizes,
}: {
  image: { url: string; alt: Localized };
  locale: Locale;
  priority?: boolean;
  className?: string;
  fullSize?: boolean;
  sizes?: string;
}) {
  if (!isAllowedMedia(image.url)) return null;
  const localRatios: Record<string, string> = {
    '/projects/becasfind/inicio.webp': '1440 / 900',
    '/projects/levelup-react/inicio.webp': '1440 / 900',
    '/projects/levelup-mobile/inicio.webp': '720 / 1600',
    '/projects/casos-prueba/reporte.webp': '1600 / 917',
    '/projects/sivis/residente.webp': '1038 / 460',
    '/projects/sivis/administracion.webp': '1042 / 466',
    '/projects/sivis/recepcion.webp': '1600 / 440',
    '/projects/sivis/diagrama.webp': '2161 / 2200',
    '/projects/departamento-t7/inspeccion.webp': '2073 / 1300',
    '/projects/departamento-t7/exterior.webp': '1440 / 900',
    '/projects/portafolio-web/inicio.webp': '1440 / 900',
    '/projects/becasfind/user-journey.webp': '16 / 9',
    '/projects/becasfind/architecture-cloud.webp': '16 / 9',
    '/projects/becasfind/value-security.webp': '16 / 9',
    '/projects/levelup-react/store-features.webp': '16 / 9',
    '/projects/levelup-react/admin-crud.webp': '16 / 9',
    '/projects/levelup-react/backend-architecture.webp': '16 / 9',
    '/projects/levelup-react/test-results.webp': '16 / 9',
    '/projects/levelup-mobile/architecture.webp': '16 / 9',
    '/projects/levelup-mobile/core-features.webp': '16 / 9',
    '/projects/levelup-mobile/native-resources.webp': '16 / 9',
    '/projects/casos-prueba/business-flow.webp': '16 / 9',
    '/projects/casos-prueba/traceability.webp': '16 / 9',
    '/projects/casos-prueba/gherkin-cases.webp': '16 / 9',
    '/projects/casos-prueba/quality-metrics.webp': '16 / 9',
  };
  return (
    <div
      className={`media ${className}`}
      style={fullSize ? { aspectRatio: localRatios[image.url] } : undefined}
    >
      <Image
        src={image.url}
        unoptimized={isLocalMedia(image.url)}
        alt={local(image.alt, locale)}
        fill
        sizes={
          sizes || (image.url.startsWith('/profile/') ? '230px' : '(max-width: 760px) 100vw, 65vw')
        }
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
}
