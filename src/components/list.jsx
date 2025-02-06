import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';

const List = ( { columns = 4, gap = 4, itemClass = '', rows = 1, automatic = true, children } ) => {

  const [ indexLast, setIndexLast ] = useState( ( columns * rows ) );
  const [ indexFirst, setindexFirst ] = useState( 0 );
  const [ isChanged, setIsChanged ] = useState( false );

  // get index start
  useEffect( () => {
    setIndexLast( ( columns * rows ) );
  }, [ rows, columns ] );
  var animate2 = 1;
  const nextPage = () => {
    animate2++;
    if ( children.length > indexLast ) {
      // setIsChanged( true );
      setTimeout( () => {
        setIndexLast( indexLast + ( columns * rows ) );
        setindexFirst( indexFirst + ( columns * rows ) );
      }, 1000 );
    }else if(children.length  <= indexLast ){
      setIndexLast( ( columns * rows ) );
      setindexFirst( 0 );
    }
  };

  const prevPage = () => {
    if ( indexFirst > 0 ) {
      setTimeout( () => {
        setIndexLast( indexLast - ( columns * rows ) );
        setindexFirst( indexFirst - ( columns * rows ) );
        setIsChanged( true );
      }, 300 );
    }
  };
  var animate = 1;

  const transitionAutomatic = () => {
      nextPage();

    console.log( animate + '----', animate2 )
    return animate;
  };


//Restart isChanged after animate
  useEffect( () => {
    setTimeout( () => setIsChanged( false ), 450 );
  }, [ isChanged ] );

  // start animation automatic
  useEffect( () => {
    // setInterval( () => {
      if ( animate <= 10 ) {
        let t = transitionAutomatic();
        console.log( t );
      }
    // }, 1000 );

    [ animate ]
  } );

  return (
   <div className='list-items'>
     {/*<div className='flex items-center pb-3 justify-between'>*/ }
     {/*  < button className='text-white disabled:opacity-30 disabled:hover:cursor-no-drop' onClick={ () => prevPage() }*/ }
     {/*           disabled={ indexFirst === 0 }*/ }
     {/*           title={ indexFirst === 0 && 'No puedes retroceder más' }>Volver*/ }
     {/*  </button>*/ }
     {/*  <button className='text-white disabled:opacity-30 disabled:hover:cursor-no-drop' onClick={ () => nextPage() }*/ }
     {/*          disabled={ children.length <= indexLast }*/ }
     {/*          title={ children.length <= indexLast && 'No hay mas items para mostrar' }>Siguiente*/ }
     {/*  </button>*/ }

     {/*</div>*/ }
     <div
      className={ clsx( 'content grid', `grid-cols-${ columns } gap-${ gap }`, `${ isChanged ? 'animate-fade-out' : 'animate-fade-in' }` ) }>
       {
         React.Children.map( children.slice( indexFirst, indexLast ), ( child ) =>
          React.cloneElement( child, {
            className: `item ${ child.props.className || '' } ${ itemClass && itemClass }`
          } )
         ) }
     </div>
   </div>
  )
   ;
};

export { List };