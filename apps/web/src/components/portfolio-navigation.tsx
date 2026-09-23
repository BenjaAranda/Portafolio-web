'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, type ComponentProps } from 'react';
import type { Locale } from '@/lib/model';

type LinkComponentProps = ComponentProps<typeof Link>;
type PortfolioLinkProps = LinkComponentProps & { locale: Locale };

const scrollKey = (locale: Locale) => `portfolio-scroll:${locale}`;
const restoreKey = (locale: Locale) => `portfolio-restore:${locale}`;

function isPlainNavigation(event: React.MouseEvent<HTMLAnchorElement>) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}

export function PortfolioLink({ locale, onClick, ...props }: PortfolioLinkProps) {
  const pathname = usePathname();

  const handleClick: NonNullable<LinkComponentProps['onClick']> = (event) => {
    if (isPlainNavigation(event) && pathname === `/${locale}`) {
      sessionStorage.setItem(scrollKey(locale), String(window.scrollY));
    }
    onClick?.(event);
  };

  return <Link {...props} onClick={handleClick} />;
}

export function ReturnHomeLink({ locale, onNavigate, ...props }: PortfolioLinkProps) {
  const router = useRouter();
  const home = `/${locale}`;

  const handleNavigate: NonNullable<LinkComponentProps['onNavigate']> = (event) => {
    const saved = sessionStorage.getItem(scrollKey(locale));
    if (saved) {
      event.preventDefault();
      sessionStorage.setItem(restoreKey(locale), saved);
      router.push(home, { scroll: false });
    }
    onNavigate?.(event);
  };

  return <Link {...props} href={home} onNavigate={handleNavigate} />;
}

export function PortfolioScrollRestorer({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== `/${locale}`) return;

    const saved = sessionStorage.getItem(restoreKey(locale));
    if (!saved) return;

    sessionStorage.removeItem(restoreKey(locale));
    const target = Number(saved);
    if (!Number.isFinite(target)) return;

    let frame = 0;
    let animationFrame = 0;
    const restore = () => {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const top = Math.min(target, maxScroll);
      window.scrollTo({ top, behavior: 'instant' });
      frame += 1;
      if (Math.abs(window.scrollY - top) > 2 && frame < 12) {
        animationFrame = window.requestAnimationFrame(restore);
      }
    };

    animationFrame = window.requestAnimationFrame(restore);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [locale, pathname]);

  return null;
}
