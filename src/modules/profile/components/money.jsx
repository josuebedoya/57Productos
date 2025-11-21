import { useState, useEffect } from 'react';
import { useFormatMoney } from "@/context/formatMoney.jsx";
import Input from '@ui/input/fields/input/index.tsx';
import { getSetting } from "@/settings.js";
import { useSettings } from "@/context/settings.jsx";
import Icon from "@ui/icons/index.tsx";

const Money = () => {
  const amount = getSetting( 'user.money' );
  const [ showMoney, setShowMoney ] = useState( true );
  const [ openModal, setOpenModal ] = useState( false );
  const [ openModalAddRate, setOpenModalAddRate ] = useState( false );
  const { rates, ratesToUse, AddNewRate, setFormat, format, formatMoney } = useFormatMoney();
  const [ newRate, setNewRate ] = useState( '' );
  const [ optionsInvalid, setOptionsInvalid ] = useState( [] );
  const [ optionsValid, setOptionsValid ] = useState( [] );
  const [ amountCharacters, setAmountCharacters ] = useState( '*' );
  const { updateSettings } = useSettings();

  //  Separated valid & invalid options
  useEffect( () => {
    if ( rates && Object.keys( rates ).length > 0 ) {
      const validOptions = [];
      const invalidOptions = [];

      ratesToUse.forEach( rate => {
        const hasMatch = Object.keys( rates ).some( key => key.endsWith( rate ) );

        if ( hasMatch ) {
          validOptions.push( rate );
        } else {
          invalidOptions.push( rate );
        }
      } );

      setOptionsValid( validOptions );
      setOptionsInvalid( invalidOptions );
    } else {
      setOptionsValid( [ 'No disponible' ] );
    }
  }, [ ratesToUse, rates ] );

  // Hidden money, replace for ***
  useEffect( () => {
    setAmountCharacters( () => '*'.repeat( amount.toString().length <= 2 ? 3 : amount.toString().length ) );
  }, [ amount ] );

  /* Add new rate to select */
  const handleOnChageRate = ( { value } ) => {
    setNewRate( value );
  }

  // Handle add new rate
  const handleAddRate = () => {
    AddNewRate( newRate.toUpperCase() );
    setNewRate( '' );
    setOpenModalAddRate( !openModalAddRate );
  };

  // Set format
  const setFormatRate = ( e ) => {
    setFormat( e.target.value );
    updateSettings( 'site.rateExchange', e.target.value );
  }

  return (
   <div className='amountMoney relative'>
     <div className='top-section flex justify-between mb-2'>
       <h3>Tu saldo:</h3>
       <Icon name='MdOutlineSettings'
             className='hover:animate-spin hover:text-Secondary cursor-pointer'
             onClick={ () => setOpenModalAddRate( !openModalAddRate ) }/>
     </div>
     <div className='flex items-center gap-2'>
       <i onClick={ () => setShowMoney( !showMoney ) }>
         { showMoney ? <Icon name='PiEyeSlashDuotone' className='close'/> : <Icon name='FaRegEye' className='open'/> }
       </i>

       { !showMoney ? amountCharacters : (
        <>
          <div className=' flex justify-between gap-1 '>
              <span className='money family-oswald w-auto min-w-max'>
                { formatMoney( amount ) }
              </span>
            <select value={ format } onChange={ ( e ) => setFormatRate( e ) } id='select-format'>
              { optionsValid?.map( option => (
               <option key={ option } value={ option } className={ `option ${ option }` }>
                 { option }
               </option>
              ) ) }
            </select>
          </div>
          {
           optionsInvalid?.length > 0 && (
            openModal ? (
             <div
              className='modal-invalid-divisas absolute bg-white rounded-xl py-6 px-4 w-48 shadow-custom -left-9 -top-1'>
               {
                optionsValid && (
                 <>
                   <div className='modal-top flex justify-between gap-4'>
                     <h2 className='title text-xs tracking-wider mb-2'>DIVISAS INVALIDAS:</h2>
                     <i onClick={ () => setOpenModal( !openModal ) }>
                       <Icon name='IoMdClose' className='cursor-pointer'/>
                     </i>
                   </div>

                   <ol className='invalid-divisa'>
                     {
                       optionsInvalid.map( ( invalid, i ) => (
                        <ul key={ i } className='flex gap-2'>
                          <li className='rate text-red-600 font-semibold marker:underline text-xs'>
                            { invalid }
                          </li>
                          <Icon name='FaPencilAlt' className='cursor-pointer text-xs text-Primary'/>
                        </ul>
                       ) )
                     }
                   </ol>
                 </>
                ) }
             </div>
            ) : (
             <i onClick={ () => setOpenModal( !openModal ) }
                title='Algunas divisas ingresadas no son válidas. Haz clic para ver más detalles.'>
               <Icon name='IoAlert'
                     className='icon-alert cursor-pointer text-red-700 font-bold text-xl'
                     versionFamily={ 5 }/>
             </i>
            )
           )
          }{ openModalAddRate &&
         <div className='input-add-rate absolute bg-white rounded-xl py-6 px-4 w-48 shadow-custom -left-9 -top-1'>
           <p className='text-sm family-oswald mb-2'>
             Añadir nueva Divisa
           </p>
           <div className='flex'>
             <Input type='text' value={ newRate } onChange={ handleOnChageRate }
                    className='input-rate rounded-r-none h-6'/>
             <span onClick={ handleAddRate }
                   className='add-rate bg-Primary text-white rounded-s-lg px-2 h-[24,7px] border border-Primary border-l-0 cursor-pointer hover:bg-transparent hover:text-Primary duration-200'
                   dir='rtl'>+</span>
           </div>
         </div>
        }
        </> ) }
     </div>
   </div>
  );
};

export { Money };