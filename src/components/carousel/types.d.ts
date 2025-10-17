import type {SwiperProps} from "swiper/react";

export interface CarouselProps extends SwiperProps {
  items: any[];
  isMedia?: boolean;
}