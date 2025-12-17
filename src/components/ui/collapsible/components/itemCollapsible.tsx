import React, {forwardRef} from 'react';
import type {CollapsibleItemProps} from "@ui/collapsible/types.d.ts";
import Icon from "@ui/icons/index.tsx";
import clsx from "clsx";
import {gVar} from "@/utils/gVar.ts";

const ItemCollapsible = forwardRef<HTMLDivElement, CollapsibleItemProps>(
  ({
     title,
     children,
     iconItem = 'IoIosArrowForward',
     iconItemOpen = 'IoIosArrowDown',
     classNameItem,
     classNameItemActive: classActive,
     classNameTitle,
     classNameTitleActive: classTitle,
     classNameBody,
     id,
     height = 0,
     isActive,
     ...props
   }, ref
  ) => {
    return (
      <div
        className={clsx(
          'item-collapsible',
          classNameItem,
          isActive && ['active', classActive],
          '!max-h-max'
        )}
        data-active={isActive}
        aria-label={`Collapsible ${id}`}
      >
        <div
          {...props}
          className={clsx(
            gVar('collapsible.item.header'),
            classNameTitle,
            isActive && classTitle
          )}
          aria-expanded={isActive}
        >
          <h4 className="title">{title}</h4>
          <Icon name={isActive ? iconItem : iconItemOpen}/>
        </div>

        <div
          ref={ref}
          className={gVar('collapsible.item.body')}
          aria-hidden={!isActive}
          style={{maxHeight: isActive ? `${height ?? 0}px` : 0}}
        >
          <div className={clsx(gVar('collapsible.item.content'), classNameBody)}>
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default ItemCollapsible;