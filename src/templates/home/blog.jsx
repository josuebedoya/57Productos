import { useNavigate } from 'react-router-dom';
import { Path_page } from '@/routes.jsx';

import { TextAnimatedWrite } from '@/components/textAnimatedWrite.jsx'
import { Grafic } from '@/components/grafic.jsx'
import { Button } from '@/components/button.jsx'
import { AngleRightIcon } from '@/resources/icons.jsx'

const Blog = () => {

  const routeButton = useNavigate();

  const GotoServices = () => {
    routeButton( Path_page.SERVICES );
  }

  return (
   <section id='Blog'>
     <div className='container mx-auto flex flex-col items-center py-8 md:py-12 lg:py-20 px-3'>
       <div className='title-section max-w-4xl min-h-11 text-center mb-8 tl:mb-14'>
         <TextAnimatedWrite atrText={ { fontSize: '35px', letterSpacing: '0.5px', maxWidth: '715px' } } classText='textPrimary font-bold family-oswald'>
           Impulsa tu éxito y multiplica tus beneficios con nuestros servicios especializados.
         </TextAnimatedWrite>
       </div>
       <div className='grafic-section w-full mb-9'>
         <Grafic/>
       </div>
       <div className='text text-center text-Primary max-w-lg md:max-w-2xl text-15 md:text-lg tl:text-xl leading-7 md:leading-8'>
         <p>
           Descubre cómo nuestros servicios especializados te ayudarán a maximizar tus beneficios de manera efectiva.
           Explora nuestro blog para acceder a estrategias probadas que transformarán tus resultados financieros y
           empresariales. Únete a nosotros y potencia tu éxito económico hoy mismo.
         </p>
       </div>
       <div className='button-section mt-7 tl:mt-11'>
         <Button classBtn='btn-go-to-services family-oswald tracking-widest text-15 lg:text-lg'
                 icon={ <AngleRightIcon classIcons='icon'/> } iconRight={ true } onClick={ GotoServices }>
           Navegar blog
         </Button>
       </div>
     </div>
   </section>
  );
}

export { Blog };