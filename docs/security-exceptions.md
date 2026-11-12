# Security exception history

Resolved on 2026-11-12: dependency updates pass the full npm audit with zero
findings. CI runs `npm audit --audit-level=low` without exceptions. The expired
exception below is retained only as a historical record, not as active policy.

The minimatch override applies only to versions 7 through 10, upgraded to
11.0.8 to address GHSA-g3hv-75wg-m249. The build/lint/Studio workflows and
browser tests validate compatibility; older legacy minimatch APIs are not
overridden. Next.js and eslint-config-next are updated together.

Approved by the owner on 2026-10-12. Expires 2026-11-12 (UTC).

Only GHSA-vfj7-8cjw-p6xm (braces) is exempted. There is no published fixed
version. The dependency is used by lint and Sanity development/build tooling
with repository-owned glob patterns. The public contact form does not accept
or pass glob patterns to these tools. Do not run the tooling with untrusted
patterns. Replace the exception when a supported upstream fix is available.

The audit still fetches current findings and fails for every other advisory,
for invalid audit reports, and for this advisory after the expiry date.
Transitive findings caused by this advisory are reported by npm as well.
