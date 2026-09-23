import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPortfolio } from '@/lib/content';
import { isLocale, local, projectPath, visibleProjects, type Locale } from '@/lib/model';
import { copy } from '@/lib/i18n';
import { External, Eyebrow } from '@/components/portfolio';
import { Media } from '@/components/media';
import { Technology } from '@/components/technology';
import { isAllowedMedia } from '@/lib/media-url';
type Props = { params: Promise<{ locale: string; section: string; slug: string }> };
async function getProject(params: Props['params']) {
  const { locale, section, slug } = await params;
  if (!isLocale(locale) || section !== (locale === 'es' ? 'proyectos' : 'projects')) notFound();
  const data = await getPortfolio();
  const project = visibleProjects(data, locale).find((p) => p.slug === slug);
  if (!project) notFound();
  return { project, locale, data };
}
export async function generateStaticParams() {
  const data = await getPortfolio();
  return (['es', 'en'] as Locale[]).flatMap((locale) =>
    visibleProjects(data, locale).map((p) => ({
      locale,
      section: locale === 'es' ? 'proyectos' : 'projects',
      slug: p.slug,
    })),
  );
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project, locale } = await getProject(params);
  return {
    title: local(project.title, locale),
    description: local(project.summary, locale),
    alternates: {
      canonical: projectPath(locale, project.slug),
      languages: Object.fromEntries(
        (['es', 'en'] as Locale[])
          .filter((l) => local(project.title, l) && local(project.summary, l))
          .map((l) => [l, projectPath(l, project.slug)]),
      ),
    },
  };
}
export default async function Page({ params }: Props) {
  const { project, locale } = await getProject(params);
  const c = copy[locale];
  return (
    <article className="shell case-page">
      <nav className="case-navigation" aria-label={locale === 'es' ? 'Proyecto' : 'Project'}>
        <Link className="button button-outline" href={`/${locale}`}>
          {c.home}
        </Link>
        <Link className="text-link" href={projectPath(locale)}>
          {c.back}
        </Link>
      </nav>
      <Eyebrow>
        {local(project.category, locale) || 'SOFTWARE'}
        {project.year && ` / ${project.year}`}
      </Eyebrow>
      <h1>{local(project.title, locale)}</h1>
      <p className="case-lead">{local(project.summary, locale)}</p>
      <div className="tags">
        {project.technologies?.map((t) => (
          <Technology key={t} name={t} />
        ))}
      </div>
      <div className="case-links">
        <External href={project.repository}>{c.repository}</External>
        <External href={project.demo}>{c.demo}</External>
      </div>
      {project.image && (
        <figure className="project-figure">
          <Media image={project.image} locale={locale} priority fullSize />
          <figcaption>{local(project.image.alt, locale)}</figcaption>
        </figure>
      )}
      <div className="case-body">
        {(['problem', 'role', 'solution', 'results', 'lessons'] as const).map(
          (key) =>
            local(project[key], locale) && (
              <section key={key}>
                <h2>{c[key]}</h2>
                <div>
                  {local(project[key], locale)
                    .split('\n\n')
                    .map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                </div>
              </section>
            ),
        )}
      </div>
      {project.gallery
        ?.filter((image) => isAllowedMedia(image.url))
        .map((image, i) => (
          <figure className="project-figure" key={`${image.url}-${i}`}>
            <Media image={image} locale={locale} fullSize />
            <figcaption>{local(image.alt, locale)}</figcaption>
            <a className="text-link" href={image.url} target="_blank" rel="noreferrer">
              {locale === 'es' ? 'Abrir imagen completa' : 'Open full image'}
            </a>
          </figure>
        ))}
    </article>
  );
}
