import { useState } from 'react';
import { CartIcon } from '../Resources/Icons';

const Cart = () => {
    const [ counter, setCounter ] = useState(0);

    const AddCounter = () => {
        if (counter <= 99) {
            setCounter(counter + 1);
        }
    };

    return (
        <div id='CartDropdown' onClick={AddCounter}>
            <div className='cart flex items-center text-white bg-Primary border border-Primary rounded-full hover:bg-transparent hover:text-Secondary hover:border hover:border-Secondary hover:font-semibold duration-150 hover:cursor-pointer relative'>
                <CartIcon />
                {counter > 0 && (
                    <div className='absolute top-five right-five flex items-center justify-center translate-x-1/2 -translate-y-1/2'>
                        <span className='text-13 bg-white text-Primary rounded-full p-1 min-w-6 min-h-6 max-h-6 border-2 border-Gray-dark flex items-center justify-center text-center'>
                            {counter <= 99 ? counter : '99+'}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export { Cart };
