import React from 'react';
import Tooltip from "@/components/tooltip/index.tsx";

import clsx from "clsx";
import type {IconsControllerProps} from "@/components/code/types.js";
import Icon from "@/components/icons/index.js";

const IconController = (
  {
    isDark, active, className, fallback, icon, iconActive, label, children
  }: IconsControllerProps) => {

  return (
    <Tooltip
      content={label}
      position='left'
      contentClass='text-15 font-semibold rounded-full'
      variant='solid'
      color={!isDark ? 'black' : 'white'}
      spaceX={10}
      delayShow={700}
    >
      <Icon
        name={active ? iconActive : icon}
        className={clsx(
          'cursor-pointer text-Primary dark:text-white text-lg',
          className
        )}
        onClick={fallback && fallback}
      />

      {children}
    </Tooltip>
  );
};

export default IconController;