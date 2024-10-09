import React from 'react';

const Input = ({ value, onChange }) => {
    return (
        <div className='input w-full' >
            <input
                type='text'
                maxLength={50}
                placeholder='!Busca Contenido¡'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='bg-transparent
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
                '
            />
        </div>
    );
};

export { Input };

const InputNumber  = ({value = 1}) =>{
    return(
        <div>
            <input type="number" placeholder='1' value={value} />
        </div>
    );
};


export { InputNumber };