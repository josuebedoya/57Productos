import { useSettings } from '@/context/settings';
import { Metas } from '@/components/Metas';

const Contact = () => {
  const { settings } = useSettings();
  return (
   <>
     <Metas
      title={ `${ settings?.site.name } | Contacto` }
      description='Contactanos, y dejános tus datos, te contactaremos lo más rápido posible.'
      type='website'/>
     <section className='container mx-auto'>
       <h1>Asesorate, deja tus datos y te contactaremos los más rápido posible</h1>
     </section>
   </>
  );
};

export { Contact };