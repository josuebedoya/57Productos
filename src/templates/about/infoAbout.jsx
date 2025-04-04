import { Carousel } from '@/components/carousel.jsx';
import  img1 from '/logo-white.png';
import  img2 from '/logo-black.png';
const InfoAbout = () => {
  const responsive = [
    { width: 0, itemsView: 'auto', spaceBetween: 0, },
    { width: 640, itemsView: 'auto', spaceBetween: 5 },
  ];

   const ImgsToCarousel = [
     [...Array(5)].map(() => ({src: img1, type: 'image'})),
     [...Array(5)].map(() => ({src: img2, type: 'image'}))
   ].flat();

  return (
   <section id='InfoAbout' className='py-6 sm:py-10 lg:py-16'>
     <div className='container mx-auto px-3'>
       <div className='flex flex-col tl:flex-row tl:justify-center tl:items-center'>
         <div className='info-us tl:flex-1 tl:w-1/2 tl:pr-5 lg:pr-7 text-justify text-15 mn:text-15 tl:text-base pt-8 sm:pt-12 tl:pt-0 order-2 tl:order-1'>
           <p>
             En <strong>+57 Productos</strong>, nos enorgullece ser una empresa colombiana que lleva la esencia de
             nuestra tierra al mundo. Especializados en la exportación de productos frescos y de calidad, nos dedicamos a resaltar la
             riqueza agrícola de Colombia mientras apoyamos a nuestros agricultores en su camino hacia una mayor
             productividad. ¡Conectamos a Colombia con los mercados internacionales, llevando el sabor y la diversidad
             de nuestros productos a cada rincón del planeta!
           </p>
         </div>
         <div className='carousel tl:flex-1 w-full tl:w-1/2 tl:pr-5 lg:pl-7 rounded-3xl max-w-full order-1 tl:order-2'>
           <Carousel isMedia  items={ ImgsToCarousel } responsive={ responsive } itemsView={ 'auto' } itemsSpace={ 5 } effect={ 2 } loop dots cursor itemClass='w-52 h-52 md:h-64 md:w-64 2xl:w-64 2xl:h-64 rounded-lg shadow-lg overflow-hidden'/>
         </div>
       </div>
     </div>
   </section>
  );
};
export { InfoAbout };