import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from "../../theme.jsx";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { addPaymentCardToStore } from "../../../redux/CryptoActions";


const useStyles = makeStyles({
  root: {
    width: "330px",
    height: "308px",
    margin: "20px 30px 20px 60px",
  },
  root2: {
    width: "663px",
    height: "74px",
    //maxHeight: "74px",
   // marginBottom: "10px",
    // padding : '1.5%',
    //padding: "10px",
    borderRadius: "1px",
    // "&:hover": {
    //  borderColor: "#5ac568",
    //},
    boxShadow: "0px 0px 5px #ccc",
  },
  flexItem:{
      flexGrow:1
  }
  
 });

function PaymentCard({job}) {
  const handleChangeForCard = () => {};
  const classes = useStyles();
  const key = job.id;
  const imgSrc = job.imgSrc;
  const cardEndNumber = job.cardEndNumber;
  
  const usedText = job.usedText;
  const dispatch = useDispatch();
  const handleChange = (key) => {
   // alert("gk1");
    // sending selected tab value to parent using parent callback
   // parentCallback(key);
   //store selected cardnumber in redux store
   // alert(cardEndNumber);
   dispatch(addPaymentCardToStore(cardEndNumber));
  };

  return (
    // <div data-testid = "maindivinjobcardsmall">

    <Grid
      container
      className={classes.root2}
      data-testid="maingridinjobcardsmall"
      alignItems="center"
      direction="row"
      spacing={2}
    >
      <Grid item>
        <input type="radio" name="radio" onClick={()=>handleChange(key)}/>
      </Grid>
      <Grid item className={classes.flexItem}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="body1">{cardEndNumber}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">{usedText}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <img src={imgSrc} height="21px" width="26.25px"/>
      </Grid>
    </Grid>

    // </div>
  );
}
export default PaymentCard;
