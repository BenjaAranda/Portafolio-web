import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPortfolio, siteReady } from '@/lib/content';
import { isLocale, privacyPath, projectPath, visibleProjects } from '@/lib/model';
import { copy } from '@/lib/i18n';
import { EmptyProjects, Eyebrow, ProjectCard } from '@/components/portfolio';
import { ReturnHomeLink } from '@/components/portfolio-navigation';
type Props = { params: Promise<{ locale: string; section: string }> };
function sectionType(locale: string, section: string) {
  if (locale === 'es')
    return section === 'proyectos' ? 'projects' : section === 'privacidad' ? 'privacy' : null;
  if (locale === 'en')
    return section === 'projects' ? 'projects' : section === 'privacy' ? 'privacy' : null;
  return null;
}
export function generateStaticParams() {
  return [
    { locale: 'es', section: 'proyectos' },
    { locale: 'en', section: 'projects' },
    { locale: 'es', section: 'privacidad' },
    { locale: 'en', section: 'privacy' },
  ];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale)) return {};
  const type = sectionType(locale, section);
  const path = type === 'projects' ? projectPath : privacyPath;
  return {
    title: type === 'projects' ? copy[locale].projects : copy[locale].privacy,
    alternates: { canonical: path(locale), languages: { es: path('es'), en: path('en') } },
  };
}
export default async function Page({ params }: Props) {
  const { locale, section } = await params;
  if (!isLocale(locale)) notFound();
  const type = sectionType(locale, section);
  if (!type) notFound();
  const c = copy[locale];
  if (type === 'privacy')
    return (
      <article className="shell prose-page">
        <Eyebrow>{c.privacy}</Eyebrow>
        <h1>{c.privacyTitle}</h1>
        <p>{c.privacyBody}</p>
        <p>
          {siteReady && process.env.CLOUDFLARE_ANALYTICS_TOKEN ? c.analyticsOn : c.analyticsOff}
        </p>
        <p>{c.hosting}</p>
        <ReturnHomeLink className="text-link" locale={locale} href={`/${locale}`}>
          {c.home}
        </ReturnHomeLink>
      </article>
    );
  const projects = visibleProjects(await getPortfolio(), locale);
  return (
    <section className="shell index-page">
      <ReturnHomeLink
        className="button button-outline page-home-button"
        locale={locale}
        href={`/${locale}`}
      >
        {c.home}
      </ReturnHomeLink>
      <Eyebrow number="01">{c.selected}</Eyebrow>
      <h1>{c.projectTitle}</h1>
      <p className="section-intro">{c.projectIntro}</p>
      {projects.length ? (
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p._id} project={p} locale={locale} />
          ))}
        </div>
      ) : (
        <EmptyProjects locale={locale} />
      )}
    </section>
  );
}
