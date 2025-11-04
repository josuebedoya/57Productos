import React, {useMemo} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import type {CarouselProps} from "@/components/carousel/types.d.ts";
import Media from "@/components/media/index.tsx";
import clsx from "clsx";
import getBreakpointValues from "@/components/carousel/helpers/getBreakpointValues.ts";
import getModule from "@/components/carousel/helpers/getModule.ts";
import useModuleProps from "@/components/carousel/hooks/useModuleProps.ts";

const Carousels: React.FC<CarouselProps> = (
  {
    items = [],
    effect = '',
    isMedia = false,
    itemClassName,
    breakpoints = [],
    ...props
  }) => {

  const swModules = useModuleProps({items, effect, ...props});

  const usageModules = useMemo(() => {
    const keys = Object.keys(swModules) as (keyof typeof swModules)[];
    const modules = keys.reduce<any[]>((acc, m) => {
      const enabled = (props as any)[m] ?? swModules[m];
      if (enabled) {
        const mod = getModule(m === 'effect' ? swModules.effect : m, m === 'effect');
        if (mod) acc.push(mod);
      }
      return acc;
    }, []);
    return modules;
  }, [swModules, props]);

  // load css e
  useMemo(() => {
    const keys = Object.keys(swModules) as (keyof typeof swModules)[];
    keys.forEach(m => {
      const enabled = (props as any)[m] ?? swModules[m];
      if (enabled) {
        const mod = getModule(m === 'effect' ? swModules.effect : m, m === 'effect', true);
        if (mod) mod();
      }
    }, []);
  }, [swModules, props]);

  // Responsive values
  const breakpointValues = getBreakpointValues(breakpoints);

  return (
    <div
      className={clsx('swiper-container h-full w-full overflow-hidden block relative', {'swiper-wrapper-2': effect === 'coverflow'})}>
      <Swiper
        {...props}
        effect={effect && effect}
        slidesPerView={effect === 'fade' ? 1 : props?.slidesPerView || 1}
        modules={[...usageModules]}
        scrollbar={props?.scrollbar && !props?.loop ? props?.scrollbar : false}
        className='h-full'
        centeredSlides={(effect === 'coverflow' || props?.centeredSlides) ?? false}
        breakpoints={breakpointValues}
      >
        {items?.map((item, i) => (
          <SwiperSlide key={i} className={itemClassName}>
            <div className='slide h-full' aria-label={`slide-${i}`}>
              {isMedia ? <Media src={item?.src} {...item} /> : item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousels;