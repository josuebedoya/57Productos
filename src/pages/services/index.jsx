import { Metas } from "@ui/metas/metas.jsx";
import { useSettings } from "@/context/settings.jsx";

const Services = () => {
  const { settings } = useSettings();

  return (
   <>
     <Metas
      title={ `${ settings?.site.name } | Servicios` }
      description='Descubre nuestros servicios y cómo podemos ayudarte.'
      type='website'/>
     <section className='container mx-auto px-3 py-16'>
       <h1 className='text-2xl font-bold mb-4'>Nuestros Servicios</h1>
       <p>En esta sección, encontrarás una descripción detallada de los servicios que ofrecemos.</p>
     </section>
   </>
  );
}

export { Services };