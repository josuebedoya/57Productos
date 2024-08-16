import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { Button } from "./Button";
import { AngleBottomIcon, ProfileIcon, SearchEngineIcon } from "./Icons";
import { Input } from './Input/Input';
import { Menu } from './Menu';

const Header = () => {
  const [ displaySearchEngine, setDisplaySearchEngine ] = useState(false);

  const Display = () => {
    setDisplaySearchEngine(!displaySearchEngine);
  };

  const menuItems = [
    { name: 'Inicio', url: '/online-shop/public' },
    { name: 'Nosotros', url: '/nosotros' },
    { name: 'Servicios', url: '/servicios' },
    { name: 'Contacto', url: '/contacto' },
    { name: 'Tienda', url: '/tienda' },
  ];

  const atr = 'text-Primary hover:font-semibold';

  return (
    <div className="menu-header shadow-custom-shadow bg-white py-4">
      <div className="grid grid-cols-12 items-center">

        {/* Logo */}
        <div className="logo-section col-span-2 flex items-center pl-4">
          <img src={logo} alt="Logo de la aplicación" className="h-16" />
        </div>

        {/* List  */}
        <div className="list-menu-section col-span-8 flex items-center justify-center">
          <Menu items={menuItems} atr={atr} />
        </div>

        {/* Search button and profile */}
        <div className="profileSearch-section col-span-2 gap-3 flex items-center justify-end pr-4">
          <div className={`searchEngine-section ${displaySearchEngine ? 'button-hidden' : 'button-active'}`}>
            <Button
              icon={<SearchEngineIcon />}
              FuctionButton={Display}
            >
              Buscar
            </Button>
          </div>
          <div className="profile-section flex items-center space-x-4">
            <a href="/perfil" className="text-Primary hover:font-semibold flex items-center" target="_blank">
              <ProfileIcon />
              <AngleBottomIcon />
            </a>
          </div>
        </div>

        {/* Search Engine  */}
        <div className={`input-section col-start-3 col-span-8 w-full inline-flex justify-around gap-4
          ${displaySearchEngine ? 'input-active' : 'input-hidden'}`}>
          {displaySearchEngine && <>
            <Input />
            <Button
              icon={<SearchEngineIcon />}
              FuctionButton={Display}
            >
              Buscar
            </Button>
          </>}


        </div>
      </div>
    </div>
  );
};

export { Header };