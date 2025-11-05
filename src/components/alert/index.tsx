import React from 'react';
import Icon from "@/components/icons/index.tsx";
import type {AlertProps} from "@/components/alert/types.d.ts";
import clsx from "clsx";

const Alert: React.FC<AlertProps> = ({children, icon, iconProps, className, ...props}) => {
  return (
    <div
      className={clsx('alert flex items-center gap-4 max-w-max px-6 py-3 text-15 tracking-wide mx-auto', className)} {...props}>
      <span>{children}</span>
      {icon && <Icon name={icon} {...iconProps}/>}
    </div>
  );
};

export default Alert;