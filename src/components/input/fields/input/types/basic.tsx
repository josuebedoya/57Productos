import React from "react";
import type {InputProps} from "@/components/input/fields/input/types.js";
import useInputStyles from "@/components/input/hooks/useInputStyles.js";

const Basic: React.FC<InputProps> = (
  {
    type = 'text',
    label,
    withLabel,
    labelClassName = '',
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
        <label className={`label ${labelClassName}`} htmlFor={props.name}>
          {label}
        </label>
      )}
      <input type={type}
             className={`input ${stylesClass} ${className}`}
             {...props}
      />
    </div>
  );
};

export default Basic;