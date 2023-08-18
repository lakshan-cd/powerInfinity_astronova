import React from "react";
import axios from "axios";
// import { useSelector } from "react-redux";

const cartItems = [{ id: 1, class: "A", users: 3 }];

const handleCheckout = () => {
  const userId = 1;
  axios
    .post("http://localhost:4000/api/stripe/create-checkout-session", {
      cartItems,
      userId,
    })
    .then((res) => {
      console.log(res.data.url);
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    })
    .catch((err) => console.log(err.message));
};

export const PaymentTest = () => {
  return (
    <div>
      <button onClick={() => handleCheckout()}>Check Out</button>
    </div>
  );
};
