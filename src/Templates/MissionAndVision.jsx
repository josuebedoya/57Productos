import { useState } from "react";
import { TextCustom } from '../Components/TextCustom';
import { AngleBottomIcon, AngleRightIcon } from "../Resources/Icons";

const MissionAndVision = () => {
  const [ open, setOpen ] = useState( null );

  const content = [
    {
      title: 'misión',
      content: 'Facilitar el éxito comercial al conectar de manera efectiva a vendedores y compradores, ofreciendo soluciones personalizadas que maximicen los beneficios para los vendedores. Nos comprometemos proporcionar un servicio de intermediación transparente y eficiente, utilizando tecnología avanzada y un profundo conocimiento del mercado para asegurar que cada transacción sea beneficiosa y satisfactoria.'
    },
    {
      title: 'visión',
      content: ' Facilitar el éxito comercial al conectar de manera efectiva a vendedores y compradores, ofreciendo soluciones personalizadas que maximicen los beneficios para los vendedores. Nos comprometemos a proporcionar un servicio de intermediación transparente y eficiente, utilizando tecnología avanzada y un profundo conocimiento del mercado para asegurar que cada transacción sea beneficiosa y satisfactoria.'
    }
  ];

  const handleOpen = ( index ) => {
    setOpen( open === index ? null : index );
  };
  return ( <section id='MissionAndVision' className='w-full border-b border-b-gray-300 pb-8 tl:pb-16'>
    <div className='container mx-auto grid grid-cols-12 mt-6 tl:mt-10 px-3'>
      <div className='section-mision grid grid-cols-12 col-span-full md:col-span-6'>
        <div
         className={ `md:col-end-12 col-span-full shadow-md px-3 pt-3 pb-4 rounded-2xl ${ open !== 0 ? 'max-h-16' : null }` }>
          <button type='button' onClick={ () => handleOpen( 0 ) }
                  className='flex justify-between items-center w-full'>
            <TextCustom title={ content[ 0 ].title } lineTitle linePosition='start'
                        classTitle='textPrimary capitalize text-xl text-2xl text-shadow-black'/>
            { open === 0 ? <AngleBottomIcon/> : <AngleRightIcon/> }
          </button>
          {
           open === 0 && (
            <TextCustom classSummary='text-15 tl:text-lg text-justify mt-4 animate-fade-in'>
              { content[ 0 ].content }
            </TextCustom>
           )
          }
        </div>
      </div>
      <div className='section-vision grid grid-cols-12 col-span-full md:col-span-6'>
        <div
         className={ `md:col-start-2 col-span-full shadow-md px-3 pt-3 pb-4 rounded-2xl ${ open !== 1 ? 'max-h-16' : null }` }>
          <button type='button' onClick={ () => handleOpen( 1 ) }
                  className='flex justify-between items-center w-full'>
            <TextCustom title={ content[ 1 ].title } lineTitle linePosition='start'
                        classTitle=' textPrimary capitalize text-2xl text-xl text-shadow-black'/>
            { open === 1 ? <AngleBottomIcon/> : <AngleRightIcon/> }
          </button>
          {
           open === 1 && (
            <TextCustom classSummary='text-15 tl:text-lg text-justify mt-4 animate-fade-in'>
              { content[ 1 ].content }
            </TextCustom>
           )
          }
        </div>
      </div>
    </div>
  </section> )
}

export { MissionAndVision };