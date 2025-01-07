import { useState } from "react";
import { GuestSection } from "../Templates/Profile-parts/GuestSection";
import { MainSectionProfile } from "../Templates/Profile-parts/MainSection";

const Profile = () => {

  const [ loged, setLoget ] = useState(false);
  const handleLoged = () => {
    setLoget(!loged);
  };

  return (
    <>
      {loged ? (
        <MainSectionProfile />
      ) : (
        <GuestSection isLogin={handleLoged} />
      )}
    </>
  );
};
export { Profile };