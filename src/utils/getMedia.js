/**
 * Load images dynamic
 * @param {string} path - Base path from founding to images
 * You can add child folders to path, peer default the root are in public
 * @param extensions - Objet with extensions with you wants allow
 * @returns {string}
 */

export const getMedia = ( path, extensions = [ 'jpg', 'jpeg', 'png', 'webp' ] ) => {

  // convert extensions
  const allowedExtensions = new RegExp( `\\.(${extensions.join( '|' )})$`, 'i' );

  // if  there are no Path
  if ( !path ) return null;

  const nameFile = path.split( '/' ).pop();

  if ( !allowedExtensions.exec( nameFile ) ) {
    console.error( `Extension file allowed : ( ${extensions.join( ' | .' )} ). Your Path: "${ nameFile }"`);
    return null;

  } else {
    return `/${ path }`

  }
};