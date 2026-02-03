'use client';

import {ItemClassNameMenu, MenuProps} from "@/resources/types";
import {clsx} from "clsx";
import useIsMobile from "@/hooks/useIsMobile";
import Icon from "@ui/icon";
import {useState} from "react";
import MappingItemsMenu from "@ui/menu/mappingItemsMenu";
import {listStyles, mobilePanelStyles, navStyles} from "./menu.styles";

const Menu = ({items, dir = 'vertical', isCollapsible = false, ...ui}: MenuProps) => {
  const itemProps: ItemClassNameMenu = {
    classNameItem: ui?.classNameItem,
    classNameItemActive: ui?.classNameItemActive,
    classNameLink: ui?.classNameLink,
    classNameLinkActive: ui?.classNameLinkActive,
    classNameIcon: ui?.classNameIcon
  };

  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const showDesktopMenu = (isCollapsible && !isMobile) || !isCollapsible;

  return (
    <nav className={clsx(navStyles(), ui?.className)}>
      {showDesktopMenu && (
        <ul
          className={listStyles({
            direction: dir,
            mobileCollapsible: isCollapsible && isMobile,
          })}
        >
          <MappingItemsMenu itemProps={itemProps} items={items}/>
        </ul>
      )}

      {isMobile && isCollapsible && (
        <>
          <Icon name="menu" onClick={() => setIsOpen(!isOpen)}/>

          <div className={mobilePanelStyles({open: isOpen})}>
            <div className="flex justify-end">
              <button
                className="p-5 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Icon name="x"/>
              </button>
            </div>

            <ul className="nav-list flex flex-col m-0 py-10 px-5">
              <MappingItemsMenu itemProps={itemProps} items={items}/>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Menu;