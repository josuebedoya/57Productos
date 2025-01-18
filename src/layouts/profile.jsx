import { useState } from 'react';
import { GuestSection } from '@/templates/parts/profile/guestSection.jsx';
import { MainSection } from '@/templates/parts/profile/mainSection.jsx';

const Profile = () => {

  const [ loged, setLoged ] = useState( false );
  const handleLoged = () => {
    setLoged( !loged );
  };

  return (
   <main>
     { loged ? (
      <MainSection/>
     ) : (
      <GuestSection isLogin={ handleLoged }/>
     ) }
   </main>
  );
};
export { Profile };