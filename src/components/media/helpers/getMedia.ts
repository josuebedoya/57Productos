/**
 * getMedia
 * --------------
 * Analyzes a source (`string` or `Blob`) to determine its MIME type and classify it.
 *
 * @param src - String (URL, Base64) or Blob representing the file to evaluate.
 * @param allowedExtensions - List of allowed file extensions (without the dot).
 *
 * @returns Promise<{ fileSrc: string | Blob, typeFile: string }>
 *    - fileSrc: The original source if valid, or an empty string if not.
 *    - typeFile: Classified file type (e.g., 'image', 'video', 'audio', 'unsupported', 'default').
 *
 * Behavior:
 *  - If `src` does not exist → { fileSrc: '', typeFile: 'default' }
 *  - If the extension is not allowed → { fileSrc: '', typeFile: 'unsupported' }
 *  - If an error occurs → { fileSrc: '', typeFile: 'default' }
 */
import mime from "mime";
import getExt from './getExt.ts';
import getTypeFile from './getTypeFile.ts';
import {getMimeFromBlob, getMimeFromBase64} from "./getMimes.ts";

const getMedia = async (src: string | Blob, allowedExtensions: string[]):
  Promise<Record<string, string | Blob>> => {

  // If src doest no exist return default type
  if (!src) return {fileSrc: '', typeFile: 'default'};

  try {
    let mimeType: string | null = null;

    if (typeof src === 'string' && src.startsWith('data:')) {
      mimeType = getMimeFromBase64(src);
    } else if (src instanceof Blob) {
      mimeType = getMimeFromBlob(src)
    } else {
      const ext = getExt(src).toLowerCase();
      const normalizedAllowed = allowedExtensions.map(e => e.toLowerCase());

      // If the extension is not allowed return not unsupported type
      if (!normalizedAllowed || !normalizedAllowed.includes(ext)) {
        console.error(
          `File extension not allowed: ".${ext}" in file: ${src}`,
          `__Allowed extensions: ${normalizedAllowed?.map(ext => ` .${ext}`) || 'No Extensions Allowed'}`
        );
        return {fileSrc: '', typeFile: 'unsupported'};
      }

      mimeType = mime.getType(ext) || '';
    }

    // Return type detected and src
    const typeFile = getTypeFile(mimeType);
    return {fileSrc: src, typeFile};

  } catch (err) {
    console.error("Error processing File:", src, err);

    // Return default type if did error
    return {fileSrc: '', typeFile: 'default'}
  }
};

export default getMedia;