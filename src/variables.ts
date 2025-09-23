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
    },

    position: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
    }
  },

  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },

  margin: {
    inl: {
      1: 'mx-1',
      2: 'mx-2',
      3: 'mx-3',
      4: 'mx-4',
      5: 'mx-5',
    },
    blk: {
      1: 'my-1',
      2: 'my-2',
      3: 'my-3',
      4: 'my-4',
      5: 'my-5',
    },

    1: 'm-1',
    2: 'm-2',
    3: 'm-3',
    4: 'm-4',
    5: 'm-5',
  },

  padding: {
    1: 'p-1',
    2: 'p-2',
    3: 'p-3',
    4: 'p-4',
    5: 'p-5',
  },

  delay: {
    none: 'duration-0',
    50: 'duration-50',
    75: 'duration-75',
    100: 'duration-100',
    150: 'duration-150',
    200: 'duration-200',
    300: 'duration-300',
    500: 'duration-500',
    700: 'duration-700',
    1000: 'duration-1000',
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
      base: 'absolute appearance-none disabled:cursor-disabled pointer-events-none',

      rounded: {
        none: 'square',
        full: 'rounded-full'
      },

      variant: {
        solid: {
          primary: 'bg-Primary',
          secondary: 'bg-Secondary',
          white: 'bg-white',
          black: 'bg-black'
        },

        outline: {
          primary: 'bg-transparent border border-Primary',
          secondary: 'bg-transparent border border-Secondary',
          white: 'bg-transparent border border-white',
          black: 'bg-transparent border border-black',
        },

        flat: {
          primary: 'bg-Primary h-0.5',
          secondary: 'bg-Secondary h-0.5',
          white: 'bg-white h-0.5',
          black: 'bg-black h-0.5'
        }
      }
    }
  },

  tooltip: {
    base: 'absolute rounded-md opacity-0 group-hover/tooltip:opacity-100 pointer-events-none py-1 px-3 translate-0 z-modal block transition-all',
    baseArrow: ' absolute text-2xl z-10 pointer-events-none cursor-default',
    variant: {
      solid: {
        primary: 'bg-Primary text-white border border-Primary',
        secondary: 'bg-Secondary text-white border border-Secondary',
        white: 'bg-white text-black border border-gray-400',
        black: 'bg-black text-white border border-black',
      },

      outline: {
        primary: 'bg-transparent text-Primary border border-Primary',
        secondary: 'bg-transparent text-Secondary border border-Secondary',
        white: 'bg-transparent text-white border border-white',
        black: 'bg-transparent text-black border border-black',
      }
    },
    position: {
      arrow: {
        base: 'absolute text-2xl z-10 pointer-events-none cursor-default',
        default: '-bottom-4 rotate-90',
        right: '-left-4 -rotate-180',
        left: '-right-4',
        top: '-bottom-4 rotate-90',
        bottom: '-top-4 -rotate-90',
        'corner-1': '-right-2.5 -bottom-2.5 rotate-45',
        'corner-2': '-left-2.5 -bottom-2.5 -rotate-[225deg]',
        'corner-3': '-left-2.5 -top-2.5 -rotate-[135deg]',
        'corner-4': '-right-2.5 -top-2.5 -rotate-45',
        center: 'hidden'
      },
      body: {
        left: 'right-1/2',
        right: 'left-1/2',
        top: 'bottom-1/2',
        bottom: 'top-1/2',
        center: 'inset-auto',
        'corner-1': 'bottom-1/2 right-1/2',
        'corner-2': 'bottom-1/2 left-1/2',
        'corner-3': 'top-1/2 left-1/2 ',
        'corner-4': 'top-1/2 right-1/2',
      }
    }
  },

  pagination: {
    base: {
      main: '',
      items: 'flex items-center justify-center aria-disabled:cursor-not-allowed transition w-auto h-auto leading-none'
    },
    variant: {
      solid: {
        primary: 'bg-Primary text-white border border-Primary',
        secondary: 'bg-Secondary text-white border border-Secondary',
        white: 'bg-white text-Primary border border-white',
        black: 'bg-black text-white border border-black',

        active: {
          primary: '[&:is(.active)]:bg-Primary [&:is(.active)]:text-white [&:is(.active)]:border [&:is(.active)]:border-Primary',
          secondary: '[&:is(.active)]:bg-Secondary [&:is(.active)]:text-white [&:is(.active)]:border [&:is(.active)]:border-Secondary',
          white: '[&:is(.active)]:bg-white [&:is(.active)]:text-Primary [&:is(.active)]:border [&:is(.active)]:border-white',
          black: '[&:is(.active)]:bg-black [&:is(.active)]:text-white [&:is(.active)]:border [&:is(.active)]:border-black',
        }
      },

      outline: {
        primary: 'bg-transparent text-Primary border border-Primary',
        secondary: 'bg-transparent text-Secondary border border-Secondary',
        white: 'bg-transparent text-white border border-white',
        black: 'bg-transparent text-black border border-black',

        active: {
          primary: '[&:is(.active)]:bg-transparent [&:is(.active)]:text-Primary [&:is(.active)]:border [&:is(.active)]:border-Primary',
          secondary: '[&:is(.active)]:bg-transparent [&:is(.active)]:text-Secondary [&:is(.active)]:border [&:is(.active)]:border-Secondary',
          white: '[&:is(.active)]:bg-transparent [&:is(.active)]:text-white [&:is(.active)]:border [&:is(.active)]:border-white',
          black: '[&:is(.active)]:bg-transparent [&:is(.active)]:text-black [&:is(.active)]:border [&:is(.active)]:border-black',
        }
      },

      flat: {
        primary: 'text-Primary bg-transparent border border-transparent',
        secondary: 'text-Secondary bg-transparent border border-transparent',
        white: 'text-white bg-transparent border border-transparent',
        black: 'text-black bg-transparent border border-transparent',

        active: {
          primary: '[&:is(.active)]:bg-Primary/10 [&:is(.active)]:text-Primary [&:is(.active)]:border-transparent',
          secondary: '[&:is(.active)]:bg-Secondary/10 [&:is(.active)]:text-Secondary [&:is(.active)]:border-transparent',
          white: '[&:is(.active)]:bg-white/10 [&:is(.active)]:text-white [&:is(.active)]:border-transparent',
          black: '[&:is(.active)]:bg-black/10 [&:is(.active)]:text-black [&:is(.active)]:border-transparent',
        }
      }
    }
  }
}