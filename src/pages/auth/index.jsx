import { Guest } from '@/pages/auth/pages/guest.jsx';
import { Dashboard } from '@/pages/auth/pages/dashboard.jsx';
import { setStorage, getStorage } from "@/utils/storage.js";
import { useCallback, useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import { Metas } from "@/components/metas.jsx";
import { useSettings } from "@/context/settings.jsx";
import { HeaderAuth } from "@/pages/auth/components/headerAuth.jsx";

const Profile = () => {
  const [ isLogin, setIsLogin ] = useState( false )
  const { settings } = useSettings();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLogin = useCallback( () => {
    setStorage( 'login', true );
    window.location.reload();
  } ); 

  useEffect( () => {
    setIsLogin( getStorage( 'login' ) )
  }, [] );
  const isSubPage = location.pathname !== '/perfil';
  return (
   <>
     <Metas
      title={ `${ settings?.site.name } | Perfil` }
      description='Administra tu perfil, revisa tus pedidos y más.'
      type='website'/>
     <HeaderAuth/>
     <section>
       {
         !isSubPage ? (
          isLogin ? (
           // Render main profile page
           <Dashboard/>
          ) : (
           // Render guest page
           <Guest isLogin={ handleLogin }/>
          )
         ) : (
          // Render sub pages (orders, settings, etc.)
          <Outlet/>
         )
       }
     </section>
   </>
  );
};
export { Profile };