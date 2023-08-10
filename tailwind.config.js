/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'bg-black': '#151515',
      white: '#ffff',
      bgHsla: 'hsla(0, 0%, 100%, 0.16)',
    },
    backgroundImage: {
      'search-icon': "url('/src/assets/icons/search-icon.svg')",
    },
    backgroundSize: {
      '50%': '50%',
    },
  },
  plugins: [],
};
