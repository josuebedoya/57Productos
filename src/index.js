import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Home } from './Layout/Home';
import { About } from './Layout/About';
import { PageError } from './Layout/Error';
import { Services } from './Layout/Services';
import { Store } from './Layout/Store';
import { Contact } from './Layout/Contact';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/nosotros' element={<About />} />
                    <Route path='/servicios' element={<Services />} />
                    <Route path='/tienda' element={<Store />} />
                    <Route path='/contacto' element={<Contact />} />
                    <Route path='*' element={<PageError />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);