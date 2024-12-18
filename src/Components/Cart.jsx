import {useState, useRef, useEffect} from 'react';
import {AddIcon, CartDown, CartIcon, RemoveIcon} from '../Resources/Icons';
import img from '../Resources/Images/ProductImages/Fruit4.jpg'
import {Button} from "./Button";

const Cart = ({close}, props) => {
  const [totalAmount, setTotalAmount] = useState(0); // total products
  const [amountProduct, setAmountProduct] = useState(0); // amount to each product
  const [intervalId, setIntervalId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  const [items, setItems] = useState([
   {title: 'Producto 1', price: 12000, img: img, amount: 1},
   {title: 'Producto 2', price: 15000, img: img, amount: 1},
   {title: 'Producto 3', price: 20500, img: img, amount: 1},
   {title: 'Producto 4', price: 100, img: img, amount: 1},
   {title: 'Producto 5', price: 1540, img: img, amount: 1},
   {title: 'Producto 6', price: 1003400, img: img, amount: 1},
  ]);

  const AddTotalAmount = () => {
    if (totalAmount <= 99) {
      setTotalAmount(totalAmount + 1);
    }
  };

  //  handle amount to products
  const incrementAmount = () => {
    const id = setInterval(() => {
      setAmountProduct((prevAmount) => prevAmount + 1);
    }, 65); // incrementa cada 65 ms
    setIntervalId(id);
  };
  const decrementAmount = () => {
    const id = setInterval(() => {
      setAmountProduct((prevAmount) => Math.max(0, prevAmount - 1));
    }, 65); // Decrementa cada 65 ms
    setIntervalId(id);
  };
  const stopChangingAmount = () => {
    clearInterval(intervalId);
  }; // stop in mouseleave

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }; // open modal

  // if do scroll down close modal
  useEffect(() => {
    if (close) {
      setOpenModal(false);
    }
  }, [close]);

  // close modal if do click outside

  const clickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpenModal(false);
    }
  };

  useEffect(() => {

    let waitingTime;

    if (openModal) {
      //interval to prevent onClose from being executed once at startup
      waitingTime = setInterval(() => {
        window.addEventListener('click', clickOutside);
      }, 200);
    }

    return () => {
      clearTimeout(waitingTime);
      window.removeEventListener('click', clickOutside);
    };

  }, [openModal, clickOutside]);

  return (
   <div id='CartDropdown' onClick={() => handleOpenModal()}>
     <div ref={modalRef} onClick={() => AddTotalAmount()}
      className='cart flex items-center relative bg-Primary hover:bg-transparent rounded-full border border-Primary hover:border hover:border-Secondary d duration-150 group/cart'>
       <CartIcon classIcons='text-white duration-150 cursor-pointer group-hover/cart:text-Secondary'/>
       {totalAmount > 0 && !openModal && (
        <div className='absolute top-five right-five flex items-center justify-center translate-x-1/2 -translate-y-1/2'>
              <span className='text-13 bg-white text-Primary rounded-full p-1 min-w-6 min-h-6 max-h-6 border-2 border-Gray-dark flex items-center justify-center text-center'>
                 {totalAmount <= 99 ? totalAmount : '99+'}
              </span>
        </div>
       )}
       {
         openModal ? (
          <div className={`${openModal ? 'animate-fade-in': 'animate-fade-out'} cart-products absolute p-4 rounded-lg shadow-custom w-64 -left-40 top-10 bg-white z-50 min-h-20 max-h-101 overflow-y-scroll scrollbar-thin scrollbar-thumb-scrollbar scrollbar-track-transparent`}
           onClick={(e) => e.stopPropagation()}>
            {totalAmount > 0 ? (
             <>
               <div className='top-section flex justify-between items-end text-Primary text-15 border-b border-b-gray-200 pb-1'>
                 <h3 className='total-products-title'>Productos en carrito: </h3>
                 <p className='total border border-gray-300 rounded-full p-y-0.5 px-1.5'>{totalAmount}</p>
               </div>
               <div className='list-section pt-4'>
                 {
                   items.map((item, index) => (
                    <div key={index}  className='item-product flex flex-wrap  mb-3 pb-3 border-b border-b-gray-200 last:mb-0 last:border-b-0 last:pb-0'>
                      <div className='image w-2/6'>
                        <img src={item.img} alt="image-title" className='w-full h-16 rounded-lg object-cover'/>
                      </div>
                      <div className='information w-4/6 group/info pl-2'>
                        <h5 className='title text-Primary text-13 family-oswald group-hover/info:text-Secondary group-hover/info:underline duration-150'>
                          {item.title}
                        </h5>
                        <div className='amount-price flex justify-between text-xs'>
                          <span className='price text-zinc-600'>${item.price}</span>
                          <div className='item-amount family-oswald text-Primary flex justify-between'>
                            <i onMouseLeave={() => { stopChangingAmount() }}
                             onMouseDown={decrementAmount}
                             onMouseUp={stopChangingAmount}
                             onClick={() => setTotalAmount(totalAmount - 1)}
                            >
                              <RemoveIcon classIcons='cursor-pointer text-base'/>
                            </i>
                            <span className='text-xs mx-1 max-w-12 overflow-hidden  text-ellipsis'>
                                    x{amountProduct}
                                </span>
                            <i  onMouseLeave={() => { stopChangingAmount() }}
                             onMouseDown={incrementAmount}
                             onMouseUp={stopChangingAmount}
                             onClick={() => setTotalAmount(totalAmount + 1)}
                            >
                              <AddIcon classIcons='cursor-pointer text-base'/>
                            </i>
                          </div>
                        </div>
                        <div className='btns-group flex justify-between pt-2'>
                          <Button classBtn='text-sm family-oswald pr-5' btnText>
                            Comprar
                          </Button>
                          <i title='Sacar Producto del carrito' className='flex justify-center items-center'><CartDown
                           classIcons='remove-item text-red-600 cursor-pointer hover:scale-110'/></i>
                        </div>
                      </div>
                    </div>
                   ))
                 }
               </div>
             </>
            ) : (
             <p className='text-15 text-Primary'>No has añadido productos al carrito de compras.</p>
            )}
          </div>
         ) : null
       }
     </div>
   </div>
  );
};

export { Cart };
