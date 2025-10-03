import React, {useEffect, useState} from 'react';
import type {InputProps} from "@/components/input/fields/input/types.js";
import {gVar} from "@/utils/gVar.js";

const Basic: React.FC<InputProps> = (
  {
    type = 'text',
    label,
    withLabel,
    labelClassName = '',
    className,
    color = 'primary',
    rounded = 'md',
    variant = 'solid',
    padding = 'md',
    ...props
  }) => {
  const [inputStyles, setInputStyles] = useState('');

  // Update style class
  useEffect(() => {
    const inputStyles = gVar([
      'input.base',
      `rounded.${rounded}`,
      `input.padding.${padding}`,
      `input.variant.${variant}.${color}`,
    ]);

    setInputStyles(inputStyles);
  }, [props]);

  return (
    <div className='input-container w-full'>
      {(label && withLabel) && (
        <label className={`label ${labelClassName}`} htmlFor={props.name}>
          {label}
        </label>
      )}
      <input type={type}
             className={`input ${inputStyles} ${className}`}
             {...props}
      />
    </div>
  );
};

export default Basic;