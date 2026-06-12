import React from 'react';
import ItemMenu from "@ui/menu/itemMenu";
import {MenuItem} from "@db/types/tables";
import {MappingItemsProps} from "@/resources/types";
import Menu from "@ui/menu";

const MappingItemsMenu = ({items, itemProps}: MappingItemsProps) => {
  return (
    items?.map(({id,...item}: MenuItem, index: number) => (
      <ItemMenu
        {...itemProps}
        {...item}
        key={index}
        link={String(id)}
        label={String(id)}
      >
        {id && (
          <Menu
            key={index}
            items={[]}
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