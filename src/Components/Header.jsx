import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { Button } from "./Button";
import { ProfileIcon, SearchEngineIcon } from "./Icons";
import { Cart } from './Cart';
import { Input } from './Input/Input';
import { Menu } from './Menu';

import './Header.css';

const Header = () => {
  const [displaySearchEngine, setDisplaySearchEngine] = useState(false);

  const toggleSearchEngineDisplay = () => {
    setDisplaySearchEngine(!displaySearchEngine);
  };

  const menuItems = [
    { name: 'Inicio', url: '/online-shop/public' },
    { name: 'Nosotros', url: '/nosotros' },
    { name: 'Servicios', url: '/servicios' },
    { name: 'Tienda', url: '/tienda' },
    { name: 'Contacto', url: '/contacto' },
  ];

  const atr = 'text-Primary hover:font-semibold hover:text-Secondary';

  return (
    <div className="menu-header shadow-custom-shadow bg-white py-4">
      <div className="w-full px-4 grid grid-cols-12 items-center gap-4">

        {/* Logo */}
        <div className="logo-section col-span-2 flex items-center justify-center pl-4">
          <a href='/'>
            <img src={logo} alt="Logo de la aplicación" className="h-16" />
          </a>
        </div>

        {/* List Menu */}
        <div className="list-menu-section col-span-7 flex items-center justify-end">
          <Menu items={menuItems} atr={atr} />
        </div>

        {/* Search button, cart, and profile */}
        <div className="profileSearch-section col-span-3 flex items-center justify-center gap-4 pr-4">
          <div className={`searchEngine-section ${displaySearchEngine ? 'hidden' : 'block'}`}>
            <Button
              icon={<SearchEngineIcon />}
              FuctionButton={toggleSearchEngineDisplay}
              classBtn="search-btn"
            />
          </div>
          <div className='cart-section'>
            <Cart />
          </div>
          <div className="profile-section">
            <a href="/perfil" target="_blank" className="profile-section-icon text-white bg-Primary border border-Primary rounded-full p-2 flex items-center
              hover:bg-transparent hover:text-Secondary hover:border-Secondary transition duration-150">
              <ProfileIcon />
            </a>
          </div>
        </div>

        {/* Search Engine Dropdown */}
        {displaySearchEngine && (
          <div className="flex justify-center mt-4 w-full">
            <div className="input-section w-full md:w-1/2 bg-white p-4 rounded-lg shadow-custom-shadow relative z-10">
              <div className="flex items-center space-x-4">
                <Input />
                <Button
                  icon={<SearchEngineIcon />}
                  FuctionButton={toggleSearchEngineDisplay}
                  classBtn='search-btn'
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Header };