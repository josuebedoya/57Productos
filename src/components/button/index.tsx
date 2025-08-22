import React from 'react';
import type {ButtonProps} from './types.d.ts';

const Button: React.FC<ButtonProps> = ({
                                         children,
                                         icon,
                                         iconRight = false,
                                         classBtn = '',
                                         btnText = false,
                                         ...rest
                                       }) => {
  const baseClasses = 'btn-custom flex items-center gap-2 hover:text-Secondary font-semibold hover:font-semibold';
  const styleVariant = btnText
    ? 'bg-transparent text-Primary duration-150'
    : 'bg-Primary text-white border border-primary hover:bg-transparent hover:border hover:border-Secondary shadow-md rounded-full px-1.5 py-1.5 duration-300';

  return (
    <button
      className={`${classBtn} ${baseClasses} ${styleVariant}`}
      {...rest}
    >
      {!iconRight && icon}
      {children}
      {iconRight && icon}
    </button>
  );
};

export { Button };