import { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './button.jsx';
import { ExitArrowIcon } from '@/resources/icons';

const Modal = ( { isOpen, onClose, iconClose, classModal, animationEntrance, animationExit, type = 3 , children } ) => {
  const modalRef = useRef( null );
  const [ showing, setShowing ] = useState( isOpen );

  // Class Container Default
  const classContainer = `modal-${ type } fixed inset-0 bg-black bg-opacity-80 z-modal h-screen max-w-full w-full overflow-x-hidden`;

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
      const preventScroll = (event) => event.preventDefault();
      isOpen ? window.addEventListener("wheel", preventScroll, { passive: false })
       : window.removeEventListener("wheel", preventScroll);

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
      window.removeEventListener("wheel", preventScroll);
    };

  }, [ isOpen, clickOutside ] );

  const handleModalClick = ( event ) => {
    event.stopPropagation();
  };

  const handleShowing = () => {
    if ( !isOpen ) setShowing( false );
  }

  if ( !showing ) return null;

  switch ( type ) {
    // Left
    case( 1 ):
      return ReactDOM.createPortal( <div
       className={ `${ classContainer } ${ isOpen ? animationEntrance || 'animate-fade-in' : animationExit || 'animate-fade-out' }` }
       onAnimationEnd={ handleShowing }>
        <div className="flex justify-start items-center w-full h-full">
          <div
           className={ `bg-white modal-content w-full max-w-xs md:max-w-lg x-w-lg h-screen py-10 px-4 ${ classModal } max-h-full-vh` }
           ref={ modalRef }
           onClick={ handleModalClick }>
            <div className='bnt-close flex justify-end'>
              <Button icon={ iconClose ? iconClose : <ExitArrowIcon classIcons='cursor-pointer'/> } onClick={ onClose }/>
            </div>
            { children }
          </div>
        </div>
      </div>, document.getElementById( 'modal-root' ) );
   // Right
    case( 2 ):
      return ReactDOM.createPortal( <div
       className={ `${ classContainer } ${ isOpen ? animationEntrance || 'animate-fade-in' : animationExit || 'animate-fade-out' }` }
       onAnimationEnd={ handleShowing }>
        <div className="flex justify-end text-end items-center w-full h-full">
          <div
           className={ `bg-white modal-content w-full max-w-xs md:max-w-lg x-w-lg h-screen py-10 px-4 ${ classModal } max-h-full-vh` }
           ref={ modalRef }
           onClick={ handleModalClick }>
            <div className='bnt-close flex justify-start'>
              <Button icon={ iconClose ? iconClose : <ExitArrowIcon classIcons='rotate-180 cursor-pointer' /> } onClick={ onClose }/>
            </div>
            { children }
          </div>
        </div>
      </div>, document.getElementById( 'modal-root' ) );
   // Default all window
    default:
      return ReactDOM.createPortal( <div
       className={ `${ classContainer } ${ isOpen ? animationEntrance || 'animate-fade-in' : animationExit || 'animate-fade-out' }` }
       onAnimationEnd={ handleShowing }>
        <div className='flex justify-center items-center w-full h-full'>
          <div
           className={ `bg-white modal-content shadow-modal w-full overflow-y-auto p-5 ${ classModal } ${ type === 3 ? 'max-w-95 md:max-w-80 rounded-lg md:rounded-2xl h-600' : 'h-full max-h-full-vh' }` }
           ref={ modalRef }
           onClick={ handleModalClick }
          >
            <div className='bnt-close flex justify-end'>
              <Button icon={ iconClose ? iconClose : <ExitArrowIcon classIcons='cursor-pointer'/> } onClick={ onClose }/>
            </div>
            { children }
          </div>
        </div>
      </div>, document.getElementById( 'modal-root' ) );
  }
};

export { Modal };