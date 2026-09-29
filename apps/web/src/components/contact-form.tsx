'use client';

import { useState } from 'react';
import { copy } from '@/lib/i18n';
import type { Locale } from '@/lib/model';

type Fields = { name: string; email: string; subject: string; message: string; website: string };

export function ContactForm({ locale, recipient }: { locale: Locale; recipient: string }) {
  const c = copy[locale];
  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const update = (key: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
  };

  return (
    <form className="contact-form" method="POST" action={`https://formsubmit.co/${encodeURIComponent(recipient)}`}>
      <input type="hidden" name="_next" value={`https://benjamin-aranda.vercel.app/${locale}#contacto-enviado`} />
      <input type="hidden" name="_subject" value={`[Portafolio] ${fields.subject}`} />
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
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            value={fields.website}
            onChange={(event) => update('website', event.target.value)}
          />
        </label>
      </div>
      <div className="contact-form-footer">
        <button className="button contact-submit" type="submit">{c.contactSend}</button>
        <p id="contacto-enviado" role="status" className="contact-feedback">{c.contactSent}</p>
      </div>
    </form>
  );
}
