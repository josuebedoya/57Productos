import { useEffect, useState } from 'react';
import { getData } from 'management-supabase';

import { Product } from '../Components/product/Product';
import { Modalproduct } from '../Components/product/ModalProduct';

const Store = () => {

  const [ error, setError ] = useState(null);
  const [ products, setProducts ] = useState([]);

  // get product from database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getData();
        setProducts(res);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return <div>Algo ha fallado: {error.message}</div>;
  }

  return (
    <>
      <div id="Store">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 py-10">
          {products.length > 0 ? (
            products.slice(0, 10).map((product, i) => (
              <>
                <Product key={i}
                  title={product.nombre}
                  price={product.precio}
                  img='Fruit2.jpg'
                  imgHover='Fruit2.jpg'
                >
                  {product.descripcion}
                </Product>
              </>
            ))
          ) : (
            <p>Cargando productos, no debería tardar demasiado</p>
          )}
        </div>
        <div className="container mx-auto">
          <Modalproduct />
        </div>
      </div>
    </>
  );
};

export { Store };