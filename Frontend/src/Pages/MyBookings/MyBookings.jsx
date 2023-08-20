import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent, Divider, Button } from "@mui/material";
import { HeaderContainer, BootstrapButton } from "./styles";
import SearchAppBar from "../../Components/NavBar";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import jwtDecode from "jwt-decode";
import axios from "axios";

const MyBookings = () => {
  function formatTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = (hours % 12 === 0 ? 12 : hours % 12)
      .toString()
      .padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const token = localStorage.getItem("logintoken");
  const decode = jwtDecode(token);
  const userId = decode._id;
  const theme = useTheme();
  const today = new Date().toISOString().split("T")[0];

  const [bookings, setBookkings] = useState([]);
  // const sortedBookings = bookings.sort((a, b) => b.date.localeCompare(a.date));

  //sortBookings(sortedBookings
  // const sortedBookings = bookingsData.sort((a, b) =>
  //     a.date.localeCompare(b.date)
  //   );

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  useEffect(() => {
    const getBookingData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/booking/user-bookings/${userId}`,
          {}
        );
        setBookkings(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getBookingData();
  }, []);

  const [img, setImg] = useState("");

  const sendLink = async (boookingId) => {
    const res = await axios.post("http://localhost:4000/api/qrcode/scan-qr", {
      url: `http://127.0.0.1:5173/ticketDetails/${boookingId}`,
    });
    setImg(res.data);
    console.log(res.data);
  };

  return (
    <div>
      <SearchAppBar />
      <HeaderContainer>
        <Typography variant="h4">My Bookings</Typography>
      </HeaderContainer>

      <div>
        {bookings.map((booking, index) => (
          <div key={index}>
            <Typography
              variant="h6"
              sx={{
                marginLeft: "50px",
                marginRight: "50px",
                marginTop: "20px",
              }}
            >
              {formatDate(booking.createdAt)}
            </Typography>

            <Divider
              sx={{
                my: 4,
                backgroundColor: "#CC9200",
                marginLeft: "50px",
                marginRight: "50px",
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Box sx={{ marginRight: "30px" }}>
                <ArrowDropDownIcon
                  sx={{
                    color: "#CC9200",
                    transform:
                      expandedIndex === index
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    fontSize: "50px",
                    "&:hover": {
                      color: "#fad102", // Color on hover
                    },
                  }}
                  onClick={() => handleToggle(index)}
                />
              </Box>
            </Box>

            {expandedIndex === index && (
              <Card
                sx={{
                  display: "flex",
                  width: "600px",
                  marginLeft: "50px",
                  marginRight: "50px",
                  backgroundColor: "rgba(128, 128, 128, 0.4)",
                  color: "white",
                  overflow: "hidden", // Hide content that exceeds the max height
                  transition: "max-height 0.3s ease-in-out", // Add transition
                  maxHeight: expandedIndex === index ? "1000px" : "0", // Control max height
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Typography component="div" variant="h6">
                          From :
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography component="div" variant="h6">
                          {booking.trip_id.from.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography component="div" variant="h6">
                          To :
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography component="div" variant="h6">
                          {booking.trip_id.to.name}
                        </Typography>
                      </Grid>
                    </Grid>

                    {/* End date */}
                    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                      <Grid item>
                        <Typography component="div">End date :</Typography>
                      </Grid>
                      <Grid item>
                        <Typography component="div">
                          {formatDate(booking.trip_id.endDate)}
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* Mode */}
                    <Grid container spacing={2} sx={{ marginTop: "" }}>
                      <Grid item>
                        <Typography component="div">Mode :</Typography>
                      </Grid>
                      <Grid item>
                        <Typography component="div">
                          {booking.trip_id.mode}
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* Departure */}
                    <Grid container spacing={2} sx={{ marginTop: "" }}>
                      <Grid item>
                        <Typography component="div">Departure :</Typography>
                      </Grid>
                      <Grid item>
                        <Typography component="div">
                          {formatTime(booking.trip_id.departureTime)}
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* Class */}
                    <Grid container spacing={2} sx={{ marginTop: "" }}>
                      <Grid item>
                        <Typography component="div">Class :</Typography>
                      </Grid>
                      <Grid item>
                        <Typography component="div">{booking.class}</Typography>
                      </Grid>
                    </Grid>
                    {/* Passenger id */}
                    <Grid container spacing={2} sx={{ marginTop: "" }}>
                      <Grid item>
                        <Typography component="div">Passenger Id :</Typography>
                      </Grid>
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {/* Your content goes here */}
                    </Typography>
                  </CardContent>
                </Box>
                <Box>
                  <Box
                    sx={{
                      width: 150,
                      border: "2px solid #CC9200",
                      margin: "16px",
                      alignSelf: "flex-end",
                      padding: "10px 50px 20px",
                      position: "relative",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#CC9200",
                        fontSize: "16px",
                        fontWeight: "bold",
                        padding: "",
                        marginBottom: "10px",
                      }}
                    >
                      E ticket
                    </Typography>
                    {img && (
                      <a
                        href={`http://127.0.0.1:5173/ticketDetails/${booking._id}`}
                      >
                        {" "}
                        <CardMedia
                          component="img"
                          sx={{ width: "150px", marginTop: "10px" }}
                          image={img}
                          alt="Live from space album cover"
                        />
                      </a>
                    )}

                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#fff ",
                        fontSize: "14px",
                        padding: "5px",
                      }}
                    >
                      Or
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#fff ",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "",
                      }}
                    >
                      Use your FaceID
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "10px",
                      marginRight: " 15px",
                      marginBottom: "20px",
                    }}
                  >
                    <BootstrapButton
                      onClick={() => sendLink(booking._id)}
                      variant=""
                      disableRipple
                    >
                      Generate QR
                    </BootstrapButton>
                  </Box>
                </Box>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
