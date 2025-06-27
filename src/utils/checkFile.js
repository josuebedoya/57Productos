/**
 * Verify if file exist.
 * @param {string} url - Path to found
 * @returns {Promise<boolean>} - true if file exists, false otherwise
 */
export async function checkFileExists( url ) {

  try {
    const res = await fetch( 'http://localhost:5173/images.json', { method: 'GET' } );
    if ( res.ok ) {
      const resjson = await res.json();
      return Object.values( resjson ).includes( url );
    }

  } catch ( err ) {
    console.error( 'Error file not verified:', err );
    return false;
  }
}
