import { StarLineIcon, StarIcon } from '@/resources/icons';
import { useState } from 'react';

const Stars = ( { classIcons } ) => {
  const [ select, setSelect ] = useState( 0 );
  const [ hover, setHover ] = useState( 0 );

  const handleMouseEnter = ( i ) => {
    setHover( i );
  };

  const handleMouseLeave = () => {
    setHover( 0 );
  };

  const handleSelect = ( i ) => {
    setSelect( i );
  };

  return (
   <>
     <div
      className="stars flex gap-1 mt-4"
      onMouseLeave={ handleMouseLeave }
     >
       { [ 1, 2, 3, 4, 5 ].map( ( i ) => (
        hover >= i || select >= i ? (
         <StarIcon
          key={ i }
          onClick={ () => handleSelect( i ) }
          onMouseEnter={ () => handleMouseEnter( i ) }
          classIcons={ classIcons }
         />
        ) : (
         <StarLineIcon
          key={ i }
          onClick={ () => handleSelect( i ) }
          onMouseEnter={ () => handleMouseEnter( i ) }
          classIcons={ classIcons }
         />
        )
       ) ) }
     </div>
   </>
  );
};

export { Stars };
