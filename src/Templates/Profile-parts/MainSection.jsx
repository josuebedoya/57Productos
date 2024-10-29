import { useState, useEffect } from "react";
import { EyeClose, EyeOpen } from "../../Resources/Icons";

const MainSectionProfile = () => {

  let amount = '100034.345';
  const [ showMoney, setShowMoney ] = useState( true );
  const [ money, setMoney ] = useState( amount );
  const data = () => {
    return Intl.NumberFormat( 'es-ES', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    } ).format( money )
  };

  useEffect( () => {
    setMoney( amount );
  }, [ amount ] );

  const hiddenAmountMoney = ( Amount ) => {
    setShowMoney( !showMoney );
    setMoney( () => '*'.repeat( Amount.length ) );
  };

  return (
    <>
      <section id="SectionProfile">
        <div className='container mx-auto'>
          <div className="section-info flex justify-between">
            <div className="user-content">
              <h1 className="text-center">Tu Perfil</h1>
              <p className="text-center">@josuebedoya348</p>
            </div>
            <div>
              <div className='flex justify-center'>
                <h3>Tu saldo</h3>
                <i onClick={ () => hiddenAmountMoney( money ) }>
                  { showMoney ? <EyeClose/> : <EyeOpen/> }
                </i>
              </div>
              <p className='amountMoney'>
                { !showMoney ? money : data() }
                {/*${ !showMoney ? money : amount.slice(0, 10) + '...'}*/ }
              </p>
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
