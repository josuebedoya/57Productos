/**
 * You must add array with values in the map  function
 * @returns {Array}
 */
const colours = [
  'blue',
  'red',
  'yellow',
  'purple',
  'green',
  'cyan',
  'fuchsia',
  'pink',
  'orange',
];

const breakpoints = [ 'mn', 'xn', 'sm', 'md', 'tl', 'lg', 'xl', '2xl' ];

const safelist = [
  // grid-cols-1 → grid-cols-12
  { pattern: /grid-cols-(1[0-2]|[1-9])/ },

  // gap-1 → gap-20
  { pattern: /gap-(1\d|[1-9]|20)/ },

  // shadow-color-500 + hover
  {
    pattern: new RegExp( `shadow-(${colours.join('|')})-500` ),
    variants: [ 'hover' ],
  },

  // responsive grid-cols
  {
    pattern: /grid-cols-(1[0-2]|[1-9])/,
    variants: breakpoints,
  },

  // tooltip translate (+ / -)
  {
    pattern: /translate-(x|y)-(1\d|[1-9]|20)/,
    variants: [ 'group-hover/tooltip', '-' ],
  }
];

export default safelist;