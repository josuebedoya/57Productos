/**
 * You must add array with values in the map  function
 * @returns {Array}
 */

export default function CSafelist() {
  const safelist = [ 
    [...Array(12)].map((_, i) => `grid-cols-${i + 1}`),  // ['grid-cols-1', 'grid-cols-2', ...]
    [...Array(20)].map((_, i) => `gap-${i + 1}`), // ['gap-1', 'gap-2', ...]
  ].flat(); // Join Arrays

  return safelist;
};