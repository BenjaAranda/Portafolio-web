import type { Locale } from './model';

export function projectPath(locale: Locale, slug?: string) {
  return `/${locale}/${locale === 'es' ? 'proyectos' : 'projects'}${slug ? `/${encodeURIComponent(slug)}` : ''}`;
}

export function privacyPath(locale: Locale) {
  return `/${locale}/${locale === 'es' ? 'privacidad' : 'privacy'}`;
}
