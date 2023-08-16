import styled from '@emotion/styled'
import { Box, Typography,Button } from '@mui/material'
import React from 'react'
import logo from '../../images/Logo.png'
import faceid from '../../images/faceid.jpg'

const Main = styled(Box)(({theme})=>({
    display: "flex",
    flexDirection:"column",
      alignItems: "center",
      marginTop:"10px"
       
}))

const Text = styled(Typography)(({theme}) =>({
   fontSize: "50px",
    marginTop:'30px',
}))

const googleButton = {
  marginTop: "20px",
  marginLeft:"50px",
    minWidth:"200px",
    backgroundColor:"#CC9200", 
    "&:hover": {
        backgroundColor: "#CC9200",
        color: "white",
        border: " 1px solid #CC9200"
      },
      border: " 1px solid #CC9200",
}

const LoginFaceId = () => {
  return (
    <div>
        <Main>
            <Box>
                <img src={logo} alt='logo'style={{width:"300px"}}/>
               
               <Typography sx={{fontSize:40,marginTop:"30px"}}>
                  Sign In with FaceID
                </Typography>
               
                <img src={faceid} alt='logo' style={{width:"300px", height:'300px', marginTop:"30px"}}/>
                <Typography sx={{fontSize:40,marginTop:"20px", marginLeft:"140px"}}>
                  or
                </Typography>
                <Button
                type='submit'
                 variant='contained'
                sx={googleButton }
                 >
                  Sign In with Google
                </Button>
            </Box>
        </Main>
    </div>
  )
}

export default LoginFaceId