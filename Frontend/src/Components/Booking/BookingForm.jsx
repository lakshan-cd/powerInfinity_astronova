import React from "react";
import SearchAppBar from "../NavBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import useStyles from "./styles";

const BookingForm = () => {
  const classes = useStyles();

  return (
    <div>
      <SearchAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <Paper className={classes.item}>
              <Typography variant="h4">Booking details</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.item}>xs=4</Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BookingForm;
