import React from "react";
import SearchAppBar from "../NavBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, colors, makeStyles } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const SearchIconWrapper = styled("div")(({ theme }) => ({
  marginTop: "50PX",
  paddingLeft: "50px",
}));

const FormAroundDiv = styled("div")(({ theme }) => ({
  marginTop: "50PX",
  marginLeft: "50px",
  padding: "50px",
  width: "80%",
  // backgroundColor : "#ececec",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  backgroundColor: "rgba(128, 128, 128, 0.4)", // Gray color with 50% opacity
  borderRadius: "20px",
}));

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#CC9200',
    borderColor: '#CC9200',

    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'none',
      borderColor: '#CC9200',
      color: "#CC9200",
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    //   backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });


const BookingForm = () => {
  return (
    <div>
      <div>
        <SearchAppBar />
      </div>
      <SearchIconWrapper>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography variant="h4">Booking details</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>Click here to fill by voice</Typography>
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
            <TextField
              id="outlined-basic"
              variant="outlined"
              //  value="Custom"
              inputProps={{
                style: {
                  width: "350px",
                },
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="standard-basic"
              variant="outlined"
              sx={{ input: { color: "#dddddd", width: "350px" } }}
              focused
            />
          </Grid>
          <Grid item xs={7}>
            <Typography>From - Date</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography>To - date</Typography>
          </Grid>
          <Grid item xs={7}>
            <TextField
              id="standard-basic"
              label=""
              variant="outlined"
              sx={{ input: { color: "#dddddd", width: "350px" } }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="standard-basic"
              label=""
              variant="outlined"
              sx={{ input: { color: "#dddddd", width: "350px" } }}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography>Mode</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography>Departure time</Typography>
          </Grid>
          <Grid item xs={7}>
            <TextField
              id="standard-basic"
              label=""
              variant="outlined"
              sx={{ input: { color: "#dddddd", width: "350px" } }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="standard-basic"
              label=""
              variant="outlined"
              sx={{ input: { color: "#dddddd", width: "350px" } }}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography>Class</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography>Passenger count</Typography>
          </Grid>
          <Grid item xs={7}>
            <TextField
              id="standard-basic"
              label=""
              variant="outlined"
              sx={{ input: { color: "#dddddd", width: "350px" } }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="standard-basic"
              label=""
              variant="outlined"
              sx={{ input: { color: "#dddddd", width: "350px" } }}
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
                input: { color: "#dddddd" },
                "& .MuiAutocomplete-tag": {
                  backgroundColor: "#fff",
                  color: "#000",
                },
              }}
            />
          </Grid>
        </Grid>
      </FormAroundDiv>
      <Stack spacing={3} direction="row" >
      {/* <ColorButton variant="contained">Custom CSS</ColorButton> */}
      <BootstrapButton variant="" disableRipple>
        Cancel
      </BootstrapButton>
      <BootstrapButton variant="" disableRipple>
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