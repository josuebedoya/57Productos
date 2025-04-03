import { Slider } from '@/templates/home/slider.jsx';
import {Blog} from '@/templates/home/blog.jsx';
import { Chance } from '@/templates/home/chance.jsx';
import { TextMain } from '@/templates/home/text-main.jsx';
import { Opinions } from '@/templates/home/opinions.jsx';
import { CategoriesList } from '@/templates/home/categoriesList.jsx';

const Home = () => {

  const titleSlider = 'Tienda Online';

  return (
   <section className='mb-12'>
     <Slider title={ titleSlider }>
       !Has crecer tus ganancias con nuestra ayuda¡
     </Slider>
     <Blog />
     <TextMain />
     <CategoriesList/>
     <Chance />
     <Opinions/>
   </section>
  );
};

export { Home };