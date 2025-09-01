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

  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },

  button: {
    base: 'inline-flex items-center justify-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',

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
    }
  },

  select: {
    base: "block w-full transition appearance-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed p-2 cursor-pointer scrollbar-thin scrollbar-track-transparent",

    variant: {
      solid: {
        primary: "bg-Primary text-white border border-Primary focus-visible:ring-Primary",
        secondary: "bg-Secondary text-white border border-Secondary focus-visible:ring-Secondary",
        white: "bg-white text-black border border-gray-300 focus-visible:ring-gray-400",
        black: "bg-black text-white border border-black focus-visible:ring-gray-600"
      },

      outline: {
        primary: "bg-transparent text-Primary border border-Primary focus-visible:ring-Primary",
        secondary: "bg-transparent text-Secondary border border-Secondary focus-visible:ring-Secondary",
        white: "bg-transparent text-white border border-white focus-visible:ring-white",
        black: "bg-transparent text-black border border-black focus-visible:ring-black"
      },

      flat: {
        primary: "bg-transparent text-Primary border-none focus-visible:ring-0",
        secondary: "bg-transparent text-Secondary border-none focus-visible:ring-0",
        white: "bg-transparent text-white border-none focus-visible:ring-0",
        black: "bg-transparent text-black border-none focus-visible:ring-0"
      }
    }
  },

  textarea: {
    base: 'focus:opacity-80 block w-full appearance-none focus:outline-none transition duration-300',

    padding: {
      sm: 'p2',
      md: 'p-3',
      lg: 'p-5',
      xl: 'p-7'
    },

    variant: {
      solid: {
        primary:
          "bg-Primary text-white border border-Primary placeholder-white focus-visible:ring-Primary focus:outline-none",
        secondary:
          "bg-Secondary text-white border border-Secondary placeholder-white focus-visible:ring-Secondary focus:outline-none",
        white:
          "bg-white text-black border border-gray-300 placeholder-gray-500 focus-visible:ring-gray-400 focus:outline-none",
        black:
          "bg-black text-white border border-black placeholder-white focus-visible:ring-gray-600 focus:outline-none",
      },

      outline: {
        primary:
          "bg-transparent text-Primary border border-Primary placeholder-Primary focus-visible:ring-Primary focus:outline-none",
        secondary:
          "bg-transparent text-Secondary border border-Secondary placeholder-Secondary focus-visible:ring-Secondary focus:outline-none",
        white:
          "bg-transparent text-white border border-white placeholder-white focus-visible:ring-white focus:outline-none",
        black:
          "bg-transparent text-black border border-black placeholder-black focus-visible:ring-black focus:outline-none",
      },

      flat: {
        primary: "bg-Primary/10 text-Primary border-none placeholder-Primary focus-visible:ring-0 focus:outline-none",
        secondary:
          "bg-Secondary/10 text-Secondary border-none placeholder-Secondary focus-visible:ring-0 focus:outline-none",
        white:
          "bg-white/10 text-white border-none placeholder-white focus-visible:ring-0 focus:outline-none",
        black:
          "bg-black/10 text-black border-none placeholder-black focus-visible:ring-0 focus:outline-none",
      }
    }
  },

  input: {
    base: 'block w-full text-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1',

    padding: {
      sm: 'px-2 py-1',
      md: 'px-3 py-2',
      lg: 'px-4 py-3',
      xl: 'px-5 py-4'
    },

    variant: {
      solid: {
        primary: 'bg-Primary text-white border border-Primary placeholder-white focus:ring-Primary',
        secondary: 'bg-Secondary text-white border border-Secondary placeholder-white focus:ring-Secondary',
        white: 'bg-white text-black border border-gray-300 placeholder-gray-500 focus:ring-gray-400',
        black: 'bg-black text-white border border-black placeholder-white focus:ring-gray-600',
      },

      outline: {
        primary: 'bg-transparent text-Primary border border-Primary placeholder-Primary focus:ring-Primary',
        secondary: 'bg-transparent text-Secondary border border-Secondary placeholder-Secondary focus:ring-Secondary',
        white: 'bg-transparent text-white border border-white placeholder-white focus:ring-white',
        black: 'bg-transparent text-black border border-black placeholder-black focus:ring-black',
      },

      flat: {
        primary: 'bg-Primary/10 text-Primary border border-transparent placeholder-Primary focus:ring-0',
        secondary: 'bg-Secondary/10 text-Secondary border border-transparent placeholder-Secondary focus:ring-0',
        white:
          'bg-white/10 text-white border border-transparent placeholder-white focus:ring-0',
        black: 'bg-black/10 text-black border border-transparent placeholder-black focus:ring-0',
      }
    },

    checkbox: {
      base: 'appearance-none !auto max-w-max cursor-pointer border',

      padding: {
        sm: 'p-2',
        md: 'p-4',
        lg: 'p-5',
        xl: 'p-7'
      },

      variant: {
        solid: {
          primary: 'checked:bg-Primary border-Primary',
          secondary: 'checked:bg-Secondary border-Secondary',
          white: 'checked:bg-white border-white',
          black: 'checked:bg-black border-black',

          icon: {
            primary: 'text-white',
            secondary: 'text-white',
            white: 'text-black',
            black: 'text-white'
          }
        },

        outline: {
          primary: 'bg-transparent border-Primary checked:bg-transparent checked:border-2',
          secondary: 'bg-transparent border-Secondary checked:bg-transparent checked:border-2',
          white: 'bg-transparent border-white checked:bg-transparent checked:border-2',
          black: 'bg-transparent border-black checked:bg-transparent checked:border-2',
        },

        flat: {
          primary: 'bg-Primary/10 checked:bg-Primary/30 border-0 checked:border-0',
          secondary: 'bg-Secondary/10 checked:bg-Secondary/30 border-0 checked:border-0',
          white: 'bg-white/10 checked:bg-white/30 border-0 checked:border-0',
          black: 'bg-black/10 checked:bg-black/30 border-0 checked:border-0'
        }
      }
    },

    range: {
      base: ' w-full cursor-pointer focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none [&[variant=flat]]:ring-0',

      size: {
        sm: 'h-2',
        md: 'h-3',
        lg: 'h-4',
        xl: 'h-5',
      },

      rounded: {
        none: 'square',
        full: 'full'
      },

      variant: {
        solid: {
          primary: 'range-solid-primary',
          secondary: 'range-solid-secondary',
          white: 'range-solid-white',
          black: 'range-solid-black',
        },

        outline: {
          primary: 'range-outline-primary',
          secondary: 'range-outline-secondary',
          white: 'range-outline-white',
          black: 'range-outline-black',
        },

        flat: {
          primary: 'range-flat-primary',
          secondary: 'range-flat-secondary',
          white: 'range-flat-white',
          black: 'range-flat-black',
        }
      }
    }
  }
}