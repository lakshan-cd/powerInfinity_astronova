import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TripSchedule from "./Pages/TripSchedule";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TripSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
