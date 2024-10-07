import { useNavigate } from 'react-router-dom';
import { Path_page } from '../Routes';

import { TextAnimatedWrite } from '../Components/TextAnimatedWrite';
import { Grafic } from '../Components/Grafic';
import { Button } from '../Components/Button';
import { AngleRightDroprightIcon } from '../Resources/Icons'

const Blog = () => {

  const routeButton = useNavigate();

  const GotoServices = () => {
    routeButton(Path_page.SERVICES);
  }

  return (
    <div id='Blog'>
      <div className='container mx-auto flex flex-col items-center py-20'>
        <div className='title-section max-w-4xl h-11 text-center mb-14'>
          <TextAnimatedWrite stylesText={{
            color: '#7f7f7f',
            fontSize: '20px',
            fontWeight: 'bold',
            letterSpacing: '0.5px',
            fontFamily: '"Oswald", sans-serif',
          }}>

            ¡Haz crecer tus ganancias con nuestros servicios! Te ayudaremos a maximizar tus beneficios para que logres resultados extraordinarios!
          </TextAnimatedWrite>
        </div>
        <div className='grafic-section w-full mb-8'>
          <Grafic />
        </div>
        <div className='text text-center text-Primary max-w-2xl'>
          <p>
            Descubre cómo nuestros servicios especializados te ayudarán a maximizar tus beneficios de manera efectiva. Explora nuestro blog         para acceder a estrategias probadas que transformarán tus resultados financieros y empresariales. Únete a nosotros y potencia tu        éxito económico hoy mismo.
          </p>
        </div>
        <div className='button-section mt-5'>
          <Button classBtn='BtnGoToServices' icon={<AngleRightDroprightIcon />} iconRight={true} onClick={GotoServices}>
            Navegar blog
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Blog };