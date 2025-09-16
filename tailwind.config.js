/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono Variable', 'monospace'],
				display: ['Silkscreen', 'monospace'],
			},
			// Typography plugin is loaded via CSS using `@plugin`,
			// but we keep theme overrides here for convenience.
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: 'inherit',
						a: {
							color: 'inherit',
							textDecoration: 'underline',
							fontWeight: '500',
						},
						strong: { fontWeight: '600' },
						code: {
							fontWeight: '400',
							backgroundColor: 'rgba(0, 0, 0, 0.05)',
							padding: '0.125rem 0.25rem',
							borderRadius: '0.25rem',
						},
						pre: {
							backgroundColor: 'rgba(0, 0, 0, 0.05)',
							padding: '1rem',
							borderRadius: '0.5rem',
							overflow: 'auto',
						},
					},
				},
			},
		},
	},
}
