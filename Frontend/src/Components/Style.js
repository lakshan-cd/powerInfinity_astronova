import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const StyledAdd = styled(Button)(({ theme }) => ({
  marginLeft: "30px",
  backgroundColor: "#CC9200",
  border: "1px solid #CC9200",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "20ch",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  "&:hover": {
    color: "#CC9200",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Namefield = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Input = styled(TextField)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  flex: 1,
  marginRight: "10px",
  marginTop: "10px",
  borderColor: "black", // Change this to the desired border color
  borderWidth: 2, // Optional: Change the border width
  borderStyle: "solid", // Optional: Change the border style
  borderRadius: 15,
  backgroundColor: "#F7F1F1",
}));

export { StyledAdd, SearchIconWrapper, Namefield, Input };
