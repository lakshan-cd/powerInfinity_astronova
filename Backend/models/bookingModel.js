const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    // userId is an identifier for our customer that booked the ticket
    user_id: {
      type: String,
      required: true,
    },
    // field contains the ID of the customer who made the payment. It
    customer_id: {
      type: String,
      required: true,
    },

    // to store passenger ids  from user database
    passsenger_ids: {
      type: [String],
      required: true,
    },
    distance: {
      type: String,
    },
    class: {
      type: String,
    },
    total_payment: {
      type: Number,
      required: true,
    },
    payment_status: { type: String, default: "incomplete" },
    payment_intent: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
