/**
 * Formats a base image/video/audio `src` URL into multiple variants using the provided extensions.
 *
 * Comportamiento:
 * - Si `src` es vacío o no hay extensiones → devuelve un array con un objeto vacío.
 * - Si `src` es un dataURL o blob (`data:` o `blob:`) → devuelve el mismo `src` para todas las extensiones.
 * - Si `src` es una URL válida → reemplaza su extensión por cada una de las indicadas en `extensions`.
 * - Si la URL es inválida → devuelve cada extensión como un objeto `{ src, ext }` sin modificación adicional.
 *
 * @param src - La URL original del recurso (puede ser absoluta, relativa, base64 o blob).
 * @param extensions - Lista de extensiones deseadas (ej: ["webp", "jpg", "png"]).
 * @returns Array de objetos `{ src, ext }` con las URLs formateadas.
 *
 * @example absolute path
 * formattedSrc("https://example.com/image.png", ["webp", "jpg"]);
 * // → [
 * //   { src: "https://example.com/image.webp", ext: "webp" },
 * //   { src: "https://example.com/image.jpg", ext: "jpg" }
 * // ]
 *
 * @example base64
 * formattedSrc("data:image/png;base64,...", ["webp", "jpg"]);
 * // → [
 * //   { src: "data:image/png;base64,...", ext: "" },
 * //   { src: "data:image/png;base64,...", ext: "" }
 * // ]
 *
 * @example bad
 * formattedSrc("", ["webp"]);
 * // → [{ src: "", ext: "" }]
 */

const formattedSrc = (src: string | undefined, extensions: string[]): Record<string, string>[] => {
  if (!src || !extensions.length) return [{src: '', ext: ''}];

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    return extensions?.map(ext => ({src, ext: ''}));
  }

  try {
    const url = new URL(src, window.location.origin);
    const path = url.pathname;
    const withoutExt = path.substring(0, url.pathname.lastIndexOf("."))
    return extensions?.map(ext => ({
      src: `${url.origin}${withoutExt}.${ext}`,
      ext
    }));

  } catch (e) {
    console.error('Error trying to formatted src:  ', e);
    return extensions?.map(ext => ({src, ext}));
  }
}

export default formattedSrc;