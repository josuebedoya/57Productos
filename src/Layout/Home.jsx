import { Header } from '../Components/Header';
import { Slider } from '../Components/Slider/Slider';
import {Blog} from '../Components/Blog';
import { MissionAndVision } from '../Components/MissionAndVision/MissionAndVision';
import { Chance } from '../Components/Chance';
import { CarouselItems } from '../Components/Carousel/CarouselItems';

const Home = () => {

  const titleSlider = 'Tienda Online';

  return (

    <>
      <div className='mb-12'>
        <Header />

        <Slider title={titleSlider}>
          !Has crecer tus ganancias con nuestra ayuda¡
        </Slider>

        <Blog>
        Descubre cómo nuestros servicios especializados te ayudarán a maximizar tus beneficios de manera efectiva. Explora nuestro blog para acceder a estrategias probadas que transformarán tus resultados financieros y empresariales. Únete a nosotros y potencia tu éxito económico hoy mismo.
        </Blog>

        <MissionAndVision/>

        <Chance />
        <CarouselItems NameToDisplay='Benefits'/>
      </div>
    </>   
  )
}

export { Home };