import React from 'react';

const Input = ({ value, onChange, placeholder, type, name, maxLength = 20, minLength = 0, isRequired , label, classContent, classLabel, children }) => {
    return (
        <div className={` ${classContent ? classContent : ''} input w-full flex-col`} >
            {label ? <label htmlFor={name} className={`${classLabel ? classLabel : ''} label-input`}>{children}</label> : ''}
            <input
                type={type}
                maxLength={maxLength}
                min={minLength}
                placeholder={placeholder ? placeholder.trim() : ''}
                value={value}
                onChange={(e) => onChange({ name, value: e.target.value })}
                name={name}
                id={name}
                required={isRequired}
                className='bg-transparent text-Primary text-sm rounded-xl border border-Primary py-2 px-5 focus:outline-none focus:shadow-custom w-full'
            />
        </div>
    );
};

export { Input };