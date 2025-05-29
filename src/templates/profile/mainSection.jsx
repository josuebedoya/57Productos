import { Money } from '@/templates/profile/parts/money.jsx';
import { getSetting } from "@/settings.js";

const MainSection = () => {
  return (
   <>
     <section id='SectionProfile'>
       <div className='container mx-auto px-3'>
         <div className='section-info flex flex- justify-between'>
           <div className='user-content w-auto'>
             <h1 className='text-center'>Tu Perfil</h1>
             <p className='text-center'>@{ getSetting( 'user.username' ) }</p>
           </div>
           <div className='money-content w-auto'>
             <Money/>
           </div>
         </div>
       </div>
     </section>
   </>
  );
};

export { MainSection };