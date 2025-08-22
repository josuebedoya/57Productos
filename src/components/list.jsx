import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from '@/components/button/index.tsx';
import { WarningModal } from "@/components/warningModal.jsx";
import { Pagination } from "@/components/pagination.jsx";

const List = ( { columns = 4, gap = 10, itemClass = '', rows = 1, breakpoints, textEmpty, pagination = true,
                 typePagination = 2, classLinkPagination, activeClassPagination, classDotsPagination,
                 iconNextPagination, iconPrevPagination, labelNextPagination, labelPrevPagination,
                 children } ) => {

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

  // get index  click
  const getIndex = ( index, direction = 1 ) => {

    // handle index
    const newIndexFirst = index ? ( columns * rows ) * ( index - 1 ) : indexFirst + ( columns * rows * direction );
    const newIndexLast = index ? newIndexFirst + ( columns * rows ) : indexLast + ( columns * rows * direction );

    // handle status animated
    setIsChanged( true );

    // handle index
    setTimeout( () => {
      setIndexLast( newIndexLast );
      setIndexFirst( newIndexFirst );
    }, 300 );
  }

  // go back Page
  const nextPage = ( index ) => {
    if ( children.length >= indexLast ) getIndex( index );
  };

  // go next Page
  const prevPage = ( index ) => {
    if ( indexFirst > 0 ) getIndex( index, -1 );
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
   < div className='content-list'>
     <div className='list-items'>

       {/*Type pagination 1*/ }
       { pagination && typePagination === 1 && (
        <div className='pagination flex items-center pb-3 justify-between'>
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
       ) }
       <div className={ clsx( 'content grid',
        `grid-cols-${ breakpoints?.zero ?? defaultBreakpoints.zero } gap-${ gap }`,
        /* Breakpoints */
        Object.entries( breakpoints ?? {} )?.slice( 1 )
         .map( ( [ b, v ] ) => `${ b }:grid-cols-${ v }` )
         .join( ' ' ),
        /* Animate */
        `${ isChanged ? 'animate-fade-out' : 'animate-fade-in' }`
       ) }
       >
         {
           React.Children.map( children.slice( indexFirst, indexLast ), ( child ) =>
            React.cloneElement( child, {
              className: `item ${ child.props.className || '' } ${ itemClass }`
            } )
           ) }
       </div>
     </div>

      {/*Type pagination 2*/ }
     { pagination && typePagination === 2 && (
      <div className='list-pagination flex items-center justify-center mt-8'>
        <Pagination itemsPerPage={ columns * rows } items={ children } nextPage={ nextPage } prevPage={ prevPage }
                    classLink={ classLinkPagination } activeClass={ activeClassPagination }
                    classDots={ classDotsPagination } iconNext={ iconNextPagination }
                    iconPrev={ iconPrevPagination } labelPrev={ labelPrevPagination }
                    labelNext={ labelNextPagination }/>
      </div>
     ) }
   </div>
  );
};

export { List };