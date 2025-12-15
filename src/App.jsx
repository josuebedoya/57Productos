import { Routes, useLocation } from 'react-router-dom';
import { Path_page, Routes as RoutesApp } from '@/routes.ts';
import { Slug } from "@/utils/handleText.ts";
import { clsx } from "clsx";
import { Header } from '@/templates/header';
import { Footer } from '@/templates/footer';
import useRouterPages from "@/hooks/useRouterPages.tsx";

function App() {
  const path = useLocation()?.pathname;
  const isProfilePage = location.pathname.includes( Path_page?.PROFILE );

  return (
   <div
    className={ clsx( 'page', `view-${ Slug( path === '/' ? 'inicio' : path ) }`, '!m-0 !p-0 w-full max-w-full flex flex-col min-h-screen' ) }>
     { !isProfilePage && <Header/> }
     <main className='flex-1'>
       <Routes>
         { useRouterPages( RoutesApp ) }
       </Routes>
     </main>
     { !isProfilePage && <Footer/> }
   </div>
  );
}

export { App };