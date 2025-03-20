import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SearchEngineIcon } from "@/resources/icons.jsx";
import { Button } from "@/components/button.jsx";
import { Input } from "@/components/input.jsx";
import { useDatabase } from "@/utils/database.jsx";
import { useResults } from "@/context/ParamsUrl.jsx";
import { normalizeText } from "@/utils/handleText.jsx";
import { Path_page } from "@/routes.jsx";

const Search = () => {
  const [ showModal, SetShowModal ] = useState( false );
  const [ valueSearch, setValueSearch ] = useState( '' );
  const [ message, setMessage ] = useState( '' );
  const [ found, setFound ] = useState( [] );
  const { get, data } = useDatabase();
  const { termToGet } = useResults();

  const navigate = useNavigate();

  // get Products
  useEffect( () => {
    get( 'productos' );
  }, [] );

  // Open  Search engine
  const openModal = () => {
    SetShowModal( true );
    window.addEventListener( 'wheel', ( e ) => e.preventDefault(), { passive: true } );
  }

  // Close  Search engine && send query
  const submitQuery = (e) => {
    e.preventDefault();
    if(valueSearch.trim() !== ''){
      navigate( Path_page.SEARCH + `?${ termToGet }=${ encodeURIComponent( valueSearch ) }` );
      SetShowModal( false );
      window.removeEventListener( 'wheel', ( e ) => e.preventDefault() );
    }else{
      setMessage( 'No se pueden buscar solo espacios en blanco...' );
      setFound( [] );
    }
  }

  //handle Onchange value input
  const handleValueSearch = ( { value } ) => {
    setValueSearch( value );
  };

  //  handle search results
  const handleFoundItems = () => {

    // get value search
    const inputSearcher = normalizeText( valueSearch );

    // Filtered items found
    const itemsFound = data.filter( item => normalizeText( item.nombre ).includes( inputSearcher ) );

    // if not found items
    if ( itemsFound.length === 0 ) {
      setFound( [] );
      setMessage( `No se encontraron producto/os "${ valueSearch }"` )
      return;
    }

    // Update list found
    setFound( itemsFound );
  };

  useEffect( () => {
    if ( data && valueSearch ) {
      handleFoundItems();
    } else {
      setMessage( 'Debes ingresar almenos un Caracter' );
      setFound( [] );
    }
  }, [ valueSearch ] );

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
        <div className='content'>
          <div className={ `input-section-btn ${ showModal ? 'active' : '' }` }>
            <div className='flex items-center space-x-4 w-full'>
              <form method='GET' onSubmit={ submitQuery }>
                <Input type='text' maxLength={ 70 } value={ valueSearch } onChange={ handleValueSearch } name='search'/>
              </form>
              <Button icon={ <SearchEngineIcon/> } onClick={ submitQuery } classBtn='search-btn' type='submit'/>
            </div>
          </div>
        </div>
       ) }
     </div>
   </>
  );
};

export { Search };