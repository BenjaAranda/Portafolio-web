import Image from 'next/image';
import type { SimpleIcon } from 'simple-icons';
import {
  siApache,
  siApachemaven,
  siAxios,
  siBlender,
  siCucumber,
  siFlask,
  siGithubactions,
  siHibernate,
  siJetpackcompose,
  siJunit5,
  siKotlin,
  siMaterialdesign,
  siNextdotjs,
  siOpenapiinitiative,
  siPostgresql,
  siPython,
  siReact,
  siReactrouter,
  siSanity,
  siScrapy,
  siSelenium,
  siSpringsecurity,
  siSqlite,
  siTailwindcss,
  siTestinglibrary,
  siThreedotjs,
  siUnrealengine,
} from 'simple-icons';

const localIcons: Record<string, string> = {
  React: 'react',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  Java: 'java',
  'Spring Boot': 'spring',
  HTML: 'html5',
  CSS: 'css3',
  Bootstrap: 'bootstrap',
  Git: 'git',
  GitHub: 'github',
  Vite: 'vitejs',
  Vitest: 'vitest',
};

const simpleIcons: Record<string, SimpleIcon> = {
  'Tailwind CSS': siTailwindcss,
  PostgreSQL: siPostgresql,
  SQL: siPostgresql,
  Python: siPython,
  Scrapy: siScrapy,
  Axios: siAxios,
  Kotlin: siKotlin,
  'Jetpack Compose': siJetpackcompose,
  'Material 3': siMaterialdesign,
  Room: siSqlite,
  Flask: siFlask,
  Selenium: siSelenium,
  Cucumber: siCucumber,
  Maven: siApachemaven,
  JUnit: siJunit5,
  'Apache POI': siApache,
  'Next.js': siNextdotjs,
  Sanity: siSanity,
  'GitHub Actions': siGithubactions,
  'Three.js': siThreedotjs,
  'React Three Fiber': siReact,
  Blender: siBlender,
  'Unreal Engine': siUnrealengine,
  'Testing Library': siTestinglibrary,
  'React Router': siReactrouter,
  'Spring Security': siSpringsecurity,
  JPA: siHibernate,
  'APIs REST': siOpenapiinitiative,
};

function SimpleTechnologyIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      className="technology-icon"
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      style={{ color: `#${icon.hex}` }}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

export function Technology({ name }: { name: string }) {
  const icon = simpleIcons[name];
  return (
    <span className="technology-tag">
      {localIcons[name] ? (
        <Image
          src={`/brands/tech/${localIcons[name]}.webp`}
          alt=""
          width={22}
          height={22}
          unoptimized
        />
      ) : icon ? (
        <SimpleTechnologyIcon icon={icon} />
      ) : (
        <span className="technology-fallback" aria-hidden="true">
          {name
            .split(/\s+/)
            .map((part) => part[0])
            .join('')
            .slice(0, 2)
            .toUpperCase()}
        </span>
      )}
      {name}
    </span>
  );
}
