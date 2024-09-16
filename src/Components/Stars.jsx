import { StarLineIcon } from './Icons';
import { useState } from 'react';

const Stars = () => {

    const [select, setSelect] = useState(false);

    const SelectStar = () => {
        setSelect(!select);
    };

    return (
        <>
            <div className='stars flex gap-1 mt-4 text-13'>
                {[1, 2, 3, 4, 5].map(() => (
                    <StarLineIcon
                        classIcons={`
                            cursor-pointer
                            ${select == true ? 'text-red-500' : 'text-Primary'}
                        `}
                        onClick={SelectStar}
                    />
                ))}
            </div>
        </>
    );
};

export { Stars };