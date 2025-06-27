import { List } from "@/components/list.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDatabase } from "@/hooks/useDatabase.jsx";
import { Path_page } from "@/routes.jsx";
import { Slug } from "@/utils/handleText.js";
import { Button } from "@/components/button.jsx";
import { ArrowRightIcon } from '@/assets/icons.jsx';
import { WarningModal } from '@/components/warningModal.jsx';

const CategoriesList = () => {
  const [ categories, setCategories ] = useState( [] );
  const navigate = useNavigate();
  const { get, data, loading, error } =  useDatabase();

  // get categories store
  useEffect( () => {
    get('categorias');
  }, [] );

  //update categories
  useEffect( () => {
    if( data?.['categorias'] !== null) setCategories(data?.['categorias']); // prevent null value

  }, [data] );

  // go to category  function
  const goToCategory = ( name ) => {
    navigate( Path_page.STORE + '/' + name );
  };
  const colours = [ 'blue', 'red', 'yellow', 'purple','green', 'cyan', 'fuchsia', 'pink', 'orange'];
  const breakpoints = {
    zero: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }

  if ( error ) <div>Algo ha fallado: { error.message }</div>; // if something  wrong in fetch
  if ( loading ) <WarningModal timeClose={ 6000 } type={ error } className='text-white text-center text-lg'>Cargando, no debería tardar demasiado</WarningModal>; // if are loading fetch

  return (
   < section id='listCategories' className='bg-Primary py-16'>
     <div className="container px-3 mx-auto">
       < List gap={ 10 }
              itemClass='flex items-center shadow rounded-lg  px-4 py-10 hover:scale-105 duration-300 group/item'
              columns={ 4 }
              rows={ 2 }
              breakpoints={ breakpoints }
       >
         { categories &&
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