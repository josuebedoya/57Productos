import { useEffect, useState } from 'react';
import axios from 'axios';

import { Product } from '../Components/product/Product';
import { Modalproduct } from '../Components/product/ModalProduct';

const Store = () => {

  const [ error, setError ] = useState(null);
  const [ products, setProducts ] = useState([]);
  const ProductOne = {
    name: 'Product One',
    img: 'Fruit1.jpg',
    price: '34.554',
  };

  const ProductTwo = {
    name: 'Product Two',
    img: 'Fruit3.jpg',
    price: '50.000',
    summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, laudantium culpa, ducimus maiores aperiam, aliquam excepturi neque consectetur possimus enim ipsam delectus. Cumque dicta non explicabo autem maiores, tenetur consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus earum, nulla ipsum eligendi repellendus laborum aliquam inventore omnis, nobis veritatis voluptatem accusantium nesciunt dolor mollitia neque amet enim sit!'
  }
  const ProductThree = {
    name: 'Product Three',
    img: 'Fruit4.jpg',
    price: '$1.500',
    summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, laudantium culpa, ducimus maiores aperiam, aliquam excepturi neque consectetur possimus enim ipsam delectus. Cumque dicta non explicabo autem maiores, tenetur consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus earum, nulla ipsum eligendi repellendus laborum aliquam inventore omnis, nobis veritatis voluptatem accusantium nesciunt dolor mollitia neque amet enim sit!'
  }

  const Fresas = {
    name: 'Fresas',
    img: 'Fruit2.jpg',
    imgHover: 'Fruit3.jpg',
    price: '$1.500',
    summary: `La fresa es un fruto de color rojo brillante, suculento y fragante que se obtiene de la planta que recibe su mismo nombre. En Occidente es considerada la "reina de las frutas". Además de poderse comer cruda se puede consumir como compota, mermelada. Es empleada con fines medicinales ya que posee excelentes propiedades que ayudan a preservar la salud.

La fresa (Fragaria vesca) creció durante mucho tiempo espontáneamente en los bosques llegando a tardar en realizarse su cultivo por ser una fruta muy frágil y porque para obtener una cosecha máxima de un mes al año era necesaria una ocupación permanente del suelo.

El fruto comestible se denomina vulgarmente 'eterio'. Se trata de un falso fruto formado por el receptáculo, en el que se hallan los aquenios (pepitas), pequeños y de color claro en la parte expuesta a la sombra y rojizo oscuro la expuesta al sol. Los aquenios pueden estar hundidos, superficiales o sobresalientes de la pulpa. También pueden ser muy o poco numerosos. Los sobresalientes aumentan la resistencia de la superficie, pero durante el lavado se desprenden muchos de ellos. Generalmente, el consumidor prefiere el fruto con pocos aquenios ya que éstos suponen el inconveniente de quedarse entre los dientes al ser mordidos.

La parte central del fruto o 'corazón' puede estar muy o poco desarrollada y puede haber frutos con el "corazón vacío". Ello es un carácter negativo. Los frutos pueden ser de varias formas, según el cultivar: cónicos, cónico-alargado, cónico-redondeado, esferoidales, oblatos, reniformes (forma de riñón).

Se suele recoger a principio del verano. Generalmente, las fresas silvestres son de menor tamaño que las cultivadas, pero su sabor y aroma es mejor y más agridulce.`
  }

  // Traer productos de la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(response.data || []);
      } catch (error) {
        setError(error);
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <>
      <div id="Store">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-Primary text-3xl py-10">
          <Product title={ProductOne.name} img={ProductOne.img} price={ProductOne.price} />
          <Product title={ProductTwo.name} img={ProductTwo.img} price={ProductTwo.price}>
            {ProductTwo.summary}
          </Product>
          <Product title={ProductTwo.name} img={ProductTwo.img} price={ProductTwo.price}>
            {ProductTwo.summary}
          </Product>
          <Product title={ProductThree.name} img={ProductThree.img} price={ProductThree.price}>
            {ProductThree.summary}
          </Product>
          <Product title={Fresas.name} img={Fresas.img} imgHover={Fresas.imgHover} price={Fresas.price}>
            {Fresas.summary}
          </Product>

          {products.length > 0 ? (
            products.slice(0, 10).map((product, i) => (
              <>
                <Product
                  title={product.title}
                  price={product.price}
                  img={ProductThree.img}
                  imgHover={ProductThree.img}
                >
                  {product.description.toString()}
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