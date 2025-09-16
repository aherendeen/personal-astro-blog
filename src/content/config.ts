import { defineCollection, z } from 'astro:content'

// Define strict frontmatter for blog posts
// Aligns with the README template and adds helpful optional fields
const blog = defineCollection({
	schema: z.object({
		title: z.string().min(1, 'title is required'),
		description: z.string().min(1, 'description is required'),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => (typeof val === 'string' ? new Date(val) : val))
			.pipe(z.date()),
		updatedDate: z
			.string()
			.or(z.date())
			.optional()
			.transform((val) =>
				val ? (typeof val === 'string' ? new Date(val) : val) : undefined
			)
			.optional(),
		coverImageCredit: z.string().optional(),
		coverImageAlt: z.string().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
})

export const collections = { blog }
