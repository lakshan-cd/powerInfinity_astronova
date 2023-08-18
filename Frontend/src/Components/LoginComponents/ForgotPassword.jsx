import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import {text} from "../../Pages/login/loginstyle"
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:350,
  backgroundColor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:"white",
  display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItem:"center"
};

const textfield = {

    minWidth:{sm:"200px",md:"300px"},
    opacity:"0.7",
    // padding: [theme.spacing(0, 0),
  marginRight: "10px",
  marginTop: "10px",
  borderRadius: 2,
  backgroundColor: "#F7F1F1",
  height: "55px",
  "&:hover": {
    height: "55px",
    "& fieldset": {
      borderColor: "transparent", // Change the border color on hover
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent", // Change the default border color
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Change the border color on hover
    },
  },}

  const loginbutton ={
    
    marginTop: "20px",
    minWidth:"100px",
    backgroundColor:"#CC9200", 
    "&:hover": {
        backgroundColor: "#CC9200",
        color: "white",
        border: " 1px solid #CC9200"
      },
      border: " 1px solid #CC9200",
      
}

const ForgotPassword = (props) => {

    

    const formik = useFormik({
        initialValues: {
          email: "",
          
        },
        validationSchema:Yup.object({
          email: Yup.string().email("Email format is not valid").required("Please enter your email"),
        }),
        onSubmit: (values) =>{
          console.log(values)
        },})

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Forgot password
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            Please Enter your email below to send verification mail
          </Typography>
          <Typography sx={text}>Email</Typography>
               <TextField 
               id="email" 
               name="email"
               type='email'
               value={formik.values.email}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.email ? formik.errors.email :''}
               error={formik.touched.email && Boolean(formik.errors.email)}
               sx={textfield} />

                <Button
                type='submit'
                 variant='contained'
                 sx={loginbutton}
                 >
                  Send Email
                </Button>
                <Typography sx={{marginTop:"10px"}}>
                      <Link onClick={() =>{props.close()}}>Close </Link>  
                    </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default ForgotPassword