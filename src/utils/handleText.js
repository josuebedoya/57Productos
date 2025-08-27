export const normalizeText = ( t ) => {
  return t.toLocaleLowerCase() // Convert lower case
   .trim()// Remove spaces sides
   .normalize( "NFD" ) //  Replace tildes
   .replace( /[\u0300-\u036f]/g, "" )
};

export const Slug = ( t ) => {
  return t
   .toLowerCase()
   .normalize( 'NFD' ) // Normalize cents EJ. ñ by n
   .replace( /[\u0300-\u036f]/g, '' )     // Remove and replace tildes
   .replace( /[^a-z0-9]+/g, '-' )  // Remove chars alphanumerics
   .replace( /^-+|-+$/g, '' ); // Remove ebd and star script "-"
};