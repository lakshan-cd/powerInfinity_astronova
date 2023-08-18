import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TripSchedule from "./Pages/tripSchedule/TripSchedule";
import Signup from "./Pages/Signup";
import BookingForm from "./Components/Booking/BookingForm";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/addreservation" element={<BookingForm />} />
        <Route path="/tripSchedule" element={<TripSchedule />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
