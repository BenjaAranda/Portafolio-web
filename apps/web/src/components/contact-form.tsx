'use client';

import { useForm, ValidationError } from '@formspree/react';
import { copy } from '@/lib/i18n';
import type { Locale } from '@/lib/model';

export function ContactForm({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const [state, handleSubmit] = useForm('xvkglanb');

  if (state.succeeded) {
    return <div className="contact-form-success" role="status">{c.formSuccess}</div>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>{c.formTitle}</h3>
      <p>{c.formIntro}</p>
      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="contact-name">{c.formName}</label>
          <input id="contact-name" name="name" autoComplete="name" required maxLength={120} />
          <ValidationError field="name" errors={state.errors} />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">{c.formEmail}</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
          <ValidationError field="email" errors={state.errors} />
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="contact-subject">{c.formSubject}</label>
        <input id="contact-subject" name="subject" required maxLength={160} />
        <ValidationError field="subject" errors={state.errors} />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">{c.formMessage}</label>
        <textarea id="contact-message" name="message" rows={5} required minLength={10} maxLength={5000} />
        <ValidationError field="message" errors={state.errors} />
      </div>
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-gotcha">Leave this field empty</label>
        <input id="contact-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>
      {state.errors && <div className="contact-form-error" role="alert"><ValidationError errors={state.errors} />{c.formError}</div>}
      <button className="contact-submit" type="submit" disabled={state.submitting}>
        {state.submitting ? c.formSending : c.formSend}
      </button>
      <p className="contact-form-note">{c.formPrivacy}</p>
    </form>
  );
}
