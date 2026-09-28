import assert from 'node:assert/strict';
import { test } from 'node:test';
import { POST } from '../src/app/api/contact/route';
import { contactRateLimited, contactRecipient, contactSchema } from '../src/lib/contact';

const valid = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  subject: 'Colaboración profesional',
  message: 'Me gustaría conversar sobre un proyecto de software.',
  website: '',
};

test('contact fields have reasonable validation limits', () => {
  assert.equal(contactSchema.safeParse(valid).success, true);
  assert.equal(contactSchema.safeParse({ ...valid, email: 'not-an-email' }).success, false);
  assert.equal(contactSchema.safeParse({ ...valid, subject: 'Hello\nBcc: someone@example.com' }).success, false);
  assert.equal(contactSchema.safeParse({ ...valid, message: 'corto' }).success, false);
  assert.equal(contactSchema.safeParse({ ...valid, message: 'x'.repeat(3001) }).success, false);
});

test('contact requests are limited per connection window', () => {
  const key = 'test-rate-limit';
  for (let attempt = 0; attempt < 5; attempt += 1) {
    assert.equal(contactRateLimited(key, 1000), false);
  }
  assert.equal(contactRateLimited(key, 1000), true);
  assert.equal(contactRateLimited(key, 1000 + 10 * 60 * 1000), false);
});

test('contact uses the fixed destination without mail credentials', () => {
  const previous = process.env.CONTACT_TO_EMAIL;
  delete process.env.CONTACT_TO_EMAIL;
  try {
    assert.equal(contactRecipient(), 'benjamin.aranda.dev@gmail.com');
  } finally {
    if (previous === undefined) delete process.env.CONTACT_TO_EMAIL;
    else process.env.CONTACT_TO_EMAIL = previous;
  }
});

test('contact endpoint rejects invalid fields and silently discards honeypot submissions', async () => {
  const previous = process.env.CONTACT_TO_EMAIL;
  process.env.CONTACT_TO_EMAIL = 'owner@example.com';
  try {
    const makeRequest = (body: unknown) =>
      new Request('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { origin: 'http://localhost:3000', 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    assert.equal((await POST(makeRequest({ ...valid, email: 'invalid' }))).status, 400);
    assert.equal((await POST(makeRequest({ ...valid, website: 'spam.example' }))).status, 200);
    const foreignOrigin = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { origin: 'https://another-site.example', 'Content-Type': 'application/json' },
      body: JSON.stringify(valid),
    });
    assert.equal((await POST(foreignOrigin)).status, 403);
  } finally {
    if (previous === undefined) delete process.env.CONTACT_TO_EMAIL;
    else process.env.CONTACT_TO_EMAIL = previous;
  }
});

test('contact endpoint forwards valid messages and reports delivery failures', async () => {
  const originalFetch = globalThis.fetch;
  const previous = process.env.CONTACT_TO_EMAIL;
  process.env.CONTACT_TO_EMAIL = 'owner@example.com';
  let sentTo = '';
  let sentBody: Record<string, string> = {};
  try {
    globalThis.fetch = async (input, init) => {
      sentTo = String(input);
      sentBody = JSON.parse(String(init?.body));
      return Response.json({ success: 'true' });
    };
    const makeRequest = (ip: string) =>
      new Request('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { origin: 'http://localhost:3000', 'Content-Type': 'application/json', 'x-forwarded-for': ip },
        body: JSON.stringify(valid),
      });
    assert.equal((await POST(makeRequest('test-success'))).status, 200);
    assert.equal(sentTo, 'https://formsubmit.co/ajax/owner%40example.com');
    assert.equal(sentBody.email, valid.email);
    assert.equal(sentBody._subject, `[Portafolio] ${valid.subject}`);

    globalThis.fetch = async () => Response.json({ success: 'false' });
    assert.equal((await POST(makeRequest('test-failure'))).status, 502);
  } finally {
    globalThis.fetch = originalFetch;
    if (previous === undefined) delete process.env.CONTACT_TO_EMAIL;
    else process.env.CONTACT_TO_EMAIL = previous;
  }
});
