import { useSettings } from '@/context/settings.jsx';
import { Metas } from '@/components/metas/metas.jsx';
import Media from "@/components/media/index.tsx";

const Contact = () => {
  const { settings } = useSettings();

  const image = '/assets/images/corazon.png';
  const video = 'https://videos.pexels.com/video-files/12359234/12359234-hd_1080_1920_30fps.mp4';
  const txt = 'https://abogadosep.com/assets/media/dummy.txt?u=1758725374';
  const pptx = 'https://abogadosep.com/assets/media/dummy.pptx?u=1758725375';
  return (
   <>
     <Metas
      title={ `${ settings?.site.name } | Contacto` }
      description='Contactanos, y dejános tus datos, te contactaremos lo más rápido posible.'
      type='website'/>
     <section className='container mx-auto'>
       <h1>Asesorate, deja tus datos y te contactaremos los más rápido posible</h1>
     </section>
     <Media src={ video } AudioProps={{controls:true}}/>
   </>
  );
};

export { Contact };