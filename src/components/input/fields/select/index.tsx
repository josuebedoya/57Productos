import React, {useEffect, useState} from 'react';
import type {OptionsProps, SelectProps} from './types.ts';
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";
import Icon from "@/components/icons/index.js";

const Select: React.FC<SelectProps> = (
  {
    options = [],
    name = 'select',
    label,
    labelClassName = '',
    withLabel,
    defaultValue = 0,
    className = '',
    icon,
    onChange,
    color = 'primary',
    rounded = 'md',
    variant = 'solid',
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
    <div className='select-container w-full'>
      {(label && withLabel) && (
        <label className={clsx('label', labelClassName)} htmlFor={name}>
          {label}
        </label>
      )}
      <div className='relative flex justify-between items-center w-full h-auto'>
        <select
          name={name}
          defaultValue={defaultValue}
          className={clsx('controller order-0', `select-${name}`, selectStyles, className)}
          onChange={onChange}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          {...rest}
        >
          <option
            id={name}
            value={name}
            disabled={false}
            {...rest}
          >
            {name}
          </option>
          {options.map(({value, label, disabled, ...rest}: OptionsProps, index: number) => (
            <option
              id={index.toString()}
              key={index}
              value={value}
              disabled={disabled}
              {...rest}
            >
              {label ?? value}
            </option>
          ))}
        </select>

        {!rest?.multiple && <span
         className={clsx('right-2 order-1 absolute', open ? 'rotate-90' : 'rotate-0', selectStyles, '!w-auto max-w-max')}>
          <Icon name={icon || 'IoIosArrowForward'}/>
      </span>}
      </div>
    </div>

  );
};

export default Select;