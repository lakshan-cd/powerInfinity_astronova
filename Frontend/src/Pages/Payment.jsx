import React, { useState } from "react";
import NavBar from "../Components/NavBar";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Payment submitted:", cardNumber, expiryDate, cvv);
  };

  return (
    <div>
      <NavBar />

      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
        </label>
        <br />
        <label>
          Expiry Date:
          <input type="text" value={expiryDate} onChange={handleExpiryDateChange} />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" value={cvv} onChange={handleCvvChange} />
        </label>
        <br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
