import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    date: z.string(),
    readTime: z.string(),
    image: z.string(),
    author: z.string(),
  }),
});

export const collections = { articles };
