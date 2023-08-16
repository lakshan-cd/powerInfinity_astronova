import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  item: {
    backgroundColor: "transparent",
    border: "none",
    padding: theme.spacing(1),
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "50px",
    color: theme.palette.text.primary,
  },
}));

export default useStyles;