import {ReactNode} from "react";
import {Lang} from "@/i18n";

type Children = {
  children: ReactNode;
}

// Tye params
export interface Params {
  lang: Lang;
}

export interface ParamsPromise {
  params: Promise<Params>;
}

// SEO
export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  pathname?: string;
  keywords?: string[];
  lang?: Lang;
}

// Root Layout
export interface RootLayoutProps extends Children {
  lang: Lang;
}

// App layout
export interface AppLayoutProps extends Children {
  params: Params;
}