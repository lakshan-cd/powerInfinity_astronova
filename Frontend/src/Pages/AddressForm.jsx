import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/system';
import NavBar from '../Components/NavBar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import AddIcon from '@mui/icons-material/Add';

const WhiteBackgroundStyledTextField = styled(TextField)({
  marginBottom                      : theme => theme.spacing(2),
  '& .MuiInputBase-input': {
    color                           : 'black',
    backgroundColor                 : 'white',
    borderRadius                    : 10,
    padding                         : '10px 12px',
  },
  '& .MuiInputLabel-root': {
    color                           : 'black',
    backgroundColor                 : 'white',
    padding                         : '0 4px',
    borderRadius                    : '10px 10px 0 0',
  },
  '& .MuiInputLabel-root.MuiInputLabel-shrink': {
    backgroundColor                 : 'transparent',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color                           : 'white',
  },
});

const FormContainer = styled('div')({
  marginBottom                      : theme => theme.spacing(3),
});

const StyledTextField = styled(TextField)({
  marginBottom                      : theme => theme.spacing(2),
});

const ImageContainer = styled('div')({
  flex                              : 1,
  display                           : 'flex',
  position                          : 'absolute',
  justifyContent                    : 'center',
  alignItems                        : 'center',
});


export default function AddressForm() {
  return (
   
    <div className                  = "pay">
   
      <Paper elevation              = {7}  sx={{ margin: 0, padding: 3, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
        <FormContainer>
         
          <Grid container spacing   = {2}>
           
                  <Grid item xs     = {12} sm={6}>
          <Typography variant       = "h6" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '0px' }}>
            From
          </Typography>
          <WhiteBackgroundStyledTextField
            required
            id                      = "From"
            name                    = "From"
            label                   = ""
            fullWidth
            autoComplete            = "given-From"
            variant                 = "standard"
          />
        </Grid>

           
        <Grid item xs               = {12} sm={6} >
          <Typography variant       = "h6" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '0px' }}>
            To
          </Typography>
          <WhiteBackgroundStyledTextField
            required
            id                      = "To"
            name                    = "To"
          
            fullWidth
            autoComplete            = "given-To"
            variant                 = "standard"
          />
        </Grid>


           
        <Grid item xs               = {12} sm={6}>
          <Typography variant       = "h6" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '0px' }}>
            From Date
          </Typography>
          <WhiteBackgroundStyledTextField
            required
            id                      = "From-Date"
            name                    = "From-Date"
            
            fullWidth
            autoComplete            = "From-Date"
            variant                 = "standard"
          />
        </Grid>

           
        <Grid item xs               = {12} sm={6}>
          <Typography variant       = "h6" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '0px' }}>
            To Date
          </Typography>
          <WhiteBackgroundStyledTextField
            required
            id                      = "To-Date"
            name                    = "To-Date"
            
            fullWidth
            autoComplete            = "To-Date"
            variant                 = "standard"
          />
        </Grid>


            
        <Grid item xs               = {12} sm={6}>
          <Typography variant       = "h6" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '0px' }}>
            Mode
          </Typography>
          <WhiteBackgroundStyledTextField
            required
            id                      = "Mode"
            name                    = "Mode"
            
            fullWidth
            autoComplete            = "Mode"
            variant                 = "standard"
          />
        </Grid>

            
        <Grid item xs               = {12} sm={6}>
          <Typography variant       = "h6" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '0px' }}>
            Departure
          </Typography>
          <WhiteBackgroundStyledTextField
            required
            id                      = "Departure"
            name                    = "Departure"
            
            fullWidth
            autoComplete            = "Departure"
            variant                 = "standard"
          />
        </Grid>


           
        <Grid item xs               = {12} sm={6}>
          <Typography variant       = "h6" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '0px' }}>
            Class
          </Typography>
          <WhiteBackgroundStyledTextField
            required
            id                      = "Class"
            name                    = "Class"
           
            fullWidth
            autoComplete            = "Class"
            variant                 = "standard"
          />
        </Grid>

            
        <Grid item xs               = {12} sm={6}>
          <Typography variant       = "h6" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '0px' }}>
            Passenger Count
          </Typography>
          <WhiteBackgroundStyledTextField
            required
            id                      = "Passenger-Count"
            name                    = "Passenger-Count"
           
            fullWidth
            autoComplete            = "Passenger-Count"
            variant                 = "standard"
          />
        </Grid>


            
        <Grid item xs               = {12} sm={6}>
          <Typography variant       = "h6" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '0px' }}>
            Add Passengers
          </Typography>
          <WhiteBackgroundStyledTextField
            required
            id                      = " Add-Passengers"
            name                    = "Add-Passengers"
            
            fullWidth
            autoComplete            = "Add-Passengers"
            variant                 = "standard"
          />
        </Grid>

           
                  <Grid item xs     = {12} sm={6}>
          <Typography variant       = "h6" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '0px' }}>
            Search by username
          </Typography>
          <WhiteBackgroundStyledTextField
            required
            id                      = "Search-by-username"
            name                    = "Search-by-username"
            
            fullWidth
            autoComplete            = "Search-by-username"
            variant                 = "standard"
          />
        
        <Button variant             = "contained" style={{ marginBottom: '-10px', backgroundColor: 'rgba(255, 255, 255, 0.2)'  }} sx={{ mt: 3, mb: 2 }}>
      <AddIcon />
     
    
    </Button>
         
     
     
      
        </Grid>



           
          </Grid>
          <Grid item xs             = {3} sm={3}>
          <Typography variant       = "h6" gutterBottom style={{ color: 'white', fontWeight: 'bold', marginBottom: '0px' }}>
            Price
          </Typography>
          <WhiteBackgroundStyledTextField
            required
            id                      = "Price"
            name                    = "Price"
            
            fullWidth               = ""
            autoComplete            = "Price"
            variant                 = "standard"
          />
        </Grid>

          <Link to                  = "/Checkout">
          

          </Link>

        </FormContainer>
        
      </Paper>

     


    
 
   </div>
  );
}
