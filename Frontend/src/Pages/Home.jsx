import React from "react";
import NavBar from "../Components/NavBar";

import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar />


      <div class = "pay">
        <Button/>
    </div>

      <Link to="/payment">
        <button>Go to Payment</button>
      </Link>

      <div class = "pay">
        <Button/>
    </div>
    <Button/>
      <Link to="/addreservation">
        <button>booking</button>
      </Link>
      <Button/>
    </div>
  );
};

export default Home;
