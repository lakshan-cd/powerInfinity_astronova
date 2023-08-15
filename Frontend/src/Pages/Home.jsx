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

    </div>
  );
};

export default Home;
