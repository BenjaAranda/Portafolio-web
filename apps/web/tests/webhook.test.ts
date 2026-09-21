import { test } from 'node:test';
import assert from 'node:assert/strict';
import { encodeSignatureHeader, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { validateWebhook } from '../src/lib/webhook';
const secret = 'test-only-not-a-real-secret';
async function signed(body: string, signingSecret = secret) {
  return new Request('http://localhost/api/revalidate', {
    method: 'POST',
    body,
    headers: {
      [SIGNATURE_HEADER_NAME]: await encodeSignatureHeader(body, Date.now(), signingSecret),
    },
  });
}
test('authentic CMS update is accepted', async () => {
  assert.deepEqual(await validateWebhook(await signed('{"_type":"project"}'), secret), {
    ok: true,
  });
});
test('wrong secret cannot invalidate cache', async () => {
  const result = await validateWebhook(await signed('{"_type":"project"}', 'wrong'), secret);
  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.status, 401);
});
test('signed malformed payload does not invalidate cache', async () => {
  for (const body of ['{', 'null', '{"_type":"user"}', '{"path":"/anything"}']) {
    const result = await validateWebhook(await signed(body), secret);
    assert.equal(result.ok, false);
    if (!result.ok) assert.equal(result.status, 400);
  }
});
test('body size is bounded independently of supplied headers', async () => {
  const result = await validateWebhook(await signed('x'.repeat(16385)), secret);
  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.status, 413);
});
test('unconfigured endpoint fails closed', async () => {
  const result = await validateWebhook(await signed('{}'));
  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.status, 503);
});
