export const getStorage = ( key ) => {
  const data = localStorage.getItem( key );
  try {
    return data ? JSON.parse( data ) : null;

  } catch ( e ) {
    console.error( "Error parsing storage key:", key + '\n ' + e );
    return null;
  }
};

export const setStorage = ( key, value ) => {
  localStorage.setItem( key, JSON.stringify( value ) );
};

export const rmItemStorage = ( key ) => {
  localStorage.removeItem( key );
};

export const clearStorage = ( ) => {
  localStorage.clear();
};