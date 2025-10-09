import { useEffect, useState } from 'react';
import Form from "@/components/form/index.tsx";
import Input from "@/components/input/fields/input/index.tsx"
import Tooltip from "@/components/tooltip/index.tsx";
import Icon from "@/components/icons/index.js";

const UserInformation = ( { userInfo } ) => {

  const [ editInfo, setEditInfo ] = useState( false );
  const [ info, setInfo ] = useState( {} );

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


  return ( info &&
   <Form nameForm='editInfoUser' withButton={ false } action={ () => console.log( 'submit' ) }>
     <div className="flex items-center justify-between gap-5">
       <div className='inputs'>
         { Object.values( info )?.map( ( value, i ) => ( <ul key={ i } className='list-none'>
           <li className='text-Primary text-md mb-2 flex'>
             <Input value={ value } disabled={ !editInfo } className='disabled:border-0'/>
           </li>
         </ul> ) ) }

       </div>
       <div className='edit'>
         { editInfo ?
          <div className='flex flex-col items-center gap-2 ml-2'>
            <span
             className='bg-red-500 rounded-md p-2 cursor-pointer hover:shadow-md shadow-red-500 hover:bg-transparent duration-300 group/btn'
             onClick={ handleEditInfo }>
                <Icon
                 name='IoMdClose'
                 className='text-white duration-200 text-lg font-[900] group-hover/btn:text-red-500'/>
            </span>
            <span
             className='bg-green-500 rounded-md p-2 cursor-pointer hover:shadow-lg shadow-green-500 hover:bg-transparent duration-300 group/btn'
             onClick={ handleEditInfo }>
                <Icon
                 name='MarkIcon'
                 className='text-white duration-200 text-lg font-[900] group-hover/btn:text-green-500'/>
            </span>
          </div>

          : <Tooltip content={ `Editar Información` } delayShow={ 400 } position='right'
                     contentClass='text-sm text-nowrap'>
            <Icon
             name='FaPencilAlt'
             className='cursor-pointer hover:text-Secondary duration-200 text-xl'
             onClick={ handleEditInfo }/>
          </Tooltip>
         }
       </div>
     </div>
   </Form>
  );
};

export { UserInformation };