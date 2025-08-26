import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SearchEngineIcon } from '@/assets/icons.jsx';
import { Button } from '@/components/button/index.tsx';
import { Input } from '@/components/input.jsx';
import { useDatabase } from '@/hooks/useDatabase.jsx';
import { useResults } from '@/context/ParamsUrl.jsx';
import { normalizeText, Slug } from '@/utils/handleText.js';
import { Path_page } from '@/routes.jsx';
import { TextAnimatedWrite } from '@/components/textAnimatedWrite.jsx';
import { Modal } from "@/components/modal.jsx";


const Search = () => {
  const [ showModal, SetShowModal ] = useState( false );
  const [ valueSearch, setValueSearch ] = useState( '' );
  const [ message, setMessage ] = useState( null );
  const [ found, setFound ] = useState( [] );
  const { get, data } = useDatabase();
  const { termToGet } = useResults();

  const messages = [ 'No se pueden buscar solo espacios en blanco...', `No se encontraron producto/os "${ valueSearch }"` ];

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
  const submitQuery = ( e ) => {
    e.preventDefault();
    if ( valueSearch.trim() !== '' ) {
      window.removeEventListener( 'wheel', ( e ) => e.preventDefault() );
      navigate( Path_page.SEARCH + `?${ termToGet }=${ encodeURIComponent( valueSearch ) }` );
      SetShowModal( false );
      setMessage( null );
    } else {
      setMessage( messages[ 0 ] );
      setFound( [] );
    }
  }

  //Close modal
  const closeModal = () => {
    SetShowModal( false );
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
    const itemsFound = data?.[ 'productos' ].filter( item => normalizeText( item.nombre ).includes( inputSearcher ) );

    if ( itemsFound.length === 0 ) {
      setFound( [] );
      setMessage( messages[ 1 ] );
    } else {
      setFound( itemsFound );
      setMessage( null );
    }
  };

  useEffect( () => {
    if ( data?.[ 'productos' ] && valueSearch ) {
      handleFoundItems();
    } else {
      setFound( [] );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ valueSearch, data?.[ 'productos' ] ] );

  return (
   <>
     <div>
       <div className={ `search-btn-section duration-500 ${ showModal ? 'button-active' : '' }` }>
         <Button icon={ <SearchEngineIcon/> } classes='search-btn' onClick={ openModal }/>
       </div>
     </div>

     {/* Search Engine Dropdown */ }
     <Modal isOpen={ showModal } withButtonClose={ false } onClose={ closeModal } classModal='relative'>
       <div className='query-section flex items-center justify-center space-x-4  w-full px-4 sticky top-0 bg-white'>
         <form method='GET' onSubmit={ submitQuery } className='flex items-center w-full max-w-600 gap-5'>
           <Input type='text' maxLength={ 70 } value={ valueSearch } onChange={ handleValueSearch } name='search'
                  className='flex-grow'/>
           <Button icon={ <SearchEngineIcon/> } onClick={ submitQuery } classes='search-btn' type='submit'/>
         </form>
       </div>

       <div className='found-items'>
         <div className='modal-found bg-white rounded-b-3xl mx-auto w-full max-w-80 p-10'>
           { found.length > 0 ? (
            found.map( ( item ) => (
             <div key={ item.id } className='item-found py-5 border-b-blue-200 border-b shadow-custom-white'>
               <Link to={ Path_page.STORE + '/' + Slug( item.nombre ) } onClick={ () => showModal( false ) }>
                 <h1 className='title'>{ item.nombre }</h1>
               </Link>
               <h5 className='price'>{ item.precio }</h5>
             </div>
            ) )
           ) : (
            <div>
              <h1 className='message flex flex-col justify-center items-center gap-6'>
                { message }
                {
                 message === messages[ 0 ] &&
                 <TextAnimatedWrite classText='family-oswald'>
                   !Escribe algo para realizar la BUSQUEDA¡
                 </TextAnimatedWrite>
                }
              </h1>
            </div>
           ) }
         </div>
       </div>
     </Modal>
   </>
  );
};

export { Search };