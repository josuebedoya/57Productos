import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App.jsx'
import './main.css'
import { CartProvider } from './context/cart.jsx'
import { CommentProvider } from "@/context/comments.jsx"
import { ParamsUrlProvider } from '@/context/ParamsUrl.jsx'
import { FormatMoneyProvider } from '@/context/formatMoney.jsx'
import ErrorBoundary from "@/utils/errorBoundary.jsx";
import { SettingsProvider } from "@/context/settings.jsx";
import { Metas } from "@/components/metas.jsx";

createRoot( document.getElementById( 'root' ) ).render( <StrictMode>
   <Router>
     <ErrorBoundary>
       <SettingsProvider>
         <CommentProvider>
           <ParamsUrlProvider>
             <CartProvider>
               <FormatMoneyProvider>
                 <Metas>
                   <link rel='preconnect' href='https://fonts.googleapis.com'/>
                   <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin/>
                   <link
                    href='https://fonts.googleapis.com/css2?family=Bree+Serif&family=Satisfy&family=Quicksand:wght@300..700&family=Oswald:wght@200..700&display=swap'
                    rel='stylesheet'/>
                 </Metas>
                 <App/>
               </FormatMoneyProvider>
             </CartProvider>
           </ParamsUrlProvider>
         </CommentProvider>
       </SettingsProvider>
     </ErrorBoundary>
   </Router>
 </StrictMode>
);