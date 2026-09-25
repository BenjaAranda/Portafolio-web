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
  siOpencode,
  siPostgresql,
  siPython,
  siReact,
  siReactrouter,
  siSanity,
  siScrapy,
  siScrumalliance,
  siSelenium,
  siSpringsecurity,
  siSqlite,
  siTailwindcss,
  siTestinglibrary,
  siThreedotjs,
  siUnrealengine,
  siWarp,
} from 'simple-icons';

const localIcons: Record<string, string> = {
  React: '/brands/tech/react.webp',
  TypeScript: '/brands/tech/typescript.webp',
  JavaScript: '/brands/tech/javascript.webp',
  Java: '/brands/tech/java.webp',
  'Spring Boot': '/brands/tech/spring.webp',
  HTML: '/brands/tech/html5.webp',
  CSS: '/brands/tech/css3.webp',
  Bootstrap: '/brands/tech/bootstrap.webp',
  Git: '/brands/tech/git.webp',
  GitHub: '/brands/tech/github.webp',
  Vite: '/brands/tech/vitejs.webp',
  Vitest: '/brands/tech/vitest.webp',
  MasterBase: '/brands/masterbase.webp',
  'Power BI': '/brands/tech/power-bi.svg',
};

const simpleIcons: Record<string, SimpleIcon> = {
  'Tailwind CSS': siTailwindcss,
  PostgreSQL: siPostgresql,
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
  'Navigation Compose': siJetpackcompose,
  OpenCode: siOpencode,
  Scrum: siScrumalliance,
  Warp: siWarp,
};

type CustomIcon = 'api' | 'automation' | 'codex' | 'csv' | 'database' | 'excel' | 'testing';

const customIcons: Record<string, CustomIcon> = {
  Automatización: 'automation',
  Codex: 'codex',
  CSV: 'csv',
  SQL: 'database',
  'Data analysis': 'automation',
  Excel: 'excel',
  Playwright: 'testing',
  Retrofit: 'api',
  SmartData: 'automation',
  SmartView: 'automation',
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

function CustomTechnologyIcon({ icon }: { icon: CustomIcon }) {
  const common = {
    className: 'technology-icon',
    viewBox: '0 0 24 24',
    role: 'presentation' as const,
    'aria-hidden': true,
  };

  if (icon === 'excel') {
    return (
      <svg {...common}>
        <path fill="#107c41" d="M3 3h12v18H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path fill="#21a366" d="M15 6h8v12h-8z" />
        <path fill="#fff" d="m5.1 8 1.8 3L8.8 8H11l-2.9 4 3 4H8.8l-2-3.1L4.9 16H2.8l2.8-4-2.7-4h2.2Z" />
        <path stroke="#fff" strokeWidth="1.1" d="M15 9h8M15 12h8M15 15h8M19 6v12" />
      </svg>
    );
  }

  if (icon === 'database') {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="#36758b" />
        <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" fill="#36758b" />
        <path d="M3 10c0 1.7 4 3 9 3s9-1.3 9-3M3 16c0 1.7 4 3 9 3s9-1.3 9-3" fill="none" stroke="#e8f4f6" strokeWidth="1.4" />
      </svg>
    );
  }

  if (icon === 'codex') {
    return (
      <svg {...common}>
        <path fill="#183a4b" d="m12 1.8 8.8 5.1v10.2L12 22.2l-8.8-5.1V6.9L12 1.8Z" />
        <path fill="none" stroke="#b4e8dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m9.2 8.2-3.4 3.8 3.4 3.8m5.6-7.6 3.4 3.8-3.4 3.8" />
      </svg>
    );
  }

  if (icon === 'testing') {
    return (
      <svg {...common}>
        <rect width="20" height="17" x="2" y="3.5" rx="3" fill="#2e7d32" />
        <path stroke="#fff" strokeLinecap="round" strokeWidth="1.4" d="M3 8h18" />
        <circle cx="5" cy="6" r=".8" fill="#fff" />
        <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 14 2.3 2.3L16 10.7" />
      </svg>
    );
  }

  if (icon === 'api') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" fill="#0a66c2" />
        <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 9h11m-3-3 3 3-3 3m4 3H7m3 3-3-3 3-3" />
      </svg>
    );
  }

  if (icon === 'csv') {
    return (
      <svg {...common}>
        <path fill="#16825d" d="M5 2h10l5 5v15H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
        <path fill="#9be2c3" d="M15 2v5h5z" />
        <path stroke="#fff" strokeWidth="1.4" d="M7 11h10M7 15h10M10 9v9M14 9v9" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="6" cy="12" r="3" fill="#176d72" />
      <circle cx="18" cy="6" r="3" fill="#355f79" />
      <circle cx="18" cy="18" r="3" fill="#58a69d" />
      <path fill="none" stroke="#176d72" strokeWidth="2" d="m8.6 10.5 6.8-3m-6.8 6 6.8 3" />
    </svg>
  );
}

export function Technology({ name }: { name: string }) {
  const icon = simpleIcons[name];
  const customIcon = customIcons[name];
  return (
    <span className="technology-tag">
      {localIcons[name] ? (
        <Image
          src={localIcons[name]}
          alt=""
          width={22}
          height={22}
          unoptimized
        />
      ) : icon ? (
        <SimpleTechnologyIcon icon={icon} />
      ) : customIcon ? (
        <CustomTechnologyIcon icon={customIcon} />
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
