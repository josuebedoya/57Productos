import { createContext, useContext, useState, useEffect } from "react";
import { allSettings, getSetting, setSetting } from "@/settings.js";
import { getStorage, setStorage } from "@/utils/storage.js";

const SettingsContext = createContext( null );

const SettingsProvider = ( { children } ) => {
  const [ settings, setSettings ] = useState( null );
  const [ error, setError ] = useState( null );

  // Synchronize settings with storage
  useEffect( () => {
    const settingsStorage = getStorage( "settings" ); // Found settings from Storage

    if ( settingsStorage ) {
      setSettings( settingsStorage ); // if there are settings, use them
    } else {
      const defaultSettings = allSettings(); // Load default settings
      setSettings( defaultSettings );
      setStorage( "settings", defaultSettings ); // Send Settings to storage
    }
  }, [] );

  // Update settings & storage
  const updateSettings = ( setting, value ) => {
    if ( setting && value ) {
      if ( getSetting( setting ) ) {
        // Update the setting
        setSetting( setting, value );

        // Get the new settings
        const newSettings = allSettings();

        // Update local settings
        setSettings( prevSettings => ( {
          ...prevSettings,
          ...newSettings,
        } ) );

        // Send new settings to storage
        setStorage( "settings", newSettings );

      } else {
        setError( "La configuración que intentas editar no existe." );
      }
    } else {
      setError( "Faltan algunos valores. Por favor revisa." );
    }
  };
  // Update settings & storage
  const emptySetting = ( setting ) => {
    if ( setting ) {
      if ( getSetting( setting ) ) {
        // Update the setting
        setSetting( setting, null );

        // Get the new settings
        const newSettings = allSettings();

        // Update local settings
        setSettings( prevSettings => ( {
          ...prevSettings,
          ...newSettings,
        } ) );

        // Send new settings to storage
        setStorage( "settings", newSettings );

      } else {
        setError( "La configuración que intentas editar no existe." );
      }
    }
  };

  return (
   <SettingsContext.Provider value={ { settings, error, updateSettings, emptySetting } }>
     { children }
   </SettingsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSettings = () => {
  return useContext( SettingsContext );
};

export { SettingsProvider };