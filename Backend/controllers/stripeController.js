const express = require("express");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);
const Booking = require("../models/bookingModel");

let trip_id;
const stripePayment = async (req, res) => {
  trip_id = req.body.paymentDetails.trip_id;
  const passengers = req.body.paymentDetails.passengerIds;

  const passenger_ids = passengers.map((passenger) => passenger.id);
  console.log(passenger_ids);
  const customer = await stripe.customers.create({
    // pass real data from the frontend
    metadata: {
      userId: req.body.paymentDetails.userId,
      tickets_data: JSON.stringify({
        class: req.body.paymentDetails.flightClass,
        users: passenger_ids.length,
        passenger_ids: passenger_ids,
      }),
    },
  });

  const line_items = [
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: `${req.body.paymentDetails.flightClass} Tickets`,
        },
        unit_amount: req.body.paymentDetails.tiketPrice * 100, // shoud multiply by 100
      },
      quantity: passenger_ids.length,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    line_items,
    // if not works add userId as id
    customer: customer.id,
    mode: "payment",
    success_url: "http://localhost:5173/mybookings",
    cancel_url: "http://localhost:5173/",
  });
  res.send({ url: session.url });
};

//  create booking

const createBooking = async (customer, data) => {
  //here i need to pass the items insted of lineItems

  const ticketsData = JSON.parse(customer.metadata.tickets_data);

  const newBooking = await Booking.create({
    trip_id: trip_id,
    user_id: customer.metadata.userId,
    customer_id: data.customer,
    passsenger_ids: ticketsData.passenger_ids,
    class: ticketsData.class,
    total_payment: data.amount_total / 100,
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
