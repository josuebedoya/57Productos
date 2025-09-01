import React, {useEffect, useState} from 'react';
import type {InputProps} from "@/components/input/fields/input/types.js";
import {gVar} from "@/utils/gVar.js";

const Range: React.FC<InputProps> = ({className = '', ...props}) => {

  const [rangeStyles, setRangeStyles] = useState('');

  const {
    color = 'primary',
    rounded = 'full',
    variant = 'solid',
    min = 0,
    max = 100,
    step = 5,
    value = Math.floor((Number(props.max) || 0) / 2)
  } = props || {};

  // Update style class
  useEffect(() => {
    const checkboxStyles = gVar([
      'input.range.base',
      `input.range.rounded.${rounded}`,
      `input.range.variant.${variant}.${color}`,
    ]);

    setRangeStyles(checkboxStyles);
  }, [props]);

  return (
    <input
      name={props.name ?? 'range'}
      type='range'
      className={`range ${rangeStyles} ${className}`}
      min={min}
      max={max}
      step={step}
      value={value}
      {...props}
    />
  );
};

export default Range;