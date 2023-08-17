import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";

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
  marginRight: "10px",
  marginTop: "10px",
  borderRadius: 10,
  backgroundColor: "#F7F1F1",
  height: "40px",
  "&:hover": {
    height: "40px",
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

const MainGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  marginTop: "80px",
  marginLeft: "140px",
}));
const InputText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  marginBottom: "10px",
  marginTop: "10px",
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
}));

const VoiceIcon = styled(SettingsVoiceIcon)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: "flex",

  color: "#CC9200",
}));
const ButtonBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  marginBottom: "20px",
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
};