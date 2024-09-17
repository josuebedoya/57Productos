import { useState } from 'react';

import { Product } from './Product';
import { Stars } from '../Stars';
import { Button } from '../Button';
import { HearthLineIcon, ExitArrowIcon } from '../Icons';
import img1 from '../../Images/ProductImages/Fruit1.jpg';
import img2 from '../../Images/ProductImages/Fruit3.jpg';



const Modalproduct = () => {

  const [ changeImg, setChangeImg ] = useState(false);

  const HoverChangeImg = () => {
    setChangeImg(!changeImg);
  };

  return (
    <>
      <div id='modalProduct'>
        <div className='modal-content-product flex justify-center '>
          <div className='flex justify-center max-w-5xl shadow-modal p-4 rounded-3xl'>
            <div className='content'>
              <div className='bnt-close flex justify-end items-start'>
                <Button icon={<ExitArrowIcon />} />
              </div>
              <div className='content-title mb-11'>
                <div className='title text-center text-6xl'>
                  <h1>title</h1>
                </div>
              </div>
              <div className='content-image cursor-pointer flex justify-center '>
                {!changeImg &&
                  <img src={img1} alt='image' className='h-96 w-96 rounded-3xl shadow-lg-' onMouseEnter={HoverChangeImg} />
                  ||
                  <img src={img2} alt='image' className='h-96 w-96 rounded-3xl shadow-lg' onMouseLeave={HoverChangeImg} />
                }
              </div>
              <div className='rating-stars'>
                <Stars />
              </div>
              <div className='content-summary'>
                <div className='summary'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam laudantium a, fugit neque cupiditate quasi excepturi id ea ratione laboriosam voluptatem ipsum nostrum iure, eligendi quibusdam molestiae odio est?
                </div>
              </div>
              <div className='content-price'>
                <span className='price'>
                  $50.000
                </span>
              </div>

              <div className='btns-group'>
                <div className='btn-outstanding'>
                  <Button icon={<HearthLineIcon />} classBtn='text-lg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Modalproduct };