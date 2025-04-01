/**
 * Load images dynamic
 * @param {string} path - Base path from founding to images
 * You can add child folders to path, peer default the root are in public
 * @param extensionsImage - Here place the extension allowed to images (e.g., png, jpg, etc...)
 * @param extensionsVideo - Here place the extension allowed to videos (e.g., mp4, mp4, etc...)
 * @returns {object} - Re
 */

export const getMedia = ( path, extensionsImage = [ 'jpg', 'jpeg', 'png', 'webp' ], extensionsVideo = [ 'mov', 'mp4' ] ) => {

  // convert extensions
  const allowedExtensionsImage = new RegExp( `\\.(${extensionsImage.join( '|' )})$`, 'i' );
  const allowedExtensionsVideo = new RegExp( `\\.(${extensionsVideo.join( '|' )})$`, 'i' );

  // if  there are no Path
  if ( !path ) {
    console.error('Path required');
    return { filePath: null, type: null };
  }

  // get file name
  const nameFile = path.split( '/' ).pop();

  let typeFile = allowedExtensionsImage.test( nameFile ) ? 'image'
   : allowedExtensionsVideo.test( nameFile ) ? 'video'
    : null;

  if (!typeFile) {
    console.error(`Attempted to access an unsupported file type.
  Allowed file formats:
  - Video: (${extensionsVideo.join(' | .')}).
  - Image: (${extensionsImage.join(' | .')}).
  Provided file: "${nameFile}".`);
  }

  return { filePath: path, type: typeFile };
};