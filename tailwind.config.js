/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/config/**/*.{js,jsx,ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'background': '#0f172a',
        'text-primary': '#cbd5e1',
        'text-secondary': '#94a3b8',
        'accent': '#38bdf8',
        'surface': '#1e293b',
        'border': '#334155',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}