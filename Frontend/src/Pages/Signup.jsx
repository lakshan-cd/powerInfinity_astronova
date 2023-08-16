import React from "react";
import Grid from "@mui/material/Grid";
import SignUpData from "../Components/SignUpData";
import { Typography } from "@mui/material";

const Signup = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          Google signup
        </Grid>

        <Grid item xs={6}>
          <Typography>Sign up</Typography>
          <SignUpData />
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
