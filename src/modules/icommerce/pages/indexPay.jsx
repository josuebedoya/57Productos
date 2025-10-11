import { Metas } from "@/components/metas/metas.jsx";
import { useSettings } from "@/context/settings.jsx";

const Payments = () => {
  const { settings } = useSettings();

  return (
   <>
     <Metas
      title={ `${ settings?.site.name } | Pagos` }
      description='Realiza tus pagos de forma segura y rápida.'
      type='website'/>
     <section className='container mx-auto px-3 py-16'>
       Página de pagos
     </section>
   </>
  );
};

export { Payments };