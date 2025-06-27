import mime from 'mime';
import { checkFileExists } from "@/utils/checkFile.js";

/**
 * Load media dynamically
 * @param {string} path - Base path to the media file (relative to public or any base folder)
 * @param {string[]} allowedExtensions - List of allowed extensions (e.g. ['jpg', 'mp4', 'pdf'])
 * @returns {{ filePath: string|null, type: string|null }} - Returns file path and media type
 */

export const getMedia = async ( path, allowedExtensions = [ 'jpg', 'png', 'mp4', 'pdf', 'mp3' ] ) => {

  // if  there are no Path
  if ( !path ) {
    console.error( 'Path required' );
    return { filePath: null, type: 'notfound' };
  }

  let isExternal = false;

  // If the path is external url
  if ( path.startsWith( 'http' ) || path.startsWith( 'https' ) ) isExternal = true;
  if ( isExternal ) return { filePath: path, type: 'external' };


  // Validate if exist file
  const fileExists = await checkFileExists( path );
  if ( !fileExists ) return { filePath: null, type: 'notfound' };

  const getExt = ( path ) => {
    let name = path.startsWith( 'data:' )
     ? path.split( ';' ).shift() // if base64 type
     : path.split( '/' ).pop() // if relative path

    return name.split( name.startsWith( 'data:' ) ? '/' : '.' ).pop()?.toLowerCase();
  }

  const fileExt = getExt( path )// Get file extension

// If the file extension is not defined, return unsupported type
  if ( allowedExtensions.length > 1 && !allowedExtensions.includes( fileExt ) ) {
    console.error( `File extension not allowed: ".${ fileExt }".
    Allowed extensions: ${ allowedExtensions.map( ext => ` .${ ext }` ) }

   ` );

    // Return null if the extension is not allowed
    return { filePath: path, type: 'unsupported' };
  }

  const mimeType = mime.getType( fileExt )

// Get type file
  const getTypeFile = ( type ) => {

    if ( !type ) return 'unknown'; // Unknown type
    if ( type.startsWith( 'image/' ) ) return 'image'; // Type image
    if ( type.startsWith( 'video/' ) ) return 'video'; // Type video
    if ( type.startsWith( 'audio/' ) ) return 'audio'; // Type audio
    if ( type.startsWith( 'application/pdf' ) ) return 'document'; // Type document
    if ( type.startsWith( 'application/msword' ) || type.includes( 'officedocument' ) ) return 'officedocument'; // Type document
    if ( type.startsWith( 'application/zip' ) || type.startsWith( 'application/vnd.rar' ) || type.includes( 'compressed' ) ) return 'compressed'; // Type compressed || zip
    if ( type.includes( 'json' ) || type.includes( 'csv' ) || type.includes( 'xml' ) ) return 'integration'; // Type integration
    if ( type.startsWith( 'text' ) ) return 'text'; // Type text

    /**
     *
     ... Others types to use
     *
     */

    return 'other'; // Not supported type
  }


  // Generate the full path to the file
  const fileType = getTypeFile( mimeType );


  // Return the file path and type
  return { filePath: path, type: fileType }
};