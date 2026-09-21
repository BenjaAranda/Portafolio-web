import type { Locale } from './model';
export function formatCredentialDate(value: string | null | undefined, locale: Locale): string {
  if (!value) return '';
  const match = /^(\d{4})-(\d{2})(?:-\d{2})?$/.exec(value);
  if (!match || Number(match[2]) < 1 || Number(match[2]) > 12) return value;
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, 1)));
}
