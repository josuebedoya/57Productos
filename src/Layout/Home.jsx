import { Slider } from '../Components/Slider/Slider';
import { Blog } from '../Templates/Blog/Blog';
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
        <Blog/>
        <MissionAndVision />
        <Chance />
        <CarouselItems ListElements={ListElements}  isImage/>
      </div>
    </>
  )
}

export { Home };