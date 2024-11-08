import React, { useEffect, useState } from 'react';
import { GetProducts } from 'base-datos/src';

function Contact() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await GetProducts();
        setProducts(productsData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p>Algo ha fallado: {error}</p>;
  }

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export {Contact};