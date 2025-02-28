/**
 * Load images dinamic
 * @param {string} path - Base path from founding to images
 * You can add subfolders to path, peer default the root are in public
 * @returns {Array} 
 */

export const getMedia = (path) => {

  const images = import.meta.glob(`${path}/**/*.{jpg, png, jpeg, webp, svg, heich}`);
  return Object.keys( images ).map( path => new URL( path, import.meta.url ).href );
}