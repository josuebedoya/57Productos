import { Link } from "react-router-dom";
import { useState } from "react";

const Dropdown = ( { items, level = 0, target, classLink = "px-2", handleOpenModal, horizontal, atr, hoverDropdown } ) => {

  const [ show, setShow ] = useState( {} );

  // handle the dropdowns to show
  const handleShow = ( id ) => {
    setShow( prev => ( { ...prev, [ id ]: !prev[ id ] } ) );
  };

  return ( <ol
   className={ `content-items ${ level > 0 ? `modal sub-level-${ level } ${ atr } ${ level === 1 ? 'lg:absolute ml-3' : 'relative' } bg-white overflow-y-auto overflow-x-hidden pl-4` : "" } ${ horizontal && level === 0 ? 'lg:flex lg:flex-row' : 'block' } max-h-min` }
  >
    { items.map( ( item, i ) =>

     // If there are no child items return item
     !item.items ? ( <li key={ i } className='menu-item min-w-max'>
       <Link to={ item.url } className={ `item-link ${ classLink }` } target={ target && item.target }

        // Close Dropdown if navigation
             onClick={ () => {
               handleOpenModal();
               setShow( {} )
             } }
       >
         { item.name }
       </Link>
     </li> ) : ( // if are element items, map again the object
      <ul key={ i }
          className={ `menu-item dropdown relative min-w-max` }>
        <li
         // Close Dropdown in Click
         onClick={ ( e ) => {
           handleShow( item.id );
           handleOpenModal();
           e.stopPropagation();
         } }

         //Close Dropdown in Hover
         onMouseEnter={ ( e ) => {
           if ( hoverDropdown ) {
             handleShow( item.id );
             e.stopPropagation();
           }
         } }

         //Close Dropdown in exit Hover
         onMouseLeave={ () => setShow( {} ) }
        >
          <Link to={ item.url } className={ `item-link ${ classLink }` } onClick={ ( e ) => {
            e.preventDefault();
          } }
                target={ target && item.target }>
            { item.name }
          </Link>

          {/* Call recursive Component */ }
          <Dropdown items={ item.items } level={ level + 1 } classLink={ classLink } target={ target }
                    handleOpenModal={ handleOpenModal }
                    atr={ show[ item.id ] ? 'animate-collapse-top-in relative' : 'animate-collapse-top-out absolute' } hoverDropdown={ hoverDropdown }/>
        </li>
      </ul> ) ) }
  </ol> );
};

export { Dropdown };