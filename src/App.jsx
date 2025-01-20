import { Routes, Route, useLocation } from 'react-router-dom'
import { Path_page, Slug } from "@/routes"

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
import { Payments } from "@/layouts/payments"
import { Footer } from "@/Templates/footer"
import { ModalProduct } from "@/components/product/modalProduct.jsx";

function App() {
  const location = useLocation();

  return ( <>
      <ModalProduct/>
    <Header/>
    <main id='Page'
          className={ `page page-${ Slug( location.pathname === '/' ? 'inicio' : location.pathname ) } m-0 p-0 w-full max-w-full h-auto max-h-full` }>
      <Routes>
        <Route index path={ Path_page.HOME } element={ <Home/> }/>
        <Route path={ Path_page.US } element={ <About/> }/>
        <Route path={ Path_page.SERVICES } element={ <Services/> }/>
        <Route path={ Path_page.STORE } element={ <Store/> }/>
        <Route path={ Path_page.CONTACT } element={ <Contact/> }/>
        <Route path={ Path_page.PROFILE } element={ <Profile/> }/>
        <Route path={ Path_page.PAYMENTS } element={ <Payments/> }/>
        <Route path={ Path_page.TERMS_AND_CONDITIONS } element={ <TermsAndConditions/> }/>
        <Route path={ Path_page.ERROR } element={ <Error/> }/>
      </Routes>
    </main>
    <Footer/>
  </> );
}

export { App };
