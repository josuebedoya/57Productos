import { Slider } from '../Components/Slider/Slider';
import { Blog } from '../Templates/Blog';
import { MissionAndVision } from '../Templates/MissionAndVision/MissionAndVision';
import { Chance } from '../Templates/Chance';
import { CarouselItems } from '../Components/Carousel/CarouselItems';
import ListElements from '../Components/Carousel/ListElements';

const Home = () => {

  const titleSlider = 'Tienda Online';
  
  return (

    <>
      <div className='mb-12'>
        <Slider title={titleSlider}>
          !Has crecer tus ganancias con nuestra ayuda¡
        </Slider>

        <Blog>
          Descubre cómo nuestros servicios especializados te ayudarán a maximizar tus beneficios de manera efectiva. Explora nuestro blog         para acceder a estrategias probadas que transformarán tus resultados financieros y empresariales. Únete a nosotros y potencia tu        éxito económico hoy mismo.
        </Blog>

        <MissionAndVision />

        <Chance />
        <CarouselItems ListElements={ListElements}  isImage/>
      </div>
    </>
  )
}

export { Home };