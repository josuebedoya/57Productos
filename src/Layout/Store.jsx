import { Product } from '../Components/product/Product';
import { Modalproduct } from '../Components/product/ModalProduct';

const Store = () => {

  const ProductOne = {
    name: 'Product One',
    img: 'Fruit1.jpg',
    price: '$34554',

  }

  const ProductTwo = {
    name: 'Product Two',
    img: 'Fruit3.jpg',
    price: '$50.000',
    summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, laudantium culpa, ducimus maiores aperiam, aliquam excepturi neque consectetur possimus enim ipsam delectus. Cumque dicta non explicabo autem maiores, tenetur consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus earum, nulla ipsum eligendi repellendus laborum aliquam inventore omnis, nobis veritatis voluptatem accusantium nesciunt dolor mollitia neque amet enim sit!'
  }

  return (
    <>
      <div id='Store'>
        <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6  text-Primary text-3xl py-40'>
          <Product title={ProductOne.name} img={ProductOne.img} price={ProductOne.price} />
          <Product title={ProductOne.name} img={ProductOne.img} price={ProductOne.price} />
          <Product title={ProductOne.name} img={ProductOne.img} price={ProductOne.price} />

          <Product title={ProductTwo.name} img={ProductTwo.img} price={ProductTwo.price} >
            {ProductTwo.summary}
          </Product>
          <Product title={ProductTwo.name} img={ProductTwo.img} price={ProductTwo.price}>
            {ProductTwo.summary}
          </Product>
          <Product title={ProductTwo.name} img={ProductTwo.img} price={ProductTwo.price}>
            {ProductTwo.summary}
          </Product>
          <Product title={ProductTwo.name} img={ProductTwo.img} price={ProductTwo.price}>
            {ProductTwo.summary}
          </Product>
          <Product title={ProductTwo.name} img={ProductTwo.img} price={ProductTwo.price} IsOpenModal>
            {ProductTwo.summary}
          </Product>
        </div>
        <div className='container mx-auto mb-36'>
          <Modalproduct/>
        </div>
      </div>
    </>
  );
};

export { Store };