import { Product } from "../Components/Product";

const Store = () => {
  return (
    <div className='flex items-center justify-center bg-gray-200 text-green-700 text-3xl'>
      <Product title='Product One' img ='Fruit1.jpg' price='$34554'/>
      <Product title='Product Twp' img ='Fruit2.jpg' price='$3554'/>
      <Product title='Product Three' img ='Fruit3.jpg' price='$54554'/>
      <Product title='Product Four' img ='Fruit4.jpg' price='$554'/>
    </div>
  )
}
export { Store };