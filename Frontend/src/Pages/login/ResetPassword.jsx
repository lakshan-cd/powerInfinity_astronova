import { Alert, Box, Button, Container, CssBaseline, Grid, Typography, colors,  } from '@mui/material'
import React, { useState } from 'react'
import { heading,main,grid2,grid1,boxmain,formbox,textfield,loginbutton,text,headingBox,textLeft,textCenter } from './loginstyle'
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import axios from 'axios';
import{Link, useNavigate, useParams} from 'react-router-dom'

const theme = createTheme()

 const ResetPassword = () => {
  const {id} = useParams()
  const [formError,setFormError] = useState(false)
  const[errorMessage,setErrorMessage] = useState('')
  const [formSuccess,setFormSuccess] = useState(false)
  const navigte = useNavigate()
  console.log(id)
  const mainGrid ={
    height:'150vh',
    color:"white",
    backgroundImage: 'url(..\back.png)',
    backgroundColor: "black",
    backgroundSize:'cover',
  
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',}

  const formik = useFormik({
    initialValues: {
      password: "",
      conformpw:"",
      token:""
    },
    validationSchema:Yup.object({
      password: Yup.string().required("Please enter your password"),
      conformpw:Yup.string().oneOf([Yup.ref("password"),null],"passwords do not match").required("Please conform your password"),
      token: Yup.string().required("Please enter verification token from Email"),
    }),
    onSubmit: (values) =>{
      console.log(values)
      axios.post(`http://localhost:4000/api/user/reset/${id}/${values.token}`,{
            password : values.password
              }).then((res)=>{
                console.log(res)
                if(res.status == 201){
                  console.log(res)
                  setFormError(false)
                  setFormSuccess(true)
                  navigte('/signin')


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
            <Grid container component="main" sx={mainGrid}>
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
               value={formik.values.conformpw}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.conformpw ? formik.errors.conformpw :''}
               error={formik.touched.conformpw && Boolean(formik.errors.conformpw)}
               sx={textfield}
                />
                <Typography  sx={text}>verification Token</Typography>
                <p style={{fontSize:12,marginTop:"0px"}}> (Please enter verification token from Email)</p>
              
              <TextField 
              id="token" 
              name="token"
              type='text'
              value={formik.values.token}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.token ? formik.errors.token :''}
              error={formik.touched.token && Boolean(formik.errors.token)}
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
                  <Box sx={headingBox}>
                  <Typography sx={{marginTop:"15px"}}><Link to={'/'}>Home</Link></Typography>
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
