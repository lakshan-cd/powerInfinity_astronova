import { Box, Button, Container, CssBaseline, Grid, Typography, colors,  } from '@mui/material'
import React from 'react'
import { heading,main,grid2,grid1,boxmain,formbox,textfield,loginbutton,text,headingBox } from './loginstyle'
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
               <Grid item md={6} sm={12} sx={grid2}>
                <Box sx={boxmain}>
                  <Box sx={headingBox}>
               <Typography  sx={heading}>Sign In</Typography>
               </Box>

               <Box component='form' sx={formbox}>
                <Typography sx={text}>Username/Email</Typography>
               <TextField 
               id="email" 
               name="email"
               type='email'
               sx={textfield}
               
               />
               
               <Typography  sx={text}>Password</Typography>
               
               <TextField 
               id="password" 
               name="password"
               type='password'
               color="secondary"
               sx={textfield}
                />
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
                
                </Box>
               </Box>
               </Box >
                
               </Grid>
            </Grid>
            </ThemeProvider>
        
    
  )
}
export default Login
