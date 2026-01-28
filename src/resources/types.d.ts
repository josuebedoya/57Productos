import { ReactNode } from "react";

// Root Layout
export interface RootLayoutProps {
  children: ReactNode;
}

// SEO
export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  pathname?: string;
  keywords?: string[];
}