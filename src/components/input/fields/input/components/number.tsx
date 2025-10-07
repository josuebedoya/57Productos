import React, {useEffect, useState} from "react";
import type {InputProps} from "@/components/input/fields/input/types.js";
import clsx from "clsx";
import formattedNumber from "@/components/input/helpers/formattedNumber.js";
import useInputStyles from "@/components/input/hooks/useInputStyles.js";

const Number: React.FC<InputProps> = (
  {
    type = 'number',
    name = 'number',
    max,
    maxLength,
    value,
    label,
    withLabel,
    labelClassName = '',
    className = "ss",
    color = 'primary',
    rounded = 'md',
    variant = 'solid',
    padding = 'md',
    pattern = "###-###-####",
    patternSeparator = '-',
    onChange,
    ...props
  }) => {
  const [valueInput, setValueInput] = useState<string | number>('');

  const {stylesClass} = useInputStyles({rounded, variant, color, padding});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;

    const isDeleting = valueInput.toString().length > value.length;

    if (type === 'tel') {
      const formatted = formattedNumber(value, pattern, patternSeparator, isDeleting);
      setValueInput(formatted);
      onChange?.({...e, target: {...e.target, value: value}});
    } else {
      setValueInput(value);
      onChange?.(e);
    }
  };

  return (
    <div className='input-container w-full'>
      {(label && withLabel) && (
        <label className={clsx('label', labelClassName)} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        className={clsx(type, stylesClass, className)}
        value={valueInput}
        maxLength={type === 'tel' ? pattern.length : maxLength}
        max={type === 'tel' ? pattern.length : max}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default Number;