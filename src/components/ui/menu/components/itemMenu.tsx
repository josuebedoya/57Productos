import React from 'react';
import {Link} from "react-router";
import Icon from "@ui/icons/index.tsx";
import type {ItemMenuProps} from "@ui/menu/types.d.ts";
import clsx from "clsx";
import getActiveItem from "@ui/menu/helpers/getActiveItem.ts";

const ItemMenu: React.FC<ItemMenuProps> = (
  {
    label = '',
    link,
    icon,
    className = 'px-4 py-3',
    classNameActive,
    ...props
  }) => {
  const isActive: boolean = getActiveItem(link || '');

  return (
    <Link
      to={link}
      {...props}
      className={clsx('menu-link flex items-center justify-between', className,
        {[classNameActive as string]: isActive, active: isActive})}
      data-active={isActive}
      target={props.target || '_self'}
    >
      {icon && <Icon name={icon} className='menu-icon mr-2'/>}
      <span className='menu-labe font-[inherit]'>{label}</span>
    </Link>
  );
};

export default ItemMenu;