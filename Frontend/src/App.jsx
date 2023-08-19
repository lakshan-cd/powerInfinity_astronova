import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from'./pages/Home';
import Checkout from'./pages/Checkout';
import PaymentForm from './pages/PaymentForm';
import Review from './pages/Review';
import AddressForm from './pages/AddressForm';


function App() {
  return (
    <Router>
      <Routes>
       
        <Route exact path   = "/" element={<Checkout />} />
        <Route path         = "/PaymentForm" element={<PaymentForm />} />
        <Route path         = "/review" element={<Review />} />
        <Route path         = "/address" element={<AddressForm />} />

       
      </Routes>
    </Router>
  );
}

export default App;
