import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from '@/components/button.jsx';
 import { WarningModal } from "@/components/warningModal.jsx";

const List = ( { columns = 4, gap = 10, itemClass = '', rows = 1, breakpoints, textEmpty, children } ) => {
  const [ indexLast, setIndexLast ] = useState( columns * rows );
  const [ indexFirst, setIndexFirst ] = useState( 0 );
  const [ isChanged, setIsChanged ] = useState( false );

  const defaultBreakpoints = {
    zero: columns- 2,
    sm: columns - 2,
    md: columns - 1,
    lg: columns,
    xl: columns,
  };

  // get index start
  useEffect( () => {
    setIndexLast( ( columns * rows ) );
  }, [ rows, columns ] );

  const nextPage = () => {
    if(children.length >= indexLast ){
      setIsChanged( true );
      setTimeout( () => {
        setIndexLast( indexLast + ( columns * rows ) );
        setIndexFirst( indexFirst + ( columns * rows ) );
      }, 300 );
    }
  };

  const prevPage = () => {
    if ( indexFirst > 0 ) {
      setIsChanged( true );
      setTimeout( () => {
        setIndexLast( indexLast - ( columns * rows ) );
        setIndexFirst( indexFirst - ( columns * rows ) );
      }, 300 );
    }
  };


  //Restart isChanged after animate
  useEffect( () => {
    setTimeout( () => setIsChanged( false ), 450 );
  }, [ isChanged ] );

  //Render alert
    if(!children ) {
      // console.log(children.length ===0 ? 'Cero ' : children.length)
      return <WarningModal type='warning' bgColor='bg-gray-400' itemClass='rounded-lg shadow-white' >
        {textEmpty ? textEmpty : 'No hay elementos para mostrar' }
      </WarningModal>
    }

  // Render view
  return (
   <div className='list-items'>
     <div className='flex items-center pb-3 justify-between'>
       <Button btnText
               classBtn='text-white disabled:opacity-30 disabled:hover:cursor-no-drop'
               onClick={ () => prevPage() }
               disabled={ indexFirst === 0 }
               title={ indexFirst === 0 ? 'No puedes retroceder más' : undefined }
          >
            Volver
       </Button>
       <Button btnText
               classBtn='text-white disabled:opacity-30 disabled:hover:cursor-no-drop'
               onClick={ () => nextPage() }
               disabled={ children.length <= indexLast }
               title={ children.length <= indexLast ? 'No hay mas items para mostrar': undefined }
          >
            Siguiente
        </Button>
      </div>
      <div
        className={clsx(
          'content grid',
          `grid-cols-${ breakpoints?.zero ?? defaultBreakpoints.zero } gap-${ gap }`,
          /* Breakpoints */
          Object.entries( breakpoints ?? {} )?.slice( 1 )
          .map( ([ b, v ]) => `${ b }:grid-cols-${ v }` )
          .join(' '),
          /* Animate */
          `${ isChanged ? 'animate-fade-out' : 'animate-fade-in' }`
        )}
      >
       {
         React.Children.map( children.slice( indexFirst, indexLast ), ( child ) =>
          React.cloneElement( child, {
            className: `item ${ child.props.className || '' } ${ itemClass && itemClass }`
          } )
         ) }
     </div>
   </div>
  );
};

export { List };