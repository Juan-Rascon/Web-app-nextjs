import Container from '@material-ui/core/Container';
import PaypalButton from "../src/PaypalButton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      height: 200,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
  }));


export default function PaypalBtn() {
   const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" >
        <PaypalButton classes= {classes}></PaypalButton>
    </Container>
   
  )
}


