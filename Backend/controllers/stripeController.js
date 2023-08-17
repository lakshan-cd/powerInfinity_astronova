const express = require("express");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);
const Booking = require("../models/bookingModel");

const price = 50;
const line_items = [
  {
    price_data: {
      currency: "usd",
      product_data: {
        name: `Class A Tickets`,
      },
      unit_amount: price * 100, // shoud multiply by 100
    },
    quantity: 2,
  },
];

const stripePayment = async (req, res) => {
  const customer = await stripe.customers.create({
    // pass real data from the frontend
    metadata: {
      userId: "sampath",
      tickets_data: JSON.stringify({
        class: "sample",
        users: 4,
        passenger_ids: ["1", "2", "3"],
        distance: "120000Km",
      }),
    },
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    // if not works add userId as id
    customer: customer.id,
    mode: "payment",
    success_url: "http://localhost:5173/",
    cancel_url: "http://localhost:5173/",
  });

  res.send({ url: session.url });
};

//  create booking

const createBooking = async (customer, data) => {
  //here i need to pass the items insted of lineItems

  const ticketsData = JSON.parse(customer.metadata.tickets_data);

  const newBooking = await Booking.create({
    user_id: customer.metadata.userId,
    customer_id: data.customer,
    passsenger_ids: ticketsData.passenger_ids,
    distance: ticketsData.distance,
    class: ticketsData.class,
    total_payment: data.amount_total,
    payment_status: data.payment_status,
    payment_intent: data.payment_intent,
  });

  try {
    const savedOrder = await newBooking.save();
    // console.log("processed order", savedOrder);
  } catch (err) {
    console.log(err);
  }
};

// stripe webhook

// This is your Stripe CLI webhook secret for testing your endpoint locally.

let endpointSecret;

// check and update it for sequrity
// endpointSecret =
//   "whsec_90e3304ba607f43f49a5d9458878e8b76bb28a8a97def862ee16f5b85d064660";

const paymentDetails = async (req, res, next) => {
  const sig = req.headers["stripe-signature"];

  let data;
  let eventType;
  if (endpointSecret) {
    let event;

    // verify the webhhok comes from stripe

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      console.log("Webhook verified");
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      console.log(`Webhook Error: ${err.message}`);
      return;
    }

    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }

  // Handle the event

  if (eventType === "checkout.session.completed") {
    stripe.customers
      .retrieve(data.customer)
      .then((customer) => {
        createBooking(customer, data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  // switch (event.type) {
  //   case "payment_intent.succeeded":
  //     const paymentIntentSucceeded = event.data.object;
  //     // Then define and call a function to handle the event payment_intent.succeeded
  //     break;
  //   // ... handle other event types
  //   default:
  //     console.log(`Unhandled event type ${event.type}`);
  // }

  // Return a 200 response to acknowledge receipt of the event
  res.send().end();
};

module.exports = {
  stripePayment,
  paymentDetails,
};
