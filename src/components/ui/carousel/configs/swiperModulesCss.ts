/* eslint-disable @typescript */
const swiperModuleCss = {
  A11y: () => import('swiper/css/a11y') as Promise<any>,
  Autoplay: () => import('swiper/css/autoplay') as Promise<any>,
  Controller: () => import('swiper/css/controller') as Promise<any>,
  EffectCards: () => import('swiper/css/effect-cards') as Promise<any>,
  EffectCoverflow: () => import('swiper/css/effect-coverflow') as Promise<any>,
  EffectCreative: () => import('swiper/css/effect-creative') as Promise<any>,
  EffectCube: () => import('swiper/css/effect-cube') as Promise<any>,
  EffectFade: () => import('swiper/css/effect-fade') as Promise<any>,
  EffectFlip: () => import('swiper/css/effect-flip') as Promise<any>,
  FreeMode: () => import('swiper/css/free-mode') as Promise<any>,
  Grid: () => import('swiper/css/grid') as Promise<any>,
  HashNavigation: () => import('swiper/css/hash-navigation') as Promise<any>,
  History: () => import('swiper/css/history') as Promise<any>,
  Keyboard: () => import('swiper/css/keyboard') as Promise<any>,
  Manipulation: () => import('swiper/css/manipulation') as Promise<any>,
  Mousewheel: () => import('swiper/css/mousewheel') as Promise<any>,
  Navigation: () => import('swiper/css/navigation') as Promise<any>,
  Pagination: () => import('swiper/css/pagination') as Promise<any>,
  Parallax: () => import('swiper/css/parallax') as Promise<any>,
  Scrollbar: () => import('swiper/css/scrollbar') as Promise<any>,
  Thumbs: () => import('swiper/css/thumbs') as Promise<any>,
  Virtual: () => import('swiper/css/virtual') as Promise<any>,
  Zoom: () => import('swiper/css/zoom') as Promise<any>,
};

export default swiperModuleCss;
