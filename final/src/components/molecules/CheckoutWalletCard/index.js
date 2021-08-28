import React, { useEffect, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from "../../theme.jsx";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentCardToStore } from "../../../redux/CryptoActions";
import USDCoin from '../../../../public/images/USD Coin.png'
import NumberFormat from 'react-number-format';


const useStyles = makeStyles({
  root: {
    width: "330px",
    height: "308px",
    margin: "20px 30px 20px 60px",
  },
  root2: {
    width: "925px",
    height: "74px",
    //maxHeight: "74px",
   // marginBottom: "10px",
    // padding : '1.5%',
    //padding: "10px",
    borderRadius: "4px",
    // "&:hover": {
    //  borderColor: "#5ac568",
    //},
    //boxShadow: "0px 0px 5px #ccc",
    border:"1px solid #E8E8F7",
    backgroundColor:"white",
    paddingLeft:"16px"
  },
  flexItem:{
      flexGrow:1,
      paddingLeft:"16px"
      
  }
  
 });

function CheckoutWalletCard({walletBalance}) {
 
  const classes = useStyles();
  //const serverURL = useSelector(state=>state.serverURL);
//const userId = useSelector(state=>state.userId);
  // const[walletBalance,setWalletBalance]=useState(0);
  // useEffect(() => { fetch(serverURL+'/walletBalance/'+userId).then((res) => res.json()).then(res => {
  //   setWalletBalance(res.current_wallet_balance);

  // })
  // }, [])
 


  return (
    // <div data-testid = "maindivinjobcardsmall">

    <Grid
      container
      className={classes.root2}
      data-testid="maingridinjobcardsmall"
      alignItems="center"
      direction="row"
      //spacing={2}
    >
      <Grid item>
      <div> <img width="32px" height="32px" src={USDCoin}/> </div>
      </Grid>
      <Grid item className={classes.flexItem}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="caption">USD Coin </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">Total balance  - <NumberFormat value={walletBalance} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{paddingRight:"16px"}}>
      <Typography variant="caption"> Default</Typography>
      </Grid>
    </Grid>

    // </div>
  );
}
export default CheckoutWalletCard;
