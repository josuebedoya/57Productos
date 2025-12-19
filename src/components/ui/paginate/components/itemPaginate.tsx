import React, {useMemo} from 'react';
import clsx from 'clsx';
import type {ItemPaginateProps} from '@ui/paginate/types.d.ts';
import {gVar} from "@/utils/gVar.ts";
import buildUrlPaginate from "@ui/paginate/helpers/buildUrlPaginate.ts";

const ItemPaginate: React.FC<ItemPaginateProps> = (
  {
    id,
    label,
    query,
    isActive,
    onClick,
    space = 2,
    variantActive = 'solid',
    colorActive = 'secondary',
    rounded = 'full',
    padding = 2,
    variant = 'flat',
    color = 'primary',
    className,
  }) => {

  const baseClasses = useMemo(() => {
    const base = gVar([
      `rounded.${rounded}`,
      `padding.${padding}`,
    ]);

    const variantClasses = gVar(`pagination.variant.${variant}.${color}`);

    return clsx(
      gVar('pagination.base.items'),
      base,
      variantClasses,
      className
    );
  }, [rounded, padding, variant, color, className]);

  const activeClasses = useMemo(() => {
    if (!isActive) return '';

    return clsx(
      gVar(`pagination.variant.${variantActive}.active.${colorActive}`),
      'active'
    );
  }, [isActive, variantActive, colorActive]);

  return (
    <li className={clsx('item-paginate', gVar(`margin.inl.${space}`))} onClick={onClick}>
      <a
        href={buildUrlPaginate(query, label)}
        aria-label={`Page ${label}`}
        aria-current={isActive ? 'page' : undefined}
        className={clsx('link', baseClasses, activeClasses)}
      >
        {label}
      </a>
    </li>
  );
};

export default ItemPaginate;
