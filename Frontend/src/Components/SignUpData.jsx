import React from "react";
import Grid from "@mui/material/Grid";
import { FormControl } from "@mui/material";
import { Namefield, Input, MainGrid, InputText } from "./Style";
import Box from "@mui/material/Box";
const SignUpData = () => {
  return (
    <div>
      <MainGrid>
        <FormControl>
          <InputText>Name</InputText>

          <Namefield>
            <Box>
              <Input />
              <InputText>First Name</InputText>
            </Box>
            <Box>
              <Input />
              <InputText>Last Name</InputText>
            </Box>
          </Namefield>

          <InputText>Email</InputText>
          <Input />
          <InputText>ContactNumber</InputText>
          <Input />

          <Namefield>
            <Box>
              <InputText>City</InputText>
              <Input />
            </Box>
            <Box>
              <InputText>Postal Code</InputText>
              <Input />
            </Box>
          </Namefield>
          <InputText>State</InputText>
          <Input />
          <InputText>Country</InputText>
          <Input />
          <InputText>Password</InputText>
          <Input />
          <InputText>Confirm Password</InputText>
          <Input />
        </FormControl>
      </MainGrid>
    </div>
  );
};

export default SignUpData;
