import { useDatabase } from "@/hooks/useDatabase.jsx";
import { useResults } from "@/modules/search/context/ParamsUrl.jsx";
import { useEffect, useState } from "react";
import { normalizeText } from "@/utils/handleText.ts";
import List from "@/components/ui/list/index.tsx";
import { Product } from "@/modules/icommerce/components/product.jsx";
import img from '/assets/images/products/lettuce.jpg';
import '@/modules/search/styles/pages/_index.scss';
import { Metas } from "@/layouts/metas/metas.tsx";

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
         <List
          items={ found }
          keyExtractor={ item => item?.id }
          renderItem={ item => (
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
          ) }
          cols='grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
          colItem='col-span-1'
          labelEmpty={ `No se encontraron productos relacionados con "${ query }".` }
         />
       </div>
     </section>
   </>
  );
};

export { Search };