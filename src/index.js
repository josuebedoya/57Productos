import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import { Header } from './Components/Header'
import { Home } from './Layout/Home';
import { About } from './Layout/About';
import { PageError } from './Layout/Error';
import { Services } from './Layout/Services';
import { Store } from './Layout/Store';
import { Contact } from './Layout/Contact';
import { Profile } from './Layout/Profile';

export default function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/nosotros' element={<About />} />
                    <Route path='/servicios' element={<Services />} />
                    <Route path='/tienda' element={<Store />} />
                    <Route path='/contacto' element={<Contact />} />
                    <Route path='/perfil' element={<Profile />} />
                    <Route path='*' element={<PageError />} />
                </Routes>
            </Router>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);