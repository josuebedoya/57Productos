import React from 'react';
import type {ItemSpinProps} from "@ui/spin/types.d.ts";
import clsx from "clsx";

const ItemSpin: React.FC<ItemSpinProps> = ({children, position, className, innerRef}) => {
  return (
    <li className='spin-item absolute'
        style={{transform: `translate(${position.x}px, ${position.y}px)`}}
    >
      <div className={clsx(className)}>
        <div className='h-full w-full' ref={innerRef}>
          {children}
        </div>
      </div>
    </li>
  );
};

export default ItemSpin;