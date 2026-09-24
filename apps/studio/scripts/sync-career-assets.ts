import { createReadStream, existsSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2026-03-01' });
const publicRoot = resolve(process.cwd(), '../web/public');

const files = {
  cvEs: resolve(publicRoot, 'documents/cv-benjamin-aranda-2026-es.pdf'),
  cvEn: resolve(publicRoot, 'documents/cv-benjamin-aranda-2026-en.pdf'),
  sql: resolve(publicRoot, 'credentials/sql-and-relational-databases-101.pdf'),
};

async function upload(path: string) {
  if (!path.startsWith(publicRoot) || !existsSync(path)) {
    throw new Error(`No se encontró el PDF revisado: ${path}`);
  }
  return client.assets.upload('file', createReadStream(path), { filename: basename(path) });
}

function fileReference(assetId: string) {
  return { _type: 'file', asset: { _type: 'reference', _ref: assetId } };
}

async function main() {
  if (!process.env.SANITY_STUDIO_PROJECT_ID) {
    throw new Error('Falta SANITY_STUDIO_PROJECT_ID en apps/studio/.env.local');
  }

  const [cvEs, cvEn, sql] = await Promise.all([
    upload(files.cvEs),
    upload(files.cvEn),
    upload(files.sql),
  ]);

  await client.createIfNotExists({ _id: 'siteSettings', _type: 'siteSettings' });
  await client
    .patch('siteSettings')
    .set({
      cvEs: fileReference(cvEs._id),
      cvEn: fileReference(cvEn._id),
    })
    .commit();

  await client.createOrReplace({
    _id: 'certification-ibm-sql-relational-databases',
    _type: 'certification',
    title: 'SQL and Relational Databases 101',
    issuer: 'IBM Skills Network',
    date: '2026-09',
    credentialId: 'f0d0dbf99cbe43dda89d4f9f9f2f9d26',
    url: 'https://courses.cognitiveclass.ai/certificates/f0d0dbf99cbe43dda89d4f9f9f2f9d26',
    file: fileReference(sql._id),
    order: 0,
  });

  console.log(`CV español: ${cvEs.url}`);
  console.log(`CV inglés: ${cvEn.url}`);
  console.log(`Certificado SQL: ${sql.url}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
