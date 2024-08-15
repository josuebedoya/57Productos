/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 1px 5px rgba(50, 50, 0, 0.2)',
        'inset': 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)',
        'extense': '0 0 22px #c0c0c0;',
        'custom-white': ' 0 0  7px #fff'
      },
      colors: {
        'Primary': '#7f7f7f',
        'Secondary': '#3a3a3a'
      },
    },
  },
  plugins: [],
}