import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bkg: 'hsl(var(--color-bkg)/<alpha-value>)',
        txt: {
          main: 'hsl(var(--color-txt-main)/<alpha-value>)',
          accent: 'hsl(var(--color-txt-accent)/<alpha-value>)',
        },
        accent: 'hsl(var(--color-accent)/<alpha-value>)',
        lines: 'hsl(var(--color-lines)/<alpha-value>)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class',
};
export default config;
