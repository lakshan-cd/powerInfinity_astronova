import React  , {useState} from "react";
import { Typography, Card, CardContent, Divider,Button } from "@mui/material";
import { HeaderContainer ,BootstrapButton} from "./styles";
import SearchAppBar from "../../Components/NavBar";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Grid from "@mui/material/Grid";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const bookingsData = [
  {
    from : "Earth",
    to: "Marse",
    endDate: "2023-08-20",
    date : "2023-08-21",
    title: "Booking 1",
    description: "Description for Booking 1",
    mode : "Mode 1",
    departure : "14 : 00 PM",
    class : "Economy",
    passengerId : "200056875020"
  },
  {
    from : "Earth",
    to: "Marse",
    endDate: "2023-09-01",
    date : "2023-09-21",
    title: "Booking 1",
    description: "Description for Booking 1",
    mode : "Mode 1",
    departure : "14 : 00 PM",
    class : "Economy",
    passengerId : "200056875020"
  },
  // ... other booking objects
];

const MyBookings = () => {
    const theme = useTheme();
  const today = new Date().toISOString().split("T")[0];

  const sortedBookings = bookingsData.sort((a, b) =>
    a.date.localeCompare(b.date)
  );

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

  return (
    <div>
      <SearchAppBar />
      <HeaderContainer>
        <Typography variant="h4">My Bookings</Typography>
      </HeaderContainer>

    
      <div>      
      {sortedBookings.map((booking, index) => (
        <div key={index}>
          <Typography
            variant="h6"
            sx={{ marginLeft: "50px", marginRight: "50px", marginTop: "20px" }}
          >
            {booking.date}
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
              <Box sx={{ marginRight: "30px",  }}>
              <ArrowDropDownIcon sx ={{
                color : "#CC9200" ,
                transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)",  
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
                        {booking.from}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component="div" variant="h6">
                        To :
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component="div" variant="h6">
                        {booking.to}
                      </Typography>
                    </Grid>
                  </Grid>
                  

                  {/* End date */}
                  <Grid container spacing={2} sx  = {{marginTop:"10px"}}>
                    <Grid item>
                      <Typography component="div" >
                        End date : 
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component="div" >
                        {booking.endDate}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* Mode */}
                  <Grid container spacing={2} sx  = {{marginTop:""}}>
                    <Grid item>
                      <Typography component="div" >
                        Mode : 
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component="div" >
                        {booking.mode}
                      </Typography>
                    </Grid>
                  </Grid>
                     {/* Departure */}
                  <Grid container spacing={2} sx  = {{marginTop:""}}>
                    <Grid item>
                      <Typography component="div" >
                        Departure : 
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component="div" >
                        {booking.departure}
                      </Typography>
                    </Grid>
                  </Grid>
                     {/* Class */}
                  <Grid container spacing={2} sx  = {{marginTop:""}}>
                    <Grid item>
                      <Typography component="div" >
                        Class : 
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component="div" >
                        {booking.class}
                      </Typography>
                    </Grid>
                  </Grid>
                     {/* Passenger id */}
                  <Grid container spacing={2} sx  = {{marginTop:""}}>
                    <Grid item>
                      <Typography component="div" >
                        Passenger Id : 
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component="div" >
                        {booking.passengerId}
                      </Typography>
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
              <Box sx={{ width: 150, border: "2px solid #CC9200", margin: "16px", alignSelf: "flex-end", padding: "10px 50px 20px", position: "relative" }}>
                  <Typography sx={{ display : "flex", justifyContent : "center", color: "#CC9200",  fontSize: "16px", fontWeight: "bold" , padding : "" , marginBottom:"10px" }}>E ticket</Typography>
                  <CardMedia
                    component="img"
                    sx={{ width: "150px" , marginTop : "10px"}}
                    image="../../images/qr_code_barcode.jpg"
                    alt="Live from space album cover"
                  />
                  <Typography sx={{ display : "flex", justifyContent : "center", color: "#fff ",  fontSize: "14px",  padding : "5px"  }}>Or</Typography>
                  <Typography sx={{ display : "flex", justifyContent : "center", color: "#fff ",  fontSize: "14px", fontWeight: "bold" , padding : "" }}>Use your FaceID</Typography>
                  
                 
                    
                  
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" , marginRight:" 15px" , marginBottom:"20px"}}>
                  <BootstrapButton variant="" disableRipple>
                    Cancel
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
