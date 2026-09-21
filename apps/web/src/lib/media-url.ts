// Local assets are reviewed, optimized WebP files, never arbitrary filesystem paths.
export function isLocalMedia(value: string): boolean {
  return (
    /^\/projects\/[a-z0-9-]+\/[a-z0-9-]+\.webp$/.test(value) ||
    /^\/credentials\/[a-z0-9-]+\.webp$/.test(value) ||
    value === '/profile/benjamin-aranda.webp'
  );
}

export function isAllowedMedia(value: string): boolean {
  if (isLocalMedia(value)) return true;
  try {
    const url = new URL(value);
    return (
      url.origin === 'https://cdn.sanity.io' &&
      !url.username &&
      !url.password &&
      url.pathname.startsWith('/images/')
    );
  } catch {
    return false;
  }
}
