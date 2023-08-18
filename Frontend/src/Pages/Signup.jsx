import React from "react";
import Grid from "@mui/material/Grid";
import SignUpData from "../Components/SignUpComponent/SignUpData";
import {
  SignUpText,
  SignUpBox,
  VoiceBox,
  VoiceIcon,
  ButtonBox,
  SignUpButton,
  LogoGrid,
  FaceId,
  SignUpDataBox,
  ORBox,
  RightGrid, // Assuming this component contains styles for FaceId
} from "../Components/SignUpComponent/Style";
import { Typography, Box } from "@mui/material";
import NavBar from "../Components/NavBar";

const Signup = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid>
          <Box>
            <LogoGrid item xs={6}>
              <img
                src="images/Logo.png"
                style={{
                  width: "200px",
                  marginTop: "20px",
                  marginLeft: "280px",
                }}
              />
            </LogoGrid>

            <FaceId>
              <img
                src="images/FaceId.jpg"
                style={{ width: "300px", borderRadius: "15px" }} // Adjust the width as needed
              />
            </FaceId>
          </Box>
          <ORBox>
            <Typography variant="h5">OR</Typography>
          </ORBox>
        </Grid>
        <RightGrid item xs={6}>
          <SignUpDataBox>
            <SignUpBox>
              <SignUpText>Sign up</SignUpText>
            </SignUpBox>
            <VoiceBox>
              <Typography>Click here to fill by voice</Typography>
              <VoiceIcon />
            </VoiceBox>
          </SignUpDataBox>
          <SignUpData />
          
        </RightGrid>
      </Grid>
    </div>
  );
};

export default Signup;
