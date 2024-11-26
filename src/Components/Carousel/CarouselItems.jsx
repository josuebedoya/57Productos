import React, { useEffect, useRef, useState } from 'react';
import { AngleLeftIcon, AngleRightIcon, CircleIcon } from '../../Resources/Icons';

const CarouselItems = ({ ListElements, isImage }) => {
  const elements = useRef(null);
  const [ imgI, setImgI ] = useState(0);

  const contentToDisplay = Array.isArray(ListElements)
    ? ListElements
    : [];

  useEffect(() => {
    const listElementsNode = elements.current;
    const getImg = listElementsNode?.querySelectorAll('li')[ imgI ];
    if (getImg) {
      getImg.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [ imgI ]);

  const activeCarousel = (direction) => {
    setImgI(prevIndex => {
      const length = contentToDisplay.length;
      if (length === 0) return 0;

      if (direction === 'prev') {
        return prevIndex === 0 ? length - 1 : prevIndex - 1;
      } else {
        return prevIndex === length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const goToItemDot = (indexItem) => {
    setImgI(indexItem);
  };

  return (
    <div id="Carousel">
      <div className='py-10 overflow-hidden'>
        <div className='flex justify-center items-center mt-6 max-h-600 min-h-96'>
          {isImage ? (
            <div id='imageView' className='carousel-section relative p-2'>
              <div
                className='button-prev absolute top-1/2 transform -translate-y-1/2 cursor-pointer'
                onClick={() => activeCarousel('prev')}
              >
                <AngleLeftIcon atr={{ fontSize: '30px', margin: '5px' }} className='prev-icon' />
              </div>
              <div className='image-section overflow-hidden max-w-2xl rounded-3xl shadow-custom-white'>
                <ul ref={elements} className='flex transition-transform duration-300 ease-in-out'>
                  {contentToDisplay.map(item => (
                    <li key={item.id} className='flex-shrink-0 w-full rounded-3xl'>
                      <img src={item.element} alt={`${item.id}`} className='min-w-full max-h-96 object-cover' />
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className='button-next absolute top-1/2 transform -translate-y-1/2 cursor-pointer'
                onClick={() => activeCarousel('next')}
              >
                <AngleRightIcon atr={{ fontSize: '30px', margin: '5px' }} className='next-icon' />
              </div>
              <div className='dots-section pt-2 flex space-x-3 justify-center '>
                {contentToDisplay.map((_, idx) => (
                  <div
                    className={`item-dots hover:cursor-pointer ${idx === imgI ? 'active' : 'disabled'}`}
                    key={idx}
                    onClick={() => goToItemDot(idx)}
                  >
                    <CircleIcon atr={{ height: '10px', width: '10px', border: '1px solid', borderRadius: '50%' }} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div id='elementView' className='carousel-section relative p-2'>
              <div
                className={`${isImage ? 'button-prev-image' : 'button-prev-element'} absolute top-1/2 transform -translate-y-1/2 cursor-pointer`}
                onClick={() => activeCarousel('prev')}
              >
                <AngleLeftIcon atr={{ fontSize: '30px', margin: '5px' }} className='prev-icon' />
              </div>
              <div className='image-section overflow-hidden max-w-3xl'>
                <ul ref={elements} className='flex transition-transform duration-300 ease-in-out'>
                  {contentToDisplay.map(item => (
                    <li key={item.id} className='flex-shrink-0 w-full min-w-0'>
                      <div className='min-w-full'>
                        {item.element}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`${isImage ? 'button-next-image' : 'button-next-element'} absolute top-1/2 transform -translate-y-1/2 cursor-pointer`}
                onClick={() => activeCarousel('next')}
              >
                <AngleRightIcon atr={{ fontSize: '30px', margin: '5px' }} className='next-icon' />
              </div>
              <div className='dots-section pt-2 flex space-x-3 justify-center '>
                {contentToDisplay.map((_, idx) => (
                  <div
                    className={`item-dots hover:cursor-pointer ${idx === imgI ? 'active' : 'disabled'}`}
                    key={idx}
                    onClick={() => goToItemDot(idx)}
                  >
                    <CircleIcon atr={{ height: '10px', width: '10px', border: '1px solid', borderRadius: '50%' }} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { CarouselItems };