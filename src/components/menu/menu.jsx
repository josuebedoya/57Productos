import { useState } from 'react';
import { MenuBarsIcon } from '@/resources/icons.jsx';
import { Dropdown } from "@/components/menu/dropdown.jsx";
import { Modal } from '@/components/modal.jsx';

const Menu = ( { items, classLink, horizontal, withMenuBars, openMenu, target = '_self', hoverDropdown = true} ) => {

  const [ openMenuBars, setOpenMenuBars ] = useState( false );

  const handleOpenModal = () => {
    setOpenMenuBars( !openMenuBars );
    if ( openMenu ) {
      openMenu();
    }
  };

  return (
   <div className='navbar menu'>

     {/* ------------ Section Desktop -----------*/}
      <nav className='menu-nav menu-content desktop-menu'>
        <div className={ withMenuBars ? 'hidden lg:block' : 'block' }>
          <Dropdown items={ items } classLink={ classLink } target={ target } handleOpenModal={ handleOpenModal }
                    horizontal={ horizontal } hoverDropdown={ hoverDropdown }/>

        </div>
        {
          // Icon
         withMenuBars && (
          <span className='block lg:hidden text-2xl animate-fade-in' onClick={ handleOpenModal }>
            <MenuBarsIcon classIcons='cursor-pointer'/>
          </span>
         ) }
      </nav>

      { withMenuBars && openMenuBars && (

      //----------- Section Mobile  -----------
      <nav className='menu-nav menu-content mobil-menu'>
        <Modal isOpen={ openMenuBars } onClose={ handleOpenModal }>
          <div className='content-menu block lg:hidden'>
            <Dropdown items={ items } classLink={ classLink } target={ target } handleOpenModal={ handleOpenModal }
                      menuH={ horizontal }/>
          </div>
        </Modal>
      </nav>
     )}
   </div>
  );
};

export { Menu };