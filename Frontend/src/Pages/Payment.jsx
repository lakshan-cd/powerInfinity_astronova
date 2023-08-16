import React, { useState } from "react";
import { Container, Paper, TextField, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleConfirm = () => {
    // Handle the payment confirmation logic here
    console.log("Payment confirmed:", cardNumber, expiryDate, cvv);
  };

  return (
    <div class = "pay">
      <NavBar />

     <Container elevation={7} sx={{ margin: 0, padding: 3, width: "50%", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
        <Paper elevation={7} sx={{ margin: 5, padding: 3, width: "70%", height: 500, backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
          <form>
            <TextField label="Card Number" fullWidth value={cardNumber} onChange={handleCardNumberChange} margin="normal" />
            <TextField label="Expiry Date" fullWidth value={expiryDate} onChange={handleExpiryDateChange} margin="normal" />
            <TextField label="CVV" fullWidth value={cvv} onChange={handleCvvChange} margin="normal" />
            <Grid container spacing={2} justifyContent="center" marginTop={2}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleConfirm}>
                  Confirm
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" component={Link} to="/">
                  Back
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
        </Container>
     
    </div>
  );
};

export default Payment;
