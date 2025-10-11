import { Routes, Route, useLocation } from 'react-router-dom'
import { Path_page } from '@/routes'
import { Slug } from "@/utils/handleText.js";

//Components imports
import { Header } from '@/templates/header'
import { Home } from '@/pages/home/index.jsx'
import { Us } from '@/pages/us/index.jsx'
import { Error } from '@/modules/error/pages/index.jsx'
import { Services } from '@/pages/services/index.jsx'
import { Store } from '@/modules/icommerce/pages/index.jsx'
import { Contact } from '@/pages/contact/index.jsx'
import { Profile } from '@/modules/profile/pages/index.jsx'
import { TermsAndConditions } from '@/pages/privacy/tyc.jsx'
import { Payments } from '@/modules/icommerce/pages/indexPay.jsx'
import { Footer } from '@/templates/footer.jsx'
import { Search } from "@/modules/search/pages/index.jsx";
import { UserInfo } from "@/modules/profile/pages/user/userInfo.jsx";

function App() {
  const location = useLocation();
  const isProfilePage = location.pathname.includes( Path_page.AUTH.MAIN );

  return ( <div
   className={ `page layout-${ Slug( location.pathname === '/' ? 'inicio' : location.pathname ) } m-0 p-0 w-full max-w-full flex flex-col min-h-screen` }>
   { !isProfilePage && <Header/>}
     <main className='flex-1'>
       <Routes>
         <Route index path={ Path_page.HOME } element={ <Home/> }/>
         <Route path={ Path_page.US } element={ <Us/> }/>
         <Route path={ Path_page.SERVICES } element={ <Services/> }/>
         <Route path={ Path_page.STORE } element={ <Store/> }/>
         <Route path={ Path_page.CONTACT } element={ <Contact/> }/>
         <Route path={ Path_page.AUTH.MAIN } element={ <Profile/> }>
           <Route path={ Path_page.AUTH.EDIT_INFO } element={ <UserInfo/> }/>
         </Route>
         <Route path={ Path_page.PAYMENTS } element={ <Payments/> }/>
         <Route path={ Path_page.SEARCH } element={ <Search/> }/>
         <Route path={ Path_page.TERMS_AND_CONDITIONS } element={ <TermsAndConditions/> }/>
         <Route path={ Path_page.ERROR } element={ <Error/> }/>
       </Routes>
       <template className='flex flex-col min-h-screen !hidden'/>
     </main>
     { !isProfilePage && <Footer/> }
   </div>
  );
}

export { App };