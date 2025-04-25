class Settings {
  constructor() {
    // Global Settings
    this.settings = {
      public: {
        site: {
          theme: "dark",
          language: "es"
        },
        user: {
          role: 'admin',
          id: 1,
          username: '@josuebedoya',
          info: {
            name: 'Josué Bedoya',
            phone: 3004001122,
            email: 'josue@gmail.com'
          }
        }
      },
      private: {
        site: {
          name: "+57 Productos"
        }
      }
    };
  }

  // set setting
  setSettings( settingPath, newValue ) {
    const keys = settingPath.split( "." ); // Get path separated by points
    let setting = this.settings.public.user.role === 'admin' ? this.settings : this.settings.public;

    for ( let i = 0; i < keys.length - 1; i++ ) {
      if ( !setting[ keys[ i ] ] ) return; // If not found path

      setting = setting[ keys[ i ] ];
    }

    const lastKey = keys[ keys.length - 1 ];
    if ( setting[ lastKey ] !== undefined ) {
      setting[ lastKey ] = newValue;
    }
  }

  // return only one setting
  getSettings( settingPath ) {
    const keys = settingPath.split( "." );
    let setting = this.settings.public.user.role === 'admin' ? this.settings : this.settings.public;

    for ( let key of keys ) {
      if ( !setting[ key ] ) return null;
      setting = setting[ key ];
    }

    return setting;
  }

  // Return all settings
  getAllSettings() {
    return this.settings.public.user.role === 'admin'
     ? this.settings // if are admin
     : this.settings.public; // if are client
  }

}

const setting = new Settings();

export const setSetting = ( path, newValue ) => {
  setting.setSettings( path, newValue );
};

export const getSetting = ( path ) => {
  return setting.getSettings( path );
};

export const allSettings = () => {
  return setting.getAllSettings();
};