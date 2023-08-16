import React from "react";
import Grid from "@mui/material/Grid";
import SignUpData from "../Components/SignUpData";
import {
  SignUpText,
  SignUpBox,
  VoiceBox,
  VoiceIcon,
  ButtonBox,
  SignUpButton,
} from "../Components/Style";
import { Typography } from "@mui/material";
const Signup = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{}}>
        <Grid item xs={6}>
          <img src="images/Logo.png" />
        </Grid>

        <Grid item xs={6}>
          <SignUpBox>
            <SignUpText>Sign up</SignUpText>
          </SignUpBox>
          <VoiceBox>
            <Typography>Click here to fill by voice</Typography>
            <VoiceIcon />
          </VoiceBox>
          <SignUpData />
          <ButtonBox>
            <SignUpButton>Sign Up</SignUpButton>
          </ButtonBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
