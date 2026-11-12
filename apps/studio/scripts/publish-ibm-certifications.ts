import { createReadStream } from 'node:fs';
import { basename, resolve } from 'node:path';
import { getCliClient } from 'sanity/cli';
import { seed } from '../../web/src/lib/seed';

const client = getCliClient({ apiVersion: '2026-03-01' });
const ids = ['ibm-data-analyst-career-preparation', 'ibm-python-data-science'];

async function main() {
  for (const [index, id] of ids.entries()) {
    const credential = seed.certifications.find(item => item._id === id);
    if (!credential?.file) throw new Error(`Missing reviewed certificate: ${id}`);
    const path = resolve(process.cwd(), '../web/public', credential.file.slice(1));
    const asset = await client.assets.upload('file', createReadStream(path), { filename: basename(path) });
    const { _id, file: _file, ...fields } = credential;
    await client.createIfNotExists({
      _id: `certification-${_id}`,
      _type: 'certification',
      ...fields,
      file: { _type: 'file', asset: { _type: 'reference', _ref: asset._id } },
      order: index - 2,
    });
    await client.patch(`certification-${_id}`).set({ issuer: credential.issuer }).commit();
    console.log(`Published: ${credential.title}`);
  }
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
