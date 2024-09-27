import React, { useState } from 'react';

import logo from '../Images/logo.png';
import { Button } from './Button';
import { ProfileIcon, SearchEngineIcon } from './Icons';
import { Cart } from './Cart';
import { Input } from './Input/Input';
import { Menu } from './Menu';
import { Path_page } from '../Routes';

import './Header.css';

const Header = () => {
  const [ displaySearchEngine, setDisplaySearchEngine ] = useState(false);
  const [ valueSearch, setValueSearch ] = useState('');
  const ItemsProduct = {
    name: 'Colores',
    id: 1,
    amount: 223,
    price: 23.000,
    state: true,
    wieght: 100
  };

  const SearchEngineDisplay = () => {
    setDisplaySearchEngine(!displaySearchEngine);
  };

  const SearchEngineClose = () => {
    setDisplaySearchEngine(!displaySearchEngine);
    let nameProduct = ItemsProduct.name.toLocaleLowerCase();
    let valueInput = valueSearch.toLocaleLowerCase();

    console.log(valueInput);

    if (valueSearch) {
      if (valueInput == nameProduct && ItemsProduct.state == true) {


        alert(`el producto '${valueSearch}' aún está dispible, quedan ${ItemsProduct.amount}`);
        setValueSearch('');
      } else {
        alert(`No se encontró '${valueSearch}', revisa o intenta más tarde`);
      }
    } else {
      alert('Ingresa un nombre para poder realizar la busqueda');
    }
  };

  const onChangeValueSearch = (e) => {
    setValueSearch(e);
  }


  const menuItems = [
    { name: 'Inicio', url: Path_page.HOME },
    { name: 'Nosotros', url: Path_page.US },
    { name: 'Servicios', url: Path_page.SERVICES },
    { name: 'Tienda', url: Path_page.STORE },
    { name: 'Contacto', url: Path_page.CONTACT },
  ];

  const atr = 'text-Primary hover:font-semibold hover:text-Secondary';

  return (
    <header>
      <div id='menu-header' className=' shadow-custom-shadow bg-white py-4'>
        <div className='w-full px-4 grid grid-cols-12 items-center gap-4'>

          {/* Logo */}
          <div className='logo-section col-span-2 flex items-center justify-center pl-4'>
            <a href='/'>
              <img src={logo} alt='Logo de la aplicación' className='h-16' />
            </a>
          </div>

          {/* List Menu */}
          <div className='list-menu-section col-span-7 flex items-center justify-end'>
            <Menu items={menuItems} atr={atr} />
          </div>

          {/* Search button, cart, and profile */}
          <div className='profileSearch-section col-span-3 flex items-center justify-center gap-4 pr-4'>
            <div className={`search-btn-section duration-500 ${displaySearchEngine ? 'button-active' : ''}`}>
              <Button
                icon={<SearchEngineIcon />}
                onClick={SearchEngineDisplay}
                classBtn='search-btn'
              />
            </div>
            <div className='cart-section'>
              <Cart />
            </div>
            <div className='profile-section'>
              <a href={Path_page.PROFILE} target='_blank' className='profile-section-icon text-white bg-Primary border border-Primary rounded-full p-2 flex items-center
              hover:bg-transparent hover:text-Secondary hover:border-Secondary transition duration-150'>
                <ProfileIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Search Engine Dropdown */}
        <div className='search-engine-section flex justify-center w-full'>
          {displaySearchEngine && (
            <div className={`input-section-btn duration-500 ${displaySearchEngine ? 'active' : ''} w-full md:w-1/2 bg-white p-4 rounded-lg shadow-bottom-x absolute z-10`}>
              <div className='flex items-center space-x-4'>
                <Input value={valueSearch} onChange={onChangeValueSearch} />
                <Button
                  icon={<SearchEngineIcon />}
                  onClick={SearchEngineDisplay}
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