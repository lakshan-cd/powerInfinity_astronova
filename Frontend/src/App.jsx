import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import BookingForm from "./Pages/Booking/BookingForm";
import BookingForm from "./Pages/Booking/BookingForm";
import MyBookings from "./Pages/MyBookings/MyBookings";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addreservation" element={<BookingForm />} />
        <Route path="/mybookings" element={<MyBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
