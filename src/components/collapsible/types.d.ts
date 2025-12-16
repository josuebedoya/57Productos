import {ReactNode} from "react";

type ItemCommon = {
  defaultOpen?: boolean;
  iconItem?: string;
  iconItemOpen?: string;
  classNameItem?: string;
  classNameItemActive?: string;
  classNameTitle?: string;
  classNameTitleActive?: string;
  classNameBody?: string;
}

export type CollapsibleItemProps = HTMLDivElement<Element> & ItemCommon & {
  title: string;
  children: ReactNode;
  isActive?: boolean;
  height?: number | string;
}

export interface CollapsibleProps extends ItemCommon {
  items: CollapsibleItemProps[];
  multiple?: boolean;
  className?: string;
}