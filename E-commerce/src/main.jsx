import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Pages/pages.css'
import ShopContextProvider from './ShopContext.jsx'
import './Products/product.css'
import './Cart/cart.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ShopContextProvider>
);
