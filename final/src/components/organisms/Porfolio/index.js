import { Grid, Typography, ThemeProvider } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import TradeCardDetails from "./PorfolioCardDetails";
import CurrencyValueDisplayCard from '../../molecules/CurrencyValueDisplayCards/index';
import customtheme from "../../theme";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TransactionCardDetails from "./TransactionCardDetails";
import TransactionCard from '../../molecules/TransactionCard/index';
import EmptyCard from '../../../../public/images/Group 40.png';
import { RiAlignJustify } from "react-icons/ri";
import { RiCheckFill } from "react-icons/ri";
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import { RiDonutChartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import NumberFormat from 'react-number-format';
import DashboardWalletCard from "../../molecules/DashboardWalletCard";
const useStyles = makeStyles((theme) => ({
  paper: {
    //maxWidth: 400,
    // margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  balanceAlignment: {
    display: 'flex',
    paddingTop: '16px',
    paddingBottom: '16px'

  },
  walletAlignment: {
    display: 'flex',


  },
  amountAlignment: {
    // display: 'flex',
    paddingLeft: '50%',
    //paddingRight:'24px'
  },
  viewAlignment: {
    display: 'flex',
    marginLeft: '42%',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '0.005em',
    color: '#0052FF',
    fontWeight: 'normal',
    paddingTop: '5%',
    //paddingRight:'24px'

  },
  transactionAlignment: {
    paddingTop: '36px',
    display: 'flex',

  },

  walletAlignment: {
    paddingTop: '36px',
    display: 'flex',

  },
  ImagePadding: {
    paddingTop: '90px',
    paddingLeft: '100px',
  },
  messageAlignment: {
    width: '350px',
    height: '32px',
    textAlign: 'center',
    paddingLeft: '15%',
    paddingRight: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
  },
  portfolioAlignment: {
    paddingTop: '10px',
    display: 'flex',
  },
  dotChart: {
    width: '19.95px',
    height: '19.95px',
    paddingLeft: '60%',
  },
  alignJustify: {
    width: '19.95px',
    height: '19.95px',
    color: '#0052FF',
    paddingLeft: '13.05px',
  },
  divider: {
    // marginTop:'10px'
    border: '1px solid #E8E8F7',
    marginLeft: '24px',
    marginRight: '24px'
  },
  cardsAlignment: {

    //scrollBarWidth:'thin',
    // overflowY: 'scroll',
    overflowX: 'hidden',
    //   height:'300px',


    height: '300px',
    // width: '65px',
    background: '#fff',
    overflowY: 'scroll',
    scrollColor: 'rebeccapurple green',
    scrollWidth: 'thin',

  },
  headersAlignment: {
    fontFamily: 'Graphik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '28px',
    color: '#343446',
    paddingLeft: '24px'

  },
  headersAlignmentForRecentTransactions: {
    fontFamily: 'Graphik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '28px',
    color: '#343446',
    paddingTop: '5%',
    paddingLeft: '24px'
  }
}));

export default function Portfolio(props) {



  const serverURL = useSelector(state => state.serverURL);
  const userId = useSelector(state => state.userId);
  console.log("in portfolio serverurl", serverURL);
  console.log("in portfolio userId", userId);
  const jobsInFindJobs = TradeCardDetails

  const classes = useStyles();
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch(serverURL + '/transactions/' + userId).then((res) => res.json()).then(res => {
      setTransactions(res);

    })
  }, [])
  console.log("transaction are", transactions);
  const recentTransactions = transactions

  const [portfolio, setPortfolio] = useState([]);
  const [portfolioBalance, setPortfolioBalance] = useState(0);
  useEffect(() => {
    fetch(serverURL + '/portfolio/' + userId).then((res) => res.json()).then(res => {
      setPortfolio(res.portfolio_list);
      setPortfolioBalance(res.total_balance);

    })
  }, [])
  console.log("portfolio are", portfolio);

  const [walletBalance, setWalletBalance] = useState(0);


  useEffect(() => {
    fetch(serverURL + '/walletBalance/' + userId).then((res) => res.json()).then(res => {

      setWalletBalance(res.current_wallet_balance);


    })
  }, [])


  return (
    <ThemeProvider theme={customtheme}>
      <Paper className={classes.paper}>
        <Grid container direction="column" spacing={0}>
          <Grid item className={classes.portfolioAlignment}>
            <Typography className={classes.headersAlignment}>My Portfolio</Typography>
            <RiDonutChartLine className={classes.dotChart} />
            <FormatAlignJustifyIcon className={classes.alignJustify} />
          </Grid>
          <Grid className={classes.cardsAlignment}>

            {portfolio.map((item) => (

              <CurrencyValueDisplayCard job={item} />
            ))
            }

          </Grid>
          <Grid item xs >
            <Divider className={classes.divider} />
            <div className={classes.walletAlignment} style={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography variant='h3' style={{paddingBottom: '4%', color: '#7D7D89' }}>Total Balance</Typography>
              <Typography varinat='h4' className={classes.amountAlignment}>
                <NumberFormat value={parseFloat(portfolioBalance).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </Typography>
            </div>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item >

            <Typography className={classes.headersAlignment} style={{ paddingBottom: '12px', paddingTop: '24px' }}> My Wallets</Typography>

            <DashboardWalletCard />
          </Grid>



          <Grid item className={classes.transactionAlignment}>
            <Divider />
            <Typography className={classes.headersAlignmentForRecentTransactions}>Recent Transactions</Typography>
            <Typography className={classes.viewAlignment}>view All</Typography>

          </Grid>
          <Grid item className={classes.cardsAlignment}>
            {recentTransactions.length > 0 && recentTransactions.map((item) => (
              <TransactionCard job={item} />
            ))}
            {recentTransactions.length == 0 &&
              <Grid item className={classes.ImagePadding}>
                <img src={EmptyCard} alt={EmptyCard} />
              </Grid>
            }
          </Grid>
          {recentTransactions.length == 0 &&
            <Grid item className={classes.messageAlignment}>
              <Typography variant='h4'>You don’t own any crypto. Send yourself some crypto to get started.</Typography>
            </Grid>
          }

        </Grid>
      </Paper>
    </ThemeProvider>

  );
}