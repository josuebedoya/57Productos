import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import '@/i18n/i18n.js';
import './main.css'
import { CartProvider } from './modules/icommerce/context/cart.jsx'
import { CommentProvider } from "@/modules/comments/context/comments.jsx"
import { ParamsUrlProvider } from '@/modules/search/context/ParamsUrl.jsx'
import { FormatMoneyProvider } from '@/context/formatMoney.jsx'
import ErrorBoundary from "@/modules/error/components/errorBoundary.tsx";
import { SettingsProvider } from "@/context/settings.jsx";
import { GlobalMetas } from "@/components/metas/global.jsx";
import { App } from './App.jsx'

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