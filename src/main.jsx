import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App.jsx'
import '/src/styles/_glogal.scss'
import './main.css'
import { CartProvider } from './context/cart.jsx'
import { CommentProvider } from "@/context/comments.jsx"

createRoot( document.getElementById( 'root' ) ).render( <StrictMode>
  <CommentProvider>
    <CartProvider>
      <Router>
        <App/>
      </Router>
    </CartProvider>
  </CommentProvider>
</StrictMode> );