import { useState } from "react";
import { SearchEngineIcon } from "@/resources/icons.jsx";
import { Button } from "@/components/button.jsx";
import { Input } from "@/components/input.jsx";
import { useCart } from "@/context/cart.jsx";

const Search = () => {
  const [ showModal, SetShowModal ] = useState( false );
  const [ valueSearch, setValueSearch ] = useState( '' );
  const { cart } = useCart();
  console.log(cart)

  // Open  Search engine
  const openModal = () => {
    SetShowModal( !showModal );
  }

  const onChangeValueSearch = ( { value } ) => {
    setValueSearch( value );
  };

  const CloseModal = () => {

    let valueInput = valueSearch.toLocaleLowerCase();
    let productFound = cart.find( product => product.title.toLocaleLowerCase() === valueInput );

    if ( valueSearch ) {
      if ( productFound ) {
        alert( `el producto '${ valueSearch }' aún está dispible, quedan ${ productFound.amount }` );
        setValueSearch( '' );
      } else {
        alert( `No se encontró '${ valueSearch }', revisa o intenta más tarde` );
      }
    } else {
      alert( 'Ingresa un nombre para poder realizar la busqueda' );
    }
  };

  return (
   <>
     <div>
       <div className={ `search-btn-section duration-500 ${ showModal ? 'button-active' : '' }` }>
         <Button icon={ <SearchEngineIcon/> } classBtn='search-btn' onClick={ openModal }/>
       </div>
     </div>

     {/* Search Engine Dropdown */ }
     <div className='search-engine-section flex justify-center items-center w-full z-modal'>
       { showModal && (
        <div className={ `input-section-btn ${ showModal ? 'active' : '' }` }>
          <div className='flex items-center space-x-4 w-full'>
            <Input type='text' maxLength={ 50 } value={ valueSearch } onChange={ onChangeValueSearch }/>
            <Button icon={ <SearchEngineIcon/> } onClick={ CloseModal } classBtn='search-btn'/>
          </div>
        </div>
       ) }
     </div>
   </>

  );
};

export { Search };