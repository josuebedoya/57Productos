import {HTMLAttributes, Key, ReactNode} from "react";

export interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index?: number) => ReactNode;
  keyExtractor: (item: T, index?: number) => Key;
  className?: string;
  propsItem?: HTMLAttributes<HTMLElement>;
  cols?: string;
  colItem?: string;
  labelEmpty?: string;
  classNameLabelEmpty?: string;
}
