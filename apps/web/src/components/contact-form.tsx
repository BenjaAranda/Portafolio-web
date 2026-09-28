'use client';

import { useState, type FormEvent } from 'react';
import { copy } from '@/lib/i18n';
import type { Locale } from '@/lib/model';

type Fields = { name: string; email: string; subject: string; message: string; website: string };

export function ContactForm({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!response.ok) throw new Error('send failed');
      setFields({ name: '', email: '', subject: '', message: '', website: '' });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const update = (key: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    if (status !== 'sending') setStatus('idle');
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-heading">
        <h3>{c.contactFormTitle}</h3>
        <p>{c.contactFormIntro}</p>
      </div>
      <div className="contact-form-pair">
        <label>
          <span>{c.contactName}</span>
          <input
            autoComplete="name"
            name="name"
            required
            minLength={2}
            maxLength={100}
            value={fields.name}
            onChange={(event) => update('name', event.target.value)}
          />
        </label>
        <label>
          <span>{c.contactEmail}</span>
          <input
            autoComplete="email"
            name="email"
            type="email"
            required
            maxLength={254}
            value={fields.email}
            onChange={(event) => update('email', event.target.value)}
          />
        </label>
      </div>
      <label>
        <span>{c.contactSubject}</span>
        <input
          name="subject"
          required
          minLength={3}
          maxLength={150}
          value={fields.subject}
          onChange={(event) => update('subject', event.target.value)}
        />
      </label>
      <label>
        <span>{c.contactMessage}</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={6}
          value={fields.message}
          onChange={(event) => update('message', event.target.value)}
        />
      </label>
      <div className="contact-honeypot" aria-hidden="true">
        <label>
          Website
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={fields.website}
            onChange={(event) => update('website', event.target.value)}
          />
        </label>
      </div>
      <div className="contact-form-footer">
        <button className="button contact-submit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? c.contactSending : c.contactSend}
        </button>
        <p role="status" aria-live="polite" className={status === 'error' ? 'contact-feedback contact-feedback-error' : 'contact-feedback'}>
          {status === 'sent' ? c.contactSent : status === 'error' ? c.contactFailed : ''}
        </p>
      </div>
    </form>
  );
}
