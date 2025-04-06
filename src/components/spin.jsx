import { useEffect, useRef, useState } from "react";
import { Pause, TriangleRight } from "@/resources/icons.jsx";

const Spin = ( { items = [], classItem = 'w-12 h-12', radio = 100, autoPlay = false, withButton = true, classBtn = '',
                 directionLeft = true, speed = 2, playHover = true, pauseHover = false, border =  'border border-Primary' }) => {

  const [ pause, setPause ] = useState( false );
  const spinRef = useRef( null );
  const intervalRef = useRef( null );
  const angleRef = useRef( 0 );

  const getPositions = ( i ) => {
    const angle = ( i / items.length ) * 360;
    return {
      x: Math.cos( ( angle * Math.PI ) / 180 ) * radio, y: Math.sin( ( angle * Math.PI ) / 180 ) * radio
    };
  };

  // get positions to each item
  useEffect( () => {
    getPositions()
  }, [ radio ] );

  const startAnimation = () => {
    setPause( !pause );

    if( !intervalRef.current ){
      intervalRef.current = setInterval( () => {

        // increment angle to 360 grades
        let prevSpeed = speed > 5 ? 5: speed;
        angleRef.current = ( angleRef.current + prevSpeed ) % 360;

        if( spinRef.current ){
          spinRef.current.style.transform = `rotate(${ directionLeft ? '-': '' }${ angleRef.current }deg)`;
        }

      }, 30 );
    }
  };

  const stopAnimation = () => {
    setPause( !pause );

    if( intervalRef.current ){

      // restart interval
      clearInterval( intervalRef.current );
      intervalRef.current = null;
    }
  };

  //Auto play spin animation
  useEffect( () => {
    autoPlay && startAnimation();
  }, [] );

  return ( <div className="w-full h-auto flex justify-center items-center">
    <div ref={ spinRef }
         onMouseEnter={() => { if( playHover && !autoPlay ) startAnimation(); if(pauseHover && autoPlay) stopAnimation() }}
         onMouseLeave={() => { if( playHover && !autoPlay ) stopAnimation(); if(pauseHover && autoPlay) startAnimation() }}
         className={`content-spins relative flex justify-center items-center rounded-full ${ border }`}
         style={{ height: `${ radio * 2 }px`, width: `${ radio * 2 }px` }}
    >
      { items && items.map(( item, i ) => {
        let positions = getPositions( i );

        return <div key={ i } className={ `item-spin-${ i } absolute` }
                    style={{ transform: `translate(${ positions.x }px, ${ positions.y }px)` }}
        >
           <div className={ `hover:scale-105 ${ classItem }` }>
             { item }
           </div>
           <style>
            {` .item-spin-${ i }:hover{
               transform: translate( ${ positions.x }px, ${ positions.y }px) !important;
             } `}
           </style>
        </div>;
       }) }

      {/*  Button play / pause */ }
      { withButton && !playHover || withButton && autoPlay ?
          pause ? <Pause onClick={ () => stopAnimation() } classIcons={ `cursor-pointer text-6xl rounded-full ${ classBtn }` }/>
          : <TriangleRight onClick={ () => startAnimation() } classIcons={ `cursor-pointer text-6xl rounded-full ${ classBtn }` }/>
      : null }
    </div>
  </div> );
};

export { Spin };