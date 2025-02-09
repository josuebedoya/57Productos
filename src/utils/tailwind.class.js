/**
 * You must add array with values in the map  function
 * @returns {Array}
 */

const colours = [ 'blue', 'red', 'yellow', 'purple','green', 'cyan', 'fuchsia', 'pink', 'orange'];

export default function CSafelist() {
  const safelist = [ 
    [...Array(12)].map((_, i) => `grid-cols-${i + 1}`),  // ['grid-cols-1', ...]
    [...Array(20)].map((_, i) => `gap-${i + 1}`), // ['gap-1', ...]
    colours.map(color => `shadow-${color}-500`,color => `hover:shadow-${color}-500`),// ['shadow-blue-500',...]
    colours.map(color => `hover:shadow-${color}-500`),// ['hover:shadow-blue-500',...]
  ].flat(); // Join Arrays

  return safelist;
};