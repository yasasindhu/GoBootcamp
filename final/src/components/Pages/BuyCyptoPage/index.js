import React, { useCallback, useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SideNavBar from "../../organisms/SideNavBar";
import TopNavBar from "../../organisms/TopNavBar";
import Footer from "../../organisms/Footer";
import CrytoCardsDisplay from "../../molecules/CryptoCardsDisplay";
import PaymentCard from "../../molecules/PaymentCard";
import PaymentCardsDisplay from "../../molecules/PaymentMethod";
import AmountDetails from "../../molecules/AmountDetails";
import Delivery from "../../molecules/Delivery";
import CheckoutTabs from "../../molecules/CheckoutTabs";
import TotalBalance from "../../molecules/TotalBalance";
import DepositTo from "../../molecules/DepositTo";
import BuyingOverview from "../../molecules/BuyingOverview";
import PaymentCards from "../../molecules/PaymentMethod/PaymentCards";
import CryptoCardDetails from "../../molecules/CryptoCardsDisplay/CryptoCardDetails";
import SellingOverview from "../../molecules/SellingOverview";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   // backgroundColor: "blue",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "white",
  },
  container: {
   // height: "600vh",
   //height:'1410px'
  },
  sideNav: {
   // height: "1088px",
   width:'5%',
   borderRight:'1px #E8E8F7 solid',
  },
  banner: {
    height: "82px",
   // width: "1286px",
   // border:"solid"
   backgroundColor:"white",
   borderBottom:'1px #E8E8F7 solid',
  // paddingLeft:"24px"
  },
  footer: {
    // backgroundColor: '#B2BEB5',
    height: "106px",
    //width: "1286px",
    // border:"solid",
  //  borderTop:'1px #E8E8F7 solid',
    backgroundColor:"white"
  },
  content: {
    //backgroundColor: "pink",
    //height: "1000px",
   // border:"solid",
   width:'60%'
  },
  rightPanel: {
    //smarginLeft:'50%',
    //backgroundColor: "#71fed4",
    width:'40%',
   // border:"solid",
    //  marginTop:'100px',
    //border:"solid"
  },
  rightAlignment: {
    backgroundColor: "#e7fce0",
    marginTop: "5px",
    height: "100vh",
  },
  middleContainer: {
  // width: "1285px",
  //  height: "100%",
 // backgroundColor:"blue",
  
  borderRadius : '1px',
  '&:hover':{
      borderColor:'#5ac568',
     
  },
  boxShadow: '0px 0px 5px #ccc',
  },
  middleFullContainer: {
    backgroundColor: '#FAFCFF',
   
    },
  filterboxStyle: {
    height: "500px",
  },
  dashboard:{
    width:'95%',
    paddingLeft:'2%',
    borderBottom:'1px #E8E8F7 solid',
  }
  
}));

const BuyCryptoPage = () => {
  const style = useStyle();
  const cryptoCards = useSelector(state=>state.cryptoCards);
  const checkoutCrypto = useSelector(state=>state.checkoutCrypto);
  console.log(cryptoCards,"cryptoCards");
  console.log(checkoutCrypto,"checkoutCrypto");

  const serverURL = useSelector(state=>state.serverURL);
const userId = useSelector(state=>state.userId);
  const[walletBalance,setWalletBalance]=useState(0);
  useEffect(() => { fetch(serverURL+'/walletBalance/'+userId).then((res) => res.json()).then(res => {
    setWalletBalance(res.current_wallet_balance);

  })
  }, [])

   
   // iterate over all cards and show tick mark of only selected card
    // for(let i=0;i<cryptoCards.length ;i++){
     
    //  if(cryptoCards[i].id!=checkoutCrypto.id)
    //   document.getElementById("test"+cryptoCards[i].id).style.visibility= "hidden";
    //   else
    //   document.getElementById("test"+cryptoCards[i].id).style.visibility= "visible";
    // } 
  

 return (
    <div clasName={style.root}>
      <Paper className={style.paper}>
        <Grid container className={style.container} direction="row" spacing={2}>
          <Grid item  className={style.sideNav} >
            <SideNavBar />
          </Grid>

          <Grid item className={style.dashboard}>
            <Grid container direction="column" spacing={2} className={style.middleFullContainer}>
              <Grid item className={style.banner}>
                <TopNavBar label={'Checkout'} />
              </Grid>

              <Grid item style={{paddingLeft:"30px"}}>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                >
                  <Grid item className={style.content}>
                      <br/>
                  <Typography variant="subtitle1">Buy Crypto</Typography>
                  <br/>
                  <Grid container > 
                   <CrytoCardsDisplay />
                   <Grid item>
                  <PaymentCardsDisplay walletBalance={walletBalance}/> 
                  </Grid>
                  <Grid item>
                  <AmountDetails checkoutType="buy" walletBalance={walletBalance}/>
                  </Grid>
                  {/* <Delivery/> */}
                  </Grid>
                 
                  
                  </Grid>

                  <Grid item className={style.rightPanel}>
                 
                     <BuyingOverview walletBalance={walletBalance}/> 
                  
                   
                      </Grid>
             
                </Grid>
                </Grid>
                <Grid item className={style.footer}>
                  <Footer />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default BuyCryptoPage;
