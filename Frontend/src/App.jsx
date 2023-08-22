import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from'./Pages/Checkout';
import PaymentForm from './Pages/PaymentForm';
import Review from './Pages/Review';
import AddressForm from './Pages/AddressForm';

import { useState } from "react";
import Login from "./Pages/login/Login";

import TripSchedule from "./Pages/tripSchedule/TripSchedule";
import Signup from "./Pages/Signup";
// import BookingForm from "./Components/Booking/BookingForm";
import ResetPassword from "./Pages/login/ResetPassword";
import ForgotPassword from "./Components/LoginComponents/ForgotPassword";
import AboutUs from "./Pages/AboutUs/AboutUs";
// import BookingForm from "./Pages/Booking/BookingForm";
import BookingForm from "./Pages/Booking/BookingForm";
import MyBookings from "./Pages/MyBookings/MyBookings";
import Logout from "./Pages/login/logout";
import TicketDetails from "./Pages/ticketDetails/TicketDetails";
// import signOut from "./Pages/login/Logout";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route exact path   = "/" element={<Checkout />} />
        <Route path         = "/PaymentForm" element={<PaymentForm />} />
        <Route path         = "/review" element={<Review />} />
        <Route path         = "/address" element={<AddressForm />} />

       
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/resetpassword/:id" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/addreservation" element={<BookingForm />} />
        <Route path="/tripSchedule" element={<TripSchedule />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/signout" element={<Logout />} />
        <Route path="/ticketDetails/:id" element={<TicketDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
