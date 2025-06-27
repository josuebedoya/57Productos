import { useDatabase } from "@/hooks/useDatabase.jsx";
import { useResults } from "@/context/ParamsUrl.jsx";
import { useEffect, useState } from "react";
import { normalizeText } from "@/utils/handleText.js";
import { List } from '@/components/list.jsx';
import { Product } from "@/components/product/product.jsx";
import img from '/assets/images/products/lettuce.jpg';
import { Metas } from "@/components/metas/metas.jsx";

const Search = () => {
  const { get, data } = useDatabase();
  const [ found, setFound ] = useState( [] );
  const { query } = useResults();
  const { settings } = useDatabase();

  // Get products
  useEffect( () => {
    get( 'productos' );
  }, [] );

  // Start function
  useEffect( () => {
    const handleFoundItems = () => {

      // Filtered items found
      const itemsFound = data?.[ 'productos' ].filter( item => normalizeText( item.nombre ).includes( normalizeText( query ) ) );
      // Update list found
      setFound( itemsFound );
    };

    if ( data?.[ 'productos' ] ) {
      handleFoundItems();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ data?.[ 'productos' ], query ] );

  const breakpoints = {
    zero: 2,
    md: 3,
    lg: 4,
    '2xl': 2,
  }

  return (
   <>
     <Metas
      title={ `${ settings?.site.name } | Resultados` }
      description='Aquí encontrarás los resultados de tu búsqueda.'
      type='website'/>
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
            found.length > 0 && query !== '' &&
            found.map( item => (
             <div key={ item.id } className={ `item-found-${ item.id }` }>
               <Product
                id={ item.id }
                title={ item.nombre }
                price={ item.precio }
                img={ img }
                imgHover={ img }
                amount={ 1 }
               >
                 { item.descripcion }
               </Product>
             </div>
            ) )
           }
         </List>
       </div>
     </section>
   </>
  );
};

export { Search };