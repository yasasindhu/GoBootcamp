import React, { useCallback, useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SideNavBar from "../../organisms/SideNavBar/index";
import TopNavBar from "../../organisms/TopNavBar";
import SearchItem from "../../molecules/SearchItem/index";
import SelectComponent from "../../molecules/SelectComponent/index";
import TradeCardDetails from "../../organisms/TradeCardDetails/index";
import Footer from "../../organisms/Footer/index";
import TradeCardDisplayHeaders from "../../molecules/TradeCardsDisplayHeaders";
import DisplayWalletTransactionalCards from "../../molecules/DisplayWalletTranascationalCards";
import WalletCurrencyCard from "../../molecules/WalletCurrencyCard";
import CheckoutTabs from "../../molecules/CheckoutTabs";
import { Typography } from "@material-ui/core";
import PriceCorrelation from "../../organisms/PriceCorrelation";
import { useSelector } from "react-redux";
import UserWalletCurrencyCard from "../../molecules/UserWalletCurrencyCard";
import DisplayUserWalletTransactionalCards from "../../molecules/DisplayUserWalletTransactionalCards";
import NumberFormat from "react-number-format";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "white",
  },
  container: {
    height: "100%",
    //height:'1006px'
  },
  sideNav: {
    width: "5%",
    borderRight: "1px #E8E8F7 solid",
  },
  banner: {
    // backgroundColor: '#B2BEB5',
    height: "82px",
    //width: "1286px",
    // border:"solid",
    borderBottom: "1px #E8E8F7 solid",
  },
  footer: {
     // backgroundColor: '#B2BEB5',
     height: "106px",
     //width: "1286px",
     // border:"solid",
     borderTop: "1px #E8E8F7 solid",
     backgroundColor:'white',
  },
  content: {
    //backgroundColor: "white",
    backgroundColor: "#FAFCFF",
    // height:"560px",
    //flexGrow:1,
    // maxHeight: "1006px",
    //border: "solid",
    // margingTop: "10px",
    // width: "1286px",
    //border: "solid",
    padding: "24px",
  },
  rightPanel: {
    //smarginLeft:'50%',
    backgroundColor: "#71fed4",
    //  marginTop:'100px',
  },
  rightAlignment: {
    backgroundColor: "#e7fce0",
    marginTop: "5px",
    height: "100vh",
  },
  middleContainer: {
    marginTop: "10px",
    //width: "1286px",
    //height: "100%",
    // border: "solid",
    // backgroundColor:"#FAFCFF"
  },
  searchItemStyle: {
    flexGrow: 1,
  },
  filterboxStyle: {
    height: "500px",
  },
  dashboard: {
    width: "95%",
    paddingLeft: "2%",
    borderBottom: "1px #E8E8F7 solid",
  },
  totalAmountStyle: {
    borderRadius: "4px",
    height: "60px",
    backgroundColor: "#F2F2F7",
    padding: "24px",
   // border: "solid",
  },
}));

const allSelectItems1 = [
  { id: 1, name: "1hr" },
  { id: 2, name: "24hr" },
  { id: 3, name: "1w" },
  { id: 4, name: "1m" },
  { id: 5, name: "1y" },
];

const allSelectItems2 = [
  { id: 1, name: "Tradable assets" },
  { id: 2, name: "Watchlist" },
  { id: 3, name: "All assets" },
  { id: 4, name: "Top gainers" },
  { id: 5, name: "Top losers" },
];
const UserWalletPage = (props) => {
  const crypto = useSelector((state) => state.crypto);
  console.log("in walletpage=" + crypto.name);
  console.log("in walletpage=" + crypto.gains);
  const style = useStyles();

  const [walletType, setWalletType] = useState(0);
  const callback = useCallback((walletType) => {
    //alert(walletType);
    setWalletType(walletType);
    //  alert(checkoutType);
  }, []);

  const [walletBalance, setWalletBalance] = useState(0);
  const serverURL = useSelector((state) => state.serverURL);
  const userId = useSelector((state) => state.userId);
  console.log("in uwp serverurl", serverURL);
  console.log("in uwp userId", userId);
  useEffect(() => {
    fetch(serverURL + "/walletBalance/" + userId)
      .then((res) => res.json())
      .then((res) => {
        console.log("inside fetch", res.current_wallet_balance);
        setWalletBalance(res.current_wallet_balance);
        // console.log("Boom");
        //console.log("d is gain in currency card",Math.round(res.gains*100)/100);
      });
  }, []);

  return (
    <div clasName={style.root}>
      <Paper className={style.paper}>
        <Grid container className={style.container} direction="row" spacing={2}>
          <Grid item className={style.sideNav}>
            <SideNavBar />
          </Grid>
          <Grid item className={style.dashboard}>
            <Grid
              item
              container
              direction="column"
              className={style.middleContainer}
            >
              <Grid item className={style.banner}>
                <TopNavBar label={"Trade"} />
              </Grid>
             
              <Grid item className={style.content}>
                <Grid container direction="column">
                  <Grid item>
                    <UserWalletCurrencyCard />
                  </Grid>
                  <br />
                  <Grid item>
                    <Typography variant="subtitle2">Wallet</Typography>
                  </Grid>
                  <br />

                  <Grid item>
                    <Grid
                      container
                      alignItems="center"
                      className={style.totalAmountStyle}
                      alignContent="center"
                    >
                      <Grid item style={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1">
                          Total balance
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          <NumberFormat
                            value={walletBalance}
                            displayType="text"
                            thousandSeparator={true}
                            prefix={"$ "}
                          />
                        </Typography>
                      </Grid>
                    </Grid>

                    <br />
                    {/* <Grid item className={style.content}>
               <Grid container>
                <Grid item className={style.searchItemStyle}>
                  <SearchItem />
                </Grid>
                <Grid item>
                  <SelectComponent
                    allSelectItems={allSelectItems1}
                    defaultSelect="24hr"
                  />
                </Grid>
               </Grid> 
            </Grid> */}

                    <Grid item className={style.walletCards}>
                      <DisplayUserWalletTransactionalCards />
                    </Grid>

                   
                    <Grid item className={style.footer}>
                      <Footer />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UserWalletPage;
