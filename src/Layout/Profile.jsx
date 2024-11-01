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
      <div className="container mx-auto px-16">
        <MainSectionProfile />
      </div>
      {/*{loged ? (*/}
      {/*  <MainSectionProfile />*/}
      {/*) : (*/}
      {/*  <GuestSection isLogin={handleLoged} />*/}
      {/*)}*/}
    </>
  );
};
export { Profile };