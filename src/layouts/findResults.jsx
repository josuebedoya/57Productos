import { useDatabase } from "@/utils/database.jsx";
import { useResults } from "@/context/ParamsUrl.jsx";
import { useEffect, useState } from "react";
import { normalizeText } from "@/utils/handleText.js";
import { List } from '@/components/list.jsx';
import { Product } from "@/components/product/product.jsx";
import img from '/images/products/lettuce.jpg';

const FindResults = () => {
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
      const itemsFound = data.filter( item => normalizeText( item.nombre ).includes( normalizeText( query ) ) );

      // Update list found
      setFound( itemsFound );
    };

    if ( data ) {
      handleFoundItems();
    }
  }, [ data, query ] );

  const breakpoints = {
    zero: 2,
    md: 3,
    lg: 4,
    '2xl': 2,
  }

  return (
   <section id='results'>
     <div className='found-items container mx-auto px-3 py-16'>
       <div className="top-section mb-16">
         {
           found.length > 0 && query !== '' ?
            <h1
             dangerouslySetInnerHTML={ { __html: `Prodcutos encontrados para "<em><strong>${ query }</strong></em>".` } }/>
            : null
         }
       </div>
       <List textEmpty={ `No se encontraron productos relacionados con "${ query }".` } breakpoints={ breakpoints }
             columns={ 1 } rows={ 2 } pagination typePagination={ 2 }>
         {
           found.length > 0 && query !== ''  &&
            found.map( item => (
             <div key={ item.id } className={ `item-found-${ item.id }` }>
               <Product
                id={ item.id }
                title={ item.nombre }
                price={ item.precio }
                img={ img }
                imgHover={ img }
               >
                 { item.descripcion }
               </Product>
             </div>
            ) )
         }
       </List>
     </div>
   </section>
  );
};

export { FindResults };