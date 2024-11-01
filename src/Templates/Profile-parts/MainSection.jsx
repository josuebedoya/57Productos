import { useState, useEffect } from "react";
import { EyeCloseIcon, EyeOpenIcon } from "../../Resources/Icons";
import { Money } from "../../Components/Money";

const MainSectionProfile = () => {

  let amount = '10000';
  const [ showMoney, setShowMoney ] = useState( true );
  const [ money, setMoney ] = useState( amount );

  useEffect( () => {
    setMoney( amount );
  }, [ amount ] );

  const hiddenAmountMoney = ( Amount ) => {
    setShowMoney( !showMoney );
    setMoney( () => '*'.repeat( Amount.toString().length ) );
  };

  return (
    <>
      <section id="SectionProfile">
        <div className='container mx-auto'>
          <div className="section-info flex flex- justify-between">
            <div className="user-content w-auto">
              <h1 className="text-center">Tu Perfil</h1>
              <p className="text-center">@josuebedoya348</p>
            </div>
            <div className="money-content w-44">
              <h3>Tu saldo:</h3>
              <div className='flex items-center gap-4'>
                <i onClick={() => hiddenAmountMoney(money)}>
                  {showMoney ? <EyeCloseIcon /> : <EyeOpenIcon />}
                </i>
                {!showMoney ? money : <Money amount={amount} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export {
  MainSectionProfile
};
