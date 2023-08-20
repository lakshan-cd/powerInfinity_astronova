const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const { SelectClass } = require("../utils/Constants");

const bookingSchema = new Schema(
  {
    trip_id: {
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
    // from the Astronova system
    user_id: {
      type: String,
    },
    // from the stripe
    customer_id: {
      type: String,
    },
    passsenger_ids: {
      type: [String],
    },
    total_payment: {
      type: Number,
    },
    payment_status: {
      type: String,
    },
    payment_intent: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Booking", bookingSchema);
