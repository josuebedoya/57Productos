import React, {useState, useEffect} from 'react';
import type {ButtonProps} from './types.d.ts';
import {gVar} from "@/utils/gVar.ts";

const Button: React.FC<ButtonProps> = (
  {
    children,
    icon,
    iconRight = false,
    noStyles = false,
    classes = '',
    ...rest
  }
) => {

  const [btnStyle, setBtnStyle] = useState('');
  const {
    size = 'md',
    padding = 'md',
    color = 'primary',
    colorHover = 'secondary',
    rounded = 'md',
    variant = 'solid',
    variantHover = rest?.variant || 'solid',
  } = rest || {};

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
  }, [rest])

  return (
    <button
      className={`btn ${!noStyles && `btn-${variant} ${btnStyle}`} ${classes}`}
      {...rest}
    >
      {!iconRight && icon}
      {children}
      {iconRight && icon}
    </button>
  );
};

export {Button};