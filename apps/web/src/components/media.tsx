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
    '/projects/becasfind/inicio.webp': '1288 / 795',
    '/projects/becasfind/catalogo.webp': '1294 / 946',
    '/projects/becasfind/detalle.webp': '917 / 668',
    '/projects/becasfind/admin-beca.webp': '659 / 710',
    '/projects/levelup-react/inicio.webp': '1900 / 1073',
    '/projects/levelup-react/catalogo.webp': '1900 / 1048',
    '/projects/levelup-react/administracion.webp': '1694 / 523',
    '/projects/levelup-react/api-openapi.webp': '1692 / 1403',
    '/projects/levelup-mobile/inicio.webp': '594 / 1272',
    '/projects/levelup-mobile/filtros.webp': '576 / 1267',
    '/projects/levelup-mobile/carrito.webp': '1384 / 1022',
    '/projects/casos-prueba/reporte.webp': '1600 / 917',
    '/projects/casos-prueba/altoro-demo.webp': '1900 / 1084',
    '/projects/sivis/residente.webp': '1038 / 460',
    '/projects/sivis/administracion.webp': '1042 / 466',
    '/projects/sivis/recepcion.webp': '1714 / 471',
    '/projects/sivis/diagrama.webp': '1300 / 1401',
    '/projects/sivis/pre-registro.webp': '1800 / 823',
    '/projects/sivis/visita-agendada.webp': '1800 / 929',
    '/projects/sivis/ingreso-completado.webp': '1800 / 828',
    '/projects/departamento-t7/inspeccion.webp': '2073 / 1300',
    '/projects/departamento-t7/exterior.webp': '1440 / 900',
    '/projects/departamento-t7/referencia-plano.webp': '655 / 793',
    '/projects/portafolio-web/inicio.webp': '1440 / 900',
    '/projects/casos-prueba/business-flow.webp': '16 / 9',
    '/projects/casos-prueba/traceability.webp': '16 / 9',
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
