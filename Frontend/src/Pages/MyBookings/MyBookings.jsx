import React from "react";
import { Typography, Card, CardContent, Divider } from "@mui/material";
import { HeaderContainer } from "./styles";
import SearchAppBar from "../../Components/NavBar";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
const bookingsData = [
  {

    date: "2023-08-20",
    title: "Booking 1",
    description: "Description for Booking 1",
  },
  // ... other booking objects
];

const MyBookings = () => {
    const theme = useTheme();
  const today = new Date().toISOString().split("T")[0];

  const sortedBookings = bookingsData.sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  return (
    <div>
      <SearchAppBar />
      <HeaderContainer>
        <Typography variant="h4">My Bookings</Typography>
      </HeaderContainer>

      {sortedBookings.map((booking, index) => (
        <div key={index}>
          <Typography variant="h6">{booking.date}</Typography>

          <Divider sx={{ my: 1, color: "#CC9200" }} />

          <Card sx={{ display: "flex" , width : "600px"}}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {booking.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  {theme.direction === "rtl" ? (
                    <SkipNextIcon />
                  ) : (
                    <SkipPreviousIcon />
                  )}
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  {theme.direction === "rtl" ? (
                    <SkipPreviousIcon />
                  ) : (
                    <SkipNextIcon />
                  )}
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="/static/images/cards/live-from-space.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
