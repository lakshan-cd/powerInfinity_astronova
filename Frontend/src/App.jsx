import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TripSchedule from "./Pages/tripSchedule/TripSchedule";
import Home from "./Pages/Home";
import Payment from "./Pages/Payment";
import Signup from "./Pages/Signup";
import BookingForm from "./Components/Booking/BookingForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/Payment" element={<Payment />} />

        <Route  path="Payment" element={<Payment />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/addreservation" element={<BookingForm />} />
        <Route path="/tripSchedule" element={<TripSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


