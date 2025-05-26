import { useState } from 'react';
import { useCart } from '@/context/cart.jsx';

import { CartIcon, HearthCheckIcon, HearthLineIcon, DocumentIcon } from '@/resources/icons.jsx';
import { Button } from '@/components/button.jsx';
import { Stars } from '@/components/stars.jsx';
import { ModalProduct } from './modalProduct.jsx';
import { Media } from '@/components/media.jsx'


const Product = ( props ) => {
  const { addCart } = useCart();
  const [ IsOpen, setIsOpen ] = useState( false );
  const [ outstanding, setOutstanding ] = useState( false );
  const [ changeImg, setChangeImg ] = useState( false );

  const HoverChangeImg = () => {
    if ( props.imgHover ) {
      setChangeImg( !changeImg );
    }
  };

  /* show a part of the description in the summary */
  let summary = '';

  if ( props.children && typeof props.children === 'string' ) {
    summary = props.children.slice( 0, 120 );
  }

  /* change Icon in outstanding */
  const Added = () => {
    setOutstanding( !outstanding );
  };

  /* open modal with information product */
  const OpenModal = () => {
    setIsOpen( !IsOpen );
  };

  if ( IsOpen ) {
    return <ModalProduct close={ OpenModal } title={ props.title } description={ props.children } price={ props.price }
                         img={ props.img } imgHover={ props.imgHover } id={ props.id } isOpen={ IsOpen }/>;
  }

  const addToCart = () => {
    const product = {
      id: props.id,
      title: props.title,
      amount: props.amount,
      price: props.price,
      img: props.img
    }
    addCart( product );
  }; // add product to cart

  return (
   <>
     <div id='item-product'
          className='z-0 transition-transform duration-300 transform hover:scale-101 hover:shadow-custom bg-white rounded-2xl p-1'>
       <div className='item-image'>
         { !changeImg ? (
          <Media src={ props.img } classFile='rounded-2xl cursor-pointer z-0 h-56 w-full max-w-full'
                 onMouseEnter={ HoverChangeImg } />
         ) : (
          <Media src={ props.imgHover } classFile='rounded-2xl cursor-pointer z-0 h-56 w-full max-w-full'
                 onMouseLeave={HoverChangeImg} />
         ) }
       </div>
       <div className='item-stars text-13'>
         <Stars classIcons='cursor-pointer hover:rotate-45 duration-300 '/>
       </div>
       <div className='content mx-2'>
         <div className='item-title text-base font-bold my-3'>
           <h3>{ props.title }</h3>
         </div>
         <div className='item-summary text-sm text-justify'>
           <p>
             { summary }
           </p>
         </div>
         <div className='item-price text-13 font-bold'>
           <span>{ `${ props.price }` }</span>
         </div>
         <div className='group-buttons flex gap-1 items-center justify-between'>
           <div className='btn-add-to-basket'>
             <Button icon={ <CartIcon/> } iconRight classBtn='text-sm trasn' onClick={ addToCart }>
               Añadir
             </Button>
           </div>
           <div className='btns-check flex gap-2'>
             <div className='btn-outstanding'>
               <Button icon={ !outstanding ? <HearthLineIcon/> : <HearthCheckIcon/> } onClick={ Added }
                       classBtn='text-sm'/>
             </div>
             <div className='btn-modal-information'>
               <Button icon={ <DocumentIcon/> } classBtn='text-sm' onClick={ OpenModal }/>
             </div>
           </div>
         </div>
       </div>
     </div>
   </>
  );
};


export { Product };