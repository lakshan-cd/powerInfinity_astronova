import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/login/Login";

import Signup from "./Pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<Login/>}/>
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
