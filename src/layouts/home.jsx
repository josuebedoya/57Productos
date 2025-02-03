import { Slider } from '@/components/slider.jsx';
import {Blog} from '@/templates/blog.jsx';
import { Chance } from '@/templates/chance.jsx';
import { TextMain } from '@/templates/text-main.jsx';
import { Opinions } from '@/templates/opinions';

const Home = () => {

  const titleSlider = 'Tienda Online';

  return (
   <main className='mb-12'>
     <Slider title={ titleSlider }>
       !Has crecer tus ganancias con nuestra ayuda¡
     </Slider>
     <Blog />
     <TextMain />
     <Chance />
     <Opinions/>
   </main>
  );
};

export { Home };