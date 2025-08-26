import React from 'react';
import type {OptionsProps, SelectProps} from './types.ts';

const Select: React.FC<SelectProps> = (
  {
    options = [],
    defaultValue = 0,
    classes = '',
    onChange,
    ...rest
  }) => {
  return (
    <select
      defaultValue={defaultValue}
      className={classes}
      onChange={onChange}
      {...rest}
    >
      {options.map(({value, label, disabled, classes, ...rest}: OptionsProps, index: number) => (
        <option
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
  );
};

export default Select;