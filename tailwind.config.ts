/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#110000",
        light: "#fafafa",
      },
      zIndex: {
        modal: '1050',
      }
    },
  },
  plugins: [],
};