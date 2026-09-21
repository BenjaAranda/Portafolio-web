import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

const allowed = new Set([
  'siteSettings',
  'profile',
  'project',
  'skillGroup',
  'experience',
  'education',
  'certification',
]);
type Validation = { ok: true } | { ok: false; status: number; error: string };

export async function validateWebhook(request: Request, secret?: string): Promise<Validation> {
  if (!secret) return { ok: false, status: 503, error: 'Webhook not configured' };
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);
  if (!signature) return { ok: false, status: 401, error: 'Invalid signature' };
  const reader = request.body?.getReader();
  const chunks: Uint8Array[] = [];
  let length = 0;
  if (reader) {
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        length += value.byteLength;
        if (length > 16384) {
          await reader.cancel();
          return { ok: false, status: 413, error: 'Payload too large' };
        }
        chunks.push(value);
      }
    } finally {
      reader.releaseLock();
    }
  }
  const body = Buffer.concat(chunks).toString('utf8');
  if (!(await isValidSignature(body, signature, secret).catch(() => false))) {
    return { ok: false, status: 401, error: 'Invalid signature' };
  }
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return { ok: false, status: 400, error: 'Invalid JSON' };
  }
  if (
    !payload ||
    typeof payload !== 'object' ||
    !('_type' in payload) ||
    typeof payload._type !== 'string' ||
    !allowed.has(payload._type)
  ) {
    return { ok: false, status: 400, error: 'Invalid document type' };
  }
  return { ok: true };
}
