import { Money } from '@/templates/profile/parts/money.jsx';

const MainSection = () => {

  let amount = 10000;

  return (
   <>
     <section id='SectionProfile'>
       <div className='container mx-auto px-3'>
         <div className='section-info flex flex- justify-between'>
           <div className='user-content w-auto'>
             <h1 className='text-center'>Tu Perfil</h1>
             <p className='text-center'>@josuebedoya348</p>
           </div>
           <div className='money-content w-auto'>
             <Money />
           </div>
         </div>
       </div>
     </section>
   </>
  );
};

export { MainSection };