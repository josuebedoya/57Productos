import { Slider } from '@/components/slider.jsx';
import {Blog} from '@/templates/blog.jsx';
import { Chance } from '@/templates/chance.jsx';
import { TextMain } from '@/templates/text-main.jsx';
import { Opinions } from '@/templates/opinions';
import { CategoriesList } from '@/templates/categoriesList.jsx';
import { Carousel } from '@/components/carousel';
import  img2  from '/images/img-fruit-flat.webp';

const Home = () => {
  const s = [{src:img2, type: 'image'},
 /*    {src:video, type: 'video'}, */
    {src:img2, type: 'image'},
    {src:img2, type: 'image'},
    {src:img2, type: 'image'}
  ];

  const titleSlider = 'Tienda Online';

  return (
   <main className='mb-12'>
    <Carousel items={s} itemsView={1} carousellImg/>
    <video autoPlay>
      <source src='videos/video-cat.mp4' type='video/mp4' />
      Tu navegador no soporta videos.
      </video>
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