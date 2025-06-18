import { Metas } from "@/components/metas.jsx";
import { useSettings } from "@/context/settings.jsx";

const Error = () => {
  const { settings } = useSettings();
  return (
   <>
     <Metas
      title={ `${ settings?.site.name } | Error` }
      description='Error, la página que buscas no está disponible.'
      type='website'/>
     <section>
       <div className='text-Primary text-lg text-center'>!Ups, intentas acceder a una pagina no disponible¡</div>
       <div className='text-red-600 text-3xl text-center'>404</div>
     </section>
   </>
  );
};

export { Error };