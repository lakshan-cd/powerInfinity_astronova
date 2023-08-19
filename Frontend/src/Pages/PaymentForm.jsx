import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

export default function PaymentForm() {
  return (
    <React.Fragment>
      
      <Paper
      elevation={9}  
        variant="outlined"
        sx={{
          p: { xs: 2, md: 3 },
          backgroundColor: 'rgba(255, 255, 255, 0.3)', // Black background with opacity
          marginTop: '20px',
          color: 'white', 
          borderRadius: '20px',
        }}
      >
        <Typography variant="h6" gutterBottom style={{ color: 'white', fontWeight: 'bold' }}>
          Payment method
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
              InputLabelProps={{ style: { color: 'white' } }} // Label color
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              InputLabelProps={{ style: { color: 'white' } }} // Label color
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              InputLabelProps={{ style: { color: 'white' } }} // Label color
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
              InputLabelProps={{ style: { color: 'white' } }} // Label color
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
              style={{ color: 'white' }} // Label color
            />
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}
