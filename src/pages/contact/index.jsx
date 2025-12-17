import { useSettings } from '@/context/settings.jsx';
import { Metas } from '@/components/metas/metas.jsx';
import Tooltip from "@ui/tooltip/index.tsx";
import Media from "@ui/media/index.tsx";
import colombia from '/assets/images/flags/colombia.png'
import usa from '/assets/images/flags/usa.png'
import japan from '/assets/images/flags/japan.png'
import brazil from '/assets/images/flags/brazil.png'
import canada from '/assets/images/flags/canada.png'
import List from "@ui/list/index.tsx";

const Contact = () => {
  const { settings } = useSettings();

  const images = [
    <Tooltip key={ 1 } content='Colombia'>
      <Media src={ colombia } imageProps={ { className: 'h-12 w-12' } }/>
    </Tooltip>,
    <Tooltip key={ 2 } content='Usa'>
      <Media src={ usa } imageProps={ { className: 'h-12 w-12' } }/>
    </Tooltip>,
    <Tooltip key={ 3 } content='Japan'>
      <Media src={ japan } imageProps={ { className: 'h-12 w-12' } }/>
    </Tooltip>,
    <Tooltip key={ 4 } content='Brazil'>
      < Media src={ brazil } imageProps={ { className: 'h-12 w-12' } }/>
    </Tooltip>,
    <Tooltip key={ 5 } content='Canada'>
      <Media src={ canada } imageProps={ { className: 'h-12 w-12' } }/>
    </Tooltip>
  ];
  return (
   <div className='flex justify-center flex-col items-center my-10'>
     <Metas
      title={ `${ settings?.site.name } | Contacto` }
      description='Contactanos, y dejános tus datos, te contactaremos lo más rápido posible.'
      type='website'/>
     <section className='container mx-auto'>
       <h1>Asesorate, deja tus datos y te contactaremos los más rápido posible</h1>
       <List
        items={ images}
        renderItem={ ( item ) => item }
        keyExtractor={ ( item ) => item }
        className='py-10'
        cols='grid-cols-3 gap-10'
        colItem='col-span-1'
        propsItem={ {
          className: 'flex justify-center items-center shadow-lg p-4 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer',
        } }
       />
     </section>
   </div>
  );
};

export { Contact };