import Tooltip from "@/components/tooltip/index.tsx";
import Media from '@/components/media/index.tsx';
import { Money } from "@/pages/auth/components/money.jsx";
import { useSettings } from "@/context/settings.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { clearStorage } from "@/utils/storage.js";
import { Path_page as path } from "@/routes.jsx";
import { WarningModal } from "@/components/warningModal.jsx";
import Icon from "@/components/icons/index.js";

const HeaderAuth = () => {
  const navigate = useNavigate();
  const [ error, setError ] = useState( null );
  const { settings } = useSettings();


  const logout = async () => {
    try {
      clearStorage();
      navigate( path.HOME );
      window.location.reload();
    } catch ( error ) {

      console.error( "Error during logout:", error );
      setError( "Hubo un error al cerrar sesión. Por favor, inténtalo de nuevo más tarde." );
    }
  };


  if ( error ) {
    return (
     <WarningModal className='error-message' type='error'
                   onClose={ () => setError( null ) }
                   title='Error al cerrar sesión'>
       <p>{ error }</p>
     </WarningModal>
    );
  }

  return (
   <header className='bg-white shadow-md sticky top-0 z-modal'>
     <div className='border-b border-gray-300'>
       <div className='container mx-auto px-3 pt-5 pb-2'>
         <div className='section-info flex justify-between pb-3'>
           <div className='user-content w-auto flex items-center justify-between'>
             <div className='logout mr-4 flex flex-col gap-2'>
               <Tooltip content='Cerrar sesión'
                        position='right'
                        delayShow='500'
                        spaceX={ 4 }
                        contentClass='text-nowrap text-sm family-oswald'
               >
                 <Icon name='IoMdExit' className='cursor-pointer text-xl rotate-180' onClick={ logout }/>
               </Tooltip>
               <Tooltip content='Ajustes'
                        position='right'
                        delayShow='500'
                        spaceX={ 4 }
                        contentClass='text-nowrap text-sm family-oswald'
               >
                 <Icon name='MdOutlineSettings'
                       className='cursor-pointer text-xl  hover:animate-spin hover:text-Secondary'
                       onClick={ () => navigate( path.AUTH.EDIT_INFO ) }/>
               </Tooltip>
             </div>
             <div className='user-info border-l-2 border-gray-300 pl-4 flex items-center'>
               <Media src={ settings?.user?.photo }
                      imageProps={ {
                        alt: settings?.user?.photo || 'User Avatar',
                        className: 'w-14 h-14 rounded-full object-cover mr-3'
                      } }
                      defaults='/images/system/default-profile.png'
               />
               <div>
                 <h3 className='text-lg font-bold family-oswald text-gray-800'>
                   { settings?.user?.info?.name || 'Usuario' }
                 </h3>
                 <p className='text-center'>@{ settings?.user?.username }</p>
               </div>
             </div>
           </div>
           <div className='money-content w-auto'>
             <Money/>
           </div>
         </div>
       </div>
     </div>
   </header>
  );
};

export { HeaderAuth };