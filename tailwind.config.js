const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 1px 5px rgba(50, 50, 0, 0.2)',
        'inset': 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)',
        'extense': '0 0 22px #c0c0c0',
        'custom-white': '0 0 7px #fff',
        'bottom-x': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        'modal': '0 0 20px #00000050',
        'bottom-right': '5px 5px 8px 2px #00000020',
      },
      colors: {
        'Primary': '#121212',
        'Secondary': '#2a4bf1',
        'Gray-dark': '#b4b4b4',
        scrollbar: '#121212',
        scrollbarThumb: '#121212',
      },
      spacing: {
        '600': '40pc',
        'five': '5px',
        '86': '86px',
      },
      fontSize: {
        '13': '13px',
        '15': '15px',
      },
      aspectRatio: {
        '100/83': '100/83',
        '100/63': '100/63'
      },
      scale: {
        '130': '1.3',
        '101': '1.01',
      },
      minHeight: {
        '600': '600px',
      },
      maxHeight:{
        '100': '400px',
        '101': '404px',
        '105': '420px',
        '110': '440px',
        '103': '412px',
      },
      maxWidth: {
        '93': '930px',
        '80': '80%',
        '95': '95%',
      },
      zIndex: {
        'modal': '9999',
      },
      translate: {
        '22': '90px',
      },
      height: {
        '38': '150px',
      },
      animation: {
        'fade-out': 'fade-out .2s ease-in both',
        'fade-in': 'fade-in .2s ease-in both',
        'shaking': 'shaking  2.5s linear infinite'
      },
      keyframes: {
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shaking: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
    },
    screens: {
      'mn': { max: '639.98px' },
      'sm': '640px',
      'md': '768px',
      'tl': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    textShadow: {
      'text-shadow-white': 'text-shadow: 2px 4px 3px #ffffff',
      'text-shadow-black': 'text-shadow: 2px 4px 3px #ffffff70',
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-white': {
          textShadow: '2px 4px 3px #ffffff',
        },
        '.text-shadow-black': {
          textShadow: '2px 4px 3px #00000070',
        },
      };
  
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('tailwind-scrollbar'),
  ]
}