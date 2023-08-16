import React from "react";
import Grid from "@mui/material/Grid";
import { FormControl, TextField, Typography } from "@mui/material";
import { Namefield, Input } from "./Style";
import Signup from "./../Pages/Signup";
import Box from "@mui/material/Box";
const SignUpData = () => {
  return (
    <div>
      <Grid>
        <FormControl>
          <Typography>Name</Typography>

          <Namefield>
            <Box>
              <Typography>First Name</Typography>
              <Input />
            </Box>
            <Box>
              <Typography>Last Name</Typography>
              <Input />
            </Box>
          </Namefield>

          <Typography>Email</Typography>
          <Input />
          <Typography>ContactNumber</Typography>
          <Input />

          <Namefield>
            <Box>
              <Typography>City</Typography>
              <Input />
            </Box>
            <Box>
              <Typography>Postal Code</Typography>
              <Input />
            </Box>
          </Namefield>
          <Typography>State</Typography>
          <Input />
          <Typography>Country</Typography>
          <Input />
          <Typography>Password</Typography>
          <Input />
          <Typography>Confirm Password</Typography>
          <Input />
        </FormControl>
      </Grid>
    </div>
  );
};

export default SignUpData;
