import type { SVGProps } from 'react';
import Image from 'next/image';

export function SocialIcon({ network }: { network: 'github' | 'linkedin' }) {
  return (
    <Image
      className={`social-mark social-mark--${network}`}
      src={`/brands/social/${network}.webp`}
      alt=""
      width={18}
      height={18}
      unoptimized
    />
  );
}

export function Arrow({
  diagonal = false,
  ...props
}: SVGProps<SVGSVGElement> & { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      {diagonal ? <path d="M5 19 19 5M5 5h14v14" /> : <path d="M4 12h16m-6-6 6 6-6 6" />}
    </svg>
  );
}
export function Spark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="56"
      height="56"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 0v100M0 50h100M14.6 14.6l70.8 70.8M14.6 85.4l70.8-70.8"
        stroke="currentColor"
        strokeWidth="8"
      />
    </svg>
  );
}
