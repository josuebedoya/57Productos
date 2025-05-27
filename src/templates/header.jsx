import { useState, useEffect } from 'react';
import { ProfileIcon, AngleBottomIcon } from '@/resources/icons';
import logoBlack from '/logo-black.png';
import logoWhite from '/logo-white.png';
import { Search } from "@/components/search.jsx";
import { Cart } from '@/components/cart.jsx';
import { Menu } from '@/components/menu/menu.jsx';
import { Path_page } from '@/routes';
import { Link } from "react-router-dom";

const menuItems = [
  { name: 'Inicio', url: Path_page.HOME },
  { name: 'Nosotros', url: Path_page.US },
  { name: 'Servicios', url: Path_page.SERVICES, items: [{name: 'Servicio 1', url: Path_page.SERVICES + 'Servicio-1'}] },
  { name: 'Tienda', url: Path_page.STORE },
  { name: 'Contacto', url: Path_page.CONTACT },
];

const classLink = 'text-Primary hover:shadow-Secondary hover:text-Secondary family-oswald text-lg tracking-wide px-4';

const Header = () => {
  const [ displaySearchEngine, setDisplaySearchEngine ] = useState( false );
  const [ isOpenMenu, setIsOpenMenu ] = useState( false );
  const [ showIcons, setShowIcons ] = useState( false );
  const [ modalCart, setModalCart ] = useState( false );


  const handldeOpenModal = () => {
    setIsOpenMenu( !isOpenMenu );
  };

  const handleShowIconsMobile = () => {
    setShowIcons( !showIcons );
  };

  useEffect( () => {
    if ( !isOpenMenu ) {

      let lastPosition = 0; // starting position
      const header = document.getElementsByTagName( 'header' )[ 0 ];

      const animationHeader = () => {
        const isScrolling = window.pageYOffset || document.documentElement.scrollTop;

        if ( isScrolling > lastPosition && lastPosition > header.offsetHeight ) { // scroll down
          header.classList.remove( 'up' );
          header.classList.add( 'down' );

          if ( displaySearchEngine === true ) {
            setDisplaySearchEngine( !displaySearchEngine );
          }

          if ( showIcons === false ) { // Hidde icons from menu
            setShowIcons( !showIcons );
          }
          setModalCart( true );

        } else if ( isScrolling < lastPosition && lastPosition > header.offsetHeight ) {
          header.classList.remove( 'down' );
          header.classList.add( 'up' );   // scroll upp
          setModalCart( false );
        }

        lastPosition = isScrolling <= 0 ? 0 : isScrolling; //  prevent it from being less than zero
      };

      window.addEventListener( 'scroll', animationHeader ); // active function

      return () => {
        window.removeEventListener( 'scroll', animationHeader ); // remove fuction
      };
    }
  }, [ isOpenMenu, displaySearchEngine, showIcons ] );

  return (
   <header>
     <div id='menu-header' className=' shadow-custom-shadow bg-white  py-2 lg:py-4 mn:mb-4 w-full duration-500'>
       <div className='w-full px-4 grid grid-cols-12 items-center justify-center md:justify-normal md:gap-4 relative'>

         {/* Logo */ }
         <div
          className='logo-section col-span-10  sm:col-span-7 md:col-span-8 lg:col-span-2  flex items-center justify-start lg:justify-center sm:pl-4 order-1'>
           <Link to='/'>
             <img src={ logoBlack } alt='Logo de la aplicación' className='w-48 max-w-48 black'/>
             <img src={ logoWhite } alt='Logo de la aplicación' className='w-48  max-w-48 white hidden'/>
           </Link>
         </div>

         {/* List Menu */ }
         <div
          className='list-menu-section px-4 lg:pr-0 col-span-2 sm:col-span-1 lg:col-span-7 flex items-center justify-end order-2 sm:order-3 lg:order-2'>
           <Menu items={ menuItems } classLink={ classLink } horizontal withMenuBars openMenu={ handldeOpenModal } typeMenuMobile={ 1 }/>
         </div>

         {/* Search button, cart, and profile */ }
         <div
          className={ `profileSearch-section ${ showIcons ? 'mn:-translate-y-12 mn:delay-100' : 'mn:translate-y-22 mn:pt-3 mn:pb-4' } mn:-z-10 mn:bg-white mn:absolute mn:duration-700 w-full sm:w-auto sm:col-span-4 md:col-span-3 flex items-center justify-center sm:justify-end lg:justify-center gap-4 lg:pr-4 order-3 sm:order-2 lg:order-3` }>
           <div className='search-section'>
             <Search/>
           </div>
           <div className='cart-section'>
             <Cart close={ modalCart }/>
           </div>
           <div className='profile-section'>
             <Link to={ Path_page.PROFILE } target='_self' className='profile-section-icon text-white bg-Primary border border-Primary rounded-full p-2 flex items-center
              hover:bg-transparent hover:text-Secondary hover:border-Secondary transition duration-150'>
               <ProfileIcon/>
             </Link>
           </div>
         </div>
       </div>
       {/* Icon Dropdown icons Mobile */ }
       <span
        className={ `${ showIcons ? 'mn:-translate-y-0 mn:delay-0 mn:h-5' : 'mn:translate-y-14 mn:delay-300 mn:h-8' } mn:absolute  duration-500 sm:hidden mx-auto w-full flex justify-center items-center bg-white` }
        onClick={ handleShowIconsMobile }> < AngleBottomIcon/></span>
     </div>
   </header>
  );
};

export { Header };