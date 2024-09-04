import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { Button } from "./Button";
import {ProfileIcon, SearchEngineIcon } from "./Icons";
import {Cart} from './Cart'
import { Input } from './Input/Input';
import { Menu } from './Menu';

import './Header.css';

const Header = () => {
  const [displaySearchEngine, setDisplaySearchEngine] = useState(false);

  const Display = () => {
    setDisplaySearchEngine(!displaySearchEngine);
  };

  const menuItems = [
    { name: 'Inicio', url: '/online-shop/public' },
    { name: 'Nosotros', url: '/nosotros' },
    { name: 'Servicios', url: '/servicios' },
    { name: 'Tienda', url: '/tienda' },
    { name: 'Contacto', url: '/contacto' },
  ];

  const atr = 'text-Primary hover:font-semibold';

  return (
    <div className="menu-header shadow-custom-shadow bg-white py-4">
      <div className="grid grid-cols-12 items-center">

        {/* Logo */}
        <div className="logo-section col-span-2 flex items-center justify-end pl-4">
          <img src={logo} alt="Logo de la aplicación" className="h-16" />
        </div>

        {/* List  */}
        <div className="list-menu-section col-span-7 flex items-center justify-center">
          <Menu items={menuItems} atr={atr} />
        </div>

        {/* Search button and profile */}
        <div className="profileSearch-section col-span-3 gap-3 flex items-center justify-center pr-4">
          <div className={`searchEngine-section ${displaySearchEngine ? 'button-hidden' : 'button-active'}`}>
            <Button
              icon={<SearchEngineIcon />}
              FuctionButton={Display}
              classBtn="search-btn"
            />
          </div>
          <div className='cart-section'>
            <Cart />
          </div>
          <div className="profile-section flex items-center space-x-7">
            <a href="/perfil" className="profile-section-icon text-white bg-Primary border border-primary rounded-full  flex items-center hover:bg-transparent
                    hover:text-Primary
                    hover:border
                    border-Primary
                    hover:font-semibold
                    duration-150
                    hover:cursor-pointer"
                     target="_blank">
              <ProfileIcon />
            </a>
          </div>
        </div>

        {/* Search Engine Dropdown  */}
        <div className={`input-section col-start-3 col-span-8 w-full inline-flex justify-around gap-4
          ${displaySearchEngine ? 'input-active' : 'input-hidden'}`}>
          {displaySearchEngine && <>
            <Input />
            <Button
              icon={<SearchEngineIcon />}
              FuctionButton={Display}
              classBtn='search-btn'
            />
          </>}


        </div>
      </div>
    </div>
  );
};

export { Header };