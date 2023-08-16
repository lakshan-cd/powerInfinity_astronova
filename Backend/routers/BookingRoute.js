const express = require("express");
const { createBooking } = require("../controllers/BookingController");
const router = express.Router();

router.post("/createBooking", createBooking);

module.exports = router;
