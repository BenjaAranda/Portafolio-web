'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { copy } from '@/lib/i18n';
import type { Locale } from '@/lib/model';
import { privacyPath, projectPath } from '@/lib/routing';
import { Arrow } from './icons';

export function Navigation({
  locale,
  name,
  cv,
}: {
  locale: Locale;
  name?: string | null;
  cv?: string;
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const c = copy[locale];
  const other: Locale = locale === 'es' ? 'en' : 'es';
  const segments = pathname.split('/').filter(Boolean);
  const alternate =
    segments[1] === 'proyectos' || segments[1] === 'projects'
      ? projectPath(other, segments[2] ? decodeURIComponent(segments[2]) : undefined)
      : segments[1] === 'privacidad' || segments[1] === 'privacy'
        ? privacyPath(other)
        : `/${other}`;
  const links = [
    { href: `/${locale}#perfil`, label: c.about },
    { href: `/${locale}#proyectos`, label: c.projects },
    { href: `/${locale}#capacidades`, label: locale === 'es' ? 'Stack' : 'Stack' },
    {
      href: `/${locale}#certificaciones`,
      label: locale === 'es' ? 'Certificaciones' : 'Certifications',
    },
    { href: `/${locale}#contacto`, label: c.contact },
  ];
  return (
    <header
      className="header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          menuRef.current?.focus();
        }
      }}
    >
      <div className="shell nav-shell">
        <Link
          className="wordmark"
          href={`/${locale}`}
          onClick={() => setOpen(false)}
          aria-label={`${name || 'Portfolio'} — ${c.home}`}
        >
          <span className="brand-symbol">
            &lt;<span>/</span>&gt;
          </span>
          <span>
            {name || 'portfolio'}
            <span className="wordmark-sub">
              {locale === 'es' ? 'Portafolio profesional' : 'Professional portfolio'}
            </span>
          </span>
        </Link>
        <nav aria-label={locale === 'es' ? 'Principal' : 'Main'} className="desktop-nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link
            className="language"
            href={alternate}
            hrefLang={other}
            lang={other}
            aria-label={other === 'en' ? 'Read in English' : 'Leer en español'}
          >
            <span className={locale === 'es' ? 'active-language' : ''}>ES</span>
            <span className="language-divider">/</span>
            <span className={locale === 'en' ? 'active-language' : ''}>EN</span>
          </Link>
          {cv && (
            <a className="cv-link" href={cv} target="_blank" rel="noreferrer">
              {c.cv}
              <Arrow diagonal />
            </a>
          )}
          <button
            ref={menuRef}
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? c.close : c.menu}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span className={open ? 'opened' : ''} />
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav shell"
          aria-label={locale === 'es' ? 'Móvil' : 'Mobile'}
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <Arrow />
            </Link>
          ))}
          {cv && (
            <a href={cv} target="_blank" rel="noreferrer">
              {c.cv}
              <Arrow diagonal />
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
