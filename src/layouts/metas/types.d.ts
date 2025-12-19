import type {ReactNode} from "react";

export interface MetaProps {
  title: string;
  description: string;
  image?: string;
  type: string;
  keywords?: string | string[];
  img?: string;
  url?: string;
  children?: ReactNode;
}