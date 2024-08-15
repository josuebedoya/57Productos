import { Header } from '../Components/Header';
import { Slider } from '../Components/Slider/Slider'

const Home = () => {

  const titleSlider = 'Tienda Online';

  return (

    <>
      <div className='mb-12'>
        <Header />

        <Slider title={titleSlider}>
          !Has crecer tus ganancias con nuestra ayuda¡
        </Slider>
      </div>
    </>
  )
}

export { Home };