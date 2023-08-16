import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TripSchedule from "./Pages/TripSchedule";
import BookingForm from "./Components/Booking/BookingForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addreservation" element={<BookingForm />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
