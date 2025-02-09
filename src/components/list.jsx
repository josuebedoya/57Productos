import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from '@/components/button.jsx';

const List = ( { columns = 4, gap = 10, itemClass = '', rows = 1, children } ) => {

  const [ indexLast, setIndexLast ] = useState( ( columns * rows ) );
  const [ indexFirst, setindexFirst ] = useState( 0 );
  const [ isChanged, setIsChanged ] = useState( false );

  // get index start
  useEffect( () => {
    setIndexLast( ( columns * rows ) );
  }, [ rows, columns ] );

  const nextPage = () => {
    if(children.length >= indexLast ){
      setIsChanged( true );
      setTimeout( () => {
        setIndexLast( indexLast + ( columns * rows ) );
        setindexFirst( indexFirst + ( columns * rows ) );
      }, 300 );
    }
  };

  const prevPage = () => {
    if ( indexFirst > 0 ) {
      setIsChanged( true );
      setTimeout( () => {
        setIndexLast( indexLast - ( columns * rows ) );
        setindexFirst( indexFirst - ( columns * rows ) );
      }, 300 );
    }
  };


//Restart isChanged after animate
  useEffect( () => {
    setTimeout( () => setIsChanged( false ), 450 );
  }, [ isChanged ] );

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
     <div className={ clsx( 'content grid', `grid-cols-${ columns } gap-${ gap }`, `${ isChanged ? 'animate-fade-out' : 'animate-fade-in' }` ) }>
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