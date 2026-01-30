import {ReactNode} from "react";
import {routing} from './routing';

export type Locale = (typeof routing.locales)[number]

type Children = {
  children: ReactNode;
}

// Tye params
export interface Params {
  locale: Locale;
}

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
export interface ItemMenu {
  label: string;
  link: string;
}

export interface MenuProps {
  items: ItemMenu[];
}