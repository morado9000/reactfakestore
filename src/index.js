import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './components/contexts/ProductContext';
import { CartProvider } from './components/contexts/CartContext';
import ProductDetails from './components/products/ProductDetails';
import AppHeader from './components/AppHeader';
import Cart from './components/products/Cart';
import NotFound from './components/NotFound'
import Checkout from './components/products/Checkout'

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AppHeader/>} >
              <Route path="products" element={<App />} >
                <Route path=":index" element={<ProductDetails />} />
              </Route>
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
              <Route index element={<Navigate to="/products" />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider> 
    </ProductProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
