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
  const colours = [ 'blue', 'red', 'yellow', 'purple','green', 'cyan', 'fuchsia', 'pink', 'orange'];

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
                 className={ `shadow-${ colours[Math.floor( Math.random() * colours.length )] }-500 hover:shadow-${ colours[ Math.floor( Math.random() * colours.length ) ] }-500` }>
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