import React from "react";
import type {InputProps} from "@ui/input/fields/input/types.js";
import useInputStyles from "@ui/input/hooks/useInputStyles.js";
import clsx from "clsx";

const Basic: React.FC<InputProps> = (
  {
    type = 'text',
    name = 'basic',
    label,
    withLabel,
    labelClassName,
    className,
    color = 'primary',
    rounded = 'md',
    variant = 'solid',
    padding = 'md',
    ...props
  }) => {

  const {stylesClass} = useInputStyles({rounded, variant, color, padding});

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
        {...props}
      />
    </div>
  );
};

export default Basic;