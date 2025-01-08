import { Slider } from '../Components/Slider';
import { Blog } from '../Templates/Blog';
import { Chance } from '../Templates/Chance';
import { HomeTextMain } from '../Templates/H1-home';
import { Opinions } from "../Templates/Opinions";

const Home = () => {

  const titleSlider = 'Tienda Online';

  return (
    <>
      <div className='mb-12'>
       <Opinions/>
        <Slider title={titleSlider}>
          !Has crecer tus ganancias con nuestra ayuda¡
        </Slider>
        <Blog />
        <Chance />
        <HomeTextMain />
      </div>
    </>
  )
}

export { Home };