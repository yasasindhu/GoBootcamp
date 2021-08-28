import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import Arrow from "../../../../public/images/Group 38.png";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  addChekoutCurrencyToStore,
  addInputAmountToStore,
} from "../../../redux/CryptoActions";
import NumberFormat from "react-number-format";

const useStyles = makeStyles({
  root: {
    width: "975px",
    height: "338px",
    borderRadius: "4px",
    // "&:hover": {
    //   borderColor: "#5ac568",
    // },
    //boxShadow: "0px 0px 5px #ccc",
    paddingLeft: "24px",
    marginTop: "25px",
    marginBottom: "25px",
    border: "1px solid #E8E8F7",
    backgroundColor: "white",
  },
  item: {
    width: "925px",
    height: "74px",
    borderRadius: "4px",
    // "&:hover": {
    //   borderColor: "#5ac568",
    // },
    // boxShadow: "0px 0px 5px #ccc",
    padding: "16px",
    border: "1px solid #E8E8F7",
    backgroundColor: "white",
   // border: "solid",
  },
  flexItem: {
    flexGrow: 1,
     marginRight:"2px"
  },
  caption2: {
    fontFamily: "Graphik",
    fontSize: "14px",
    fontWeight: 500,
    fontStyle: "normal",
    lineHeight: "16px",
    letterSpacing: "0.5%",
    color: "#7D7D89",
  },
});
function AmountDetails({ checkoutType, walletBalance }) {
  const card = useSelector((state) => state.checkoutCrypto);
  console.log("*************", card);

  const id = card.id;
  const name = card.name;

  const price = card.price;

  const classes = useStyles();
  //const parentCallback = props.parentCallback;
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  var cryptoBalance = 0;
  if (checkoutType == "sell") {
    cryptoBalance = useSelector((state) => state.cryptoBalance);
  } else {
    cryptoBalance = walletBalance;
  }

  const handleInput = (e) => {
    //alert(e.target.value);

    // parentCallback(e.target.value);
    setValue(e.target.value);
    if (e.target.value > cryptoBalance) {
      //document.getElementById("amountId").style.boxShadow= "0px 0px 5px red"
      // document.getElementById("amountId").style.borderStyle="solid"
      document.getElementById("amountId").style.borderColor = "red";
      // document.getElementById("amountId2").style.borderStyle="solid"
      document.getElementById("amountId2").style.borderColor = "red";
      document.getElementById("amountId3").style.color = "red";
      document.getElementById("insufBal").style.visibility = "visible";
    } else {
      // document.getElementById("amountId").style.borderStyle="none"
      document.getElementById("amountId").style.border = "1px solid #E8E8F7";
      // document.getElementById("amountId2").style.borderStyle="none"
      document.getElementById("amountId2").style.border = "1px solid #E8E8F7";
      document.getElementById("amountId3").style.color = "black";
      document.getElementById("insufBal").style.visibility = "hidden";
    }

    dispatch(addInputAmountToStore(e.target.value));
  };

  return (
    <Grid container className={classes.root} direction="row">
      <Grid item style={{ paddingTop: "24px" }}>
        <Typography variant="body1">Amount Details</Typography>
      </Grid>

      <Grid item>
        <div id="insufBal" style={{ visibility: "hidden", color: "red" }}>
          Insufficent balance
        </div>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.item}
          id="amountId"
        >
          <Grid item className={classes.flexItem}>
            <TextField
              fullWidth
              onChange={(e) => handleInput(e)}
              value={value}
              InputProps={{
                disableUnderline: true,
              }}  
            
              // InputProps={{
              //   disableUnderline: true,
              //   endAdornment: (
              //     <InputAdornment>
              //       {checkoutType === "buy" && (
              //         <Button variant="outlined" color="primary" >
              //           Buy max
              //         </Button>
              //       )}
              //       {checkoutType === "sell" && (
              //         <Button variant="outlined" color="primary">
              //           Sell max
              //         </Button>
              //       )}
              //     </InputAdornment>
              //   ),
              // }}
            />
          </Grid>
          <Grid item>
               {checkoutType === "buy" &&
                   <Button variant="outlined" color="primary" >
                     Buy max
                   </Button>
                 }
                 {checkoutType === "sell" && 
                   <Button variant="outlined" color="primary">
                     Sell max
                   </Button>
                }
        </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="row" alignItems="center">
          <Grid item style={{ paddingLeft: "67px" }}>
            <img src={Arrow} height="88px" />
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {" "}
              &nbsp;&nbsp; 1{id}&nbsp;=&nbsp;
              <NumberFormat
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginBottom: "30px" }}>
        <Grid
          container
          direction="row"
          // justifyContent="flex-start"
          alignItems="center"
          className={classes.item}
          id="amountId2"
          //style={{border:"solid"}}
        >
          <Grid item className={classes.flexItem}>
            <Typography variant="subtitle1" id="amountId3">
              {parseFloat(value / price).toFixed(6)}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{id}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default AmountDetails;
