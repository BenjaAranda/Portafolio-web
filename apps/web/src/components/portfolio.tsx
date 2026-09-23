import Link from 'next/link';
import { copy } from '@/lib/i18n';
import {
  local,
  projectPath,
  privacyPath,
  safeEmail,
  safeUrl,
  visibleProjects,
  type Locale,
  type Portfolio,
  type Project,
} from '@/lib/model';
import { SocialIcon } from './icons';
import { CopyEmail } from './copy-email';
import { Media } from './media';
import { BrandMark } from './brand-mark';
import { Credentials } from './credentials';
import { Technology } from './technology';

export function Eyebrow({ children }: { number?: string; children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export function External({
  href,
  children,
  className = 'text-link',
  icon,
}: {
  href?: string | null;
  children: React.ReactNode;
  className?: string;
  icon?: 'github' | 'linkedin';
}) {
  const url = safeUrl(href);
  return url ? (
    <a href={url} target="_blank" rel="noreferrer" className={className}>
      {icon ? <SocialIcon network={icon} /> : null}
      {children}
    </a>
  ) : null;
}

export function EmptyProjects({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <div className="empty-projects">
      <div>
        <h3>{c.emptyTitle}</h3>
        <p>{c.emptyBody}</p>
      </div>
    </div>
  );
}

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const c = copy[locale];
  return (
    <article className="project-card">
      {project.image ? (
        <Link href={projectPath(locale, project.slug)} tabIndex={-1} aria-hidden="true">
          <Media
            image={project.image}
            locale={locale}
            sizes="(max-width: 960px) 100vw, 50vw"
            className={project.slug === 'levelup-mobile' ? 'media-mobile-card' : ''}
          />
        </Link>
      ) : (
        <Link
          className="project-cover"
          href={projectPath(locale, project.slug)}
          tabIndex={-1}
          aria-hidden="true"
        >
          <span className="cover-symbol">{local(project.title, locale).slice(0, 1)}</span>
          <span className="cover-title">{local(project.title, locale)}</span>
          <span className="cover-caption">
            {locale === 'es' ? 'Explora el proyecto' : 'Explore the project'}
          </span>
        </Link>
      )}
      <div className="project-card-content">
        <div className="project-meta mono">
          <span>{local(project.category, locale) || 'Software'}</span>
          <span>{project.year}</span>
        </div>
        <h3>
          <Link href={projectPath(locale, project.slug)}>{local(project.title, locale)}</Link>
        </h3>
        <p>{local(project.summary, locale)}</p>
        <div className="tags">
          {project.technologies?.map((t) => (
            <Technology key={t} name={t} />
          ))}
        </div>
        <div className="project-card-footer">
          <Link href={projectPath(locale, project.slug)} className="text-link">
            {c.case}
          </Link>
          <External href={project.repository} className="project-repository" icon="github">
            GitHub
          </External>
        </div>
      </div>
    </article>
  );
}

function JourneyGroup({
  label,
  items,
  locale,
  kind,
}: {
  label: string;
  items: Portfolio['education'];
  locale: Locale;
  kind: 'education' | 'experience';
}) {
  return (
    <section className={`journey-group journey-group--${kind}`} aria-labelledby={`journey-${kind}`}>
      <header className="journey-group-heading">
        <span className="journey-group-mark" aria-hidden="true" />
        <h3 id={`journey-${kind}`}>{label}</h3>
      </header>
      <div className="journey-list">
        {items.map((item) => (
          <article key={item._id} className="journey-card">
            <div className="journey-card-heading">
              <div className="journey-title">
                <BrandMark name={item.organization} />
                <div>
                  <h4>{local(item.title, locale)}</h4>
                  <p className="journey-period">{local(item.period, locale)}</p>
                  <p className="journey-organization">{item.organization}</p>
                </div>
              </div>
            </div>
            <p className="journey-description">{local(item.description, locale)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Home({ data, locale }: { data: Portfolio; locale: Locale }) {
  const c = copy[locale];
  const es = locale === 'es';
  const projects = visibleProjects(data, locale);
  const selected = projects.filter((project) => project.featured);
  const featured = (selected.length ? selected : projects).slice(0, 4);
  const establishedSkills = data.skills.filter(
    (skill) => !skill.learning && local(skill.title, locale),
  );
  const learningSkills = data.skills.filter(
    (skill) => skill.learning && local(skill.title, locale),
  );
  const cv = safeUrl(locale === 'es' ? data.settings?.cvEs : data.settings?.cvEn);
  return (
    <div className="profile-portfolio">
      <div className="profile-stage">
        <section id="perfil" className="profile-intro shell">
          <div className="profile-identity">
            <p className="profile-role">{es ? 'Desarrollador junior' : 'Junior developer'}</p>
            <h1>{data.settings?.name || 'Tu nombre'}</h1>
            <p className="profile-specialty">{local(data.profile?.role, locale)}</p>
            <p className="profile-summary">{local(data.profile?.introduction, locale)}</p>
            {local(data.profile?.location, locale) ? (
              <p className="profile-location">{local(data.profile?.location, locale)}</p>
            ) : null}
            <div className="profile-actions">
              <Link className="button button-dark" href={projectPath(locale)}>
                {c.viewProjects}
              </Link>
              {cv ? (
                <a className="text-link" href={cv} target="_blank" rel="noreferrer">
                  {c.cv}
                </a>
              ) : (
                <a className="text-link" href="#capacidades">
                  {es ? 'Ver capacidades' : 'View skills'}
                </a>
              )}
            </div>
            <div className="profile-social">
              <External href={data.settings?.linkedin} icon="linkedin">
                LinkedIn
              </External>
              <External href={data.settings?.github} icon="github">
                GitHub
              </External>
            </div>
          </div>
          <aside className="profile-context" aria-label={es ? 'Sobre mí' : 'About me'}>
            {data.profile?.photo ? <Media image={data.profile.photo} locale={locale} /> : null}
            <h2>{es ? 'Sobre mí' : 'About me'}</h2>
            <p>{local(data.profile?.bio, locale)}</p>
            {data.education.slice(0, 1).map((item) => (
              <div className="profile-education" key={item._id}>
                <BrandMark name={item.organization} />
                <strong>{item.organization}</strong>
                <span>{local(item.title, locale)}</span>
                <span>{local(item.period, locale)}</span>
              </div>
            ))}
          </aside>
        </section>
      </div>
      <section id="proyectos" className="profile-section shell">
        <div className="profile-section-heading">
          <h2>{c.projects}</h2>
          <Link className="all-projects-button" href={projectPath(locale)}>
            {c.allProjects}
          </Link>
        </div>
        <p className="profile-section-description">
          {es
            ? 'Qué construí, cómo lo resolví y cuál fue mi aporte.'
            : 'What I built, how I approached it and what I contributed.'}
        </p>
        {featured.length ? (
          <div className="project-grid">
            {featured.map((project) => (
              <ProjectCard key={project._id} project={project} locale={locale} />
            ))}
          </div>
        ) : (
          <EmptyProjects locale={locale} />
        )}
      </section>
      <section id="capacidades" className="profile-section shell">
        <h2>{es ? 'Stack tecnológico' : 'Technology stack'}</h2>
        <p className="profile-section-description">
          {es
            ? 'Tecnologías utilizadas en proyectos y formación. El estudio en curso se indica por separado.'
            : 'Technologies used in projects and training. Current study is listed separately.'}
        </p>
        <div
          className="capability-list"
          role="region"
          aria-label={es ? 'Tecnologías por categoría' : 'Technologies by category'}
          tabIndex={0}
        >
          {establishedSkills.map((skill) => (
            <article className="capability-row" key={skill._id}>
              <div>
                <h3>{local(skill.title, locale)}</h3>
                <p>{local(skill.description, locale)}</p>
              </div>
              <div className="capability-tools">
                {skill.technologies.map((tech) => (
                  <Technology key={tech} name={tech} />
                ))}
              </div>
            </article>
          ))}
        </div>
        {learningSkills.length ? (
          <aside className="learning-panel" aria-label={es ? 'En aprendizaje' : 'Currently learning'}>
            <div className="learning-panel-heading">
              <span className="learning-marker" aria-hidden="true" />
              <div>
                <p className="learning-label">{es ? 'Formación actual' : 'Current studies'}</p>
                <h3>{es ? 'En aprendizaje' : 'Currently learning'}</h3>
              </div>
            </div>
            <div className="learning-panel-content">
              {learningSkills.map((skill) => (
                <div key={skill._id}>
                  <p>{local(skill.description, locale)}</p>
                  <div className="capability-tools">
                    {skill.technologies.map((tech) => (
                      <Technology key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        ) : null}
      </section>
      <section id="certificaciones" className="profile-section shell">
        <h2>{es ? 'Certificaciones' : 'Certifications'}</h2>
        {data.certifications.length ? (
          <Credentials items={data.certifications} locale={locale} />
        ) : (
          <p className="profile-empty">
            {es
              ? 'Certificaciones pendientes de incorporar. Cada una incluirá su institución y un enlace de verificación cuando esté disponible.'
              : 'Certifications have not been added yet. Each will include its issuer and a verification link when available.'}
          </p>
        )}
      </section>
      <section id="trayectoria" className="profile-section shell">
        <h2>{es ? 'Formación y trayectoria' : 'Education and experience'}</h2>
        <p className="profile-section-description">
          {es
            ? 'Educación y experiencia presentadas por separado, con cada período junto a su cargo o formación.'
            : 'Education and experience are shown separately, with each period next to its role or qualification.'}
        </p>
        <div className="journey-groups">
          <JourneyGroup
            label={c.education}
            items={data.education}
            locale={locale}
            kind="education"
          />
          <JourneyGroup
            label={c.experience}
            items={data.experience}
            locale={locale}
            kind="experience"
          />
        </div>
      </section>
      <Contact data={data} locale={locale} />
    </div>
  );
}

export function Contact({ data, locale }: { data: Portfolio; locale: Locale }) {
  const c = copy[locale];
  const email = safeEmail(data.settings?.email);
  return (
    <section id="contacto" className="contact-section">
      <div className="shell">
        <div className="contact-heading">
          <h2>{c.contactTitle}</h2>
        </div>
        <p>{c.contactBody}</p>
        <div className="contact-actions">
          {email ? (
            <div>
              <a className="email-link" href={`mailto:${email}`}>
                {email}
              </a>
              <CopyEmail email={email} locale={locale} />
            </div>
          ) : (
            <p className="contact-pending">
              {safeUrl(data.settings?.linkedin)
                ? locale === 'es'
                  ? 'Puedes contactarme a través de LinkedIn.'
                  : 'You can contact me through LinkedIn.'
                : c.contactPending}
            </p>
          )}
          <div className="social-links">
            <External href={data.settings?.github} icon="github">
              GitHub
            </External>
            <External href={data.settings?.linkedin} icon="linkedin">
              LinkedIn
            </External>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ locale, name }: { locale: Locale; name?: string | null }) {
  return (
    <footer className="shell footer">
      <span className="footer-brand">
        {name || 'portfolio'}
        <span className="accent">.</span>
      </span>
      <span>
        {copy[locale].footer} <span className="footer-stack">Next.js & React</span>
      </span>
      <Link href={privacyPath(locale)}>
        {copy[locale].privacy}
      </Link>
    </footer>
  );
}
