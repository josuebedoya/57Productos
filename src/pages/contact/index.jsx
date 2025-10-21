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
        type='drawer'
        onClose={ () => setOpen( false ) }
        isOpen={ open }
        position='left'
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