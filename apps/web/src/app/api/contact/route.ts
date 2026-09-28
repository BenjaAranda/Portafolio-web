import { contactRateLimited, contactRecipient, contactSchema } from '@/lib/contact';

export async function POST(request: Request) {
  const recipient = contactRecipient();
  if (!recipient) {
    return Response.json({ error: 'unavailable' }, { status: 503 });
  }

  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: 'invalid_origin' }, { status: 403 });
  }
  if (!request.headers.get('content-type')?.startsWith('application/json')) {
    return Response.json({ error: 'invalid_fields' }, { status: 415 });
  }

  if (Number(request.headers.get('content-length') || 0) > 6000) {
    return Response.json({ error: 'invalid_fields' }, { status: 413 });
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 6000) {
      return Response.json({ error: 'invalid_fields' }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: 'invalid_fields' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: 'invalid_fields' }, { status: 400 });
  }
  if (parsed.data.website) {
    return Response.json({ ok: true });
  }

  const requester = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (contactRateLimited(requester)) {
    return Response.json({ error: 'rate_limited' }, { status: 429 });
  }

  const { name, email, subject, message } = parsed.data;
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'https://benjamin-aranda.vercel.app',
        Referer: 'https://benjamin-aranda.vercel.app/es',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        _subject: `[Portafolio] ${subject}`,
        _captcha: 'false',
        _url: 'https://benjamin-aranda.vercel.app/es#contacto',
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
    });
    const result: unknown = await response.json();
    if (
      !response.ok ||
      typeof result !== 'object' ||
      result === null ||
      !('success' in result) ||
      (result.success !== true && result.success !== 'true')
    ) {
      console.error('Contact provider rejected message', response.status, result);
      return Response.json({ error: 'delivery_failed', provider: result }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact provider request failed', error);
    return Response.json({ error: 'delivery_failed', detail: String(error) }, { status: 502 });
  }
}
