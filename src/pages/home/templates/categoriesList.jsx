import List from '@ui/list/index.tsx'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDatabase } from "@/hooks/useDatabase.jsx";
import { Path_page } from '@/routes.ts';
import { Slug } from "@/utils/handleText.ts";
import Button from "@ui/button/index.tsx";

const CategoriesList = () => {
  const [ categories, setCategories ] = useState( [] );
  const navigate = useNavigate();
  const { get, data, loading, error } = useDatabase();

  // get category store
  useEffect( () => {
    get( 'categorias' );
  }, [] );

  //update categories
  useEffect( () => {
    if ( data?.[ 'categorias' ] !== null ) setCategories( data?.[ 'categorias' ] ); // prevent null value

  }, [ data ] );

  // go to category  function
  const goToCategory = ( name ) => {
    navigate( Path_page.STORE + '/' + name );
  };
  const colours = [ 'blue', 'red', 'yellow', 'purple', 'green', 'cyan', 'fuchsia', 'pink', 'orange' ];
  const breakpoints = {
    zero: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }

  if ( error ) <div>Algo ha fallado: { error.message }</div>; // if something wrong in fetch

  return (
   < section id='listCategories' className='bg-Primary py-16'>
     <div className="container px-3 mx-auto">
       <List items={ categories }
             cols='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'
             colItem='col-span-1'
             keyExtractor={ ( _, i ) => `category-${ i }` }
             propsItem={ {
               className: 'flex items-center shadow rounded-lg  px-4 py-10 hover:scale-105 duration-300 group/item'
             } }
             renderItem={ ( category, i ) => (
              <div key={ i }
                   className={ `shadow-${ colours[ Math.floor( Math.random() * colours.length ) ] }-500 hover:shadow-${ colours[ Math.floor( Math.random() * colours.length ) ] }-500` }>
                <div className="content flex flex-col items-center gap-8">
                  <p className="text-white text-center text-lg h-36 line-clamp-5">
                    { category.descripcion }
                  </p>
                  <Button
                   variant='flat'
                   color='white'
                   colorHover='white'
                   icon='FaArrowRight'
                   classes='opacity-0 group-hover/item:opacity-100'
                   iconRight
                   onClick={ () => goToCategory( Slug( category.nombre ) ) }>
                    Ver más
                  </Button>
                </div>
              </div>
             ) }/>
     </div>
   </section>
  );
};

export { CategoriesList };