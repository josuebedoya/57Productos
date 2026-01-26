import {ReactNode} from "react";

// Metas
export interface MetaProps {
  title: string;
  description?: string;
  favicon?: string;
  children?: ReactNode;
}

// Root Layout
export interface RootLayoutProps {
  headProps: MetaProps;
  children: ReactNode;
}