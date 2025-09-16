import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import rehypeFigureTitle from 'rehype-figure-title'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'
import remarkModifiedTime from './src/plugins/remark-modified-time.mjs'

// https://astro.build/config
export default defineConfig({
	// Replace with your actual domain when deploying
	// For local development, this is fine as-is
	site: process.env.SITE_URL || 'http://localhost:4321',
	base: '/',
	integrations: [
		mdx({
			// MDX configuration for enhanced content
			optimize: true,
		}),
		sitemap({
			// Sitemap configuration
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
		}),
		icon({
			// Include icon packs you want to use
			include: {
				mdi: ['*'], // Material Design Icons
				// Add other icon packs as needed
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		// Production optimizations
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						// Separate vendor chunks for better caching
						vendor: ['astro'],
						react: ['react', 'react-dom'],
					},
				},
			},
		},
	},
	markdown: {
		remarkPlugins: [remarkReadingTime, remarkModifiedTime],
		rehypePlugins: [rehypeFigureTitle],
		// Enable smartypants for better typography
		smartypants: true,
	},
	// Image optimization settings
	image: {
		// Enable image optimization
		service: {
			entrypoint: 'astro/assets/services/sharp',
		},
	},
	// Compression and optimization
	compressHTML: true,
})
