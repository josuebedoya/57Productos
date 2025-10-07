import React from 'react';
import Tooltip from "@/components/tooltip/index.tsx";
import * as Icons from "@/assets/icons.tsx";
import clsx from "clsx";
import type {IconsControllerProps} from "@/components/code/types.js";

const IconController = (
  {
    isDark, active, className, fallback, icon, iconActive, label,children
  }: IconsControllerProps) => {
  const Icon = Icons[icon];
  const IconActive = Icons[iconActive];

  if (!Icon || !IconActive) return null;

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
      {active ?
        <Icon
          className={clsx(
            'cursor-pointer text-Primary dark:text-white text-lg',
            className
          )}
          onClick={fallback && fallback}
        />
        : <IconActive
          className={clsx(
            'cursor-pointer text-Primary dark:text-white text-lg',
            className
          )}
          onClick={fallback && fallback}
        />
      }
      {children}
    </Tooltip>
  );
};

export default IconController;