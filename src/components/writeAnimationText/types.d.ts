import type {HTMLAttributes} from "react";

export interface WriteAnimationTextProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  speed?: number;
  activeClassName?: string;
  writer?: 'word' | 'char';
  animationIn?: string
  delay?: number;
  delayRestart?: number;
  infinite?: boolean;
}