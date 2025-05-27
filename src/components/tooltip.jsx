import { useEffect, useState } from "react";
import { TriangleRight } from "@/resources/icons.jsx";

const Tooltip = ( {
                    children, content = '', position = 'center', spaceY = 5, spaceX = 6,
                    tooltipClass = '', contentClass = '', withArrow = true, dark, delayShow = 'delay-500'
                  } ) => {

  const [ classPositions, setClassPosition ] = useState( {} )
  const [ show, setShow ] = useState( false );

  // Declare de class for tooltip position
  const getDirection = ( position ) => {
    switch ( position ) {
      case( 'top' ):
        return {
          tooltip: `bottom-1/2 group-hover/tooltip:-translate-y-${ spaceY }`,
          arrow: '-bottom-4 rotate-90'
        };
      case( 'bottom' ):
        return {
          tooltip: `top-1/2 group-hover/tooltip:translate-y-${ spaceY }`,
          arrow: '-top-4  -rotate-90'
        };
      case( 'left' ):
        return {
          tooltip: `right-1/2 group-hover/tooltip:-translate-x-${ spaceX }`,
          arrow: '-right-4 rotate-0'
        };
      case( 'right' ):
        return {
          tooltip: `left-1/2 group-hover/tooltip:translate-x-${ spaceX }`,
          arrow: '-left-4 rotate-180'
        };
      case( 'corner-1' ):
        return {
          tooltip: `bottom-1/2 right-1/2 group-hover/tooltip:-translate-y-${ spaceY } group-hover/tooltip:-translate-x-${ spaceX }`,
          arrow: '-right-2.5 -bottom-2.5 rotate-45'
        };
      case( 'corner-2' ):
        return {
          tooltip: `bottom-1/2 left-1/2 group-hover/tooltip:-translate-y-${ spaceY } group-hover/tooltip:translate-x-${ spaceX }`,
          arrow: '-left-2.5 -bottom-2.5 -rotate-[225deg]'
        };
      case( 'corner-3' ):
        return {
          tooltip: `top-1/2 left-1/2 group-hover/tooltip:translate-y-${ spaceY } group-hover/tooltip:translate-x-${ spaceX }`,
          arrow: '-left-2.5 -top-2.5 -rotate-[135deg]'
        };
      case( 'corner-4' ):
        return {
          tooltip: `top-1/2 right-1/2 group-hover/tooltip:translate-y-${ spaceY } group-hover/tooltip:-translate-x-${ spaceX }`,
          arrow: '-right-2.5 -top-2.5 -rotate-45'
        };
      case( 'center' ):
        return {
          tooltip: `inset-auto`,
          arrow: 'hidden'
        };
      default:
        return {
          tooltip: `group-hover/tooltip:-translate-y-${ spaceY }`,
          arrow: '-bottom-4 rotate-90'
        };
    }
  };

  // Update Class to tooltip
  useEffect( () => {
    setClassPosition( getDirection( position ) );
  }, [ position ] );

  const classTooltip = `absolute rounded-md opacity-0 group-hover/tooltip:opacity-100 ${ delayShow } duration-500 pointer-events-none ${ !dark ? 'bg-white text-black' : 'bg-gray-800 text-white' } py-1 px-3 translate-0 z-modal ${ classPositions.tooltip }`;

  return (
   <div className={ `has-tooltip ${ show ? 'group/tooltip' : '' } relative flex items-center justify-center ` }>
     <span className={ `tooltip ${ classTooltip } ${ tooltipClass } block` } data-child='tooltip'>
       { withArrow && position !== 'center' &&
        <span className='flex justify-center w-full h-full'>
           <TriangleRight
            classIcons={ `arrow-tooltip absolute text-2xl z-10 ${ !dark ? 'text-white' : 'text-gray-800' } ${ classPositions.arrow }` }>
           </TriangleRight>
        </span>
       }
       <span className={ contentClass || 'text-sm text-Primary' }>
           { content }
       </span>
     </span>

     <span data-parent='tooltip' className={ contentClass || 'text-sm text-Primary' }
           onMouseEnter={ () => setShow( true ) }
           onMouseLeave={ () => setShow( false ) }
     >
        { children }
     </span>
   </div>
  );
};

export { Tooltip };