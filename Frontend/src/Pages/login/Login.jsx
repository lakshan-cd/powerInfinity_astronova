import { Box, Button, Container, CssBaseline, Grid, Typography, colors,  } from '@mui/material'
import React from 'react'
import { heading,main,grid2,grid1,boxmain,formbox,textfield,loginbutton,text,headingBox,textLeft,textCenter } from './loginstyle'
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import LoginFaceId from '../../Components/LoginFaceId';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';

const theme = createTheme()



 const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:Yup.object({
      email: Yup.string().email("Email format is not valid").required("Please enter your email"),
      password: Yup.string().required("Please enter your password")
    }),
    onSubmit: (values) =>{
      console.log(values)
    },
  })
    
  return (
    
      <ThemeProvider theme={theme}>
            <Grid container component="main" sx={main}>
                <CssBaseline/>
               <Grid item md={6} sx={grid1} >
                <LoginFaceId/>
               
               </Grid>
               <Grid item md={6} sm={12} sx={grid2}>
                <Box sx={boxmain}>
                  <Box sx={headingBox}>
               <Typography  sx={heading}>Sign In</Typography>
               </Box>
               <Typography sx={{marginTop:"20px"}}>
                Click here to fill by voice 
               </Typography>

               <Box component='form' sx={formbox} onSubmit={(e)=>{
                e.preventDefault()
                formik.handleSubmit()
               }}>
                <Typography sx={text}>Username/Email</Typography>
               <TextField 
               id="email" 
               name="email"
               type='email'
               value={formik.values.email}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.email ? formik.errors.email :''}
               error={formik.touched.email && Boolean(formik.errors.email)}
               sx={textfield}
               />
               
               <Typography  sx={text}>Password</Typography>
              
               <TextField 
               id="password" 
               name="password"
               type='password'
               color="secondary"
               value={formik.values.password}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.password ? formik.errors.password :''}
               error={formik.touched.password && Boolean(formik.errors.password)}
               sx={textfield}
                />
                <Typography  sx={textLeft}>Forgot Password?</Typography>
                <Box  >
                  <Box sx={headingBox}>
                  <Button
                type='submit'
                 variant='contained'
                 sx={loginbutton}
                 >
                  Sign In
                </Button>
                  </Box>
                  <Typography sx={textCenter}>
                    New to website?  <Link to='/Signup'>Sign Up</Link> 
                  </Typography>
                
                </Box>
               </Box>
               </Box >
                
               </Grid>
            </Grid>
            </ThemeProvider>
        
    
  )
}
export default Login
