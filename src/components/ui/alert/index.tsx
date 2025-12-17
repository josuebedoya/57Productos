import React from 'react';
import Icon from "@ui/icons/index.tsx";
import type {AlertProps} from "@ui/alert/types.d.ts";
import clsx from "clsx";

const Alert: React.FC<AlertProps> = ({children, icon, iconProps, className, ...props}) => {
  return (
    <div
      className={clsx('alert flex items-center gap-4 max-w-max px-6 py-3 text-15 tracking-wide mx-auto', className)} {...props}>
      <span>{children}</span>
      {icon && <Icon  {...iconProps} name={icon}/>}
    </div>
  );
};

export default Alert;