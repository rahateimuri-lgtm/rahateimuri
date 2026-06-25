import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** card stat */
    statValue: z.string(),
    statLabel: z.string(),
    statColor: z.enum(['accent', 'accent-2', 'ink']).default('accent'),
    /** one-line card summary */
    summary: z.string(),
    /** homepage ordering */
    order: z.number(),
    /** render as the big featured card on the homepage grid */
    featured: z.boolean().default(false),
    /** SEO */
    seoTitle: z.string(),
    seoDescription: z.string(),
    /** hero video loop: basename of file in /public/video + /public/img/poster */
    heroVideo: z.string(),
    heroSourceUrl: z.string().url().optional(),
    heroSourceLabel: z.string().optional(),
    /** quick-fact chips */
    tags: z.array(z.string()).default([]),
    /** supporting stills */
    gallery: z
      .array(z.object({ src: z.string(), alt: z.string() }))
      .default([]),
    /** live external links */
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
          meta: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };
