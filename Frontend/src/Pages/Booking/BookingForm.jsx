import React, { useState } from "react";
import SearchAppBar from "../../Components/NavBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, colors, makeStyles } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from '@mui/material/Stack';
import {  SearchIconWrapper,BootstrapButton,FormAroundDiv,FormInPut ,DivAroundPrice} from "./styles";
import ProgressBar from "./ProgressBar";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);  

  const progress = () =>{
    setCurrentStep(currentStep + 1);
  }

  const [flightClass, setflightCLass] = React.useState('');
  // const [class, setClass] = useState('');

  const handleChange = (event) => {
    setflightCLass(event.target.value);
  };
  return (
    <div>
      <div>
        <SearchAppBar  />
      </div>
      <div>
        <ProgressBar currentStep={currentStep}/>
      </div>
      <SearchIconWrapper>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography variant="h4">Booking details</Typography>
          </Grid>
          <Grid item xs={3} sx = {{display : "flex" , gap : "20px"}}>
            <Typography>Click here to fill by voice </Typography>
            <SettingsVoiceIcon/>
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
            />
          </Grid>
          <Grid item xs={5}>
            <FormInPut
              id="standard-basic"
              variant="outlined"
              disabled
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
              label=""
              variant="outlined"
              disabled
            />
          </Grid>
          <Grid item xs={5}>
            <FormInPut
              id="standard-basic"
              label=""
              variant="outlined"
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
              label=""
              variant="outlined"
              disabled
            />
          </Grid>
          <Grid item xs={5}>
            <FormInPut
              id="standard-basic"
              label=""
              variant="outlined"
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
            {/* <FormInPut
              id="standard-basic"
              label=""
              variant="outlined"
              
            /> */}
             
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx = {{ color : "black"}}>Select class</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={flightClass}
                  label="Select class"
                  onChange={handleChange}
                  sx = {{width : "350px" , backgroundColor : "#F7F1F1" , borderRadius: '10px'}}
                >
                  <MenuItem value={10}>Business Class</MenuItem>
                  <MenuItem value={20}>First Class</MenuItem>
                  <MenuItem value={30}>Economy</MenuItem>
                </Select>
              </FormControl>
            
          </Grid>
          <Grid item xs={5}>
            <FormInPut
              id="standard-basic"
              label=""
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
              options={top100Films}
              getOptionLabel={(option) => option.title}
              // defaultValue={[top100Films[4]]}
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
                borderRadius: 10,
                borderColor:"transparent",
                input: { color: "#dddddd", },
                "& .MuiAutocomplete-tag": {
                  backgroundColor: "rgba(128, 128, 128, 0.7)",
                  color: "#2c3e50",
                },
              }}
            />
          </Grid>
          <Grid item xs={10} sx = {{display : "flex" , justifyContent : "center" ,  marginTop : "30px" }}>
          <Typography sx = {{fontSize : "25px"}}>Price</Typography>
            
          </Grid>
          <Grid item xs={10} sx = {{display : "flex" , justifyContent : "center" ,  marginTop : "10px" }}>
              <DivAroundPrice>
                     <Typography sx = {{fontSize : "25px", color : "#CC9200" , fontWeight : "bold"}}> 25000 $</Typography>
              </DivAroundPrice>

            </Grid>
        </Grid>
      </FormAroundDiv>
      <Stack spacing={3} direction="row" justifyContent="flex-end" marginRight={"120px"} marginTop={"30px"} marginBottom={"100px"}>
      {/* <ColorButton variant="contained">Custom CSS</ColorButton> */}
      <BootstrapButton variant="" disableRipple>
        Cancel
      </BootstrapButton>
        <BootstrapButton variant="" disableRipple onPress = {progress}>
          Next
        </BootstrapButton>
    </Stack>

    </div>
  );
};

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
];
export default BookingForm;
