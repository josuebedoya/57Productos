import React, {useEffect, useState} from 'react';
import type {InputProps} from "@/components/input/fields/input/types.js";
import {gVar} from "@/utils/gVar.js";

const Basic: React.FC<InputProps> = ({type = 'text', className, ...props}) => {
  const [inputStyles, setInputStyles] = useState('');

  const {
    color = 'primary',
    rounded = 'md',
    variant = 'solid',
    padding = 'md',
  } = props || {};

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
    <input type={type}
           className={`checkbox ${inputStyles} ${className}`}
           {...props}
    />
  );
};

export default Basic;