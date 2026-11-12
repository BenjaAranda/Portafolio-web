import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2026-03-01' });

async function main() {
  const id = 'certification-excel-avanzado';
  const document = await client.getDocument(id);
  if (document?.credentialId !== 'OA-2026-0915003195792') {
    throw new Error('Existing Excel credential does not match the reviewed PDF');
  }
  const path = resolve(process.cwd(), '../web/public/credentials/excel-intermedio-avanzado.pdf');
  const asset = await client.assets.upload('file', createReadStream(path), {
    filename: 'excel-intermedio-avanzado.pdf',
  });
  await client.patch(id).set({
    file: { _type: 'file', asset: { _type: 'reference', _ref: asset._id } },
  }).commit();
  console.log(`Excel certificate published: ${asset.url}`);
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
