import { Routes, Route, useLocation } from 'react-router-dom'
import { Path_page, Routes as RoutesApp } from '@/routes'
import { Slug } from "@/utils/handleText.js";
import { clsx } from "clsx";
import ViewComponent from "@/modules/page/pages/index.tsx";
import { Header } from '@/templates/header';
import { Footer } from '@/templates/footer';

function App() {
  const path = useLocation()?.pathname;
  const isProfilePage = location.pathname.includes( Path_page.AUTH.MAIN );

  return (
   <div
    className={ clsx( 'page', `view-${ Slug( path === '/' ? 'inicio' : path ) }`, '!m-0 !p-0 w-full max-w-full flex flex-col min-h-screen' ) }>
     { !isProfilePage && <Header/> }
     <main className='flex-1'>
       <Routes>
         { RoutesApp.map( ( { view, path }, i ) => {
           if ( !view || typeof view !== 'string' ) return false;
           return ( < Route
            key={ i }
            path={ path }
            element={ <ViewComponent modulePath={ view }/> } // Here render the view if it's exist
           /> )
         } ) }
       </Routes>
       <template className='flex flex-col min-h-screen !hidden'/>
     </main>
     { !isProfilePage && <Footer/> }
   </div>
  );
}

export { App };