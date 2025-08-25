export const vars = {
  text: {
    color: {
      primary: 'text-Primary',
      secondary: 'text-Secondary',
      accent: 'text-Accent',
      white: 'text-white',
      black: 'text-black',
      gray: 'text-gray-500',
    },
    size: {
      sm: 'text-sm leading-5',
      md: 'text-base leading-6',
      lg: 'text-lg leading-7',
      xl: 'text-xl leading-8',
    }
  },
  button: {
    padding: {
      sm: 'px-3 py-2',
      md: 'px-4 py-2.5',
      lg: 'px-6 py-3',
      xl: 'px-9 py-4',
    },
    variant: {
      solid: {
        primary: 'bg-Primary text-white border border-Primary',
        secondary: 'bg-Secondary text-white border border-Secondary',
        white: 'bg-white text-Primary border border-white',
        black: 'bg-black text-white border border-black',
        hover: {
          primary: 'hover:bg-Primary hover:text-white hover:border hover:border-Primary',
          secondary: 'hover:bg-Secondary hover:text-white hover:border hover:border-Secondary',
          white: 'hover:bg-white hover:text-Primary hover:border hover:border-white',
          black: 'hover:bg-black hover:text-white hover:border hover:border-black',
        }
      },
      outline: {
        primary: 'bg-transparent text-Primary border border-Primary',
        secondary: 'bg-transparent text-Secondary border border-Secondary',
        white: 'bg-transparent text-white border border-white',
        black: 'bg-transparent text-black border border-black',
        hover: {
          primary: 'hover:bg-transparent hover:text-Primary hover:border hover:border-Primary',
          secondary: 'hover:bg-transparent hover:text-Secondary hover:border hover:border-Secondary',
          white: 'hover:bg-transparent hover:text-white hover:border hover:border-white',
          black: 'hover:bg-transparent hover:text-black hover:border hover:border-black',
        }
      },
      flat: {
        primary: 'text-Primary bg-transparent border border-transparent',
        secondary: 'text-Secondary bg-transparent border border-transparent',
        white: 'text-white bg-transparent border border-transparent',
        black: 'text-black bg-transparent border border-transparent',
        hover: {
          primary: 'hover:bg-Primary/10 hover:text-Primary hover:border-transparent',
          secondary: 'hover:bg-Secondary/10 hover:text-Secondary hover:border-transparent',
          white: 'hover:bg-white/10 hover:text-white hover:border-transparent',
          black: 'hover:bg-black/10 hover:text-black hover:border-transparent',
        }
      }
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    }
  }
}