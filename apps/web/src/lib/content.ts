import 'server-only';
import { createClient } from '@sanity/client';
import { cache } from 'react';
import { portfolioSchema } from './model';
import { seed } from './seed';

export const cmsConfigured = Boolean(process.env.SANITY_PROJECT_ID);
export const siteReady =
  process.env.SITE_READY === 'true' && cmsConfigured && process.env.VERCEL_ENV !== 'preview';
export const siteOrigin = (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
const asset = '{"url": asset->url, alt}';
const query = `{
  "settings": *[_type == "siteSettings"] | order(_updatedAt desc)[0]{name,email,github,linkedin,"cvEs": cvEs.asset->url,"cvEn": cvEn.asset->url},
  "profile": *[_type == "profile"] | order(_updatedAt desc)[0]{role,headline,introduction,bio,location,"photo": photo${asset}},
  "projects": *[_type == "project" && defined(slug.current)] | order(order asc, _createdAt desc){_id,"slug": slug.current,title,summary,problem,role,solution,results,lessons,category,year,technologies,featured,repository,demo,"image": image${asset},"gallery": gallery[]${asset}},
  "skills": *[_type == "skillGroup"] | order(order asc){_id,title,description,technologies,learning},
  "experience": *[_type == "experience"] | order(order asc){_id,organization,title,period,description},
  "education": *[_type == "education"] | order(order asc){_id,organization,title,period,description},
  "certifications": *[_type == "certification"] | order(order asc){_id,title,issuer,date,expires,credentialId,url,"file": file.asset->url,"image": image${asset}}
}`;
export const getPortfolio = cache(async () => {
  if (!cmsConfigured) return seed;
  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID!,
    dataset: process.env.SANITY_DATASET || 'production',
    apiVersion: '2026-03-01',
    useCdn: false,
    perspective: 'published',
  });
  const data = await client.fetch(query, {}, { next: { revalidate: 3600, tags: ['portfolio'] } });
  // A configured but broken CMS must not silently fall back to sample content.
  return portfolioSchema.parse(data);
});
