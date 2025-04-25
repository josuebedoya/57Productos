import { createContext, useContext, useState, useEffect } from "react";
import { allSettings, getSetting, setSetting } from "@/settings.js";
import { getStorage, setStorage } from "@/utils/storage.js";

const SettingsContext = createContext( null );

const SettingsProvider = ( { children } ) => {
  const [ settings, setSettings ] = useState( [] );
  const [ error, setError ] = useState( null );

  // Handle settings default
  useEffect( () => {
    const defaultSettings = allSettings(); // get Settings
    const settingsStorage = getStorage( "settings" ); // Found settings from Storage

    if ( settingsStorage ) {
      setSettings( settingsStorage ); // if there are settings, use them
    } else {

      setSettings( defaultSettings );
      setStorage( "settings", defaultSettings ); // Send Settings to storage
    }
  }, [] );

  const updateSettings = ( setting, value ) => {
    if ( setting && value ) {

      if ( getSetting( setting ) ) {
        setSetting( setting, value );
        const newsSettings = allSettings(); // get new Settings
        setStorage( 'settings', newsSettings ); // update settings from storage

      } else setError( 'la configuración que intentas editar no existe.' );

    } else setError( 'Faltan valores por ingresar, por favor revisa.' );
  };

  return (
   <SettingsContext.Provider value={ { settings, error, updateSettings } }>
     { children }
   </SettingsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSettings = () => {
  return useContext( SettingsContext );
};

export { SettingsProvider };