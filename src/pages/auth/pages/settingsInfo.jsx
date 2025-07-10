import { Media } from "@/components/media.jsx";
import { useSettings } from "@/context/settings.jsx";
import { CameraIcon } from "@/assets/icons.jsx";
import { Dropdown } from "@/components/dropdown.jsx";
import { useEffect, useState } from "react";
import defaultImg from '/assets/images/system/default-profile.png';

const SettingsInfo = () => {

  const [ dropdown, setDropdown ] = useState( false );
  const { settings, emptySetting, updateSettings } = useSettings();

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

  return (
   <div className='user-info'>
     <div className='flex justify-between items-center mb-4'>
       <div className='common'>

       </div>
       <div className='info'>
         <div className="card-user">
           <div className="img relative">
             <Media src={ settings?.user?.photo || defaultImg }
                    alt={ settings?.user?.photo || 'User Avatar' }
                    defaultSrc='/images/system/default-profile.png'
                    classFile='max-w-64 max-h-64 rounded-full object-cover'
             />
             <div className="edit-photo absolute bottom-0 left-0">
               <Dropdown show={ dropdown } closed={ () => setDropdown( false ) } classDropdown='bg-white p-0'
                         position='left'>
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
                   { settings?.user?.photo &&
                    <li
                     className='item family-oswald text-md h-8 cursor-pointer px-2  flex items-center justify-center rounded-md hover:text-gray-500 hover:bg-stone-200'
                     onClick={ removeUserPhoto }>
                      Eliminar
                    </li>
                   }
                 </ul>
               </Dropdown>
               <CameraIcon classIcons='cursor-pointer text-2xl text-Primary hover:text-Secondary duration-200'
                           onClick={ () => setDropdown( !dropdown ) }/>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  );
};

export { SettingsInfo };