'use client';

import { useId, useState, type ReactNode } from 'react';
import type { Locale } from '@/lib/model';
import { PortfolioLink } from './portfolio-navigation';

export function MobileCollection({
  kind,
  total,
  locale,
  children,
}: {
  kind: 'projects' | 'credentials';
  total: number;
  locale: Locale;
  children: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const initial = kind === 'projects' ? 2 : 4;
  const es = locale === 'es';
  const expandLabel = es ? `Ver todas (${total})` : `View all (${total})`;

  return (
    <div className={`mobile-collection mobile-collection-${kind}`} data-expanded={expanded}>
      <div id={id} className={kind === 'projects' ? 'project-grid' : 'credential-grid'}>
        {children}
      </div>
      {kind === 'projects' ? (
        <PortfolioLink
          className="collection-toggle"
          locale={locale}
          href={es ? '/es/proyectos' : '/en/projects'}
        >
          {es ? 'Mostrar todos los proyectos' : 'Show all projects'}
        </PortfolioLink>
      ) : total > initial ? (
        <button
          className="collection-toggle"
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? es ? 'Mostrar menos' : 'Show less' : expandLabel}
        </button>
      ) : null}
    </div>
  );
}
