import React, {useEffect, useState} from 'react';
import type {PaginateButtonProps} from "../type.d.ts";
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";

const handleStylesButton = (
  rounded: string, padding: string | number, variant: string, color: string
) => {
  const [classLink, setClassLink] = useState('');
  useEffect(() => {
    const classesLink = gVar([
      `pagination.base.items`,
      `rounded.${rounded}`,
      `padding.${padding}`,
      `pagination.variant.${variant}.${color}`,
    ]);

    setClassLink(classesLink);
  }, [rounded, variant, color]);

  return classLink;
}

const PaginateButton: React.FC<PaginateButtonProps> = (
  {
    label,
    icon,
    directionControl,
    variant = 'solid',
    color = 'secondary',
    padding = 2,
    rounded = 'full',
    className,
    ...props
  }) => {
  return (
    <div className={directionControl} aria-label={directionControl}>
      <a
        {...props}
        className={clsx('link', handleStylesButton(rounded, padding, variant, color), className)}
      >
        {label}{icon}
      </a>
    </div>
  );
};

export default PaginateButton;