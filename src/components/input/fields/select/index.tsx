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
      {options.map((op: OptionsProps, index: number) => (
        <option
          key={index}
          value={op.value}
          disabled={op.disabled}
          className={op.classes}
        >
          {op.label ?? op.value}
        </option>
      ))}
    </select>
  );
};

export default Select;