import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
  justifyContent: "center"
}));

const Namefield = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SelectDrop = styled(Select)(({ theme, isCentered, hasBlueBorder }) => ({
  padding: theme.spacing(0, 2),
  marginRight: "10px",
  marginTop: "10px",
  borderRadius: 10,
  backgroundColor: "#F7F1F1",
  height: "40px",
  opacity: "0.7",
  textAlign: isCentered ? "center" : "left", // Center the text if isCentered is true
  "&:hover": {
    height: "40px",
    "& fieldset": {
      borderColor: "transparent", // Change the border color on hover
    },
  },
  "& .MuiOutlinedInput-root": {
    borderColor: hasBlueBorder ? "white" : "transparent", // Change the default border color
    "&:hover fieldset": {
      borderColor: "transparent", // Change the border color on hover
    },
  },
}));
const Input = styled(TextField)(({ theme, isCentered, hasBlueBorder }) => ({
  padding: theme.spacing(0, 0),
  marginRight: "10px",
  marginTop: "10px",
  borderRadius: 10,
  backgroundColor: "#F7F1F1",
  height: "40px",
  opacity: "0.7",
  textAlign: isCentered ? "center" : "left", // Center the text if isCentered is true
  
  "&:hover": {
    height: "40px",
    "& fieldset": {
      borderColor: "transparent", // Change the border color on hover
    },
  },
  "& .MuiOutlinedInput-root": {
    borderColor: hasBlueBorder ? "white" : "transparent", // Change the default border color
    "&:hover fieldset": {
      borderColor: "transparent", // Change the border color on hover
    },
  },
}));

const MainGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  marginTop: "80px",
  marginLeft: "140px",
}));
const RightGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "100px",
}));
const InputText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  marginBottom: "10px",
  marginTop: "20px",
}));

const SignUpText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 5),
  fontSize: "40px",
}));

const SignUpBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2),

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const VoiceBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  marginLeft: "10px",
}));
const ORBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "220px",
  marginTop: "50px",
}));
const VoiceIcon = styled(SettingsVoiceIcon)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: "flex",

  color: "#CC9200",
}));
const ButtonBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 1),
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  // marginTop: "20px",
  marginBottom: "20px",
  marginLeft: "120px",
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  marginTop: "40px",
  backgroundColor: "#CC9200",
  borderRadius: "5px",
  cursor: "pointer",
  width: "200px", // Set the button's width to 100% of its container
  maxWidth: "486px",
  maxHeight: "86px",

  transition: "background-color 0.3s, color 0.3s",
  "&:hover": {
    backgroundColor: "#FFA726",
    color: "white",
  },
  border: "1px solid #CC9200",
}));
const LogoGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(0, 0),
}));
const FaceId = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  marginTop: "40px",
  marginLeft: "240px",
  cursor: "pointer",
}));

const SignUpDataBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  marginLeft: "140px",
}));
export {
  StyledAdd,
  SearchIconWrapper,
  Namefield,
  Input,
  MainGrid,
  InputText,
  SignUpText,
  SignUpBox,
  VoiceBox,
  VoiceIcon,
  ButtonBox,
  SignUpButton,
  LogoGrid,
  FaceId,
  SignUpDataBox,
  ORBox,
  RightGrid,
  SelectDrop,
};
