/**
 * Extracts the file extension from a given URL or path string.
 *
 * @param src - A string representing a full or relative URL/path.
 *
 * @returns The file extension without the leading dot.
 *          If no extension is found, an empty string is returned.
 *
 * Example:
 *  getExt("https://example.com/image.png?width=300") → "png"
 *  getExt("/assets/video.mp4") → "mp4"
 */

const getExt = (src: string): string => {
  const url = new URL(src, window.location.origin);
  const path = url.pathname;
  return path.substring(url.pathname.lastIndexOf(".") + 1);
}

export default getExt;