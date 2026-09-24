import Image from 'next/image';

const marks: Record<string, string> = {
  'Duoc UC': 'duoc',
  MasterBase: 'masterbase',
  'MasterBase®': 'masterbase',
  'Santander Open Academy': 'santander',
  'EF SET': 'efset',
  'IBM Skills Network': 'ibm',
  SIVIS: 'sivis',
  'LevelUP React': 'levelup',
};
export function BrandMark({ name }: { name: string }) {
  const mark = marks[name];
  return mark ? (
    <Image
      className="brand-mark"
      src={`/brands/${mark}.${mark === 'ibm' ? 'svg' : 'webp'}`}
      alt=""
      width={48}
      height={48}
      unoptimized
    />
  ) : null;
}
