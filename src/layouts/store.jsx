import { useEffect, useState } from 'react';
import { useDatabase } from "@/utils/database.jsx";
import { Product } from '@/components/product/product.jsx';
import img from '/images/products/carrot.jpg';

const Store = () => {
  const [ products, setProducts ] = useState( [] );
  const { get, data, error, loading } = useDatabase();

  // get product from database
  useEffect( () => {
    get( 'productos', {}, 'products');
  }, [] );

  // update local products
  useEffect( () => {
    if ( data ) {
      setProducts( data );
    }
  }, [ data ] );


  // handle error && loading
  if ( error ) {
    return <div>Algo ha fallado: { error.message }</div>;
  }
  if ( loading ) {
    return <div>Cargando contenido-----</div>;
  }

  return (
   <main id='Store'>
     <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 py-10'>
       { products ? (
        products.slice( 0, 30 ).map( ( product, i ) => (
         <Product key={ i }
                  id={ product.id }
                  title={ product.nombre }
                  price={ product.precio }
                  img={ product.image || img }
          // imgHover={ path || img }
                  amount={ 1 }
         >
           { product.descripcion }
         </Product>
        ) )
       ) : (
        <p>Cargando productos, no debería tardar demasiado</p>
       )
       }
     </div>
   </main>
  )
}

export { Store };