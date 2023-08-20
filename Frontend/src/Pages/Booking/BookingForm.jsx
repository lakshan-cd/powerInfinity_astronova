import React, { useEffect, useState } from "react";
import SearchAppBar from "../../Components/NavBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, colors, makeStyles } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import {
  SearchIconWrapper,
  BootstrapButton,
  FormAroundDiv,
  FormInPut,
  DivAroundPrice,
} from "./styles";
import ProgressBar from "./ProgressBar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Box from '@mui/material/Box';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const location = useLocation();
  const queryParams = location.state;

  //date and time
  const dateTimeString = queryParams.departureTime;
  const dateTime = new Date(dateTimeString);
  // Extract the date and time components
  const fromDate = dateTime.toISOString().slice(0, 10); // "2023-08-20"
  const departureTime = dateTime.toISOString().slice(11, 19); // "12:00:00"

  //end date
  const endDateString = queryParams.endDate;
  const endTime = new Date(endDateString);
  const toDate = endTime.toISOString().slice(0, 10);

  useEffect(() => {
    console.log("data from timetable", queryParams);
    console.log("hi");
  }, [queryParams]);

  const [flightClass, setflightCLass] = React.useState("");
  // const [class, setClass] = useState('');

  const handleChange = (event) => {
    setflightCLass(event.target.value);
  };

  //show passengers count
  const [selectedPassengers, setSelectedPassengers] = useState([]);

  let idsArray;
  const handlePassengerSelection = (event, newValue) => {
    setSelectedPassengers(newValue);
  };

  const token = localStorage.getItem("logintoken");
  const decode = jwtDecode(token);
  let totalCost = queryParams.price;
  const paymentDetails = {
    userId: decode._id,
    class: flightClass,
    passengerIds: selectedPassengers,
    trip_id: idsArray,
    tiketPrice: totalCost,
  };

  const payment = async () => {
    setCurrentStep(currentStep + 1);

    axios
      .post("http://localhost:4000/api/stripe/create-checkout-session", {
        paymentDetails,
      })
      .then((res) => {
        console.log(res.data.url);
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  //calculate the total price

  // console.log(totalCost);
  // price
  if (flightClass == "Business Class") {
    totalCost = totalCost + 3000 * selectedPassengers.length;
  } else if (flightClass == "First Class") {
    totalCost = totalCost + 2000 * selectedPassengers.length;
  } else if (flightClass == "Economy Class") {
    totalCost = totalCost + 1000 * selectedPassengers.length;
  }

  return (
    <div>
      <div>
        <SearchAppBar />
      </div>
      <div>
        <ProgressBar currentStep={currentStep} />
      </div>
      <SearchIconWrapper>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography variant="h4">Booking details</Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", gap: "20px" }}>
            <Typography>Click here to fill by voice </Typography>
            <SettingsVoiceIcon />
          </Grid>
        </Grid>
      </SearchIconWrapper>

      <FormAroundDiv>
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <Typography>From</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography>To</Typography>
          </Grid>

          <Grid item xs={7}>
            <FormInPut
              id="standard-basic"
              variant="outlined"
              disabled
              label={queryParams.from.name}
            />
          </Grid>
          <Grid item xs={5}>
            <FormInPut
              id="standard-basic"
              variant="outlined"
              disabled
              label={queryParams.to.name}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography>From - Date</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography>To - date</Typography>
          </Grid>
          <Grid item xs={7}>
            <FormInPut
              id="standard-basic"
              variant="outlined"
              disabled
              label={fromDate}
            />
          </Grid>
          <Grid item xs={5}>
            <FormInPut
              id="standard-basic"
              variant="outlined"
              label={toDate}
              disabled
            />
          </Grid>
          <Grid item xs={7}>
            <Typography>Mode</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography>Departure time</Typography>
          </Grid>
          <Grid item xs={7}>
            <FormInPut
              id="standard-basic"
              variant="outlined"
              label={queryParams.mode}
              disabled
            />
          </Grid>
          <Grid item xs={5}>
            <FormInPut
              id="standard-basic"
              variant="outlined"
              label={departureTime}
              disabled
            />
          </Grid>
          <Grid item xs={7}>
            <Typography>Class</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography>Passenger count</Typography>
          </Grid>
          <Grid item xs={7}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
                Select class
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={flightClass}
                label="Select class"
                onChange={handleChange}
                sx={{
                  width: "350px",
                  backgroundColor: "#F7F1F1",
                  borderRadius: "10px",
                }}
              >
                <MenuItem value={"Business Class"}>Business Class</MenuItem>
                <MenuItem value={"First Class"}>First Class</MenuItem>
                <MenuItem value={"Economy Class"}>Economy</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <FormInPut
              id="standard-basic"
              label={selectedPassengers.length}
              variant="outlined"
              disabled
            />
          </Grid>
          <Grid item xs={10}>
            <Typography>Add passengers</Typography>
          </Grid>
          <Grid item xs={10}>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={peopleData}
              getOptionLabel={(option) => `${option.id} - ${option.name}`}
              value={selectedPassengers}
              onChange={handlePassengerSelection}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search the NIC"
                  placeholder="Passenger NiC"
                />
              )}
              sx={{
                backgroundColor: "#fff",
                borderRadius: 2,
                borderColor: "white",
                input: { color: "#000" },
                "& .MuiAutocomplete-tag": {
                  backgroundColor: "rgba(128, 128, 128, 0.7)",
                  color: "#2c3e50",
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Typography sx={{ fontSize: "25px" }}>Price</Typography>
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <DivAroundPrice>
              <Typography
                sx={{ fontSize: "25px", color: "#CC9200", fontWeight: "bold" }}
              >
                {" "}
                {totalCost} $
              </Typography>
            </DivAroundPrice>
          </Grid>
        </Grid>
      </FormAroundDiv>
      <Stack
        spacing={3}
        direction="row"
        justifyContent="flex-end"
        marginRight={"120px"}
        marginTop={"30px"}
        marginBottom={"100px"}
      >
        {/* <ColorButton variant="contained">Custom CSS</ColorButton> */}
        <Link to="/tripSchedule">
          <BootstrapButton variant="" disableRipple>
            Cancel
          </BootstrapButton>
        </Link>
        <BootstrapButton onClick={payment} variant="" disableRipple>
          Pay Now
        </BootstrapButton>
      </Stack>
    </div>
  );
};

const peopleData = [
  { name: "Sydney ", id: "3572393437" },
  { name: "Sydney", id: "6602816831" },
  { name: "Nicholas", id: "7378516408" },
  { name: "Dominik", id: "0515654277" },
  { name: "Alexander", id: "9017700195" },
  { name: "Jessica", id: "2464266481" },
  { name: "Lyndon", id: "0987021184" },
  { name: "Emily", id: "7050806441" },
  { name: "Fiona", id: "7050806441" },
  { name: "Belinda", id: "3453256369" },
  { name: "Maddie", id: "1528410720" },
  { name: "Maximilian", id: "5328197323" },
  { name: "Frederick", id: "9478168260" },
  { name: "Samantha", id: "5465748941" },
  { name: "Marcus", id: "5421636808" },
  { name: "Ryan", id: "5411682648" },
  { name: "Robert", id: "0355779355" },
  { name: "Miley", id: "0069185329" },
];
export default BookingForm;
