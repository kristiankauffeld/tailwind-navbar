/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'nord-0': '#242933',
        'nord-1': '#2E3440',
        'nord-4': '#ECEFF4',
        'nord-6': '#A8A8A8',
        'nord-9': '#81A1C1',
      },
    },
  },
  plugins: [],
};
