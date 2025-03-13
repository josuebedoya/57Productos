import { Slider } from '@/templates/slider.jsx';
import {Blog} from '@/templates/blog.jsx';
import { Chance } from '@/templates/chance.jsx';
import { TextMain } from '@/templates/text-main.jsx';
import { Opinions } from '@/templates/opinions';
import { CategoriesList } from '@/templates/categoriesList.jsx';

const Home = () => {

  const titleSlider = 'Tienda Online';

  return (
   <main className='mb-12'>
     <Slider title={ titleSlider }>
       !Has crecer tus ganancias con nuestra ayuda¡
     </Slider>
     <Blog />
     <TextMain />
     <CategoriesList/>
     <Chance />
     <Opinions/>
   </main>
  );
};

export { Home };