import { styled, alpha } from "@mui/material/styles";
import Button from '@mui/material/Button';

const HeaderContainer = styled("div")(({ theme }) => ({
    marginTop: "50PX",
    paddingLeft: "50px",
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

  export {HeaderContainer,BootstrapButton};