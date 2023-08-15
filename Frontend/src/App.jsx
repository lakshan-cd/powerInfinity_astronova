import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Payment from "./Pages/Payment";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/Payment" element={<Payment />} />

        <Route  path="Payment" element={<Payment />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
