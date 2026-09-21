'use client';
import type { ImageLoaderProps } from 'next/image';

// Sanity transforms each responsive width; Vercel does not process the image twice.
export default function sanityImageLoader({ src, width, quality }: ImageLoaderProps) {
  const url = new URL(src);
  if (url.origin !== 'https://cdn.sanity.io' || !url.pathname.startsWith('/images/')) {
    throw new Error('Unsupported image origin');
  }
  url.searchParams.set('auto', 'format');
  url.searchParams.set('fit', 'max');
  url.searchParams.set('w', String(width));
  url.searchParams.set('q', String(quality || 80));
  return url.toString();
}
