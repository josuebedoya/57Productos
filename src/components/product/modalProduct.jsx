import { useState } from 'react';

import { Stars } from '@/components/stars.jsx';
import { Button } from '@/components/button.jsx';
import { HearthLineIcon, HearthCheckIcon } from '@/assets/icons.jsx';
import { AddWithQuantity } from '@/components/addWithQuantity.jsx';
import { Modal } from '@/components/modal.jsx';
import { useCart } from '@/context/cart.jsx';

const ModalProduct = ( { close, title, price, description, img, imgHover, isOpen, id } ) => {
  const [ changeImg, setChangeImg ] = useState( false );
  const [ outstanding, setOutstanding ] = useState( false );
  const [ amount, setAmount ] = useState( 0 );
  const { addCart } = useCart();

  if ( close ) {

    const HoverChangeImg = () => {
      if ( imgHover ) {
        setChangeImg( !changeImg );
      }
    };

    const Added = () => {
      setOutstanding( !outstanding );
    };

    const handleAmount = ( amount ) => {
      setAmount( amount );
    };

    const addToCart = () => {
      const product = {
        id: id,
        title: title,
        amount: amount,
        price: price,
      }
      addCart( product );
    }; // add product to cart

    return (
     <>
       <div id='modalProduct'>
         <Modal isOpen={ isOpen } onClose={ close }>
           <div className='content p-7'>
             <div className='content-title mb-8'>
               <h1 className='text-center text-4xl font-bold'>{ title }</h1>
             </div>
             <div className='content-image flex justify-center'>

               { !changeImg ? (
                <img src={ img } alt={ title }
                     className='max-h-600 rounded-3xl shadow-lg cursor-pointer aspect-100/83'
                     onMouseEnter={ HoverChangeImg }/>
               ) : (
                <img src={ imgHover } alt={ title }
                     className='max-h-600 rounded-3xl shadow-lg cursor-pointer aspect-100/83'
                     onMouseLeave={ HoverChangeImg }/>
               ) }

             </div>
             <div className='rating-stars mt-6'>
               <Stars classIcons='cursor-pointer hover:rotate-45 duration-300'/>
             </div>
             <div className='content-description my-6 whitespace-pre-wrap text-lg text-justify'>
               <p>{ description }</p>
             </div>
             <div className='content-price text-xl font-semibold my-4'>
               <span>${ price }</span>
             </div>
             <div className='btns-group flex justify-between'>
               < AddWithQuantity functionAdd={ addToCart } handleAmount={ handleAmount }/>
               <div className='btn-outstanding'>
                 <Button icon={ !outstanding ? <HearthLineIcon/> : <HearthCheckIcon/> } onClick={ Added }
                         classBtn='text-lg'/>
               </div>
             </div>
           </div>
         </Modal>
       </div>
     </>
    );
  }
};

export { ModalProduct };