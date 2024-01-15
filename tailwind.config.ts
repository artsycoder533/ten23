import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#1B1F3B', //navy blue
        secondary: '#8a817c', //space gray
        accent: '#454ade', //royal blue
        neutral: '#f5fbef', //eggshell
        highlight: '#596f62', //olive green
      }
    },
  },
  plugins: [],
}
export default config
