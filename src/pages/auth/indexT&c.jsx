import { useSettings } from "@/context/settings.jsx";
import { Metas } from "@/components/metas.jsx";

const TermsAndConditions = () => {
  const { settings } = useSettings();

  return (
   <>
     <Metas
      title={ `${ settings?.site.name } | Términos y Condiciones` }
      description='Lee nuestros términos y condiciones para entender mejor nuestros servicios.'
      type='website'
     />
     <section className='container mx-auto px-3 py-16'>
       <h1 className='text-2xl font-bold mb-4'>Términos y Condiciones</h1>
       <p>En esta sección, encontrarás los términos y condiciones de uso de nuestro sitio web.</p>
     </section>
   </>
  );
}

export { TermsAndConditions };