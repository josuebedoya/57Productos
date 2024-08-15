import React from 'react';
import './Input.css'

const Input = () => {
    return (
        <div className='input w-full' >
            <input
                type="text"
                maxLength={50}
                placeholder="!Busca Contenido¡"
                className="bg-transparent
                text-Primary
                text-sm
                rounded-xl
                border 
                border-Primary 
                py-2 
                px-5 
                focus:outline-none
                focus:shadow-custom
                w-full
                "
            />
        </div>
    );
};

export { Input };