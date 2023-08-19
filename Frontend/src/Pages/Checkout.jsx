import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import NavBar from "../Components/NavBar";
import backgroundImageUrl from '../assets/back.png';


const steps                           = ['Booking', 'Billed', 'Payment'];




function getStepContent(step) {
  switch (step) {
    case 0                            : 
      return <AddressForm />;
    case 1                            : 
      return <PaymentForm />;
    case 2                            : 
      return <Review />;
    default                           : 
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep]   = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const backgroundStyles = {
    backgroundImage                   : `url('../assets/back.png')`,
    backgroundSize                    : 'cover',
    backgroundRepeat                  : 'no-repeat',
    backgroundAttachment              : 'fixed',
    backgroundColor                   : '#000000',
    
    
  };

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar
        position                      = "absolute"
        color                         = "default"
        elevation                     = {0}
        sx={{
          position                    : 'relative',
          borderBottom                : (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <NavBar />

       
      </AppBar>
      <Container style                = {backgroundStyles}>
      <Container component            = "main"  maxWidth="md" sx={{ mb: 4 }}
      style                           = {backgroundStyles}>
       
       <Paper
  variant                             = "outlined"
  sx={{
    m                                 : 0,
    p                                 : { xs: 2, md: 3 },
    backgroundColor                   : '#E0F2F1',
    backgroundImage                   : `url(${backgroundImageUrl})`,
    backgroundSize                    : '100vw 100vh',
    backgroundAttachment              : 'fixed',
    position                          : 'absolute',
    top                               : 0,
    left                              : 0,
    right                             : 0,
    bottom                            : 0,
    zIndex                            : -1,
  }}
>

           <Typography variant        = "h4" gutterBottom
            sx={{
              fontWeight              : 'bold',
              color                   : '#CC9200',
              marginTop               : '40px',
            }}>
            Booking Details
          </Typography>

          <Paper
  variant                             = "outlined"
  sx={{
    my                                : { xs: 3, md: 6 },
    p                                 : { xs: 2, md: 3 },
    width                             : '60%',
    position                          : 'absolute',
    top                               : '20px',
    left                              : 0,
    right                             : 0,
    margin                            : '0 20px 0 0',
    backgroundColor                   : 'rgba(224, 242, 241, 0)',
  }}
>

         
<Stepper activeStep                   = {activeStep} sx={{ pt: 3, pb: 5 }}>
  {steps.map((label) => (
    <Step key                         = {label}>
      <StepLabel>
        <Typography
          variant                     = "h6"
          component                   = "div"
          sx={{
            fontSize                  : '1.2rem',
            fontWeight                : 'bold',
            color                     : '#ffff',
          }}
        >
          {label}
        </Typography>
      </StepLabel>
    </Step>
  ))}
</Stepper>


          {activeStep === steps.length ? (
            <React.Fragment>
             <Typography variant      = "h5" gutterBottom style={{ color: 'white' }}>
  Thank you for your order.
</Typography>
<Typography variant                   = "subtitle1" style={{ color: 'white' }}>
  Your order number is #2001539. We have emailed your order confirmation, and
  will send you an update when your order has shipped.
</Typography>

            </React.Fragment>
          )                           : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx                 = {{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
  <Button onClick                     = {handleBack} sx={{ mt: 3, ml: 1, color: '#CC9200' }}>
    Back
  </Button>
)}

<Button
  variant                             = "contained"
  onClick                             = {handleNext}
  sx                                  = {{ mt: 3, ml: 1, backgroundColor: '#CC9200' }}
>
  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
</Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        </Paper>
      </Container>
      </Container>
    </React.Fragment>
  );
}