import React, { useState, useEffect } from 'react';

import logo from '../Resources/Images/logo.png';
import { Button } from '../Components/Button';
import { ProfileIcon, SearchEngineIcon, AngleBottomIcon } from '../Resources/Icons';
import { Cart } from '../Components/Cart';
import { Input } from '../Components/Input';
import { Menu } from '../Components/Menu';
import { Path_page } from '../Routes';

const ItemsProduct = {
  name: 'Colores',
  id: 1,
  amount: 223,
  price: 23.000,
  state: true,
  wieght: 100
};

const menuItems = [
  { name: 'Inicio', url: Path_page.HOME },
  { name: 'Nosotros', url: Path_page.US },
  { name: 'Servicios', url: Path_page.SERVICES },
  { name: 'Tienda', url: Path_page.STORE },
  { name: 'Contacto', url: Path_page.CONTACT },
];

const Header = () => {
  const [displaySearchEngine, setDisplaySearchEngine] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  // Open  Search engine
  const SearchEngineDisplay = () => {
    setDisplaySearchEngine(!displaySearchEngine);

    if (showIcons === false) { // Hidde icons from menu
      setShowIcons(!showIcons);
    }
  };

  const SearchEngineClose = () => {

    let nameProduct = ItemsProduct.name.toLocaleLowerCase();
    let valueInput = valueSearch.toLocaleLowerCase();


    if (valueSearch) {
      if (valueInput === nameProduct && ItemsProduct.state === true) {
        alert(`el producto '${valueSearch}' aún está dispible, quedan ${ItemsProduct.amount}`);
        setValueSearch('');
        setDisplaySearchEngine(!displaySearchEngine);
      } else {
        alert(`No se encontró '${valueSearch}', revisa o intenta más tarde`);
      }
    } else {
      alert('Ingresa un nombre para poder realizar la busqueda');
    }
  };

  const onChangeValueSearch = ({ value }) => {
    setValueSearch(value);
  };

  const atr = 'text-Primary hover:shadow-Secondary hover:text-Secondary family-oswald';

  const handldeOpenModal = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleShowIconsMobile = () => {
    console.log(showIcons);
    setShowIcons(!showIcons);
  };

  useEffect(() => {
    if (!isOpenMenu) {

      let lastPosition = 0; // starting position
      const header = document.getElementsByTagName('header')[ 0 ];

      const animationHeader = () => {
        const isScrolling = window.pageYOffset || document.documentElement.scrollTop;

        if (isScrolling > lastPosition && lastPosition > header.offsetHeight) { // scroll down
          header.classList.remove('up');
          header.classList.add('down');

          if (displaySearchEngine === true) {
            setDisplaySearchEngine(!displaySearchEngine);
          }

          if (showIcons === false) { // Hidde icons from menu
            setShowIcons(!showIcons);
          }

        } else if (isScrolling < lastPosition && lastPosition > header.offsetHeight) {
          header.classList.remove('down');
          header.classList.add('up');   // scroll upp
        }

        lastPosition = isScrolling <= 0 ? 0 : isScrolling; //  prevent it from being less than zero
      };

      window.addEventListener('scroll', animationHeader); // active function

      return () => {
        window.removeEventListener('scroll', animationHeader); // remove fuction
      };
    };
  }, [ isOpenMenu ]);

  return (
    <header>
      <div id='menu-header' className=' shadow-custom-shadow bg-white  py-2 lg:py-4 mn:mb-4'>
        <div className='w-full px-4 grid grid-cols-12 items-center justify-center md:justify-normal md:gap-4 relative'>

          {/* Logo */}
          <div className='logo-section col-span-10  sm:col-span-7 md:col-span-8 lg:col-span-3  flex items-center justify-start lg:justify-center sm:pl-4 order-1'>
            <a href='/'>
              <img src={logo} alt='Logo de la aplicación' className='w-60 max-w-60' />
            </a>
          </div>

          {/* List Menu */}
          <div className='list-menu-section px-4 lg:pr-0 col-span-2 sm:col-span-1 lg:col-span-6 flex items-center justify-end order-2 sm:order-3 lg:order-2'>
            <Menu items={menuItems} atr={atr} menuH withMenuBars openMenu={handldeOpenModal} />
          </div>

          {/* Search button, cart, and profile */}
          <div className={`profileSearch-section ${showIcons ? 'mn:-translate-y-12 mn:delay-100' : 'mn:translate-y-22 mn:pt-3 mn:pb-4'} mn:-z-10 mn:bg-white mn:absolute mn:duration-700 w-full sm:w-auto sm:col-span-4 md:col-span-3 flex items-center justify-center sm:justify-end lg:justify-center gap-4 lg:pr-4 order-3 sm:order-2 lg:order-3`}>
            <div className={`search-btn-section duration-500 ${displaySearchEngine ? 'button-active' : ''}`}>
              <Button
                icon={<SearchEngineIcon />}
                classBtn='search-btn'
                onClick={SearchEngineDisplay}
              />
            </div>
            <div className='cart-section'>
              <Cart />
            </div>
            <div className='profile-section'>
              <a href={Path_page.PROFILE} target='_self' className='profile-section-icon text-white bg-Primary border border-Primary rounded-full p-2 flex items-center
              hover:bg-transparent hover:text-Secondary hover:border-Secondary transition duration-150'>
                <ProfileIcon />
              </a>
            </div>
          </div>
        </div>
        {/* Icon Dropdown icons Mobile */}
        <span className={`${showIcons ? 'mn:-translate-y-0 mn:delay-0 mn:h-5' : 'mn:translate-y-14 mn:delay-300 mn:h-8'} mn:absolute  duration-500 sm:hidden mx-auto w-full flex justify-center items-center bg-white`} onClick={handleShowIconsMobile}> < AngleBottomIcon /></span>

        {/* Search Engine Dropdown */}
        <div className='search-engine-section flex justify-center w-full z-50'>
          {displaySearchEngine && (
            <div className={`input-section-btn duration-500 ${displaySearchEngine ? 'active' : ''} w-full md:w-1/2 bg-white p-4 rounded-lg shadow-bottom-x absolute z-10`}>
              <div className='flex items-center space-x-4'>
                <Input type='text' maxLength={50} value={valueSearch} onChange={onChangeValueSearch} />
                <Button
                  icon={<SearchEngineIcon />}
                  onClick={SearchEngineClose}
                  classBtn='search-btn'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };