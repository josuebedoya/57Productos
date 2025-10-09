import { useState } from 'react';
import Icon from "@/components/icons/index.js";

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
      className='stars flex gap-1 mt-4'
      onMouseLeave={ handleMouseLeave }
     >
       { [ 1, 2, 3, 4, 5 ].map( ( i ) => (
         <Icon
          name={ hover >= i || select >= i ? 'FaStar' : 'FaRegStar' }
          key={ i }
          onClick={ () => handleSelect( i ) }
          onMouseEnter={ () => handleMouseEnter( i ) }
          classNaMe={ classIcons }/>
        )
       ) }
     </div>
   </>
  );
};

export { Stars };
