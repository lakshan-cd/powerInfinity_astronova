import { Box, Button, Container, CssBaseline, Grid, Typography, colors,  } from '@mui/material'
import React from 'react'
import { heading,main,grid2,grid1,boxmain,formbox,textfield,loginbutton,text,centerAlign,textHeading } from './loginstyle'
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';

const theme = createTheme()

 const Login = () => {
    
  return (
    
      <ThemeProvider theme={theme}>
            <Grid container component="main" sx={main}>
                <CssBaseline/>
               <Grid item md={6} sx={grid1} >
                <Box sx={{alignItems:"center"}}>
                
                </Box>
               
               </Grid>
               <Grid item md={6} sx={grid2}>
                <Box sx={boxmain}>
                  <Box sx={centerAlign}>
               <Typography  sx={heading}>Sign In</Typography>
               </Box>

               <Box component='form' sx={formbox}>

                <Typography sx={textHeading}>Email</Typography>
  
                <Box sx={centerAlign}>
                <TextField 
               id="email" 
               label="Email"
               name="email"
               type='email'
               sx={textfield}
               />
                </Box>
               
                <Typography  sx={text}>Password</Typography>

                <Box sx={centerAlign}>
                <TextField 
               id="password" 
               label="Password"
               name="password"
               type='password'
               
               sx={textfield}
                />
                </Box>
               
                
                <Box sx={centerAlign} >
                <Button
                type='submit'
                 variant='contained'
                  
                 sx={loginbutton}
                 
                 
                 >
                  Sign In
                </Button>
                </Box>
               </Box>
               </Box >
                
               </Grid>
            </Grid>
            </ThemeProvider>
        
    
  )
}
export default Login
