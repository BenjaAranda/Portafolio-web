'use client';
import { useState } from 'react';
import { copy } from '@/lib/i18n';
import type { Locale } from '@/lib/model';
export function CopyEmail({ email, locale }: { email: string; locale: Locale }) {
  const [message, setMessage] = useState('');
  const c = copy[locale];
  return (
    <div className="copy-wrap">
      <button
        className="text-button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setMessage(c.copied);
          } catch {
            setMessage(c.copyError);
          }
        }}
      >
        {c.copyEmail} <span aria-hidden="true">⧉</span>
      </button>
      <span className="copy-status" role="status">
        {message}
      </span>
    </div>
  );
}
