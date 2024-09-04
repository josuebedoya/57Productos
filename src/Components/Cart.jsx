import { useState } from 'react';
import { CartIcon } from './Icons';

const Cart = () => {
    const [counter, setcounter] = useState(0);

    const Addcounter = () => {
        if (counter <= 99) {
            setcounter(counter + 1);
        }
    }
    return (
        <div id='CartDropdown' onClick={Addcounter}>
            <div className='cart 
                flex items-center 
                text-white bg-Primary
                border border-primary
                rounded-full
                hover:bg-transparent
                hover:text-Primary
                hover:border border-Primary 
                hover:font-semibold 
                duration-150
                hover:cursor-pointer
                relative'
            >
                <CartIcon />

                {counter > 0 && (
                    <div className='absolute
                        top-five
                        right-five
                        bg-white
                        text-Primary
                        rounded-full
                        p-2
                        w-5
                        h-5
                        border-2
                        border-Gray-dark
                        flex
                        items-center
                        justify-center
                        transform 
                        translate-x-1/2
                        -translate-y-1/2'
                    >
                        <span>{counter <= 99 ? counter : '99+'}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export { Cart };
