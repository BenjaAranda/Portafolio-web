import { safeUrl } from './model';

export function isLocalDocument(value: string): boolean {
  return (
    /^\/documents\/[a-z0-9-]+\.pdf$/.test(value) ||
    /^\/credentials\/[a-z0-9-]+\.pdf$/.test(value)
  );
}

export function safeDocumentUrl(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  return isLocalDocument(value) ? value : safeUrl(value);
}
