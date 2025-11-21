import React, {useEffect, useState} from 'react';
import type {InputProps} from "../types.ts";
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";
import Icon from "@ui/icons/index.js";

const CheckBox: React.FC<InputProps> = (
  {
    className = '',
    name = 'checkBox',
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
        <label className={clsx('label', labelClassName)} htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative flex justify-center items-center w-full h-auto">
        <input
          type='checkbox'
          className={clsx('checkbox', checkboxStyles, className)}
          onClick={() => setChecked(!checked)}
          {...props}
          name={name}
        />
        <span className={clsx('check-icon absolute text-center pointer-events-none duration-300', iconColor)}>
          <Icon name={props.iconCheckbox || 'GiCheckMark'}/>
      </span>
      </div>
    </div>
  );
};

export default CheckBox;