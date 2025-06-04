import { GuestSection } from '@/templates/profile/guestSection.jsx';
import { MainSection } from '@/templates/profile/mainSection.jsx';
import { setStorage, getStorage } from "@/utils/storage.js";
import { useCallback, useEffect, useState } from "react";

const Profile = () => {
  const [ isLogin, setIsLogin ] = useState( false )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLogin = useCallback( () => {
    setStorage( 'login', true );
    window.location.reload();
  } );

  useEffect( () => {
    setIsLogin( getStorage( 'login' ) )
  }, [] );

  return (
   <section>
     { isLogin ? (
      <MainSection/>
     ) : (
      <GuestSection isLogin={ handleLogin }/>
     ) }
   </section>
  );
};
export { Profile };