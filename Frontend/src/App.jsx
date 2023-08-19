import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from'./pages/Home';
import Checkout from'./Pages/Checkout';
import PaymentForm from './Pages/PaymentForm';
import Review from './Pages/Review';
import AddressForm from './Pages/AddressForm';


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
