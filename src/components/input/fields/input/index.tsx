import React from 'react';
import type {InputProps} from "./types.d.ts";
import Basic from "./types/basic.tsx";
import CheckBox from "./types/checkbox.tsx";
import Range from "./types/range.tsx";
import Number from "./types/number.tsx";

const Input: React.FC<InputProps> = ({type, ...props}) => {

  const inputType = type?.toLowerCase();

  if (inputType === 'range') return <Range {...props}/>;
  if (inputType === 'checkbox') return <CheckBox {...props}/>;
  if (inputType === 'number' || inputType === 'tel') return <Number type={inputType} {...props}/>;
  return <Basic type={inputType} {...props}/>;
};

export default Input;