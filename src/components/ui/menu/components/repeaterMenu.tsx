import React, {useState} from "react";
import clsx from "clsx";
import ItemMenu from "@ui/menu/components/itemMenu.tsx";
import type {RepeaterMenuProps} from "@ui/menu/types.d.ts";

const RepeaterMenu: React.FC<RepeaterMenuProps> = (
  {
    items,
    onSelect,
    className,
    classNameItemActive,
    classNameItem,
    orientation = "horizontal",
    level = 0,
    animateInDropdown = 'animate-fade-right-in',
  }) => {
  const [openMap, setOpenMap] = useState<Record<string | number, boolean>>({});

  const openItem = (key: string | number): void =>
    setOpenMap((prev) => ({...prev, [key]: true}));

  const closeItem = (key: string | number): void =>
    setOpenMap((prev) => ({...prev, [key]: false}));

  return (
    <ul
      className={clsx(
        "menu-list flex",
        {
          "flex-row relative": level === 0 && orientation === "horizontal",
          "flex-col": level > 0 || orientation === "vertical",
        },
        className,
      )}
    >
      {items?.map(({subItems, ...item}, index: number) => {
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
                  "absolute z-50 bg-white shadow-lg rounded-md p-3",
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
      })}
    </ul>
  );
};

export default RepeaterMenu;
