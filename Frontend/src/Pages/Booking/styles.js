import { styled, alpha } from "@mui/material/styles";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  marginTop: "50PX",
  paddingLeft: "50px",
}));
const FormAroundDiv = styled("div")(({ theme }) => ({
  marginTop: "30PX",
  marginLeft: "50px",
  // padding: "50px",
  paddingLeft: "100px",
  paddingTop: "30px",
  paddingBottom : "30px",
  width: "80%",
  // backgroundColor : "#ececec",
  // display : "flex",
  // justifyContent: "center",
  // alignItems: "center",
  color: "#fff",
  backgroundColor: "rgba(128, 128, 128, 0.4)", // Gray color with 50% opacity
  borderRadius: "20px",
}));



  const BootstrapButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#CC9200',
    borderColor: '#CC9200',
    width: '100px',

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
      borderColor: '#CC9200',
    },
    // '&:focus': {
    //   boxShadow: '#CC9200',
    // },
  }));

  const FormInPut = styled(TextField)(({ theme }) => ({
    color: "#dddddd",
     width: "350px" ,
     backgroundColor: "#F7F1F1",
     borderRadius: 10,
     borderColor: "transparent",
    //  height: "50px",
      "&:hover": {
    "& fieldset": {
      borderColor: "transparent", // Change the border color on hover
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent", // Change the default border color
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Change the border color on hover
    },
  },


  }));

  const DivAroundPrice = styled("div")(({ theme }) => ({
    width : "350px",
    height : "50px",	
    backgroundColor: "#F7F1F1",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius : "10px",
    
    
  }));

  
export { SearchIconWrapper ,BootstrapButton,FormAroundDiv,FormInPut ,DivAroundPrice};
