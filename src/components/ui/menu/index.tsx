import React from 'react';
import type {MenuProps} from "@ui/menu/types.d.ts";
import ItemMenu from "@ui/menu/components/itemMenu.tsx";
import clsx from "clsx";

const MenuNav: React.FC<MenuProps> = (
  {
    items,
    onSelect,
    className,
    classNameItemActive,
    classNameItem,
    orientation = 'horizontal',
  }
) => {
  return (
    <div className='menu-wrapper'>
      <nav className='navbar'>
        <ul className={clsx('menu-list flex', className, {'flex-col': orientation === 'vertical'})}>
          {
            items?.map((item, i: number) => (
              <ItemMenu
                key={i}
                {...item}
                onClick={onSelect as any}
                aria-label={`Item Menu ${i}`}
                className={classNameItem}
                classNameActive={classNameItemActive}
              />
            ))
          }
        </ul>
      </nav>
    </div>
  );
};

export default MenuNav;