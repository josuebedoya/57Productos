/**
 * Load images dinamic
 * @param {string} path - Base path from founding to images
 * You can add subfolders to path, peer default the root are in /src/resources/images
 * @returns {Array} 
 */

export const getLocalImages = (path = '@/src/resources/images') => {

  const images = import.meta.glob(`${path}/**/*.{jpg, png, jpeg, webp, svg, heich}`);
  const imagesPath = Object.keys(images).map(path => new URL(path, import.meta.url).href);

  return imagesPath
}