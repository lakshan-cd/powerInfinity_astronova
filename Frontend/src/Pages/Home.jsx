import React from "react";
import NavBar from "../Components/NavBar";
import { PaymentTest } from "../Components/PaymentTest";
import QRCode from "../Components/QRCode";
const Home = () => {
  return (
    <div>
      <NavBar />
      <PaymentTest />
      <QRCode />
    </div>
  );
};

export default Home;
