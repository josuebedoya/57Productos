import { useState } from "react";
import { GuestSection } from "../Templates/Profile-parts/GuestSection";
import { MainSectionProfile } from "../Templates/Profile-parts/MainSection";
import { Divisas } from "../Components/Divisas";

const Profile = () => {

  const [ loged, setLoget ] = useState(false);
  const [ rates, setRates ] = useState({
    COP: null,
    USD: null,
    EUR: null,
    GBP: null,
    JPY: null,
  });
  const handleLoged = () => {
    setLoget(!loged);
  };

  return (
    <>
      <div className="container mx-auto px-16">
        <MainSectionProfile />
        <Divisas setRates={setRates} /> {/* Pasar la función setRates como prop */}
        {
          <div>
            <p>100 USD a COP: {rates.COP ? (10000000 * rates.COP).toFixed(2) : "N/A"}</p>
          </div>
        }
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