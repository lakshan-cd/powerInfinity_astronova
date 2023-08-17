const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    //This user ID is then linked to the booking entry in your system. This allows you to associate a booking with a specific user in your application.
    user_id: {
      type: String,
      required: true,
    },
    // field contains the ID of the customer who made the payment. It provides by Stripe
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
