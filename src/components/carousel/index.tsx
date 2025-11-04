import React, {useMemo} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import swiperModules from "@/components/carousel/configs/swiperModules.ts";
import swiperModuleCss from "@/components/carousel/configs/swiperModulesCss.ts";

import type {CarouselProps} from "@/components/carousel/types.d.ts";
import Media from "@/components/media/index.tsx";
import clsx from "clsx";
import getBreakpointValues from "@/components/carousel/helpers/getBreakpointValues.ts";

const Carousels: React.FC<CarouselProps> = (
  {
    items = [],
    effect = '',
    isMedia = false,
    navigation = true,
    pagination = false,
    scrollbar = false,
    mousewheel = false,
    autoplay = true,
    itemClassName,
    breakpoints = [],
    ...props
  }) => {

  const usageModules = useMemo(() => {
    const modules = [];
    if (effect) {
      const mName = `Effect${effect.charAt(0).toUpperCase() + effect.slice(1).toLowerCase()}` as keyof typeof swiperModules;
      if (swiperModules[mName]) {
        modules.push(swiperModules[mName]);
      }
    }

    if (navigation) {
      modules.push(swiperModules['Navigation']);
    }
    if (pagination) {
      modules.push(swiperModules['Pagination']);
    }
    if (scrollbar) {
      modules.push(swiperModules['Scrollbar']);
    }
    if (mousewheel) {
      modules.push(swiperModules['Mousewheel']);
    }
    if (autoplay) {
      modules.push(swiperModules['Autoplay']);
    }

    return modules;
  }, [effect, navigation, pagination, scrollbar, mousewheel, autoplay]);

  // load css
  useMemo(() => {
    if (effect) {
      const mName = `Effect${effect.charAt(0).toUpperCase() + effect.slice(1).toLowerCase()}` as keyof typeof swiperModuleCss;
      if (swiperModuleCss[mName]) {
        swiperModuleCss[mName]();
      }
    }
    if (navigation) {
      swiperModuleCss['Navigation']();
    }
    if (pagination) {
      swiperModuleCss['Pagination']();
    }
    if (scrollbar) {
      swiperModuleCss['Scrollbar']();
    }
    if (mousewheel) {
      swiperModuleCss['Mousewheel']();
    }
    if (autoplay) {
      swiperModuleCss['Autoplay']();
    }
  }, [effect, navigation, pagination, scrollbar, mousewheel, autoplay]);

  // Responsive values
  const breakpointValues = getBreakpointValues(breakpoints);

  return (
    <div
      className={clsx('swiper-container h-full w-full overflow-hidden block relative', {'swiper-wrapper-2': effect === 'coverflow'})}>
      <Swiper
        {...props}
        effect={effect && effect}
        slidesPerView={1}
        modules={[...usageModules]}
        navigation={navigation}
        pagination={pagination}
        scrollbar={scrollbar}
        mousewheel={mousewheel}
        autoplay={autoplay}
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