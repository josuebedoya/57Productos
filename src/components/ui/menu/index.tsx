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

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 992;

  return (
    <div className='menu-wrapper'>
      <nav className='navbar' data-collapse={isMobile}>
        <RepeaterMenu
          {...props}
          orientation={orientation}
          level={0}
          animateInDropdown={animateInDropdown}
          isMobile={isMobile}
        />
      </nav>
    </div>
  );
}

export default MenuNav;