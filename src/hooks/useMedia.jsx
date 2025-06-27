import { useEffect, useState } from "react";
import { getMedia } from "@/utils/getMedia.js";

export const useMedia = ( src, defaultSrc, extensions ) => {
  const [ media, setMedia ] = useState( { filePath: null, type: null } );

  useEffect( () => {
    if ( !extensions?.length ) return;

    const load = async () => {
      const result = await getMedia( src || defaultSrc, extensions );
      setMedia( result );
    };

    load();
  }, [ src, defaultSrc, extensions ] );

  return media;
};
