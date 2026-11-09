import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { contentDir } from './consts';

const blog = defineCollection({
	// Not using alias from /astro.config.mjs because glob loader does not
	// accept a module specifier, but only a string or URL
	// https://docs.astro.build/en/reference/content-loader-reference/#base
	loader: glob({ base: `${contentDir}/blog`, pattern: '**/*.{md,mdx}' }),
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