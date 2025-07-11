import { Media } from "@/components/media.jsx";
import { useSettings } from "@/context/settings.jsx";
import { CameraIcon, CloseIcon, MarkIcon, PencilIcon } from "@/assets/icons.jsx";
import { Dropdown } from "@/components/dropdown.jsx";
import { Form } from "@/components/form.jsx";
import { useEffect, useState } from "react";
import defaultImg from '/assets/images/system/default-profile.png';
import { Input } from "@/components/input.jsx";
import { Tooltip } from "@/components/tooltip.jsx";
import { Tabs } from "@/components/tabList.jsx";

const SettingsInfo = () => {

  const [ dropdown, setDropdown ] = useState( false );
  const { settings, emptySetting, updateSettings } = useSettings();
  const [ userInfo, setUserInfo ] = useState( {} );
  const [ editInfo, setEditInfo ] = useState( {} );
  const [ activeTab, setActiveTab ] = useState( 0 );


  // Get user info from settings
  useEffect( () => {
    if ( settings?.user?.info ) {
      setUserInfo( settings.user.info );
    }
  }, [ settings?.user?.info ] );

  // Update editInfo state
  useEffect( () => {
    if ( settings?.user?.info ) {
      const editsStates = Object.keys( settings.user.info ).map( info => ( { [ info ]: false } ) )

      setEditInfo( editsStates );
    }
  }, [ settings?.user?.info ] );

  // Handle editInfo state change
  const handleEditInfo = ( key ) => {
    setEditInfo( prevState => {
      return prevState.map( ( item ) => {
        if ( item[ key ] !== undefined ) {
          return { [ key ]: !item[ key ] };
        }

        return item;
      } );
    } );
  }

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

  const inputs = [ {
    value: userInfo.name || '',
    onChange: ( e ) => updateSettings( 'user.name', e.target.value ),
    placeholder: 'Nombre',
    type: 'text',
    name: 'name',
    maxLength: 30,
    isRequired: true,
    label: 'Nombre',
    classInput: 'mb-0 border-0 border-b border-Primary',
    classLabel: 'text-Primary'
  }, {
    value: userInfo?.email || '',
    onChange: ( e ) => updateSettings( 'user.email', e.target.value ),
    placeholder: 'Correo Electrónico',
    type: 'email',
    name: 'email',
    maxLength: 50,
    isRequired: true,
    label: 'Correo Electrónico',
    classInput: 'mb-0 border-0 border-b border-Primary',
    classLabel: 'text-Primary'
  }, {
    value: userInfo?.phone || '',
    onChange: ( e ) => updateSettings( 'user.phone', e.target.value ),
    placeholder: 'Teléfono',
    type: 'tel',
    name: 'phone',
    maxLength: 15,
    isRequired: false,
    label: 'Teléfono',
    classInput: 'mb-0 border-0 border-b border-Primary',
    classLabel: 'text-Primary'
  }, {
    value: settings?.user?.password || '',
    onChange: ( e ) => updateSettings( 'user.password', e.target.value ),
    placeholder: 'Anterior Contraseña',
    type: 'password',
    name: 'password',
    maxLength: 30,
    isRequired: false,
    label: 'Anterior Contraseña',
    classInput: 'mb-0 border-0 border-b border-Primary',
    classLabel: 'text-Primary'
  }, {
    value: settings?.user?.confirmPassword || '',
    onChange: ( e ) => updateSettings( 'user.confirmPassword', e.target.value ),
    placeholder: 'Confirmar Contraseña',
    type: 'password',
    name: 'confirmPassword',
    maxLength: 30,
    isRequired: false,
    label: 'Confirmar Contraseña',
    classInput: 'mb-0 border-0 border-b border-Primary',
    classLabel: 'text-Primary'
  }, {
    value: settings?.user?.confirmPassword || '',
    onChange: ( e ) => updateSettings( 'user.confirmPassword', e.target.value ),
    placeholder: 'Confirmar Nueva Contraseña',
    type: 'password',
    name: 'confirmPassword',
    maxLength: 30,
    isRequired: false,
    label: 'Confirmar Nueva Contraseña',
    classInput: 'mb-0 border-0 border-b border-Primary',
    classLabel: 'text-Primary'
  } ];

  const texts = [
    { title: 'Información', icon: <PencilIcon/> },
    { title: 'Seguridad', icon: <PencilIcon/> },
    { title: 'Zona roja', icon: <PencilIcon/> },
  ]

  return ( <div className='user-info'>
    <div className="container mx-auto px-4">
      <div className="top-section">
        <h2 className='text-Primary text-lg lg:text-xl xl:text-2xl'>Aqui podrás editar tú información</h2>
      </div>
      <div className='flex justify-between mb-4 px-3'>
        <div className='common flex-1'>
          <div className="div">
            <div className="div">
              <Tabs>

                <div className='flex border-gray-300 p-3 pr-10 flex-col border-r'>
                  {
                    texts.map( ( tap, index ) => (
                      <Tabs.TapItem key={ index }
                                    click={ () => setActiveTab( index ) }
                                    active={ index === activeTab }
                                    tapClass='text-nowrap items-center justify-center text-sm border border-Primary h-[100px] w-[100px] rotate-45 aria-selected:bg-red-500'
                      >
                        <div className='flex flex-col items-center -rotate-45'>
                          { tap.icon }
                          { tap.title }
                        </div>
                      </Tabs.TapItem>
                     )
                    )
                  }
                </div>

                <Tabs.BodyITem bodyClass="animate-fade-in p-10" active={ activeTab === 0 }>

                  <Form nameForm='editInfoUser' inputs={ inputs } withButton={ false } className='p-0'>
                    { Object.entries( userInfo )?.map( ( [ key, value ], i ) => ( <ul key={ i } className='list-none'>
                      <li className='text-Primary text-md mb-2 flex'>
                        <Input value={ value } disabled={ !editInfo[ i ][ key ] } classInput='disabled:border-0'/>
                        { editInfo[ i ][ key ] ? <div className='flex items-center gap-2 ml-2'>
                          <CloseIcon classIcons='cursor-pointer text-red-500 hover:text-Secondary duration-200'
                                     onClick={ () => handleEditInfo( key ) }/>
                          <MarkIcon classIcons='cursor-pointer text-green-500 hover:text-Secondary duration-200'
                                    onClick={ () => handleEditInfo( key ) }/>
                        </div> : <Tooltip content={ `Editar ${ key }` } delayShow={ 400 } position='left'
                                          contentClass='text-sm text-nowrap'>
                          <PencilIcon classIcons='cursor-pointer hover:text-Secondary duration-200'
                                      onClick={ () => handleEditInfo( key ) }/>
                        </Tooltip> }
                      </li>
                    </ul> ) ) }
                  </Form>

                </Tabs.BodyITem>
                <Tabs.BodyITem bodyClass="animate-fade-in p-10" active={ activeTab === 1 }>
                  <p>Seguridad</p>
                </Tabs.BodyITem>
                <Tabs.BodyITem bodyClass="animate-fade-in p-10" active={ activeTab === 2 }>
                  Notificaciones
                </Tabs.BodyITem>
              </Tabs>
            </div>
          </div>
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
                    { settings?.user?.photo && <li
                     className='item family-oswald text-md h-8 cursor-pointer px-2  flex items-center justify-center rounded-md hover:text-gray-500 hover:bg-stone-200'
                     onClick={ removeUserPhoto }>
                      Eliminar
                    </li> }
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
  </div> );
};

export {
  SettingsInfo
};