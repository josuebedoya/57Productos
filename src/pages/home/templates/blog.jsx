import { useNavigate } from 'react-router-dom';
import { Path_page } from '@/routes.ts';
import { Grafic } from '@/pages/home/components/grafic.jsx'
import Button from '@ui/button/index.tsx'
import WriteAnimationText from "@/components/writeAnimationText/index.tsx";

const Blog = () => {

  const routeButton = useNavigate();

  const GotoServices = () => {
    routeButton( Path_page.SERVICES );
  }

  return (
   <section id='Blog'>
     <div className='container mx-auto flex flex-col items-center py-8 md:py-12 lg:py-20 px-3'>
       <div className='title-section max-w-4xl min-h-11 text-center mb-8 tl:mb-14'>
         <WriteAnimationText
          className='textPrimary font-bold family-oswald max-w-[715px] text-3xl tracking-wider flex-wrap'
          text='Impulsa tu éxito y multiplica tus beneficios con nuestros servicios especializados.'
          writer={"char"}
          speed={200}
         />
       </div>
       <div className='grafic-section w-full mb-9'>
         <Grafic/>
       </div>
       <div
        className='text text-center text-Primary max-w-lg md:max-w-2xl text-15 md:text-lg tl:text-xl leading-7 md:leading-8'>
         <p>
           Descubre cómo nuestros servicios especializados te ayudarán a maximizar tus beneficios de manera efectiva.
           Explora nuestro blog para acceder a estrategias probadas que transformarán tus resultados financieros y
           empresariales. Únete a nosotros y potencia tu éxito económico hoy mismo.
         </p>
       </div>
       <div className='button-section mt-7 tl:mt-11'>
         <Button
          classes='btn-go-to-services family-oswald tracking-widest max-[1024px]:text-15'
          size='lg'
          icon='IoIosArrowForward'
          iconRight={ true }
          onClick={ GotoServices }>
           Navegar blog
         </Button>
       </div>
     </div>
   </section>
  );
}

export { Blog };