import React from 'react';
import type {MenuProps} from "@ui/menu/types.d.ts";
import RepeaterMenu from "@ui/menu/components/repeaterMenu.tsx";

const MenuNav: React.FC<MenuProps> = (
  {
    orientation = 'horizontal',
    animateInDropdown = 'animate-fade-right-in',
    ...props
  }
) => {
  return (
    <div className='menu-wrapper'>
      <nav className='navbar'>
        <RepeaterMenu
          {...props}
          orientation={orientation}
          level={0}
          animateInDropdown={animateInDropdown}
        />
      </nav>
    </div>
  );
}

export default MenuNav;