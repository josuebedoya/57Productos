import { useState, useRef, useEffect, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AddIcon, CartDown, CartIcon, RemoveIcon, TicketMoney, TrashIcon, TrashOpenIcon } from '@/resources/icons';
import { Button } from './button.jsx';
import { Path_page } from '@/routes.jsx';
import { Slug } from "@/utils/handleText.js";
import { useCart } from '@/context/cart.jsx';
import { Media } from "@/components/media.jsx";
import { Tooltip } from "@/components/tooltip.jsx";

const Cart = ( { close } ) => {
  const navigate = useNavigate();
  const { cart, removeItem, removeAll } = useCart();


  const [ totalAmountProducts, setTotalAmountProducts ] = useState( 0 ); // total products
  const [ openModal, setOpenModal ] = useState( false );
  const [ iconDelete, setIconDelete ] = useState( false );
  const modalRef = useRef( null );
  const [ items, setItems ] = useState( cart ); // items in cart

  useEffect( () => {
    setItems( cart );
    console.log(items)
  }, [ cart ] ); //  handle  listener changes in cart.

  useEffect( () => {
    const addTotalAmount = () => {
      let newTotal = 0;
      items.map( item => {
        return newTotal += item.amount
      } );

      setTotalAmountProducts( newTotal );
    };

    addTotalAmount();

  }, [ items ] ); // handle total amount

  const incrementAmount = ( id ) => {
    const newItems = items.map( item => (
     item.id === id ? { ...item, amount: item.amount + 1 } : item
    ) )

    setItems( newItems );
  };  // increment amount product

  const decrementAmount = ( id ) => {
    const newItems = items.map( item => {
      if ( item.amount > 1 ) {
        return item.id === id ? { ...item, amount: item.amount - 1 } : item
      }
      return item;
    } );

    setItems( newItems );
  }; // decrement amount product

  const handleOpenModal = () => {
    setOpenModal( !openModal );
  }; // open modal

  useEffect( () => {

    let waitingTime;

    if ( openModal ) {
      //interval to prevent onClose from being executed once at startup
      waitingTime = setInterval( () => {
        window.addEventListener( 'click', clickOutside );
      }, 200 );
    } // handle listener click to close modal

    const clickOutside = ( event ) => {
      if ( modalRef.current && !modalRef.current.contains( event.target ) ) {
        setOpenModal( false );
      }
    };  // close modal  if clicked outside

    if ( close ) {
      setOpenModal( false );
    }  // if scrolling down

    return () => {
      clearTimeout( waitingTime );
      window.removeEventListener( 'click', clickOutside );
    };

  }, [ openModal, close ] );  // handle listener click to close modal or scroll down

  const goToPayments = () => {
    navigate( Path_page.PAYMENTS );
  }; // Navigation to payments page

  return (
   <div id='CartDropdown' onClick={ () => handleOpenModal() }>
     <div ref={ modalRef }
          className='cart flex items-center relative bg-Primary hover:bg-transparent rounded-full border border-Primary hover:border hover:border-Secondary d duration-150 group/cart cursor-pointer z-[100]'>
       <CartIcon classIcons='text-white duration-150 cursor-pointer group-hover/cart:text-Secondary'/>
       { totalAmountProducts > 0 && !openModal && (
        <div className='absolute top-five right-five flex items-center justify-center translate-x-1/2 -translate-y-1/2'>
              <span
               className='text-13 bg-white text-Primary rounded-full p-1 min-w-6 min-h-6 max-h-6 border-2 border-Gray-dark flex items-center justify-center text-center'>
                 { totalAmountProducts <= 99 ? totalAmountProducts : '99+' }
              </span>
        </div>
       ) }
       {
         openModal ? (
          <div
           className={ `${ openModal ? 'animate-fade-in' : 'animate-fade-out' } cursor-auto cart-products absolute px-6 rounded-lg shadow-custom w-64 -left-40 top-10 bg-white min-h-20 max-h-[373px] ${ totalAmountProducts && ( 'overflow-y-scroll scrollbar-thin scrollbar-thumb-scrollbar scrollbar-track-transparent' ) }` }
           onClick={ ( e ) => e.stopPropagation() }>
            { totalAmountProducts > 0 ? (
             <>
               <div
                className='top-section flex justify-between items-end text-Primary text-15 border-b border-b-gray-200 pb-1 sticky top-0 bg-white pt-4'>
                 <h3 className='total-products-title'>Productos en carrito: </h3>
                 <p className='total border border-gray-300 rounded-full p-y-0.5 px-1.5'>{ totalAmountProducts }</p>
               </div>
               <div className='list-section cart-list pt-4'>
                 {
                   items.map( ( item, index ) => (
                    <div key={ index }
                         className='item-product flex flex-wrap  mb-3 pb-3 border-b border-b-gray-200 last:mb-0 last:pb-2'>
                      <div className='image w-2/6'>
                        <Media src={item.img} alt={item.img + index} classFile='w-full h-16 rounded-lg object-contain'></Media>
                      </div>
                      <div className='information w-4/6 group/info pl-2'>
                        <Link to={ 'tienda/' + Slug( item.title ) } target='_self'>
                          <h5
                           className='title text-Primary text-13 family-oswald group-hover/info:text-Secondary group-hover/info:underline duration-150 cursor-pointer'>
                            { item.title }
                          </h5>
                        </Link>
                        <div className='amount-price flex justify-between text-xs'>
                          <span className='price text-zinc-600'>${ item.price }</span>
                          <div className='item-amount family-oswald text-Primary flex justify-between'>
                            <i onMouseDown={ () => decrementAmount( item.id ) }>
                              <RemoveIcon classIcons='cursor-pointer text-base'/>
                            </i>
                            <span className='text-xs mx-1 max-w-12 overflow-hidden  text-ellipsis cursor-default'>
                                    x{ item.amount }
                                </span>
                            <i onMouseDown={ () => incrementAmount( item.id ) }>
                              <AddIcon classIcons='cursor-pointer text-base'/>
                            </i>
                          </div>
                        </div>
                        <div className='btns-group flex justify-between pt-2'>
                          <Button classBtn='text-sm family-oswald pr-5' btnText>
                            Comprar
                          </Button>
                          <Tooltip content='Sacar Producto del carrito' position='left' contentClass='text-sm text-red-500 whitespace-nowrap font-medium'
                                   tooltipClass='shadow-md'>
                          <i className='flex justify-center items-center'
                             onClick={ () => removeItem( item.id ) }>
                            <CartDown classIcons='remove-item text-red-600 cursor-pointer hover:scale-110'/>
                          </i>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                   ) )
                 }
               </div>
               <div className='bottom-section flex justify-between sticky -bottom-0.5 py-4 bg-white family-oswald'>
                 <Button classBtn='text-xs  pr-5 px-4 tracking-wider' iconRight icon={ <TicketMoney classIcons='text-lg'/> }
                         onClick={ () => {
                           goToPayments();
                           setOpenModal( false )
                         } }>
                   Comprar Todo
                 </Button>
                 <Tooltip content='Eliminar todo del carrio' position='left' contentClass='text-sm text-red-500 whitespace-nowrap font-medium'
                                tooltipClass='shadow-md'>
                     <i className='flex justify-center items-center hover:animate-shaking'
                        onMouseOver={ () => setIconDelete( true ) }
                        onMouseLeave={ () => setIconDelete( false ) }
                        onClick={ () => removeAll() }
                     >
                       {
                         iconDelete ?
                          <TrashOpenIcon classIcons='remove-item text-red-600 cursor-pointer hover:scale-110'/>
                          : <TrashIcon classIcons='remove-item text-red-600 cursor-pointer hover:scale-110 '/>
                       }
                     </i>
                 </Tooltip>
               </div>
             </>
            ) : (
             <p className='text-15 text-Primary pt-6'>No has añadido productos al carrito de compras.</p>
            ) }
          </div>
         ) : null
       }
     </div>
   </div>
  );
};

export { Cart };