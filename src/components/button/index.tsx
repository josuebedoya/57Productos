import React, {useState, useEffect} from 'react';
import type {ButtonProps} from './types.d.ts';
import {gVar} from "@/utils/gVar.ts";
import Icon from "@/components/icons/index.js";

const Button: React.FC<ButtonProps> = (
  {
    children,
    icon,
    iconRight = false,
    noStyles = false,
    className = '',
    size = 'md',
    padding = 'md',
    color = 'primary',
    colorHover = 'secondary',
    rounded = 'md',
    variant = 'solid',
    variantHover = 'solid',
    ...props
  }
) => {

  const [btnStyle, setBtnStyle] = useState('');

  useEffect(() => {
    const btnStyle = gVar([
      "button.base",
      `text.size.${size}`,
      `button.padding.${padding}`,
      `button.variant.${variant || 'solid'}.${color}`,
      `button.variant.${variantHover}.hover.${colorHover}`,
      `rounded.${rounded}`
    ]);
    setBtnStyle(btnStyle);
  }, [size, padding, variant, variantHover, color, colorHover, rounded])

  return (
    <button
      className={`btn ${!noStyles && `btn-${variant} ${btnStyle}`} ${className}`}
      {...props}
    >
      {(!iconRight && icon) && <Icon name={icon}/>}
      {children}
      {(iconRight && icon) && <Icon name={icon}/>}
    </button>
  );
};

export default Button;