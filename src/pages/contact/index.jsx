import { useSettings } from '@/context/settings.jsx';
import { Metas } from '@/components/metas/metas.jsx';
import Modal from "@/components/modal/index.tsx";
import { useState } from "react";
import Code from "@/components/code/index.js";

const Contact = () => {
  const { settings } = useSettings();

  const [ open, setOpen ] = useState( false );

  return (
   <div className='flex justify-center flex-col items-center my-10'>
     <Metas
      title={ `${ settings?.site.name } | Contacto` }
      description='Contactanos, y dejános tus datos, te contactaremos lo más rápido posible.'
      type='website'/>
     <section className='container mx-auto'>
       <h1>Asesorate, deja tus datos y te contactaremos los más rápido posible</h1>
       <Modal
        type='popup'
        onClose={ () => setOpen( false ) }
        isOpen={ open }
        position='bottom'
        childrenHeader={ <p>HOLAAAAAAAAAAA</p> }
        footerClassName='text-acenter'
        footerSticky
        className='text-center rounded-3xl'
        classNameContainer='rounded-3xl p-0'
        headerSticky
        actionButtonFooter={ () => setOpen( false ) }
        withFooter
        onClickActionButtonFooter={ () => alert( 'click' ) }
        labelCloseButtonHeader={ 'cerrar' }
        withHeader
        withBackground
        titleHeader={ 'Contacto' }
        titleFooter={ 'Contacto Footer' }
        subtitleHeader={ 'Contacto' }
        subtitleFooter={ 'Contacto' }
        propsCloseButtonHeader={ {
          variant: 'outline',
        } }
        propsCloseButtonFooter={ {
          variant: 'flat'
        } }
        propsActionButtonFooter={{
          color: 'secondary',
        }}
        onClickCloseButtonHeader={ () => alert('click Header') }
        onClickCloseButtonFooter={ () => alert('click Close Header') }
        labelCloseButtonFooter='Cerrar Footer'
        labelActionButtonFooter={'Aceptar Footer'}
        headerClassName='text-center'
        closeButtonHeaderPosition='right'
        childrenFooter={<p>HOLAAAAAAAAAAA Footer</p> }
        size='md'

       />
       <Code>HOLOAAAAAAAAAAAAAAA</Code>
     </section>
     <button className='p-10 text-white bg-green-400 rounded-full text-xl font-semibold text-center'
             onClick={ () => setOpen( true ) }
     >Abrir Modal
     </button>
   </div>
  );
};

export { Contact };