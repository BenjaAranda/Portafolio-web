import Image from 'next/image';
const icons: Record<string, string> = {
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
export function Technology({ name }: { name: string }) {
  return (
    <span className="technology-tag">
      {icons[name] ? (
        <Image src={`/brands/tech/${icons[name]}.webp`} alt="" width={22} height={22} unoptimized />
      ) : null}
      {name}
    </span>
  );
}
