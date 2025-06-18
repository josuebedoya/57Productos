import { Slider } from '@/templates/home/slider.jsx';
import { Blog } from '@/templates/home/blog.jsx';
import { Chance } from '@/templates/home/chance.jsx';
import { TextMain } from '@/templates/home/text-main.jsx';
import { Opinions } from '@/templates/home/opinions.jsx';
import { CategoriesList } from '@/templates/home/categoriesList.jsx';
import { useEffect } from "react";
import { Metas } from "@/components/metas.jsx";
import { useSettings } from "@/context/settings.jsx";

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
       <Slider/>
       <Blog/>
       <TextMain/>
       <CategoriesList/>
       <Chance/>
       <Opinions/>
       <style>{ `
            #menu-header.top, 
            #menu-header.top .content-items.modal {
                background: transparent !important; transition: .4s; }
            #menu-header.top .item-link { color: #fff !important; transition: color .3s;}
            #menu-header.top{ .cart, .search-btn, .profile-section-icon{
                background: transparent !important;
                border: 1px solid #fff !important; }}
            #menu-header.top{ .cart:hover, .search-btn:hover, .profile-section-icon:hover{
                background: #fff !important; }}
        ` }
       </style>
     </section>
   </>
  )
   ;
};

export { Home };