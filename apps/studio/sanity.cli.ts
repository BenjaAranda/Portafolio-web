import { defineCliConfig } from 'sanity/cli';
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  deployment: { appId: 'uvo72djkkf22391jm0tayc50' },
});
