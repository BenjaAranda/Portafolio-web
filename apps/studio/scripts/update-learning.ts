import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2026-03-01' });

async function main() {
  const groups = await client.fetch<Array<{
    _id: string;
    technologies?: string[];
  }>>('*[_type == "skillGroup" && learning == true && !(_id in path("drafts.**"))]{_id, technologies}');

  if (groups.length !== 1) {
    throw new Error(`Se esperaba un grupo publicado en aprendizaje; encontrados: ${groups.length}`);
  }

  const group = groups[0];
  const technologies = group.technologies || [];
  if (!technologies.includes('Power BI')) {
    throw new Error('El grupo de aprendizaje ya no contiene Power BI; revisar antes de actualizar.');
  }

  await client.patch(group._id).set({
    technologies: technologies.includes('Python')
      ? technologies
      : ['Python', ...technologies],
    description: {
      es: 'Formación autodidacta en Python, análisis de datos y visualización.',
      en: 'Independent study in Python, data analysis and visualization.',
    },
  }).commit();

  console.log(`Grupo de aprendizaje actualizado: ${group._id}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
