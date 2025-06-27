import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/assets/icons.jsx";

const Dropdown = ( {
                     show, classDropdown, animationEntrance, animationExit, closed,
                     withButton, closeIcon, position = 'bottom', children
                   } ) => {

  const defaultClass = 'top-12 right-0 w-64 p-2 border border-gray-200 bg-white';
  const positionClasses = {
    top: "bottom-[120%] left-1/2 transform -translate-x-1/2",
    bottom: "top-[120%] left-1/2 transform -translate-x-1/2",
    left: "right-[120%] top-1/2 transform -translate-y-1/2",
    right: "left-[120%] top-1/2 transform -translate-y-1/2",
  };
  const modalRef = useRef( null );
  const [ showing, setShowing ] = useState( show );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const clickOutside = ( event ) => {
    if ( modalRef.current && !modalRef.current.contains( event.target ) ) {
      closed();
    }
  };

  useEffect( () => {
    // Open Modal
    if ( show ) setShowing( show );
    //interval to prevent onClose from being executed once at startup
    let waitingTime;
    if ( show ) {
      waitingTime = setInterval( () => {
        window.addEventListener( 'click', clickOutside );
      }, 200 );
    }

    return () => {
      clearTimeout( waitingTime );
      window.removeEventListener( 'click', clickOutside );
    };

  }, [ show, clickOutside ] );

  const handleModalClick = ( event ) => {
    event.stopPropagation();
  };

  const handleShowing = () => {
    if ( !show ) setShowing( false );
  }


  return ( showing &&
   <div
    className={ `absolute z-modal min-w-max rounded-lg shadow-custom ${ classDropdown || defaultClass } ${ positionClasses[ position ] || "" } ${ show ? animationEntrance || 'animate-fade-in' : animationExit || 'animate-fade-out' }` }
    onAnimationEnd={ handleShowing }>
     <div ref={ modalRef } onClick={ handleModalClick }>
       <div className="relative">
         { withButton &&
          <div className="header border-b border-gray-200 text-end text-lg">
            <button className="mb-2 text-Primary hover:text-Secondary duration-200"
                    onClick={ closed }>
              { closeIcon || <CloseIcon/> }
            </button>
          </div>
         }
         <div className="body p-1">
           { children }
         </div>
       </div>
     </div>
   </div>
  );
};

export { Dropdown };