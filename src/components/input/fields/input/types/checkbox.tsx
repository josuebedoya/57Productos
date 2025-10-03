import React, {useEffect, useState} from 'react';
import type {InputProps} from "../types.ts";
import {gVar} from "@/utils/gVar.js";
import {MarkIcon} from '@/assets/icons.tsx'
import clsx from "clsx";

const CheckBox: React.FC<InputProps> = (
  {
    className = '',
    label,
    withLabel,
    labelClassName = '',
    color = 'primary',
    rounded = 'md',
    variant = 'solid',
    padding = 'md',
    ...props
  }) => {

  const [checkboxStyles, setCheckboxStyles] = useState('');
  const [checked, setChecked] = useState(false);
  const [iconColor, setIconColor] = useState('text-Primary');

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

    // Update icon color
    const pathStyles = !checked || variant !== 'solid' ? `text.color.${color}` : `input.checkbox.variant.solid.icon.${color}`;
    setIconColor(gVar(pathStyles));
  }, [props]);

  return (
    <div className='checkbox-container w-full'>
      {(label && withLabel) && (
        <label className={clsx('label', labelClassName)} htmlFor={props.name ?? 'checkbox'}>
          {label}
        </label>
      )}
      <div className="relative flex justify-center items-center w-full h-auto">
        <input
          type='checkbox'
          className={clsx('checkbox', checkboxStyles, className)}
          onClick={() => setChecked(!checked)}
          {...props}
          name={props.name ?? 'checkbox'}
        />
        <span className={clsx('check-icon absolute text-center pointer-events-none duration-300', iconColor)}>
        {props.iconCheckbox ? props.iconCheckbox : <MarkIcon/>}
      </span>
      </div>
    </div>
  );
};

export default CheckBox;