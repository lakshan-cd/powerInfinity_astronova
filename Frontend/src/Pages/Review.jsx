import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const products = [
  {
    name                                  : 'Product 1',
    desc                                  : 'Package 1',
    price                                 : '$9.99',
  },
  {
    name                                  : 'Product 2',
    desc                                  : 'Package 2',
    price                                 : '$3.45',
  },
  {
    name                                  : 'Product 3',
    desc                                  : 'Package 3',
    price                                 : '$6.51',
  },
  {
    name                                  : 'Product 4',
    desc                                  : 'Package  4',
    price                                 : '$14.11',
  },
  { name                                  : 'Transport', desc: '', price: 'Free' },
];

const addresses                           = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name                                  : 'Card type', detail: 'Visa' },
  { name                                  : 'Card holder', detail: 'Mr John Smith' },
  { name                                  : 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name                                  : 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
       <Paper
  variant                                 = "outlined"
  sx={{
    p                                     : { xs: 2, md: 3 },
    backgroundColor                       : 'rgba(255, 255, 255, 0.3)',
          marginTop                       : '20px',
          color                           : 'white',
          borderRadius                    : '20px',
  }}
>
      <Typography variant                 = "h6" gutterBottom>
        Summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key                   = {product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary         = {product.name} secondary={product.desc} />
            <Typography variant           = "body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx                      = {{ py: 1, px: 0 }}>
          <ListItemText primary           = "Total" />
          <Typography variant             = "subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing             = {2}>
        <Grid item xs                     = {12} sm={6}>
          <Typography variant             = "h6" gutterBottom sx={{ mt: 2 }}>
            Address
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction    = "column" xs={12} sm={6}>
          <Typography variant             = "h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key         = {payment.name}>
                <Grid item xs             = {6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs             = {6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </Paper>
    </React.Fragment>
  );
}