import React from 'react';
import type {InputProps} from "./types.d.ts";
import Basic from "./components/basic.tsx";
import CheckBox from "./components/checkbox.tsx";
import Range from "./components/range.tsx";
import Number from "./components/number.tsx";

const Input: React.FC<InputProps> = ({type, ...props}) => {

  const inputType = type?.toLowerCase();

  if (inputType === 'range') return <Range {...props}/>;
  if (inputType === 'checkbox') return <CheckBox {...props}/>;
  if (inputType === 'number' || inputType === 'tel') return <Number type={inputType} {...props}/>;
  return <Basic type={inputType} {...props}/>;
};

export default Input;