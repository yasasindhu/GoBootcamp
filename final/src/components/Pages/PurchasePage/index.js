import React, { useCallback, useState } from "react";

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
    height: "1088px",
    
  },
  banner: {
    height: "82px",
    width: "1286px",
   // border:"solid"
  },
  footer: {
    // backgroundColor: '#B2BEB5',
    height: "106px",
    width: "1286px",
    // border:"solid",
  },
  content: {
    //backgroundColor: "pink",
    //height: "1000px",
   width:'759px'
  },
  rightPanel: {
    //smarginLeft:'50%',
    //backgroundColor: "#71fed4",
    width:'527px',
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
    //  width: "100%",
    // height: "1410px",
   // border:'solid'
    },
  filterboxStyle: {
    height: "500px",
  },
}));

const PurchasePage = () => {
  const style = useStyle();
  const [checkoutType, setCheckoutType] = useState(0);
  const callback = useCallback((checkoutType) => {
    setCheckoutType(checkoutType);
  //  alert(checkoutType);
  }, []);

  const paymentCards = PaymentCards;
  const [paymentCardType, setpaymentCardType] = useState(0);
  const paymentTypeCallback = useCallback((paymentCardType) => {
   // alert(paymentCardType);
   // alert(paymentCards[paymentCardType].cardEndNumber);
    setpaymentCardType(paymentCardType);
  //  alert(checkoutType);
  }, []);


 const rupeeWalletAmount=34000.00;
  const targetCurrencyUnits = 1;
  const [currencyCode, setCurrencyCode] = useState('BTC');
 // const currencyCode="BTC";
 // const currencyName="Bitcoin";
  const [currencyName, setCurrencyName] = useState('Bitcoin');
  //const oneUnitTargetCurrencyEqualRupees="22245675";
  const [oneUnitTargetCurrencyEqualRupees, setOneUnitTargetCurrencyEqualRupees] = useState(1);

  const cryptoCardDetailsList = CryptoCardDetails;
  
  const [cryptoCardType, setCryptoCardType] = useState(0);
  const [imgSrc, setImgSrc] = useState("");
  //const [targetCurrencyUnits,setTargetCurrencyUnits] = useState(0); 
  const cryptoCardTypeCallback = useCallback((cryptoCardType) => {
  // alert(cryptoCardType);
   setCryptoCardType(cryptoCardType);
   setCurrencyCode(cryptoCardDetailsList[cryptoCardType].currencyCode);
   setCurrencyName(cryptoCardDetailsList[cryptoCardType].currencyName);
   setOneUnitTargetCurrencyEqualRupees(cryptoCardDetailsList[cryptoCardType].oneUnitTargetCurrencyEqualRupees);
   setImgSrc(cryptoCardDetailsList[cryptoCardType].logo);

   // iterate over all cards and show tick mark of only selected card
   for(let i=0;i<=CryptoCardDetails.length ;i++){
     if(i!=cryptoCardType)
      document.getElementById("test"+i).style.visibility= "hidden";
   }

 
  }, []);
  const [inputRupeesAmount, setInputRupeesAmount] = useState(0);
  const inputRupeesAmountCallback= useCallback((inputRupeesAmount) => {
   // alert(inputRupeesAmount);
    setInputRupeesAmount(inputRupeesAmount)

  }, []);


  return (
    <div clasName={style.root}>
      <Paper className={style.paper}>
        <Grid container className={style.container} direction="row" spacing={2}>
          <Grid item  className={style.sideNav}>
            <SideNavBar />
          </Grid>

          <Grid item >
            <Grid container direction="column" spacing={2} className={style.middleFullContainer}>
              <Grid item className={style.banner}>
                <TopNavBar label={'Checkout'}/>
              </Grid>

              <Grid item>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                >
                  <Grid item className={style.content}>
                   <CheckoutTabs parentCallback={callback} label1={'Buy Crypto'} label2={'Sell Crypto'}/> 
                   {checkoutType == 0 &&
                   <>
                   <CrytoCardsDisplay parentCallback={cryptoCardTypeCallback}/>
                  <PaymentCardsDisplay parentCallback={paymentTypeCallback}/>
                  <AmountDetails parentCallback={inputRupeesAmountCallback} checkoutType={checkoutType}  targetCurrencyUnits={targetCurrencyUnits} currencyCode={currencyCode} oneUnitTargetCurrencyEqualRupees={oneUnitTargetCurrencyEqualRupees}/>
                  <Delivery/>
                  </>
                  }   
                    {checkoutType == 1 &&
                    <>
                   <CrytoCardsDisplay parentCallback={cryptoCardTypeCallback}/>
                  <TotalBalance imgSrc={imgSrc} currencyName={currencyName} inputRupeesAmount={inputRupeesAmount} oneUnitTargetCurrencyEqualRupees={oneUnitTargetCurrencyEqualRupees} currencyCode={currencyCode}/>
                  <AmountDetails parentCallback={inputRupeesAmountCallback} checkoutType={checkoutType}  targetCurrencyUnits={targetCurrencyUnits} currencyCode={currencyCode} oneUnitTargetCurrencyEqualRupees={oneUnitTargetCurrencyEqualRupees}/>
                  <DepositTo/>
                  </>
                    }   
                  </Grid>

                  <Grid item className={style.rightPanel}>
                  {checkoutType == 0 && 
                      <BuyingOverview targetCurrencyUnits={targetCurrencyUnits} currencyCode={currencyCode} oneUnitTargetCurrencyEqualRupees={oneUnitTargetCurrencyEqualRupees} paymentCardType={paymentCardType} currencyName={currencyName} inputRupeesAmount={inputRupeesAmount}/>
                  }
                    {checkoutType == 1 &&
                      <SellingOverview targetCurrencyUnits={targetCurrencyUnits} currencyCode={currencyCode} oneUnitTargetCurrencyEqualRupees={oneUnitTargetCurrencyEqualRupees} paymentCardType={paymentCardType} currencyName={currencyName} inputRupeesAmount={inputRupeesAmount}/>
                    }
                      </Grid>
                </Grid>
                <Grid item className={style.footer}>
                  <Footer />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default PurchasePage;
