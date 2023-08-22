const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const { SelectClass } = require("../utils/Constants");

const bookingSchema = new Schema(
  {
    trip: {
      type: Schema.Types.ObjectId,
      ref: "Trip",
    },
    class: {
      type: String,
      enum: [
        SelectClass.FirstClass,
        SelectClass.BuisnessClass,
        SelectClass.EconomyClass,
      ],
    },
    BookingDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Booking", bookingSchema);
