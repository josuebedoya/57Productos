import React, {useEffect, useState} from 'react';
import type {InputProps} from "../types.ts";
import {gVar} from "@/utils/gVar.js";
import {MarkIcon} from '@/assets/icons.tsx'

const CheckBox: React.FC<InputProps> = (
  {
    className = '',
    ...props
  }) => {

  const [checkboxStyles, setCheckboxStyles] = useState('');
  const [checked, setChecked] = useState(false);
  const [iconColor, setIconColor] = useState('text-Primary');

  const {
    color = 'primary',
    rounded = 'md',
    variant = 'solid',
    padding = 'md',
  } = props || {};

  // Update style class
  useEffect(() => {
    const checkboxStyles = gVar([
      'input.base',
      `rounded.${rounded}`,
      `input.checkbox.padding.${padding}`,
      `input.checkbox.variant.${variant}.${color}`,
      `input.checkbox.base`
    ]);

    setCheckboxStyles(checkboxStyles);
  }, [props]);

  // Update icon color
  useEffect(() => {
    const pathStyles = !checked || variant !== 'solid' ? `text.color.${color}` : `input.checkbox.variant.solid.icon.${color}`;

    setIconColor(gVar(pathStyles));
  }, [props]);

  return (
    <div className="relative flex justify-center items-center w-full h-auto">
      <input
        name={props.name ?? 'checkbox'}
        type='checkbox'
        className={`checkbox ${checkboxStyles} ${className}`}
        onClick={() => setChecked(!checked)}
        {...props}
      />
      <span className={`check-icon absolute text-center pointer-events-none duration-300 ${iconColor}`}>
        {props.iconCheckbox ? props.iconCheckbox : <MarkIcon/>}
      </span>
    </div>
  );
};

export default CheckBox;