import React, {useEffect, useState} from 'react';
import type {OptionsProps, SelectProps} from './types.ts';
import {gVar} from "@/utils/gVar.js";
import {AngleRightIcon} from '@/assets/icons'

const Select: React.FC<SelectProps> = (
  {
    options = [],
    defaultValue = 0,
    classes = '',
    variant = 'outline',
    color = 'secondary',
    rounded = 'md',
    icon,
    onChange,
    ...rest
  }) => {

  const [selectStyles, setSelectStyles] = useState('');
  const [open, setOpen] = useState(false);

  // Update style class
  useEffect(() => {
    const selectStyles = gVar([
      'select.base',
      `select.variant.${variant}.${color}`,
      `rounded.${rounded}`
    ]);

    setSelectStyles(selectStyles);
  }, [rest]);

  return (
    <div className='relative flex justify-between items-center w-full h-auto'>
      <select
        defaultValue={defaultValue}
        className={`controller select-${rest.name} order-0 ${selectStyles} ${classes}`}
        onChange={onChange}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        {...rest}
      >
        {options.map(({value, label, disabled, classes, ...rest}: OptionsProps, index: number) => (
          <option
            id={index.toString()}
            key={index}
            value={value}
            disabled={disabled}
            className={classes}
            {...rest}
          >
            {label ?? value}
          </option>
        ))}
      </select>
      <span
        className={`right-2 order-1 absolute ${open ? 'rotate-90' : 'rotate-0'} duration-300 transition text-Primary text-15 hover:text-Secondary cursor-pointer`}>
        {
          icon ? icon : <AngleRightIcon/>
        }
      </span>
    </div>
  );
};

export default Select;