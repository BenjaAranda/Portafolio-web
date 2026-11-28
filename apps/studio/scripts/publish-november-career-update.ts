import { createReadStream } from 'node:fs';
import { basename, resolve } from 'node:path';
import { getCliClient } from 'sanity/cli';
import { seed } from '../../web/src/lib/seed';

const client = getCliClient({ apiVersion: '2026-03-01' });
const publicRoot = resolve(process.cwd(), '../web/public');

async function upload(path: string) {
  const filename = resolve(publicRoot, path.slice(1));
  if (!path.startsWith('/') || path.includes('..')) throw new Error('Expected a local PDF');
  const asset = await client.assets.upload('file', createReadStream(filename), {
    filename: basename(filename),
  });
  return { _type: 'file', asset: { _type: 'reference', _ref: asset._id } };
}

async function main() {
  const settings = seed.settings;
  const cert = seed.certifications.find(item => item._id === 'santander-power-bi');
  if (!settings?.cvEs || !settings.cvEn || !cert?.file) throw new Error('Missing reviewed PDF');
  const currentSettings = await client.getDocument('siteSettings');
  if (!currentSettings) throw new Error('Missing published site settings');
  const id = `certification-${cert._id}`;
  const existing = await client.getDocument(id);
  const matches = await client.fetch<string[]>('*[_type == "certification" && credentialId == $serial]._id', {
    serial: cert.credentialId,
  });
  if (matches.some(other => other !== id) || (existing && existing.credentialId !== cert.credentialId)) {
    throw new Error('Power BI credential conflicts with an existing record');
  }
  const [cvEs, cvEn, file] = await Promise.all([upload(settings.cvEs), upload(settings.cvEn), upload(cert.file)]);
  await client.transaction()
    .patch('siteSettings', patch => patch.set({ cvEs, cvEn }))
    .createIfNotExists({ _id: id, _type: 'certification', title: cert.title,
      issuer: cert.issuer, credentialId: cert.credentialId, date: cert.date, order: -3, file })
    .patch(id, patch => patch.set({ file }))
    .commit();
  console.log('Published both CVs and Power BI certificate');
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
