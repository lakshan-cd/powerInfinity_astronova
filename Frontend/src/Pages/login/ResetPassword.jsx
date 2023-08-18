import { Box, Button, Container, CssBaseline, Grid, Typography, colors,  } from '@mui/material'
import React, { useState } from 'react'
import { heading,main,grid2,grid1,boxmain,formbox,textfield,loginbutton,text,headingBox,textLeft,textCenter } from './loginstyle'
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import axios from 'axios';

const theme = createTheme()



 const ResetPassword = () => {
  const [formError,setFormError] = useState(false)
  const[errorMessage,setErrorMessage] = useState('')
  const [formSuccess,setFormSuccess] = useState(false)

  const formik = useFormik({
    initialValues: {
      password: "",
      conformpw:""
    },
    validationSchema:Yup.object({
      password: Yup.string().required("Please enter your password"),
      conformpw:Yup.string().oneOf([Yup.ref("password"),null],"passwords do not match").required("Please conform your password"),
    }),
    onSubmit: (values) =>{
      console.log(values)
      axios.post("http://localhost:4000/api/user/reset",{
            email : values.email
              }).then((res)=>{
                console.log(res)
                if(res.status == 201){
                  setFormError(false)
                  setFormSuccess(true)


                }
                console.log(res)
              }).catch((err) =>{
                console.log(err)
                setErrorMessage(err.response.data.message)
                setFormError(true)
                
              })
    },
  })
    
  return (
    
      <ThemeProvider theme={theme}>
            <Grid container component="main" sx={main}>
                <CssBaseline/>
               
               <Grid item md={12} sm={12} xs={12} sx={grid2}>
                <Box sx={boxmain}>
                  <Box sx={headingBox}>
               <Typography  sx={heading}>Reset Password</Typography>
               </Box>
               <Typography sx={{marginTop:"20px"}}>
                Click here to fill by voice <SettingsVoiceIcon sx={{color:"#CC9200"}}/>
               </Typography> 

               <Box component='form' sx={formbox} onSubmit={(e)=>{
                e.preventDefault()
                formik.handleSubmit()
               }}>
                <Typography sx={text}>Password</Typography>
               <TextField 
               id="password" 
               name="password"
               type='password'
               value={formik.values.password}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.password ? formik.errors.password :''}
               error={formik.touched.password && Boolean(formik.errors.password)}
               sx={textfield}
               />
               
               <Typography  sx={text}>Conform Password</Typography>
              
               <TextField 
               id="conformpw" 
               name="conformpw"
               type='password'
               color="secondary"
               value={formik.values.conformpw}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.conformpw ? formik.errors.conformpw :''}
               error={formik.touched.conformpw && Boolean(formik.errors.conformpw)}
               sx={textfield}
                />

{formError ?  <Alert severity="error" sx={{marginTop:"15px"}}>{errorMessage}</Alert> : null}
 {formSuccess ?  <Alert severity="success" sx={{marginTop:"15px"}}>Password Changed Successfully</Alert> : null}
                
                <Box  >
                  <Box sx={headingBox}>
                  <Button
                type='submit'
                 variant='contained'
                 sx={loginbutton}
                 >
                  Reset Password
                </Button>
                  </Box>
                </Box>
               </Box>
               </Box >
                
               </Grid>
               
            </Grid>
            </ThemeProvider>
        
    
  )
}
export default ResetPassword
