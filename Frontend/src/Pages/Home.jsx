import React from "react";
import NavBar from "../Components/NavBar";
import { PaymentTest } from "../Components/PaymentTest";
import QRCode from "../Components/QRCode";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <NavBar />
      <PaymentTest />
      <QRCode />
      <Footer />
    </div>
  );
};

export default Home;
