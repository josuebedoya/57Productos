import { List } from "@/components/list";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getData } from "management-supabase";
import { Slug, Path_page } from "@/routes.jsx";
import { Button } from "@/components/button.jsx";
import { ArrowRightIcon } from '@/resources/icons.jsx';

const CategoriesList = () => {
  const [ categories, setCategories ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const res = await getData( 'productos' );
      setCategories( res );
    } catch ( error ) {
      setError( error.message );
    } finally {
      setLoading( false );
    }
  };

  // get categories store
  useEffect( () => {
    fetchCategories();
  }, [] );

  // go to category  function
  const goToCategory = ( name ) => {
    navigate( Path_page.STORE + '/' + name );
  };

  const shadows = [ 'shadow-blue-500', 'shadow-red-500', 'shadow-yellow-500', 'shadow-purple-500', 'shadow-green-500', 'shadow-cyan-500', 'shadow-fuchsia-500', 'shadow-pink-500', 'shadow-orange-500', 'shadow-white' ];
  const shadowsHover = [ 'hover:shadow-blue-500', 'hover:shadow-red-500', 'hover:shadow-yellow-500', 'hover:shadow-purple-500', 'hover:shadow-green-500', 'hover:shadow-cyan-500', 'hover:shadow-fuchsia-500', 'hover:shadow-pink-500', 'hover:shadow-orange-500', 'hover:shadow-white' ];

  if ( error ) <div>Algo ha fallado: { error.message }</div>; // if something  wrong in fetch
  if ( loading ) <div>Cargando, no debería tardar demasiado</div>; // if are loading fetch

  return (
   < section id='listCategories' className='bg-Primary py-16'>
     <div className="container px-3 mx-auto">
       < List gap={ 10 }
              itemClass='flex items-center shadow rounded-lg  px-4 py-10 hover:scale-105 duration-300 group/item'
              columns={ 4 }
              rows={ 2 }
       >
         {
           categories.map( ( category, i ) => (
            <div key={ i }
                 className={ `${ shadows[ Math.floor( Math.random() * shadows.length ) ] } ${ shadowsHover[ Math.floor( Math.random() * shadowsHover.length ) ] }` }>
              <div className="content flex flex-col items-center gap-8">
                <p className="text-white text-center text-lg h-36 line-clamp-5">
                  { category.descripcion }
                </p>
                <Button btnText 
                        icon={ <ArrowRightIcon/> } 
                        classBtn='text-white opacity-0 group-hover/item:opacity-100'
                        iconRight 
                        onClick={ () => goToCategory(Slug( category.nombre )) }>
                  Ver más
                </Button>
              </div>
            </div>
           ) )
         }
       </List>
     </div>
   </section>
  );
};

export { CategoriesList };