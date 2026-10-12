import { spawnSync } from 'node:child_process';

const result = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['audit', '--json'], {
  encoding: 'utf8',
  shell: process.platform === 'win32',
});
if (result.error || !result.stdout) throw result.error || new Error('Audit returned no report');
const report = JSON.parse(result.stdout);
if (report.error || !report.vulnerabilities) throw new Error('Audit failed to produce vulnerability data');
// Approved 2026-10-12: build tools only; no untrusted glob input. Review before expiry.
const expires = Date.parse('2026-11-12T00:00:00Z');
const allowed = 'https://github.com/advisories/GHSA-vfj7-8cjw-p6xm';
const findings = Object.values(report.vulnerabilities);
const advisories = findings.flatMap(finding => finding.via.filter(via => typeof via !== 'string'));
const blocked = advisories.filter(advisory => advisory.url !== allowed || Date.now() >= expires);
for (const advisory of advisories) {
  console.log(`${advisory.url === allowed && Date.now() < expires ? 'TEMPORARY EXCEPTION' : 'BLOCKED'}: ${advisory.title} (${advisory.url})`);
}
if (findings.length && !advisories.length) throw new Error('Unresolved audit dependency findings');
if (blocked.length) process.exit(1);
console.log('Audit passed; braces exception expires 2026-11-12. Other advisories remain blocking.');
