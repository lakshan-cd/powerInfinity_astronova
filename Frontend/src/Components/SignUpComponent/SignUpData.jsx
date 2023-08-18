import React, { useState } from "react";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  MenuItem,
} from "@mui/material";
import { Namefield, Input, MainGrid, InputText, SelectDrop,ButtonBox,SignUpButton } from "./Style";
import Box from "@mui/material/Box";
import countrydata from "./countrydata.json";
import {useFormik} from 'formik'
import * as Yup from 'yup'
const SignUpData = () => {

  const[country, setCountry]=useState('');
 const[state, setState]=useState([]);
 const[stateName, setStateName]= useState('');
 const[countryError, setCountryError]=useState(false)
 const[stateError,setStateError]=useState(false)

 const countryValidation = () =>{
  if(!country){
    setCountryError(true)
    console.log("no country")
    return true
  }
 }
 const stateValidation = () =>{
  if(!stateName){
    setStateError(true)
    console.log("no state")
    return true
  }
 }

  // formik validation
  const formik = useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      email:'',
      contactno:'',
      city:'',
      postalcode:'',
      password:'',
      conformpw:'',
      terms:false
    },

    validationSchema:Yup.object({
      firstname:Yup.string().required("Please enter your First Name"),
      lastname: Yup.string().required("Please enter your Last Name"),
      contactno:Yup.string().matches(/^[0-9]+$/,'value must be a number').required("Please enter a valid contact number"),
      city:Yup.string().required("Please enter your city name"),
      postalcode:Yup.string().required("Please enter your postal code"),
      email: Yup.string().email("Email format is not valid").required("Please enter your email"),
      password: Yup.string().required("Please enter your password")
      .matches(/^(?=.*[A-Za-z0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/,'please enter atleast one special character,a Capital letter and a Number '),
      conformpw:Yup.string().oneOf([Yup.ref("password"),null],"passwords do not match").required("Please conform your password"),
      terms:Yup.bool().oneOf([true], 'You need to accept the terms and conditions').required('')
    }),
    
    onSubmit: (values,props) =>{
      if(countryValidation() || stateValidation()){
         return
      }
      console.log(values)
    }
  })

  
 const handlecountry=(e)=>{
  const getcountryId= e.target.value;
  const getStatedata= countrydata.find(country=>country.country_id===getcountryId).states;
  const countryName= countrydata.find(country=>country.country_id===getcountryId).country_name;
  setState(getStatedata);
  setCountry(countryName);

}

console.log(country);
const handlestate = (e)=>{
  const stateid= e.target.value;
  console.log(stateid);
  const stName= state.find(states =>states.state_id===stateid).state_name
  setStateName(stName);
}
console.log(stateName)

  return (
    <div>
      <MainGrid>
        <FormControl component="form" 
        onSubmit={(e) =>{
          e.preventDefault()
          formik.handleSubmit()
        }}>
          
          <InputText>Name</InputText>

          <Namefield>
            <Box >
              <Input inputProps={{
               style: {
               height: '10px',
                       },}}
              name="firstname"
              id="firstname" 
               type='text'
               value={formik.values.firstname}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.firstname ? formik.errors.firstname :''}
               error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                />
              <InputText>First Name</InputText>
            </Box>
            <Box>
              <Input inputProps={{
               style: {
               height: '10px',
                       },}}
              name="lastname"
              id="lastname" 
               type='text'
               value={formik.values.lastname}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.lastname ? formik.errors.lastname :''}
               error={formik.touched.lastname && Boolean(formik.errors.lastname)}
               />
              <InputText>Last Name</InputText>
            </Box>
          </Namefield>

          <InputText>Email</InputText>
          <Input inputProps={{
               style: {
               height: '10px',
                       },}}
          name="email"
          id="email" 
           type='email'
           value={formik.values.email}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.email ? formik.errors.email :''}
               error={formik.touched.email && Boolean(formik.errors.email)} 
               />
          <InputText>ContactNumber</InputText>
          <Input inputProps={{
               style: {
               height: '10px',
                       },}}
          name="contactno"
          id="contactno" 
           type='number'
           value={formik.values.contactno}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.contactno ? formik.errors.contactno :''}
               error={formik.touched.contactno && Boolean(formik.errors.contactno)} 
               />

          <Namefield>
            <Box>
              <InputText>City</InputText>
              <Input inputProps={{
               style: {
               height: '10px',
                       },}}
              name="city"
              id="city" 
               type='text'
               value={formik.values.city}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.city ? formik.errors.city :''}
               error={formik.touched.city && Boolean(formik.errors.city)} 
               />
            </Box>
            <Box>
              <InputText>Postal Code</InputText>
              <Input inputProps={{
               style: {
               height: '10px',
                       },}}
              name="postalcode"
              id="postalcode" 
               type='text'
               value={formik.values.postalcode}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               helperText={formik.touched.postalcode ? formik.errors.postalcode :''}
               error={formik.touched.postalcode && Boolean(formik.errors.postalcode)}  />
            </Box>
          </Namefield>
          <InputText>State</InputText>
          <FormControl error={stateError}>
          <SelectDrop 
          error={stateError} 
          erroText="Please select State"
          onChange={(e) => {
            handlestate(e)
            setStateError(false)
          }}>
            <MenuItem value="">Select a State</MenuItem>
            {state.map((getstate, index) => (
              <MenuItem value={getstate.state_id} key={index}>
                {getstate.state_name}
              </MenuItem>
            ))}
          </SelectDrop>
          <FormHelperText>please select state</FormHelperText>
          </FormControl>

          <InputText>Country</InputText>
          <FormControl error={countryError}>
          <SelectDrop  
          onChange={(e) => {
            handlecountry(e)
            setCountryError(false)
          }}>
            <MenuItem value="">Select a Country</MenuItem>
            {countrydata.map((getcountry, index) => (
              <MenuItem value={getcountry.country_id} key={index}>
                {getcountry.country_name}
              </MenuItem>
            ))}
          </SelectDrop>
          <FormHelperText>Please select Country</FormHelperText>
          </FormControl>
          
          <InputText >Password</InputText>
          <Input inputProps={{
               style: {
               height: '10px',
                       },}}
          name="password"
          id="password" 
           type='password' 
           value={formik.values.password}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           helperText={formik.touched.password ? formik.errors.password :''}
           error={formik.touched.password && Boolean(formik.errors.password)} />
          <InputText>Confirm Password</InputText>
          <Input inputProps={{
               style: {
               height: '10px',
                       },}}
          name="conformpw"
          id="conformpw" 
           type='password'
           value={formik.values.conformpw}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           helperText={formik.touched.conformpw ? formik.errors.conformpw :''}
           error={formik.touched.conformpw && Boolean(formik.errors.conformpw)} />
          <Box>
            {" "}
            <FormControlLabel sx={{marginTop:"20px"}}
              required
              control={<Checkbox name="terms"
              onChange={formik.handleChange}
              checked={formik.values.terms}
              onError={formik.errors.terms}
                sx={{ color: "white" }} />}
              label={
                <span style={{ color: "white" }}>
                  By Sign Up you agree to the terms and conditions *
                </span>
              }
            />
          </Box>
          <ButtonBox>
            <SignUpButton type="submit">Sign Up</SignUpButton>
          </ButtonBox>
        </FormControl>
      </MainGrid>
    </div>
  );
};

export default SignUpData;
