import { Product } from "../Components/Product";

const Store = () => {
  return (
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-200 text-Primary text-3xl'>
  <Product title='Product One' img='Fruit1.jpg' price='$34554' />
  <Product title='Product Two' img='Fruit2.jpg' price='$3554' />
  <Product title='Product Three' img='Fruit3.jpg' price='$54554' />
  <Product title='Product Four' img='Fruit4.jpg' price='$554' />
  <Product title='Product Five' img='Fruit4.jpg' price='$600' />
</div>
  )
}
export { Store };