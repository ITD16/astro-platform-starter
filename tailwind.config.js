/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './components/**/*.{astro,html,js,jsx,ts,tsx}',
    './layouts/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  safelist: [
    'text-[150px]',
    'text-[200px]',
    'text-[240px]',
    '!text-[150px]',
    '!text-[200px]',
    '!text-[240px]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
