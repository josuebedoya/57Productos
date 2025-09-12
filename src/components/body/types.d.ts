import type {ReactNode, HTMLAttributes} from "react";

export interface BodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}