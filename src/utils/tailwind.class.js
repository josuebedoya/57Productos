/**
 * You must add array with values in the map  function
 * @returns {Array}
 */

const colours = [ 'blue', 'red', 'yellow', 'purple','green', 'cyan', 'fuchsia', 'pink', 'orange'];
const breakpoints = [ 'mn:', 'xn:', 'sm:', 'md:', 'tl:', 'lg:', 'xl:', '2xl:' ];

export default function CSafelist() {
  const safelist = [

    // ['grid-cols-1', ...]
    [...Array(12)].map((_, i) => `grid-cols-${i + 1}`),

    // ['gap-1', ...]
    [...Array(20)].map((_, i) => `gap-${i + 1}`),

    // ['shadow-blue-500',...]
    colours.map(color => `shadow-${color}-500`, color => `hover:shadow-${color}-500`),


    // ['hover:shadow-blue-500',...]
    colours.map(color => `hover:shadow-${color}-500`),

    // ['mn:grid-cols-1'...]
    breakpoints.flatMap(( b ) => [...Array(12)].map((_, i) => `${ b }grid-cols-${i + 1}`)),

    // positive and negative Values to translate for tooltip
    [...Array(20)].map((_, i) => `group-hover/tooltip:translate-x-${i + 1}
      group-hover/tooltip:-translate-x-${i + 1}
      group-hover/tooltip:translate-y-${i + 1}
      group-hover/tooltip:-translate-y-${i + 1}`
    )

  ].flat(); // Join Arrays
  return safelist;
};