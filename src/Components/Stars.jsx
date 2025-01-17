import { StarLineIcon, StarIcon } from '../Resources/Icons';
import { useState } from 'react';

const Stars = ({classIcons}) => {

  const [ select, setSelect ] = useState(0);

  const SelectStar = (i) => {
    setSelect(i);
  };

  return (
    <>
      <div className='stars flex gap-1 mt-4'>
        {[ 1, 2, 3, 4, 5 ].map((i, index) => (
          select >= i ? (
            <StarIcon key={index} onClick={() => SelectStar(i)}  classIcons={classIcons}/>
          ) : (
            <StarLineIcon key={index} onClick={() => SelectStar(i)} classIcons={classIcons}/>
          )))}
      </div>
    </>
  );
};

export { Stars };