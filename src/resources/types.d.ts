import {LiHTMLAttributes, ReactNode} from "react";
import {routing} from './routing';
import type {IconName} from 'lucide-react/dynamic';
import type {LucideProps} from "lucide-react";

// locate type to languages
export type Locale = (typeof routing.locales)[number]

// Children type
export type Children = {
  children?: ReactNode;
}

// Li HTML
export type LiHTML = LiHTMLAttributes<HTMLLIElement>;

// item classes type
export type ItemClassName = {
  classNameItem?: string;
  classNameItemActive?: string;
}

// Tye params
export interface Params {
  locale: Locale;
}

// Type to params with promise
export interface ParamsPromise {
  params: Promise<Params>;
}

// SEO
export interface SEOProps extends Params {
  title: string;
  description?: string;
  image?: string;
  pathname?: string;
  keywords?: string[];
}

// Root Layout
export interface RootLayoutProps extends Children, Params {
}

// App layout
export interface AppLayoutProps extends Children {
  params: Params;
}

// Menu
export interface ItemMenu extends Omit<IconProps, 'name'> {
  label: string;
  link: string;
  items?: ItemMenu[];
  icon?: IconProps[ 'name' ];
}

//props item menu
export interface ItemClassNameMenu extends ItemClassName {
  classNameLink?: string;
  classNameLinkActive?: string;
  classNameIcon?: string;
}

//Item menu props
export interface ItemMenuProps
  extends ItemMenu, ItemClassNameMenu, LiHTML {
}

// component menu
export interface MenuProps extends Exclude<ItemClassNameMenu, LiHTML> {
  items: ItemMenu[];
  className?: string;
  dir?: 'horizontal' | 'vertical';
}

// component logo
export interface LogoProps {
  locale?: Locale;
  width?: number;
  height?: number;
}

// Icon props
export interface IconProps extends LucideProps {
  name: IconName;
}