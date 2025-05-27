export const normalizeText = ( t ) => {
  return t.toLocaleLowerCase() // Convert lower case
   .trim()// Remove spaces sides
   .normalize( "NFD" ) //  Replace tildes
   .replace( /[\u0300-\u036f]/g, "" )
};

export const Slug = ( t ) => {
  const converted =t.trim() // Delete spaces from sides
   .replaceAll( ' ', '-' ) // Replace spaces to script
   .replaceAll( '/', '-' ) // Replace hash
   .replace( /[^a-zA-Z0-9-]/g, '' ) // Delete characters what not is letter
   .replace( /-+/g, '-' ) // If there are more the one "-" ,  leaves only one
   .toLowerCase(); // Covert to lower case

  return converted[0] === '-' ||  converted[0] === '/' ? converted.slice(1) : converted;
};

