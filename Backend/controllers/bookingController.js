
const Booking = require("../models/bookingModel");
const createError = require("../utils/createError");

const getBookingDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findById(id).populate({
      path: "trip_id",
      populate: { path: "from to" }
    });

    if (!booking) {
      return createError(404, "Booking not found");
    }
    return res.send(booking);
  } catch (err) {
    console.log(err);
  }
};

const bookings = async (req, res) => {
  const { userId } = req.params;
  try {
    const bookingDetails = await Booking.find({ user_id: userId }).populate({
      path: "trip_id",
      populate: { path: "from to" },
    });
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
