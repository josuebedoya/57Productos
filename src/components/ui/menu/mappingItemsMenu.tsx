import React from 'react';
import ItemMenu from "@ui/menu/itemMenu";
import {ItemMenu as Item, MappingItemsProps} from "@/resources/types";
import Menu from "@ui/menu";

const MappingItemsMenu = ({items, itemProps}: MappingItemsProps) => {
  return (
    items?.map(({link, label, items: subItems, ...item}: Item, index: number) => (
      <ItemMenu
        {...itemProps}
        {...item}
        key={index}
        link={link}
        label={label}
      >
        {subItems && (
          <Menu
            key={index}
            items={subItems}
            dir='vertical'
            classNameItem='mb-1 last:mb-0'
            classNameLink='!px-0'
            classNameIcon='mr-1.5'
          />
        )}
      </ItemMenu>
    ))
  );
};

export default MappingItemsMenu;