import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const contentDir = `${process.env.SAMPLE_CONTENT_DIR ?? './src/content'}/blog`

const blog = defineCollection({
	loader: glob({ base: contentDir, pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			categories: z.array(z.string()),
			draft: z.boolean().optional()
		}),
});

export const collections = { blog };