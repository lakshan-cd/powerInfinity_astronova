const express = require("express");
const Stripe = require("stripe");
const Booking = require("../models/bookingModel");
const createError = require("../utils/createError");

const getBookingDetails = async (req, res) => {
  try {
    const booking = await Booking.findById(req.body.bookingId);

    if (!booking) {
      return createError(404, "Booking not found");
    }
    return res.send(booking);
  } catch (err) {
    console.log(err);
  }
};

const bookings = async (req, res) => {
  try {
    const bookingDetails = await Booking.find({ user_id: req.userId });
    if (!bookingDetails) {
      return createError(404, "No booking for this user");
    }

    return res.send(bookingDetails);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  bookings,
  getBookingDetails,
};
