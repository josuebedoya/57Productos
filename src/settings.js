class Settings {
  constructor() {
    this.settings = {
      site: {
        name: "+57 Productos",
        theme: "dark",
        language: "es"
      }
    };
  }

  setSetting( path, newValue ) {
    const keys = path.split( "." );
    let setting = this.settings;

    for ( let i = 0; i < keys.length - 1; i++ ) {
      if ( !setting[ keys[ i ] ] ) return; // si la ruta no existe
      setting = setting[ keys[ i ] ];
    }

    const lastKey = keys[ keys.length - 1 ];
    if ( setting[ lastKey ] !== undefined ) {
      setting[ lastKey ] = newValue;
    }
  }

  getSetting( path ) {
    const keys = path.split( "." );
    let setting = this.settings;

    for ( let key of keys ) {
      if ( !setting[ key ] ) return null;
      setting = setting[ key ];
    }

    return setting;
  }
}

const setting = new Settings();

export const useSetSetting = ( path, value ) => {
  setting.setSetting( path, value );
};

export const useGetSetting = ( path ) => {
  return setting.getSetting( path );
};