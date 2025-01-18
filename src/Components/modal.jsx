import { useRef, useEffect } from 'react';

import { Button } from './button';
import { ExitArrowIcon } from '@/resources/icons';

const Modal = ( { isOpen, onClose, classModal, children } ) => {
  const modalRef = useRef( null );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const clickOutside = ( event ) => {
    if ( modalRef.current && !modalRef.current.contains( event.target ) ) {
      onClose();
    }
  };

  useEffect( () => {

    let waitingTime;

    if ( isOpen ) {
      //interval to prevent onClose from being executed once at startup
      waitingTime = setInterval( () => {
        window.addEventListener( 'click', clickOutside );
      }, 200 );
    }

    return () => {
      clearTimeout( waitingTime );
      window.removeEventListener( 'click', clickOutside );
    };

  }, [ isOpen, clickOutside ] );

  if ( !isOpen ) return null;

  const handleModalClick = ( event ) => {
    event.stopPropagation();
  };

  return (
   <div className='modal fixed inset-0 bg-black bg-opacity-80 flex justify-center items-start overflow-auto py-14 z-modal'>
     <div  className={ `modal-content bg-white p-8 rounded-3xl shadow-modal w-full max-w-95 md:max-w-80 ${ classModal && classModal  }` }
      ref={ modalRef }
      onClick={ handleModalClick }
     >
       <div className='bnt-close flex justify-end'>
         <Button icon={ <ExitArrowIcon/> } onClick={ onClose }/>
       </div>
       { children }
     </div>
   </div>
  );
};

export { Modal };