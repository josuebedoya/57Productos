import React, {useState} from 'react';
import ItemMenu from "@ui/menu/components/itemMenu.tsx";
import RepeaterMenu from "@ui/menu/components/repeaterMenu.tsx";
import clsx from "clsx";
import type {MapMenuProps} from "@ui/menu/types.d.ts";

const MapMenu: React.FC<MapMenuProps> = (
  {
    items,
    classNameItem,
    classNameItemActive,
    onSelect,
    level = 0,
    animateInDropdown = 'animate-fade-right-in',
    isMobile = false,
  }) => {

  const [openMap, setOpenMap] = useState<Record<string | number, boolean>>({});

  const openItem = (key: string | number): void =>
    setOpenMap((prev) => ({...prev, [key]: true}));

  const closeItem = (key: string | number): void =>
    setOpenMap((prev) => ({...prev, [key]: false}));

  return (
    items?.map(({subItems, ...item}, index: number) => {
      const key = `item-${index}`;
      const isOpen = openMap[key];
      const hasChildren = Boolean(subItems?.length);

      return (
        <li
          key={key}
          className="relative"
          onMouseEnter={() => hasChildren && openItem(key)}
          onMouseLeave={() => hasChildren && closeItem(key)}
          data-item={`item-${index}`}
          aria-expanded={isOpen}
          data-has-children={hasChildren}
        >
          <ItemMenu
            {...item}
            className={classNameItem}
            classNameActive={classNameItemActive}
            onClick={(e) => {
              if (hasChildren) {
                e.preventDefault();
                openItem(key);
              }
              onSelect?.(item);
            }}
          />

          {hasChildren && isOpen && (
            <RepeaterMenu
              items={subItems || []}
              onSelect={onSelect}
              className={clsx(
                {"absolute z-50 bg-white shadow-lg rounded-md p-3": !isMobile},
                level === 0 ? "top-full left-0" : "top-0 left-full",
                animateInDropdown
              )}
              classNameItem={classNameItem}
              classNameItemActive={classNameItemActive}
              orientation="vertical"
              level={level + 1}
            />
          )}
        </li>
      );
    }))
};

export default MapMenu;