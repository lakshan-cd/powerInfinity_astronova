import React, { useState } from "react";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import { Namefield, Input, MainGrid, InputText, SelectDrop } from "./Style";
import Box from "@mui/material/Box";
import countrydata from "./countrydata.json";
const SignUpData = () => {
  const { countryid, setCountryid } = useState("");
  const { state, setState } = useState([]);
  const [stateid, setStateid] = useState("");

  const handlecountry = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = countrydata.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
    //console.log(getcountryId);
  };

  const handlestate = (e) => {
    const stateid = e.target.value;
    //console.log(stateid);
    setStateid(stateid);
  };
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
          <SelectDrop onChange={(e) => handlecountry(e)}>
            <MenuItem value="">Select a country</MenuItem>
            {countrydata.map((getcountry, index) => (
              <MenuItem value={getcountry.country_id} key={index}>
                {getcountry.country_name}
              </MenuItem>
            ))}
          </SelectDrop>
          <InputText>Password</InputText>
          <Input />
          <InputText>Confirm Password</InputText>
          <Input />
          <Box>
            {" "}
            <FormControlLabel
              required
              control={<Checkbox sx={{ color: "white" }} />}
              label={
                <span style={{ color: "white" }}>
                  By Sign Up you agree to the terms and conditions *
                </span>
              }
            />
          </Box>
        </FormControl>
      </MainGrid>
    </div>
  );
};

export default SignUpData;
