import type { Locale, Portfolio } from '@/lib/model';
import { local, safeUrl } from '@/lib/model';
import { isAllowedMedia } from '@/lib/media-url';
import { formatCredentialDate } from '@/lib/dates';
import { safeDocumentUrl } from '@/lib/document-url';
import { BrandMark } from './brand-mark';
import { Media } from './media';

export function Credentials({
  items,
  locale,
}: {
  items: Portfolio['certifications'];
  locale: Locale;
}) {
  const es = locale === 'es';
  return (
    <div className="credential-grid">
      {items.map((cert) => {
        const verificationUrl = safeUrl(cert.url);
        const certificateUrl = safeDocumentUrl(cert.file);
        const primaryUrl = verificationUrl || certificateUrl;
        return (
          <article className="credential-card" key={cert._id}>
            <div className="credential-card-main">
              <div className="credential-issuer">
                <BrandMark name={cert.issuer} />
                <span>{cert.issuer}</span>
              </div>
              <h3>{cert.title}</h3>
              <dl className="credential-dates">
                {cert.date ? (
                  <div>
                    <dt>{es ? 'Emisión' : 'Issued'}</dt>
                    <dd>{formatCredentialDate(cert.date, locale)}</dd>
                  </div>
                ) : null}
                {cert.expires ? (
                  <div>
                    <dt>{es ? 'Vencimiento' : 'Expires'}</dt>
                    <dd>{formatCredentialDate(cert.expires, locale)}</dd>
                  </div>
                ) : null}
              </dl>
              {cert.credentialId ? (
                <p className="credential-id">ID: {cert.credentialId}</p>
              ) : null}
            </div>
            <div className="credential-card-actions">
              {primaryUrl ? (
                <a className="text-link" href={primaryUrl} target="_blank" rel="noreferrer">
                  {cert.issuer === 'Duoc UC'
                    ? es
                      ? 'Validar con el ID'
                      : 'Validate using the ID'
                    : es
                      ? 'Ver credencial'
                      : 'View credential'}
                </a>
              ) : null}
              {verificationUrl && certificateUrl ? (
                <a className="text-link" href={certificateUrl} target="_blank" rel="noreferrer">
                  {es ? 'Abrir certificado' : 'Open certificate'}
                </a>
              ) : null}
              {cert.image && isAllowedMedia(cert.image.url) ? (
                <details className="certificate-preview">
                  <summary>{es ? 'Ver certificado' : 'View certificate'}</summary>
                  <a
                    href={cert.image.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={
                      es ? `Abrir certificado: ${cert.title}` : `Open certificate: ${cert.title}`
                    }
                  >
                    <Media image={cert.image} locale={locale} />
                  </a>
                  <p>{local(cert.image.alt, locale)}</p>
                </details>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
