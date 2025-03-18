import { useRef, useEffect, useState } from 'react';
import { Button } from './button.jsx';
import { ExitArrowIcon } from '@/resources/icons';

const Modal = ( { isOpen, onClose, iconClose, classModal = 'bg-white p-8 rounded-3xl', animationEntrance, animationExit, children } ) => {
  const modalRef = useRef( null );
  const [ showing, setShowing ] = useState( isOpen );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const clickOutside = ( event ) => {
    if ( modalRef.current && !modalRef.current.contains( event.target ) ) {
      onClose();
    }
  };

  useEffect( () => {
    // Open Modal
    if(isOpen) setShowing(isOpen);

    //Disabled Scroll Window
    if ( isOpen ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    //interval to prevent onClose from being executed once at startup
    let waitingTime;
    if ( isOpen ) {
      waitingTime = setInterval( () => {
        window.addEventListener( 'click', clickOutside );
      }, 200 );
    }

    return () => {
      clearTimeout( waitingTime );
      window.removeEventListener( 'click', clickOutside );
    };

  }, [ isOpen, clickOutside ] );

  const handleModalClick = ( event ) => {
    event.stopPropagation();
  };

  const handleShowing = () => {
    if ( !isOpen ) setShowing( false );
  }

  if ( !showing ) return null;

  return (
   <div className={`modal fixed inset-0 bg-black bg-opacity-80 z-modal h-screen ${ isOpen ? animationEntrance || 'animate-fade-in' : animationExit || 'animate-fade-out' }`}
        onAnimationEnd={ handleShowing }>
     <div className='flex justify-center items-center w-full h-full'>
       <div className={`modal-content shadow-modal w-full max-w-95 md:max-w-80 min-h-fit overflow-y-auto ${ classModal }`}
        ref={ modalRef }
        onClick={ handleModalClick }
       >
         <div className='bnt-close flex justify-end'>
           <Button icon={ iconClose ? iconClose : <ExitArrowIcon/> } onClick={ onClose }/>
         </div>
         { children }
       </div>
     </div>
   </div>
  );
};

export { Modal };