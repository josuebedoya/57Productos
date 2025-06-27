import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { App } from './App.jsx'
import './main.css'
import { CartProvider } from './context/cart.jsx'
import { CommentProvider } from "@/context/comments.jsx"
import { ParamsUrlProvider } from '@/context/ParamsUrl.jsx'
import { FormatMoneyProvider } from '@/context/formatMoney.jsx'
import ErrorBoundary from "@/components/errorBoundary.jsx";
import { SettingsProvider } from "@/context/settings.jsx";
import { GlobalMetas } from "@/components/metas/global.jsx";

createRoot( document.getElementById( 'root' ) ).render( <StrictMode>
   <Router>
     <ErrorBoundary>
       <SettingsProvider>
         <CommentProvider>
           <ParamsUrlProvider>
             <CartProvider>
               <FormatMoneyProvider>
                 <HelmetProvider>
                   <GlobalMetas/>
                   <App/>
                 </HelmetProvider>
               </FormatMoneyProvider>
             </CartProvider>
           </ParamsUrlProvider>
         </CommentProvider>
       </SettingsProvider>
     </ErrorBoundary>
   </Router>
 </StrictMode>
);