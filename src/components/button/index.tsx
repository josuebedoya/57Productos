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
    const sizeClass = gVar(`text.size.${size}`);
    const paddingClass = gVar(`button.padding.${padding}`);
    const variantClass = gVar(`button.variant.${variant || 'solid'}.${color}`);
    const hoverClass = gVar(`button.variant.${variantHover}.hover.${colorHover}`);
    const roundedClass = gVar(`button.rounded.${rounded}`);

    setBtnStyle([gVar('button.base'),sizeClass, paddingClass, variantClass, hoverClass, roundedClass].join(' '));
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