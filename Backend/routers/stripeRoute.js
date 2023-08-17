const express = require("express");
const {
  stripePayment,
  paymentDetails,
} = require("../controllers/stripeController");
require("dotenv").config();

const router = express.Router();

router.post("/create-checkout-session", stripePayment);

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  paymentDetails
);

module.exports = router;
