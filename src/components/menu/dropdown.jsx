import { Link } from "react-router-dom";
import "@/styles/components/_menu.scss";
import { useState } from "react";

const Dropdown = ( { items, level = 0, target, classLink = "px-2", handleOpenModal, menuH, atr } ) => {

  const [ show, setShow ] = useState( {} );

  // handle the dropdowns to show
  const handleShow = ( id ) => {
    setShow( prev => ( { ...prev, [ id ]: !prev[ id ] } ) );
  };

  return ( <ol
   className={ `${ level > 0 ? `modal sub-level-${ level } ${ atr } ${ level === 1 ? 'absolute' : 'relative' } bg-white overflow-y-auto overflow-x-hidden` : "" } ${ menuH && level === 0 ? 'flex flex-row space-x-7' : 'block' } max-h-min` }
  >
    { items.map( ( item, i ) =>

     // If there are no child items return item
     !item.items ? ( <li key={ i } className='menu-item list-disc ml-7 my-3 min-w-min'>
       <Link to={ item.url } className={ `item-link ${ classLink }` } target={ target && item.target }

        // Close Dropdown if navigation
             onClick={ () => {
               setShow( {} )
             } }
       >
         { item.name }
       </Link>
     </li> ) : ( // if are element items, map again the object
      <ul key={ i }
          className={ `menu-item dropdown relative  list-disc ml-3 my-3 mr-1` }>
        <li onClick={ ( e ) => {
          handleShow( item.id );
          e.stopPropagation();
        } }>
          <Link to={ item.url } className={ `item-link ${ classLink }` } onClick={ ( e ) => {
            e.preventDefault();
          } }
                target={ target && item.target }>
            { item.name }
          </Link>

          {/* Call recursive Component */ }
          <Dropdown items={ item.items } level={ level + 1 } classLink={ classLink } target={ target }
                    handleOpenModal={ handleOpenModal }
                    atr={ show[ item.id ] ? 'animate-collapse-top-in' : 'animate-collapse-top-out' }/>
        </li>
      </ul> ) ) }
  </ol> );
};

export { Dropdown };