import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const Main = styled(Box)(({theme})=>({
    display: "flex",
    flexDirection:"column",
      alignItems: "center",
}))

const LoginFaceId = () => {
  return (
    <div>
        <Main>
            <Box>
                sign in 
            </Box>
        </Main>
    </div>
  )
}

export default LoginFaceId