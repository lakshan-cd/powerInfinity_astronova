import React, { useState } from 'react'; 
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
import imageSrc1 from '../assets/image 2.png';
import imageSrc2 from '../assets/image 3.png';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { fontSize } from '@mui/system';

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

  const [open, setOpen] = React.useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
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
  variant="contained"
  onClick={() => {
    if (activeStep === steps.length - 1) {
      handleOpen(); 
    } else {
      handleNext(); 
    }
  }}
  sx={{ mt: 3, ml: 1, backgroundColor: '#CC9200' }}
>
  {activeStep === steps.length - 1 ? 'Pay now' : 'Next'}
</Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>

        <Paper 
  variant                             = "outlined"
  sx={{
    my                                : { xs: 3, md: 6 },
    p                                 : { xs: 2, md: 3 },
    width                             : '38%',
    height : '80%',
    position                          : 'absolute',
    top                               : '20',
    left                              : '',
    right                             : 10,
    margin                            : '0 20px 0 0',
    backgroundColor                   : 'rgba(224, 242, 241, 0.2)',
    borderRadius                    : '20px',
  }}
>
{activeStep === 1 && ( 
    <img
      src={imageSrc1}
      alt="Image description"
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
    />
  )}

{activeStep === 2 && ( 
    <img
      src={imageSrc2}
      alt="Image description"
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
    />
  )}

  </Paper>
        </Paper>
       
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 385,
      height: 491,
      bgcolor: 'rgba(255, 255, 255, 1)',
      border: '2px solid #000',
      boxShadow: 24,
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      p: 4,
      borderRadius: '81px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
    }}
  >

<CheckCircleIcon sx={{ color: 'orange', fontSize: '100px' }} />

    <Typography
      id="modal-modal-title"
      variant="h3"
      component="h2"
      color="orange"
    >
      Success
    </Typography>
    <Typography
      id="modal-modal-description"
      variant="h5"
      component="h2"
      sx={{ mt: 2 }}
      color="orange"
    >
      Your Payment was successful
    </Typography>

    <Button
  variant="contained"
  
  sx={{ mt: 3, ml: 1, backgroundColor: '#CC9200' }}
>
  Continue
</Button>


  </Box>
</Modal>



      </Container>
      </Container>
    </React.Fragment>
  );
}