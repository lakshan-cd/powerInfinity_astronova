const express = require("express");
const {
  bookings,
  getBookingDetails,
} = require("../controllers/bookingController");
const router = express.Router();

router.get("/user-bookings/:userId", bookings);
router.get("/bookings/:id", getBookingDetails);

module.exports = router;
