import {type HTMLAttributes, ReactNode} from 'react';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  items: Array<{
    label: string;
    iconLabel?: string;
    content: ReactNode;
  }>;
  defaultActiveIndex?: number;
  classNameWrapper?: string;
  classNameHeader?: string;
  classNameItemHeader?: string;
  classNameItemHeaderActive?: string;
  classNameBody?: string;
  classNameItemBody?: string;
}