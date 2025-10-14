import { Slider } from '@/pages/home/templates/slider.jsx';
import { Blog } from '@/pages/home/templates/blog.jsx';
import { Chance } from '@/pages/home/templates/chance.jsx';
import { TextMain } from '@/pages/home/templates/text-main.jsx';
import { Opinions } from '@/pages/home/templates/opinions.jsx';
import { CategoriesList } from '@/pages/home/templates/categoriesList.jsx';
import { useEffect } from "react";
import { Metas } from "@/components/metas/metas.jsx";
import { useSettings } from "@/context/settings.jsx";
import Skeleton from "@/modules/page/components/skeleton.js";

const Home = () => {

  const { settings } = useSettings();

// Script to handle header background
  useEffect( () => {
    window.onload = () => {
      const content = document.getElementById( 'menu-header' );
      const header = document.querySelector( 'header' );
      const logoWhite = document.querySelector( 'header img.white' );
      const logoBlack = document.querySelector( 'header img.black' );

      //  Add height to header, this for the animated
      if ( header && content ) {
        header.style.height = content.getBoundingClientRect().height + 'px';
      }

      // Remove bg function
      function removeBG() {
        const isTop = window.scrollY <= 20; //  define pixels to remove bg
        header.classList.add( 'fixed', 'w-full' );

        if ( content ) {
          isTop ? content.classList.add( 'top' ) : content.classList.remove( 'top' );

          // Handle visibility logo white
          isTop ? logoWhite.classList.add( 'block' ) : logoWhite.classList.add( 'hidden' );
          isTop ? logoWhite.classList.remove( 'hidden' ) : logoWhite.classList.remove( 'block' );

          // Handle visibility logo black
          isTop ? logoBlack.classList.add( 'hidden' ) : logoBlack.classList.add( 'block' );
          isTop ? logoBlack.classList.remove( 'block' ) : logoBlack.classList.remove( 'hidden' );
        }
      }

      // Execute function to start
      removeBG();

      // Add listener
      window.addEventListener( 'scroll', removeBG );

      // Remove listener when disassembling component
      return () => window.removeEventListener( 'scroll', removeBG );
    };
  }, [] );

  return ( <>
     <Metas
      title={`${settings?.site.name} | Inicio`}
      description='+57 productos Colombia, productos colombianos de calidad'
      type='website'
     />
     <section className='mb-12'>
  <Skeleton/>
     </section>
   </>
  )
   ;
};

export { Home };