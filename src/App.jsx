import { Routes, Route, useLocation } from 'react-router-dom'
import { Path_page } from '@/routes'
import { Slug } from "@/utils/handleText.js";

//Components imports
import { Header } from '@/templates/header'
import { Home } from '@/pages/home/index.jsx'
import { Us } from '@/pages/us/index.jsx'
import { Error } from '@/pages/error/index.jsx'
import { Services } from '@/pages/services/index.jsx'
import { Store } from '@/pages/store/index.jsx'
import { Contact } from '@/pages/contact/index.jsx'
import { Profile } from '@/pages/auth/index.jsx'
import { TermsAndConditions } from '@/pages/auth/indexT&c.jsx'
import { Payments } from '@/pages/store/indexPay.jsx'
import { Footer } from '@/templates/footer.jsx'
import { Search } from "@/pages/search/index.jsx";

function App() {
  const location = useLocation();

  return ( <div
   className={ `page layout-${ Slug( location.pathname === '/' ? 'inicio' : location.pathname ) } m-0 p-0 w-full max-w-full flex flex-col min-h-screen` }>
    <Header/>
    <main className='flex-1'>
      <Routes>
        <Route index path={ Path_page.HOME } element={ <Home/> }/>
        <Route path={ Path_page.US } element={ <Us/> }/>
        <Route path={ Path_page.SERVICES } element={ <Services/> }/>
        <Route path={ Path_page.STORE } element={ <Store/> }/>
        <Route path={ Path_page.CONTACT } element={ <Contact/> }/>
        <Route path={ Path_page.PROFILE } element={ <Profile/> }/>
        <Route path={ Path_page.PAYMENTS } element={ <Payments/> }/>
        <Route path={ Path_page.SEARCH } element={ <Search/> }/>
        <Route path={ Path_page.TERMS_AND_CONDITIONS } element={ <TermsAndConditions/> }/>
        <Route path={ Path_page.ERROR } element={ <Error/> }/>
      </Routes>
      <template className='flex flex-col min-h-screen !hidden'/>
    </main>
    <Footer/>
  </div> );
}

export { App };
