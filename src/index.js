import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/Styles.scss';
import { Path_page } from './Routes';
import { CartProvider } from './Components/Context/cartContext';

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

export default function App() {
    return (
        <>
           <CartProvider> {/* Use context to access at the cart */ }
              <Router>
                  <Header />
                  <Routes>
                      <Route index path={Path_page.HOME} element={<Home />} />
                      <Route path={Path_page.US} element={<About />} />
                      <Route path={Path_page.SERVICES} element={<Services />} />
                      <Route path={Path_page.STORE} element={<Store />} />
                      <Route path={Path_page.CONTACT} element={<Contact />} />
                      <Route path={Path_page.PROFILE} element={<Profile />} />
                      <Route path={Path_page.PAYMENTS} element={<Payments/>}/>
                      <Route path={Path_page.TERMSANDCONDITIONS} element={<TermsAndConditions />} />
                      <Route path={Path_page.ERROR} element={<PageError />} />
                  </Routes>
              </Router>
            </CartProvider>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);