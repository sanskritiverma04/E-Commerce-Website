import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import ProductList from './Products/ProductList';
import Cart from './Cart/Cart';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import ProductView from './Products/ProductView';
import CheckOut from './Cart/CheckOut';
import OrderConfirmation from './Pages/OrderConfirmation';

function App() {


  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/category' element={<Category />}/>
          <Route path='/men' element={<Men category="Men"/>}/>
          <Route path='/women' element={<Women category="Women"/>}/>
          <Route path='/Kids' element={<Kids category="Kids"/>}/>
          <Route path='/productlist' element={<ProductList />}/>
          <Route path='/product-view' element={<ProductView />}>
            <Route path= ':productId' element={<ProductView />}/>
          </Route>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/contact' element={<ContactUs />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/orderconfirm' element={<OrderConfirmation />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
    </Router>
  )
}
export default App;