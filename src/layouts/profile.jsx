import { useState } from 'react';
import { GuestSection } from '@/templates/profile/guestSection.jsx';
import { MainSection } from '@/templates/profile/mainSection.jsx';

const Profile = () => {

  const [ loged, setLoged ] = useState( false );
  const handleLoged = () => {
    setLoged( !loged );
  };

  return (
   <section>
     { loged ? (
      <MainSection/>
     ) : (
      <GuestSection isLogin={ handleLoged }/>
     ) }
   </section>
  );
};
export { Profile };