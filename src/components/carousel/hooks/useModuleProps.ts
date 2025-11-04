import type {CarouselProps} from "@/components/carousel/types.d.ts";

const useModuleProps = ({...props}: CarouselProps) => {
  return {
    a11y: props?.a11y ?? false,
    effect: props?.effect ?? '',
    grid: props?.grid ?? false,
    navigation: props?.navigation ?? true,
    hashNavigation: props?.hashNavigation ?? false,
    history: props?.history ?? false,
    keyboard: props?.keyboard ?? false,
    mousewheel: props?.mousewheel ?? false,
    pagination: props?.pagination ?? false,
    parallax: props?.parallax ?? false,
    scrollbar: props?.scrollbar ?? false,
    thumbs: props?.thumbs ?? false,
    virtual: props?.virtual ?? false,
    zoom: props?.zoom ?? false,
    autoplay: props?.autoplay ?? true,
    controller: props?.controller ?? false,
    freeMode: props?.freeMode ?? false,
    manipulation: props?.manipulation ?? false,
  };
};

export default useModuleProps;