import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import './Styles/Styles.scss';
import { Path_page, Slug } from './Routes';
import { CartProvider } from './Components/Context/cartContext';
import  {CommentProvider} from "./Components/Context/commentsContext";

import { Header } from './Templates/Header'
import { Home } from './Layout/Home';
import { About } from './Layout/About';
import { PageError } from './Layout/Error';
import { Services } from './Layout/Services';
import { Store } from './Layout/Store';
import { Contact } from './Layout/Contact';
import { Profile } from './Layout/Profile';
import { TermsAndConditions } from './Layout/TermsAndConditions'
import { Payments } from "./Layout/Payments";
import  {Footer} from "./Templates/Footer";

export default function App() {
  const location = useLocation();

    return (
        <>
          <CommentProvider> {/* Use context to access at the cart */ }
            <CartProvider> {/* Comments  Users*/ }
              <Header/>
              <main id='Page' className={`page page-${Slug(location.pathname === '/' ? 'inicio': location.pathname)} m-0 p-0 w-full max-w-full h-auto max-h-full`}>
                <Routes>
                  <Route index path={Path_page.HOME} element={<Home />} />
                  <Route path={Path_page.US} element={<About />} />
                  <Route path={Path_page.SERVICES} element={<Services />} />
                  <Route path={Path_page.STORE} element={<Store />} />
                  <Route path={Path_page.CONTACT} element={<Contact />} />
                  <Route path={Path_page.PROFILE} element={<Profile />} />
                  <Route path={Path_page.PAYMENTS} element={<Payments/>}/>
                  <Route path={Path_page.TERMS_AND_CONDITIONS} element={<TermsAndConditions />} />
                  <Route path={Path_page.ERROR} element={<PageError />} />
                </Routes>
              </main>
              <Footer/>
            </CartProvider>
          </CommentProvider>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router><App />  </Router>);