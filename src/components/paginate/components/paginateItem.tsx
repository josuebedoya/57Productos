import React, {type ForwardedRef, forwardRef, useEffect, useState} from 'react';
import type {PaginateItemProps} from "../type.d.ts";
import {gVar} from "@/utils/gVar.js";
import clsx from "clsx";

const PaginateItem = forwardRef<HTMLDivElement, PaginateItemProps>(
  ({
     label,
     active = false,
     className = '',
     rounded = 'full',
     padding = 2,
     variant = 'solid',
     variantActive = 'solid',
     color = 'primary',
     colorActive = 'secondary',
     space = 2,
     onClick
   }: PaginateItemProps, ref: ForwardedRef<HTMLDivElement>): React.ReactElement => {

    const [stylesItem, setStylesItem] = useState<string>('');
    const baseStyle = gVar(`pagination.base.items`);
    const [stylesItemActive, setStylesItemActive] = useState<string>('')

    useEffect(() => {
      const base = gVar([
        `rounded.${rounded}`,
        `padding.${padding}`,
      ]);

      const classes = gVar(`pagination.variant.${variant}.${color}`);
      const classesActive = gVar(`pagination.variant.${variantActive}.active.${colorActive}`) + ' active';

      setStylesItem([baseStyle, base, classes].join(' '));
      setStylesItemActive(classesActive);
    }, [rounded, variant, color, colorActive, variantActive]);

    return (
      <div ref={ref} className='flex justify-center items-center' aria-label={`Page ${label}`}
           onClick={onClick}>
        <li className={clsx(gVar(`margin.inl.${space}`), {"active": active})}>
          <a className={clsx("link", stylesItem, className, {[stylesItemActive]: active})}>
            {label}
          </a>
        </li>
      </div>
    );
  }
);

export default PaginateItem;