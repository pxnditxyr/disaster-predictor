/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        teal: {
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        cream: {
          50: '#FFF8E7',
          100: '#FFF8E1',
          200: '#FFE6B3',
        },
        coffee: {
          100: '#E6D7C3',
          300: '#D2B48C',
          400: '#C49A6C',
          500: '#8B4513',
          600: '#6F4E37',
          700: '#5D4037',
          800: '#3C2A21',
          900: '#3E2723',
        },
        red: {
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
        },
        yellow: {
          100: '#FEF3C7',
          800: '#92400E',
        },
        gray: {
          100: '#F3F4F6',
          800: '#1F2937',
        },
        blue: {
          100: '#DBEAFE',
          800: '#1E3A8A',
        },
      },
    },
	},
	plugins: [],
}
