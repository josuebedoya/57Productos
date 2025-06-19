import { useEffect, useRef, useState } from 'react';
import { AngleBottomIcon, AngleRightIcon } from '@/assets/icons.jsx';

const Collapsible = ( {
                        items, iconClose, iconShow, classItem = '', classItemActive = 'bg-gray-100',
                        classTitle = 'border border-gray-300 shadow-custom rounded-lg',
                        classTitleActive = 'font-bold bg-Primary text-white', classContent = 'mb-2',
                        closeAll = false, openAll = false, multiple = true
                      } ) => {

  const [ open, setOpen ] = useState( {} );
  const contentRefs = useRef( {} );

  // handle open/close of collapsible items
  const handleOpen = ( index ) => {
    setOpen( ( prevOpen ) => (

     multiple ?
      // open/close multiple items
      { ...prevOpen, [ index ]: !prevOpen[ index ] }

      // Open/close single item
      : !prevOpen[ index ] ? { [ index ]: true } : {}
    ) );
  };

  // Get height of the content to set max-height dynamically
  const getHeight = ( index ) => {
    const ref = contentRefs.current[ index ];
    return ref ? `${ ref.scrollHeight }px` : '0px';
  };

// Open All
  useEffect( () => {
    if ( multiple && openAll ) {
      const newOpen = {};

      items.forEach( ( _, index ) => {
        newOpen[ index ] = true;
      } );

      setOpen( newOpen );
    }
  }, [ openAll, multiple, items ] );

  // Close All
  useEffect( () => {

    if ( multiple && closeAll ) {
      setOpen( {} );
    }

  }, [ closeAll, multiple ] );

  return (
   <div id="collapsible">
     <div className='items flex flex-col gap-4'>
       { items.length > 0 &&
        items.map( ( item, index ) => (
         <div
          key={ index }
          className={ `item collapsible-${ index } ${ open[ index ] ? `${ classItemActive } open` : '' } ${ classItem }` }
         >
           <div
            className={ `header flex justify-between items-center cursor-pointer py-3 px-4 duration-300 transition-all  ${ classTitle }
          ${ open[ index ] ? `${ classTitleActive }` : '' }` }
            onClick={ () => handleOpen( index ) }
           >
             <h4 className='title'>{ item.title }</h4>
             { open[ index ] === true ? iconClose || <AngleBottomIcon/> : iconShow || <AngleRightIcon/> }
           </div>
           <div
            ref={ ( el ) => ( contentRefs.current[ index ] = el ) }
            style={ {
              maxHeight: open[ index ] ? getHeight( index ) : '0px',
              opacity: open[ index ] ? 1 : 0
            } }
            className='body overflow-hidden transition-[max-height_opacity] duration-500 ease-in-out'
           >
             <div className={ `content px-4 py-3 ${ classContent }` }>
               { item.content }
             </div>
           </div>
         </div>
        ) ) }
     </div>
   </div>
  );
};

export { Collapsible };