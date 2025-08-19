import { useEffect, useState } from 'react';
import { Form } from "@/components/form.jsx";
import { Input } from "@/components/input.jsx";
import { CloseIcon, MarkIcon, PencilIcon } from "@/assets/icons.jsx";
import { Tooltip } from "@/components/tooltip.jsx";
import { useSettings } from "@/context/settings.jsx";

const UserInformation = ( { userInfo } ) => {

  const [ editInfo, setEditInfo ] = useState( false );
  const [ info, setInfo ] = useState( {} );
  const { settings, updateSettings } = useSettings();

  // Update info state
  useEffect( () => {
    if ( userInfo ) {
      setInfo( userInfo );
    }
  }, [ userInfo ] );

  // Handle editInfo state change
  const handleEditInfo = () => {
    setEditInfo( !editInfo );
  }

  useEffect( () => {
     console.info( 'editInfo', editInfo );
   }
   , [ editInfo ] );

  return ( info &&
   <Form nameForm='editInfoUser' withButton={ false } action={ () => console.log( 'submit' ) }>
     <div className="flex items-center justify-between gap-5">
       <div className='inputs'>
         { Object.values( info )?.map( ( value, i ) => ( <ul key={ i } className='list-none'>
           <li className='text-Primary text-md mb-2 flex'>
             <Input value={ value } disabled={ !editInfo } classInput='disabled:border-0'/>
           </li>
         </ul> ) ) }

       </div>
       <div className='edit'>
         { editInfo ?
          <div className='flex flex-col items-center gap-2 ml-2'>
            <span
             className='bg-red-500 rounded-md p-2 cursor-pointer hover:shadow-md shadow-red-500 hover:bg-transparent duration-300 group/btn'
             onClick={ handleEditInfo }>
                          <CloseIcon
                           classIcons='text-white duration-200 text-lg font-[900] group-hover/btn:text-red-500'/>
            </span>
            <span
             className='bg-green-500 rounded-md p-2 cursor-pointer hover:shadow-lg shadow-green-500 hover:bg-transparent duration-300 group/btn'
             onClick={ handleEditInfo }>
                          <MarkIcon
                           classIcons='text-white duration-200 text-lg font-[900] group-hover/btn:text-green-500'/>
            </span>
          </div>

          : <Tooltip content={ `Editar Información` } delayShow={ 400 } position='right'
                     contentClass='text-sm text-nowrap'>
            <PencilIcon classIcons='cursor-pointer hover:text-Secondary duration-200 text-xl'
                        onClick={ handleEditInfo }/>
          </Tooltip>
         }
       </div>
     </div>
   </Form>
  );
};

export { UserInformation };