import {createRoot} from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router';
import { Path_page, Slug } from './Routes.js';
import { CartProvider } from './Components/Context/cartContext.jsx';
import  {CommentProvider} from './Components/Context/commentsContext.jsx';
import './Styles/Styles.scss';
import { Header } from './Templates/Header.jsx'
import { Home } from './Layout/Home.jsx';
import { About } from './Layout/About.jsx';
import { PageError } from './Layout/Error.jsx';
import { Services } from './Layout/Services.jsx';
import { Store } from './Layout/Store.jsx';
import { Contact } from './Layout/Contact.jsx';
import { Profile } from './Layout/Profile.jsx';
import { TermsAndConditions } from './Layout/TermsAndConditions.jsx'
import { Payments } from './Layout/Payments.jsx';
import  {Footer} from './Templates/Footer.jsx';

export default function App() {
  // const location = useLocation();

    return (
        <>
          <p>Hola</p>
          {/*<CommentProvider> /!* Use context to access at the cart */ }*
          {/*  <CartProvider> /!* Comments  Users*/ }
          {/*    <Header/>*/}
          {/*    <main id='Page' className={`page page-${Slug(location.pathname === '/' ? 'inicio': location.pathname)} m-0 p-0 w-full max-w-full h-auto max-h-full`}>*/}
          {/*      <Routes>*/}
          {/*        <Route index path={Path_page.HOME} element={<Home />} />*/}
          {/*        <Route path={Path_page.US} element={<About />} />*/}
          {/*        <Route path={Path_page.SERVICES} element={<Services />} />*/}
          {/*        <Route path={Path_page.STORE} element={<Store />} />*/}
          {/*        <Route path={Path_page.CONTACT} element={<Contact />} />*/}
          {/*        <Route path={Path_page.PROFILE} element={<Profile />} />*/}
          {/*        <Route path={Path_page.PAYMENTS} element={<Payments/>}/>*/}
          {/*        <Route path={Path_page.TERMS_AND_CONDITIONS} element={<TermsAndConditions />} />*/}
          {/*        <Route path={Path_page.ERROR} element={<PageError />} />*/}
          {/*      </Routes>*/}
          {/*    </main>*/}
          {/*    <Footer/>*/}
          {/*  </CartProvider>*/}
          {/*</CommentProvider>*/}
        </>
    )
};

createRoot(document.getElementById('root')).render(<App /> );