import { PropTypes, string } from "prop-types";
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Autoplay,
  EffectFade,
  EffectCoverflow
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// Effects
import 'swiper/css/effect-fade'
import 'swiper/css/effect-coverflow'

export function Carousel( { items = [], itemsView = 3, itemsSpace = 10, navs = false, dots = false, effect = 0, lineProgress = false, itemClass = '', autoplay = false, autoplayDelay = 2500,
                            loop = false, cursor = false, centerItems = false, responsive = [] } ) {

  const breakpoints = responsive.length > 0 ? responsive.reduce( ( acc, query ) => {
     const { width, itemsView, spaceBetween, ...others } = query;
     acc[ width ] = {
       slidesPerView: itemsView,
       spaceBetween: spaceBetween,
       ...others,
     };
     return acc;
   }, {} )
   : false;

  return (
   <div className={ `swiper-container swiper-wrapper-${ effect === 2 ? effect : '' }` }>
     { Array.isArray( items ) && items.length > 0 ? (
      <Swiper
       modules={ [ Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay, EffectFade, EffectCoverflow ] }
       slidesPerView={effect === 1 ? 1 :  itemsView }
       grabCursor={ cursor }
       spaceBetween={ itemsSpace }
       centeredSlides={ effect === 2 || centerItems }
       navigation={ navs }
       pagination={ dots ? { clickable: true } : false }
       scrollbar={ lineProgress && !loop ? { draggable: true } : false }
       autoplay={ autoplay ? {
         delay: autoplayDelay,
         disableOnInteraction: true,
       } : false }
       loop={ loop }
       effect={ effect === 1 ? 'fade' : effect === 2 ? 'coverflow' : false }
       coverflowEffect={ effect === 2 ? {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       } : null }
       breakpoints={ breakpoints }
      >
        { items.map( ( item, i ) => (
         <SwiperSlide key={ i } className={ `item-slide ${ itemClass }` }>
           { item }
         </SwiperSlide>
        ) ) }
      </Swiper>
     ) : (
      console.error( `Carousel: The object "items", can't be empty. items = ${ items.length }` )
     ) }
   </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  itemsView: PropTypes.number | string,
  itemsSpace: PropTypes.number,
  navs: PropTypes.bool,
  dots: PropTypes.bool,
  lineProgress: PropTypes.bool,
  itemClass: PropTypes.string,
  autoplay: PropTypes.bool,
  autoplayDelay: PropTypes.number,
  loop: PropTypes.bool,
  effect: PropTypes.number,
  cursor: PropTypes.bool,
  responsive: PropTypes.object,
};