import React from 'react';
import type {InputProps} from "./types.d.ts";
import Basic from "./types/basic.js";
import CheckBox from "./types/checkbox.ts";
import Range from "./types/range.ts";

const Input: React.FC<InputProps> = ({type, ...props}) => {
  if (type === 'range') <Range {...props}/>;
  if (type === 'checkbox') <CheckBox {...props}/>;

  return <Basic type={type} {...props}/>;
};

export default Input;