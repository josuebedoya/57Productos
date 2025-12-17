const getAnimationModal = (type: string = 'drawer', position: string = 'top'): Record<string, string | null> => {
  switch (type) {
    case 'drawer':
    case 'alert':
      switch (position) {
        case 'top':
        case 'top-left':
        case 'top-right':
          return {entrance: 'animate-fade-up-in', exit: 'animate-fade-down-out'};
        case 'bottom':
        case 'bottom-left':
        case 'bottom-right':
          return {entrance: 'animate-fade-down-in', exit: 'animate-fade-up-out'};
        case 'left':
          return {entrance: 'animate-fade-left-in', exit: 'animate-fade-right-out'};
        case 'right':
          return {entrance: 'animate-fade-right-in', exit: 'animate-fade-left-out'};
        default:
          return {entrance: null, exit: null};
      }
    default:
      return {entrance: null, exit: null};
  }
}

export default getAnimationModal;
