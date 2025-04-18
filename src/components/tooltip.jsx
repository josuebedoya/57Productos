import { useEffect, useState } from "react";
import { TriangleRight } from "@/resources/icons.jsx";

const Tooltip = ( {
                    children, content = '', position = 'right', spaceY = 10, spaceX = 10,
                    tooltipClass = '', withArrow = true, dark
                  } ) => {

  const [ classPositions, setClassPosition ] = useState( {} )

   // Declare de class for tooltip position
  const getDirection = ( position ) => {
    switch ( position ) {
      case( 'top' ):
        return {
          tooltip: `group-hover/tooltip:-translate-y-${ spaceY }`,
          arrow: '-bottom-4 rotate-90'
        };
      case( 'bottom' ):
        return {
          tooltip: `group-hover/tooltip:translate-y-${ spaceY }`,
          arrow: '-top-4  -rotate-90'
        };
      case( 'left' ):
        return {
          tooltip: `group-hover/tooltip:-translate-x-${ spaceX }`,
          arrow: '-right-4 rotate-0'
        };
      case( 'right' ):
        return {
          tooltip: `group-hover/tooltip:translate-x-${ spaceX }`,
          arrow: '-left-4 rotate-180'
        };
      case( 'corner-1' ):
        return {
          tooltip: `group-hover/tooltip:-translate-y-${ spaceY } group-hover/tooltip:-translate-x-${ spaceX }`,
          arrow: '-right-2.5 -bottom-2.5 rotate-45'
        };
      case( 'corner-2' ):
        return {
          tooltip: `group-hover/tooltip:-translate-y-${ spaceY } group-hover/tooltip:translate-x-${ spaceX }`,
          arrow: '-left-2.5 -bottom-2.5 -rotate-[225deg]'
        };
      case( 'corner-3' ):
        return {
          tooltip: `group-hover/tooltip:translate-y-${ spaceY } group-hover/tooltip:translate-x-${ spaceX }`,
          arrow: '-left-2.5 -top-2.5 -rotate-[135deg]'
        };
      case( 'corner-4' ):
        return {
          tooltip: `group-hover/tooltip:translate-y-${ spaceY } group-hover/tooltip:-translate-x-${ spaceX }`,
          arrow: '-right-2.5 -top-2.5 -rotate-45'
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

  const classTooltip = `absolute rounded-md opacity-0 group-hover/tooltip:opacity-100 duration-300 ${ !dark ? 'bg-white text-black' : 'bg-gray-800 text-white' } py-1 px-3 translate-0 z-modal ${ classPositions.tooltip }`;

  return (
   <div className='has-tooltip group/tooltip relative flex items-center justify-center'>
     <span className={ `tooltip ${ classTooltip } ${ tooltipClass } block ` }>
       { withArrow &&
        <span className='flex justify-center w-full h-full'>
           <TriangleRight
            classIcons={ `arrow-tooltip absolute text-2xl z-10 ${ !dark ? 'text-white' : 'text-gray-800' } ${ classPositions.arrow }` }>
           </TriangleRight>
        </span>
       }
       { content }
     </span>
     { children }
   </div>
  );
};

export { Tooltip };