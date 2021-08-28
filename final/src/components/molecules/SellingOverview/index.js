import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Divider, Grid, IconButton, Typography } from "@material-ui/core";
import { RiTruckLine } from "react-icons/ri";
import { RiBitCoinLine } from "react-icons/ri";
import { RiWallet3Line } from "react-icons/ri";
import PaymentCards from "../PaymentMethod/PaymentCards";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router';
import { addCheckoutTransactionType, addChekoutCurrencyToStore } from "../../../redux/CryptoActions";
import USDCoin from '../../../../public/images/USD Coin.png'
import { alpha } from '@material-ui/core/styles/colorManipulator';

const useStyles =  makeStyles((theme) => ({
  root: {
    width: "630px",

     borderRadius: "4px",
    // "&:hover": {
    //   borderColor: "#5ac568",
    // },
    // boxShadow: "0px 0px 5px #ccc",
    // paddingLeft: "24px",
    border:"1px  solid #E8E8F7",
    backgroundColor:"white",
    position: "fixed",
  },
  item: {
    height: "215px",
  
   width: "650px",
    border:"1px  solid #E8E8F7",
    backgroundColor:"white",
    //border: "solid",
    padding:"24px",
    borderRadius: "4px",
  },
  test: {
    height: "215px",
    border: "solid",
    width: "527px",
  },
  iconStyle:{

    backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),

  }
}));
function SellingOverview(props) {
  const classes = useStyles();
  const checkoutCrypto = useSelector(state =>state.checkoutCrypto);
  const inputAmount = useSelector(state=>state.inputAmount);
  const dispatch = useDispatch();
  const history = useHistory();
  const serverURL = useSelector(state=>state.serverURL);
  const userId = useSelector(state=>state.userId);
  console.log("in so serverurl",serverURL);
  console.log("in so userId",userId);

  const cryptoBalance=useSelector(state=>state.cryptoBalance);

  function clickHandler(){
   // alert("hi");
    dispatch(addCheckoutTransactionType('SELL'));
    dispatch(addChekoutCurrencyToStore(inputAmount/checkoutCrypto.price));
    console.log("checkoutCrypto.id",checkoutCrypto.id);
    console.log("inputAmount",inputAmount);


    fetch(serverURL+'/transactions', {
      method: 'POST',
      body: JSON.stringify({
        "user_id" : userId,
       "currency_id": checkoutCrypto.id,
        "currency_code": "USD",
        "total_value": parseInt(inputAmount),
        "transaction_type": "SELL",
        "payment_mode": "WALLET"
    
          })
    })
    .then(res => {
      console.log(res);
      // enter you logic when the fetch is successful
      history.push("/showPaymentSuccessfulPage");
     })
     .catch(error => {
     // enter your logic for when there is an error (ex. error toast)
      console.log(error)
     })



   
    
   }

  

  return (
   
    <Grid
      container
      className={classes.root}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.item}
          justifyContent="space-evenly"
        >
          <Grid item>
            <Typography variant="caption">You are selling</Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h6">
                {parseFloat(inputAmount/checkoutCrypto.price).toFixed(6)}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{checkoutCrypto.id}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant="caption">
              1{checkoutCrypto.id}=<NumberFormat value={checkoutCrypto.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Typography>
            
          </Grid>
        </Grid>
      </Grid>
    
      <Grid item>
        <Grid
          container
          direction="column"
          // alignItems="center"
          justifyContent="space-evenly"
          className={classes.item}
        >
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <IconButton className={classes.iconStyle}>
                  <RiBitCoinLine />
                </IconButton>
              </Grid>
              <Grid item>
                <Grid container direction="column" alignItems="flex-start" style={{ paddingLeft: '10px'}}>
                  <Grid item>
                    <Typography variant="caption">Paying through</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                    {checkoutCrypto.name} wallet
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{paddingLeft:"25px"}}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAY1BMVEX///8AAADb29vf39/w8PD39/f6+vrr6+vm5uaCgoKHh4c/Pz9FRUUEBAQ6OjpJSUmQkJCgoKDKysoUFBQSEhLHx8eYmJimpqZ8fHzQ0NBSUlIbGxvBwcE1NTWurq51dXVaWlr/ezdCAAABxklEQVR4nO3dC27CQAxF0XFJoC0JgUIpn37Y/ypbllDJkl8e96zAV0LB0mSU1vB4VqvqCXK8RLxWz5BhFRFjVz1Fgqe/kFhUT5GAEDWEqCFEDSFqCFGzuIc8V0+RYR0xVM+Qot/t+uoZAOAB2Tx+Xf4QbVYUm6WREDWEqCFEDSFqCFFjc/RmcxjqczwNAPPyNk3n6hky9PuI67J6igQ2uxYhaghRQ4gaQtQQosYmpD9E7B2WxvY+DG/VMwDAI+osDhVaex3HbfUMGWwOemx2LULUEKKGEDWEqCFEjc0LzG0Tsa6eIUV3PHq85A8A89J/fHg8foeIqXqGDDYris3SSIgaQtQQooYQNYSouR+9hcPRWztFvFTPkOPZYfcFgNk5Xy7csVJis2sRooYQNYSoIUQNIWpsQu53rA4Wp6Gfm/V79QwA8Ih6i3+R1rbjeKyeIUM3csdKCyFqCFFDiBpC1BCixuYF5vYVsameIUW33TosvwAwN8vvb4dXUVqbIi7VM2SwWVFslkZC1BCihhA1hKghRI3PHaufiFP1DDkWDj8sAJid8+32VD1DhuWVO1ZaCFFDiBpC1BCixuaTBDYfifD5bAf+5RcU5Qqq0LatIQAAAABJRU5ErkJggg==" width="1px" height="60px"/>
          </Grid>
          {/* <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <IconButton>
                  <RiTruckLine />
                </IconButton>
              </Grid>
              <Grid item>
                <Grid container direction="column" alignItems="flex-start">
                  <Grid item>
                    <Typography variant="caption">Delivery fees</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                      0.001 {checkoutCrypto.id}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid> */}

          <Grid item>
            <Grid container alignItems="center" >
              <Grid item style={{ paddingLeft: '5px'}}>
                <img width="40px" height="40px" src={USDCoin}/>
              </Grid>
              <Grid item>
                <Grid container direction="column" alignItems="flex-start" style={{ paddingLeft: '12px'}}>
                  <Grid item>
                    <Typography variant="caption">Deposit to</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                      USD Coin
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item >
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          className={classes.item}
        >
          <Grid item>
            <Grid container alignItems="center"  className="contacts">
              <Grid item>
                <Typography variant="overline">
                {parseFloat(inputAmount/checkoutCrypto.price).toFixed(6)}
                </Typography>
              </Grid>
              <Grid item className={classes.title}>
                <Typography variant="overline">&nbsp;{checkoutCrypto.id}&nbsp;&nbsp;</Typography>
              </Grid>
              <Grid item item className="dots">
              &nbsp;
              </Grid>
              <Grid item className={classes.title}>
                <Typography variant="overline">&nbsp;&nbsp;{inputAmount}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item>
            <Grid container alignItems="center" className="contacts">
             
              <Grid item>
                <Typography variant="overline">Minet Fees</Typography>
              </Grid>
              <Grid item item className="dots">
              .
              </Grid>
              <Grid item>
                <Typography variant="overline">1000</Typography>
              </Grid>
            </Grid>
          </Grid> */}
          <Grid item>
            <Grid container alignItems="center" className="contacts">
             
              <Grid item >
                <Typography variant="body1">Total&nbsp;&nbsp;</Typography>
              </Grid>
              <Grid item className="dots">
              &nbsp;&nbsp;
              </Grid>
              <Grid item >
                <Typography variant="body1">&nbsp;&nbsp;{parseInt(inputAmount)}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
          {inputAmount >0 && cryptoBalance > inputAmount && 
              <Button variant="contained" color="primary" size="large"  onClick={clickHandler} fullWidth>SELL NOW</Button>
          }
          { (inputAmount == 0 || cryptoBalance <= inputAmount) && 
           <Button variant="contained" color="primary" size="large" disabled onClick={clickHandler} fullWidth>SELL NOW</Button>
          }

          </Grid>

        </Grid>
      </Grid>
    </Grid>
  
  
  );
}
export default SellingOverview;
