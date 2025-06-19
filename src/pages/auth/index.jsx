import { GuestSection } from '@/pages/auth/templates/guestSection.jsx';
import { MainSection } from '@/pages/auth/templates/mainSection.jsx';
import { setStorage, getStorage } from "@/utils/storage.js";
import { useCallback, useEffect, useState } from "react";
import { Metas } from "@/components/metas.jsx";
import { useSettings } from "@/context/settings.jsx";

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

  return (
   <>
     <Metas
      title={ `${ settings?.site.name } | Perfil` }
      description='Administra tu perfil, revisa tus pedidos y más.'
      type='website'/>
     <section>
       { isLogin ? (
        <MainSection/>
       ) : (
        <GuestSection isLogin={ handleLogin }/>
       ) }
     </section>
   </>
  );
};
export { Profile };