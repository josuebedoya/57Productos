import { useState, useEffect } from 'react';
import { MenuBarsIcon } from '@/resources/icons.jsx';
import { Dropdown } from "@/components/menu/dropdown.jsx";
import { Modal } from '@/components/modal.jsx';

const Menu = ( { items, classLink, horizontal, withMenuBars, typeMenuMobile, openMenu, target = '_self', hoverDropdown = true} ) => {

  const [ openMenuBars, setOpenMenuBars ] = useState( false );
  const [ isMobile, setIsMobile ] = useState( false );

  const handleResize = () => {
    if ( window.innerWidth < 1024 ) {
      setIsMobile( true )
    } else {
      setIsMobile( false )
    }
  };

  useEffect( () => {
   // execute function start
    handleResize();

    // Handle resize event
    window.addEventListener( 'resize', handleResize );

    // Clear Component
    return () => {
      window.removeEventListener( 'resize', handleResize );
    };
  }, [] );

  const handleOpenModal = () => {
    setOpenMenuBars( !openMenuBars );
    if ( openMenu ) {
      openMenu();
    }
  };

  return ( <div className='navbar menu'>

    { !isMobile ? //------------ Section Desktop ----------
     <nav className='menu-nav menu-content desktop-menu'>
       <div className={ withMenuBars ? 'hidden lg:block' : 'block' }>
         <Dropdown items={ items } classLink={ classLink } target={ target }
                   horizontal={ horizontal } hoverDropdown={ hoverDropdown }/>

       </div>
     </nav>

     : withMenuBars && (   //----------- Section Mobile  -----------
     <nav className='menu-nav menu-content mobil-menu'>
         <span className='block lg:hidden text-2xl animate-fade-in' onClick={ handleOpenModal }>
           <MenuBarsIcon classIcons='cursor-pointer'/>
         </span>
       <Modal isOpen={ openMenuBars } onClose={ handleOpenModal } type={ typeMenuMobile }>
         <div className='content-menu block lg:hidden'>
           <Dropdown items={ items } classLink={ classLink } target={ target } handleOpenModal={ handleOpenModal }
                     menuH={ horizontal }/>
         </div>
       </Modal>
     </nav>
    )}
  </div> );
};

export { Menu };