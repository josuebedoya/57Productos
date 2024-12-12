import { Slider } from '../Components/Slider';
import { Blog } from '../Templates/Blog';
import { Chance } from '../Templates/Chance';
import { OpinionItem } from '../Templates/Parts/OpinionsItem';

const Home = () => {

  const titleSlider = 'Tienda Online';
  
  return (
    <>
      <div className='mb-12'>
        <OpinionItem name='Programer'>
        Yo opino qué, no se que opinar, esta es una opinion donde se opina,{'\n'}
        pero entonces no se que opinar, yo creo que toca opinar algo, pero ese algo hay que saber opinarlo!
        </OpinionItem>
        <Slider title={titleSlider}>
          !Has crecer tus ganancias con nuestra ayuda¡
        </Slider>
        <Blog/>
        <Chance />
      </div>
    </>
  )
}

export { Home };