import { Spin } from '@/components/spin.jsx';
import { FigureOne } from '@/assets/svgFigures.jsx';
import colombia from '/images/flags/colombia.png'
import usa from '/images/flags/usa.png'
import japan from '/images/flags/japan.png'
import brazil from '/images/flags/brazil.png'
import canada from '/images/flags/canada.png'
import { Media } from "@/components/media.jsx";
import { Tooltip } from "@/components/tooltip.jsx";

const Slider = ( ) => {

  const images = [
     <Tooltip key={1} content='Colombia'>
       <Media src={colombia} classFile='h-12 w-12'/>
     </Tooltip>,
     <Tooltip key={2} content='Usa'>
       <Media src={usa} classFile='h-12 w-12'/>
     </Tooltip>,
    <Tooltip key={ 3 } content='Japan'>
      <Media src={ japan } classFile='h-12 w-12'/>
    </Tooltip>,
    <Tooltip key={ 4 } content='Brazil'>
      < Media src={ brazil } classFile='h-12 w-12'/>
    </Tooltip>,
    <Tooltip key={ 5 } content='Canada'>
      <Media src={ canada } classFile='h-12 w-12'/>
    </Tooltip>
  ];

  return ( <>
    <section id="slider" className="relative w-full aspect-100/83 md:aspect-100/48">
      <div className="row-auto h-full overflow-hidden relative">
        <div className="max-w-screen-xl h-full mx-auto px-4">
          <div className="flex flex-row justify-between items-center h-full px-20">
            <div className="content z-10 text-center md:text-left bottom-[6vh] relative">
              <h1 className="title leading-10 text-2xl tl:text-4xl xl:text-5xl font-bold text-white mb-6 max-w-lg relative">
                 ¿Te gustaría que tus productos llegarán a todo el mundo?
              </h1>
              <div className="description w-3/4 mx-auto md:mx-0 text-white text-15 md:text-lg tl:text-xl">
                 <p>Te ofrecemos la posibilidad de exportar tus productos.</p>
              </div>
            </div>
            <div className="spin px-5 z-10 hidden md:block bottom-[6vh] relative">
              <Spin
               items={ images }
               withButton={ false }
               classItem="h-12 w-12 flex items-center justify-center cursor-pointer duration-500"
               rotateItem
               autoPlay
               pauseHover
               radio={ 170 }
               speed={ 0.8 }
               border='border border-white shadow-white'
              />
            </div>
          </div>
          <div className="bg-img absolute w-full h-full top-0 left-0 z-0">
            <img
             src="/images/slider-bg.png"
             alt={ 'Image slider' }
             className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <FigureOne animated/>
    </section>
  </> );
};

export { Slider };