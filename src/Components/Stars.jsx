import { StarLineIcon } from './Icons';
import { useState } from 'react';

const Stars = () => {

    const [select, setSelect] = useState(0);

    const SelectStar = (i) => {
        setSelect(i);
    };

    return (
        <>
            <div className='stars flex gap-1 mt-4 text-13'>
                {[1, 2, 3, 4, 5].map((i, index) => (
                    <StarLineIcon key={index}
                        classIcons={`
                            cursor-pointer
                            ${select >= i ? 'text-red-500' : 'text-Primary'}
                        `}
                        onClick={() => SelectStar(i)}
                    />
                ))}
            </div>
        </>
    );
};

export { Stars };