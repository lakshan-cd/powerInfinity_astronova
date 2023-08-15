const Booking = require("../models/BookingModel");

const createBooking = async (req, res) => {
  const {
    from,
    to,
    startDate,
    endDate,
    mode,
    departureTime,
    SelectClass,
    BookingDate,
  } = req.body;
  try {
    const BookingOne = await Booking.create({
      from,
      to,
      startDate,
      endDate,
      mode,
      departureTime,
      SelectClass,
      BookingDate,
    });
    const BookingData = await BookingOne.save();
    return res.send({
      BookingData,
      from,
      to,
      startDate,
      endDate,
      mode,
      departureTime,
      SelectClass,
      BookingDate,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports = { createBooking };
