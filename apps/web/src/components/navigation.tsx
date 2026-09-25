'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { copy } from '@/lib/i18n';
import type { Locale } from '@/lib/model';
import { privacyPath, projectPath } from '@/lib/routing';

const sectionIds = [
  'perfil',
  'proyectos',
  'capacidades',
  'certificaciones',
  'trayectoria',
  'contacto',
];

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
  const [activeSection, setActiveSection] = useState('');
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
    {
      href: `/${locale}#trayectoria`,
      label: locale === 'es' ? 'Formación' : 'Education',
    },
    { href: `/${locale}#contacto`, label: c.contact },
  ];
  useEffect(() => {
    if (pathname !== `/${locale}`) return;
    let frame = 0;
    const updateActive = () => {
      const current = sectionIds
        .filter((id) => {
          const section = document.getElementById(id);
          return section && section.getBoundingClientRect().top <= 150;
        })
        .at(-1);
      setActiveSection(current || 'perfil');
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };
    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('hashchange', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', onScroll);
    };
  }, [pathname, locale]);
  const navigateToSection = (href: string) => {
    setActiveSection(href.split('#')[1]);
    setOpen(false);
  };
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
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                activeSection === link.href.split('#')[1] && pathname === `/${locale}`
                  ? 'location'
                  : undefined
              }
              onClick={() => navigateToSection(link.href)}
            >
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
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                activeSection === link.href.split('#')[1] && pathname === `/${locale}`
                  ? 'location'
                  : undefined
              }
              onClick={() => navigateToSection(link.href)}
            >
              {link.label}
            </Link>
          ))}
          {cv && (
            <a className="mobile-cv-link" href={cv} target="_blank" rel="noreferrer">
              {c.cv}
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
