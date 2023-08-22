# Astronova

Welcome to Astronova! This repository contains the code for the Astronova project. Astronova is a web application built using ReactJS, Node.js, Express, and MongoDB. It allows users to explore the cosmos and engage with space-related content.

MongoDB dump link : mongodump --uri mongodb+srv://lenzz:Astronova@cluster0.wff0qit.mongodb.net/Astronova
## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Execution for Booking Process](#execution-for-booking-process)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- NodeJs - 18.10.0
- MongoDB

## Installation

1. Clone the repository:

```sh
$ git clone https://github.com/lakshan-cd/powerInfinity_astronova.git
$ cd powerInfinity_astronova/
```

2. Install dependencies:

Navigate to the Frontend directory and install dependencies:

```sh
$ cd powerInfinity_astronova/Frontend
$ npm install
$ npm install --force # If the previous command doesn't work
```

Navigate to the Backend directory and install dependencies:

```sh
$ cd powerInfinity_astronova/Backend
$ npm install
$ npm install --force # If the previous command doesn't work
```

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following configuration variables:

```env
PORT=4000
MONGO_URI=mongodb+srv://ishaninfo56:Astronova@cluster0.yvvqtt2.mongodb.net/
SECRET=isdhendojoshifuyoshimarioluigipeachbowser
BASE_URL=http://localhost:3000/
SALT=10
HOST=powerinfinity.gmail.com
SERVICE=gmail
EMAIL_PORT=587
SECURE=true
STRIPE_KEY=sk_test_51NfRBgKbiqf0miWK1uERCQ70NU5q3oBYZdTCdk0TI7JJKfVl6DhfpO83qwyRwWpDAnS0dbaST7VPR7IOvDRm5hAv00c9HVOLLv
```

3. Configure Stripe for testing payment:

   1. Install the Stripe CLI using Scoop. Run these commands in PowerShell:

   ```sh
   $ Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time
   $ irm get.scoop.sh | iex
   $ scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
   $ scoop install stripe
   ```

   2. Log in to the Stripe payment dashboard using these credentials:
   
      - Link: [Stripe Dashboard(for below step iii and step iv)](https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local)
      - Email: powerinfinitypow@gmail.com
      - Password: Power@infinity

   3. Open a new CMD window on your machine and run these commands(Use above credentials when it needs):

   ```sh
   $ stripe login
   $ stripe listen --forward-to localhost:4000/api/stripe/webhook
   ```

   4. Open another CMD window without quitting the previous one and run:

   ```sh
   $ stripe trigger payment_intent.succeeded
   ```

## Usage

1. Start the server:

Navigate inside the Frontend directory and run:

```sh
$ npm run dev
```

Navigate inside the Backend directory and run:

```sh
$ npm start
```

2. Open your preferred browser and navigate to:

   [http://localhost:5173/](http://localhost:5173/)

### Execution for Booking Process
To book a journey to the stars, follow these steps:

  1. Navigate to the homepage.

  2. Click on "Book now."

  3. Select the place you want to go, then choose the mode of transportation.
     Example:

     - From: Mars
     - To: Jupiter
     - Mode: StarShip-4
  4. Then, available schedules will be filtered out. Click on the desired schedule and then click "Book now."

  5. Review the booking details. Click "Next" to proceed.

  6. Choose your preferences, such as classes and passengers' details.

  7. Click "Pay now" to confirm your booking.

After the payment is confirmed, you can view your bookings using the "My bookings" tab

## Troubleshooting

If you encounter any issues or need assistance, please contact us at powerinfinitypow@gmail.com.

## Contributing

We welcome contributions from the community! If you'd like to contribute to Astronova, please contact us at powerinfinitypow@gmail.com.

