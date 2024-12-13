import { PropTypes } from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Effects
import 'swiper/css/effect-fade';

export function Carousel({ items = [], itemsView = 3, itemsSpace = 10, navs = false, dots = false, effect = false, lineProgress = false, itemClass = '', autoplay = false, autoplayDelay = 2500, loop = false
}) {
  return (
    <div className='swiper-container swiper-wrapper'>
      {Array.isArray(items) && items.length > 0 ? (
          <Swiper
            modules={[ Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay, EffectFade ]}
            slidesPerView={itemsView}
            spaceBetween={itemsSpace}
            navigation={navs}
            pagination={dots ? { clickable: true } : false}
            scrollbar={lineProgress && !loop ? { draggable: true } : false}
            autoplay={autoplay ? {
              delay: autoplayDelay,
              disableOnInteraction: true,
            } : false}
            loop={loop}
            effect={effect === 1 ? 'fade' : false}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i} className={`item-slide h-auto ${itemClass}`}>
                {item}
              </SwiperSlide>
            ))}
          </Swiper>
      ) : (
        console.error(`Carousel: The object "items", can't be empty. items = ${items.length}`)
      )}
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  itemsView: PropTypes.number,
  itemsSpace: PropTypes.number,
  navs: PropTypes.bool,
  dots: PropTypes.bool,
  lineProgress: PropTypes.bool,
  itemclass: PropTypes.string,
  autoplay: PropTypes.bool,
  autoplayDelay: PropTypes.number,
  loop: PropTypes.bool,
  effect: PropTypes.number,
};