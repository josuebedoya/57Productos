import type {SwiperProps} from "swiper/react";

export type Breakpoint = { width: number } & Record<string | number, any>;
export type Breakpoints = Breakpoint[];

export interface CarouselProps extends SwiperProps {
  items: any[];
  isMedia?: boolean;
  itemClassName?: string;
  breakpoints?: Breakpoints;
  manipulation?: boolean;
}