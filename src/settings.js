class Settings {
  constructor() {
    // Global Settings
    this.settings = {
      site: {
        theme: "dark",
        language: "es",
        name: "+57 Productos Colombia",
        description: "De colombia para el mundo ❤️",
        rateExchange: 'COP'
      },
      user: {
        role: 'admin',
        id: 1,
        username: 'josuebedoya',
        photo: '/images/profile-cat.jpg',
        info: {
          name: 'Josué Bedoya',
          phone: 3004001122,
          email: 'josue@gmail.com'
        },
        money: 1000000
      }
    };
  }

  // set setting
  setSettings( settingPath, newValue ) {
    const keys = settingPath.split( "." ); // Get path separated by points
    let setting = this.settings;

    for ( let i = 0; i < keys.length - 1; i++ ) {
      if ( !setting[ keys[ i ] ] ) return ; // If not found path

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
    let setting = this.settings;

    for ( let key of keys ) {
      if ( !setting[ key ] ) return settingPath;
      setting = setting[ key ];
    }

    return setting;
  }

  // Return all settings
  getAllSettings() {
    return this.settings
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