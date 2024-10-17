import React from 'react';

const Input = ({ value, onChange, placeholder, type, name, maxLength = 20, isRequired = false, label, children }) => {
    return (
        <div className='input w-full flex-col' >
            {label ? <label htmlFor={name} className='label-input'>{children}</label> : ''}
            <input
                type={type}
                maxLength={maxLength}
                placeholder={placeholder ? placeholder.trim() : ''}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                name={name}
                id={name}
                required={isRequired ? true : false}
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