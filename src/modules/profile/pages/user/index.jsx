import Media from '@ui/media/index.tsx';
import { useSettings } from "@/context/settings.jsx";
import { useEffect, useState } from "react";
import defaultImg from '/assets/images/system/default-profile.png';
import { Information } from "./information.jsx";
import Icon from "@ui/icons/index.tsx";
import Modal from "@ui/modal/index.tsx";
import Tabs from '@ui/tabs/index.tsx';

const UserInfo = () => {

  const [ dropdown, setDropdown ] = useState( false );
  const { settings, emptySetting, updateSettings } = useSettings();
  const [ userInfo, setUserInfo ] = useState( {} );

  // Get user info from settings
  useEffect( () => {
    if ( settings?.user?.info ) {
      setUserInfo( settings.user.info );
    }
  }, [ settings?.user?.info ] );


  const removeUserPhoto = () => {
    emptySetting( 'user.photo' );
    setDropdown( false );
  }

  const uploadUserPhoto = ( event ) => {
    const file = event.target.files[ 0 ];
    if ( file ) {
      const reader = new FileReader();

      reader.onload = ( e ) => {
        updateSettings( 'user.photo', e.target.result ); // Upload new photo
      };

      reader.readAsDataURL( file );
    }
    // Close the dropdown after selecting a file
    setDropdown( false );
  }

  const texts = [
    {
      title: 'Información',
      iconLabel: 'FaUser',
      content: <Information userInfo={ userInfo }/>
    },
    {
      title: 'Seguridad',
      iconLabel: 'MdSecurity',
      content: 'Seguridad'
    },
    {
      title: 'Zona roja',
      iconLabel: 'FiAlertTriangle',
      content: 'Notificaciones'
    }
  ]

  return ( <div className='user-info'>
     <div className="container mx-auto px-4">
       <div className="top-section">
         <h2 className='text-Primary text-lg lg:text-xl xl:text-2xl'>Aqui podrás editar tú información</h2>
       </div>
       <div className='flex justify-between mb-4 px-3'>
         <div className='common flex-1'>
           <div className="div py-10">
             <Tabs
              classNameWrapper='p-3 pr-10 border-r border-gray-300'
              className='flex'
              classNameHeader='flex-col lg:gap-16'
              classNameItemHeader='flex flex-col items-center justify-center text-sm border border-gray-400 h-[100px] w-[100px] rotate-45 rounded-lg z-10'
              classNameItemHeaderActive='scale-[1.03] shadow-md shadow-Secondary text-Secondary z-20'
              classNameItemBody='animate-fade-in p-10'
              items={ texts.map( i => ( { label: i.title, iconLabel: i.icon, ...i } ) ) }
             />
           </div>
         </div>
         <div className='info'>
           <div className="card-user">
             <div className=' rounded-lg border border-gray-300'>
               <div className="img relative m-2">
                 <Media src={ settings?.user?.photo }
                        imageProps={ {
                          alt: settings?.user?.photo || 'User Avatar',
                          className: 'max-w-64 max-h-64 rounded-full object-cover'
                        } }
                        defaults={ defaultImg }
                 />
                 <div className="edit-photo absolute bottom-0 left-0">
                   <Modal type='dropdown' isOpen={ dropdown } onClose={ () => setDropdown( false ) }
                          classNameContainer='!p-0'>
                     <ul>
                       <label htmlFor="upload-photo"
                              className="item edit family-oswald text-md h-8 cursor-pointer px-2 flex items-center justify-center rounded-md hover:text-gray-500 hover:bg-stone-200 duration-150">
                         Cambiar
                       </label>
                       <input type='file' accept='image/*'
                              className='hidden'
                              onChange={ uploadUserPhoto }
                              placeholder={ 'Subir foto' }
                              id='upload-photo'>

                       </input>
                       { settings?.user?.photo && <li
                        className='item family-oswald text-md h-8 cursor-pointer px-2  flex items-center justify-center rounded-md hover:text-gray-500 hover:bg-stone-200'
                        onClick={ removeUserPhoto }>
                         Eliminar
                       </li> }
                     </ul>
                   </Modal>
                   <Icon name='BsCameraFill'
                         className='cursor-pointer text-2xl text-Primary hover:text-Secondary duration-200'
                         onClick={ () => setDropdown( !dropdown ) }/>
                 </div>
               </div>
             </div>
             <div className='pt-4'>
               <h5 className='family-oswald text-end'>
                 { userInfo.name }
               </h5>
               <p className='text-sm text-gray-700 text-end'>
                 { userInfo.email }
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  );
};

export {
  UserInfo
};