const express = require("express");
const {
  bookings,
  getBookingDetails,
} = require("../controllers/bookingController");
const router = express.Router();

router.get("/user-bookings/:userId", bookings);
router.get("/bookings/:bookingid", getBookingDetails);

module.exports = router;
