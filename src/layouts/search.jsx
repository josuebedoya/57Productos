import { useDatabase } from "@/utils/database.jsx";
import { useResults } from "@/context/itemsFound.jsx";
import { useEffect, useState } from "react";
import { normalizeText } from "@/utils/handleText.jsx";
import { BoxOpen } from "@/resources/icons.jsx";

const Search = () => {
  const { get, data } = useDatabase();
  const [ found, setFound ] = useState( [] );
  const { query } = useResults();

  // Get products
  useEffect( () => {
    get( 'productos' );
  }, [] );

  // Start function
  useEffect( () => {
    const handleFoundItems = () => {

      // Filtered items found
      const itemsFound = data.filter( item => normalizeText( item.nombre ).includes( normalizeText(query) ) );

      // Update list found
      setFound( itemsFound );
    };

    if ( data ) {
      handleFoundItems();
    }
  }, [ data, query ] );

  return (
   <div>
     {
       found.length > 0 && query !== '' ?
        found.map( item => (
         <div key={ item.id } className='item-found'>
           <h2>{ item.nombre }</h2>
           <h5>{ item.precio }</h5>
           <p>Cantidad : { item.stock }</p>
         </div>
        ) )
        :
        <div className='text-null text-center py-32 flex justify-center  gap-6'>No se encontraron elementos relacionados
          con &#34; { query } &#34;. <BoxOpen classIcons='animate-shaking'/></div>
     }
   </div>
  );
};

export { Search };