import { Money } from "../Parts/Money";

const MainSectionProfile = () => {

  let amount = 10000;

  return (
    <>
      <section id="SectionProfile">
        <div className='container mx-auto px-3'>
          <div className="section-info flex flex- justify-between">
            <div className="user-content w-auto">
              <h1 className="text-center">Tu Perfil</h1>
              <p className="text-center">@josuebedoya348</p>
            </div>
            <div className="money-content w-44">
              <Money amount={amount} />
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
