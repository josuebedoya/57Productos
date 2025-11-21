import { Guest } from '@/modules/profile/pages/guest.jsx';
import { Dashboard } from '@/modules/profile/pages/dashboard.jsx';
import { setStorage, getStorage } from "@/utils/storage.js";
import { useCallback, useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import { Metas } from "@ui/metas/metas.jsx";
import { useSettings } from "@/context/settings.jsx";
import { HeaderAuth } from "@/modules/profile/components/headerAuth.jsx";
import { Path_page } from "@/routes.ts";

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

  const isSubPage = location.pathname !== Path_page.PROFILE;
  const isEditInfo = location.pathname.split( '/' ).slice( -1 )[ 0 ] === Path_page.EDIT_INFO;

  return (
   <>
     <Metas
      title={ `${ settings?.site.name } | Perfil` }
      description='Administra tu perfil, revisa tus pedidos y más.'
      type='website'/>
     { !isEditInfo && <HeaderAuth/> }
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