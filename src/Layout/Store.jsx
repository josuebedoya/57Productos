import { useEffect, useState } from 'react';
import { getData } from 'management-supabase';

import { Product } from '../Components/product/Product';
import { Modalproduct } from '../Components/product/ModalProduct';

const Store = () => {

  const [ error, setError ] = useState(null);
  const [ products, setProducts ] = useState([]);
  const [ productsByCategory, setProductsByCategory ] = useState([]);

  useEffect(() => {
    // get product from database
    const fetchProducts = async () => {
      try {
        const res = await getData('productos');
        setProducts(res);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchProductsByCategory = async () => {
      try {
        const res = await getData('producto_categorias',{
          categoria_id: 1
        });
        setProductsByCategory(res);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchProductsByCategory();
    fetchProducts();
  }, []);

  if (error) {
    return <div>Algo ha fallado: {error.message}</div>;
  }

  return (
    <>
      <div id="Store">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 py-10">
          {products ? (
            products.slice(0,30).map((product, i) => (
              <>
                <Product key={i}
                  id={product.id}
                  title={product.nombre}
                  price={product.precio}
                  img='Fruit2.jpg'
                  imgHover='Fruit2.jpg'
                  amount={1}
                >
                  {product.descripcion}
                </Product>
              </>
            ))
          ) : (
            <p>Cargando productos, no debería tardar demasiado</p>
          )}
        </div>
        <div className='container mx-auto'>
          {productsByCategory ?(
            productsByCategory.map((product, i) => (
              <li key={i}>
                {product.categoria_id}
              </li>
            ))) : null}
        </div>
        <div className="container mx-auto">
          <Modalproduct />
        </div>
      </div>
    </>
  );
};

export { Store };