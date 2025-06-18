import { Routes, Route, useLocation } from 'react-router-dom'
import { Path_page } from '@/routes'
import { Slug } from "@/utils/handleText.js";

//Components imports
import { Header } from '@/templates/header'
import { Home } from '@/layouts/home'
import { About } from '@/layouts/about'
import { Error } from '@/layouts/error'
import { Services } from '@/layouts/services'
import { Store } from '@/layouts/store'
import { Contact } from '@/layouts/contact'
import { Profile } from '@/layouts/profile'
import { TermsAndConditions } from '@/layouts/termsAndConditions'
import { Payments } from '@/layouts/payments'
import { Footer } from '@/templates/footer.jsx'
import { FindResults } from "@/layouts/findResults.jsx";

function App() {
  const location = useLocation();

  return ( <div
   className={ `page layout-${ Slug( location.pathname === '/' ? 'inicio' : location.pathname ) } m-0 p-0 w-full max-w-full flex flex-col min-h-screen` }>
    <Header/>
    <main className='flex-1'>
      <Routes>
        <Route index path={ Path_page.HOME } element={ <Home/> }/>
        <Route path={ Path_page.US } element={ <About/> }/>
        <Route path={ Path_page.SERVICES } element={ <Services/> }/>
        <Route path={ Path_page.STORE } element={ <Store/> }/>
        <Route path={ Path_page.CONTACT } element={ <Contact/> }/>
        <Route path={ Path_page.PROFILE } element={ <Profile/> }/>
        <Route path={ Path_page.PAYMENTS } element={ <Payments/> }/>
        <Route path={ Path_page.SEARCH } element={ <FindResults/> }/>
        <Route path={ Path_page.TERMS_AND_CONDITIONS } element={ <TermsAndConditions/> }/>
        <Route path={ Path_page.ERROR } element={ <Error/> }/>
      </Routes>
      <template className='flex flex-col min-h-screen !hidden'/>
    </main>
    <Footer/>
  </div> );
}

export { App };
