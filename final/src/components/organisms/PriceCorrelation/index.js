import { Grid, Typography, ThemeProvider  } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import CurrencyValueDisplayCard from '../../molecules/CurrencyValueDisplayCards/index';
import customtheme from "../../theme";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PriceCardDetails from "./PriceCardDetails";
import PriceCorrelationCards from '../../molecules/ProfileCorrelationCards/index';
import { useDispatch, useSelector } from "react-redux";
import SingleStrandGraph from "../../molecules/SingleStrandGraph";
import BarGraph from "../../molecules/BarGraph";
import CoinDescription from "../../molecules/CoinDescription";
import CustomTabs from '../Tabs/index';
import NumberFormat from 'react-number-format';


const useStyles = makeStyles((theme) => ({
    paper: {
       maxWidth: 400,
      // margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
      },
      cardsAlignment:{
       
        scrollbarWidth:'thin',
        overflowY: 'scroll',
        overflowX: 'hidden',
          height:'300px',
      },
     
      PriceCorrelationAlignment:{
        display: 'flex',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '28px',
      },
      alignJustify:{
        width:'19.95px',
        height:'19.95px',
        color:'#0052FF',
       // paddingLeft:'11.05px',
      },
      root:{
       
       //Height: '50px',
       //marginLeft:'24px',
       background:'white',
       border: '1px solid #E8E8F7',
       borderRadius: '4px',
       paddingTop:'24px',
       paddingRight:'24px',
       marginTop:'24px',
      },
      positivePercentage:{
        color:'#20B03F',
        paddingRight:'24px',
        display:'flex',
        marginLeft:'24px',
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0.005em',
    },
      negativePercentage:{
          color:'#B71A33',
          display:'flex',
      },
      amount:{
        display:'flex',
      paddingLeft:'24px',
      paddingRight:'3px',
        fontSize: '24px',
        lineHeight: '34px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        paddingBottom:'4px',
        fontFamily: 'Graphik',
        color: '#343446'


      },
      title:{
        marginLeft:'24px',
        paddingBottom:'4px',
      },
      tabsAlignment:{
        paddingLeft:'100px',
      }
        
    }));

export default function PriceCorrelation({coin}){
    const jobsInFindJobs = PriceCardDetails
    const intervalSelected=useSelector(state=>state.interval);
    const crypto = useSelector(state => state.crypto);
  const[currentAmount,setCurrentAmount]=useState(0);
  console.log(crypto.id,"this is crypt");
  const serverURL = useSelector(state=>state.serverURL);
  useEffect(() => { fetch(serverURL+'/currency/'+coin.id).then((res) => res.json()).then(res => {
    console.log("inside fetch pc",res);
     setCurrentAmount(res.price);
  })
  }, [])
   const [currentPercentage,setCurrentPercentage]=useState(0);
   function f(n) {    // Format integers to have at least two digits.
    return n < 10 ? '0' + n : n;
  }
   function rfc3339Date(d) {
    return d.getUTCFullYear()   + '-' +
         f(d.getUTCMonth()+1 ) + '-' +
         f(d.getUTCDate())      + 'T' +
         f(d.getUTCHours())     + ':' +
         f(d.getUTCMinutes())   + ':' +
         f(d.getUTCSeconds())   + 'Z';
  };
  

  function selectBasedonInterval(intervalSelected){
    console.log("interval selected45678",intervalSelected);
   
    
    if(intervalSelected=='1m'){
      var dt = new Date();
    dt.setDate( dt.getDate() - 31 );
    console.log( rfc3339Date(dt),'new dt');
    return rfc3339Date(dt);
    }
    if(intervalSelected=='24h'){
      var dt = new Date();
    dt.setDate( dt.getDate() - 1 );
    console.log( rfc3339Date(dt),'new dt');
    return rfc3339Date(dt);
    }
    if(intervalSelected=='1w'){
      var dt = new Date();
    dt.setDate( dt.getDate() - 7);
    console.log( rfc3339Date(dt),'new dt');
    return rfc3339Date(dt);
    }
    if(intervalSelected=='1y'){
      var dt = new Date();
    dt.setDate( dt.getDate() - 365);
    console.log( rfc3339Date(dt),'new dt');
    return rfc3339Date(dt);
    }

  }
  
  function customizeInterval(intervalSelected){
    if(intervalSelected=='24h')
    return '1h';
    else if(intervalSelected=='1y')
    return '1m';
    else if(intervalSelected=='1m')
    return '1d';
    return intervalSelected;
  }
  useEffect(() => { 
    
    fetch(serverURL+'/currency/'+coin.id+'/timeline?start='+selectBasedonInterval(intervalSelected)+'&interval='+customizeInterval(intervalSelected)).then((res) => res.json()).then(res => {
    console.log("inside fetch",res.gains);
    setCurrentPercentage(Math.round(res.gains*100)/100);
      console.log("Boom");
     console.log("d is gain in currency card",Math.round(res.gains*100)/100);
     
  })

  }, [intervalSelected])
  

    console.log(currentAmount);
    const classes=useStyles();
    return(
        <ThemeProvider theme = {customtheme}>
          
            <Grid container direction="row" className={classes.root}>
            <Grid item style={{width:'85%'}}>
              <Typography variant="h4" className={classes.title}>Current Value</Typography>
              <Typography className={classes.amount}>
              <NumberFormat value={currentAmount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              
              </Typography>
              {currentPercentage>=0 && 
            <Typography  className={classes.positivePercentage}> +{currentPercentage}</Typography>
           }
           {currentPercentage<0 && 
            <Typography className={classes.negativePercentage}> {currentPercentage}</Typography>
           }
            </Grid>
            <Grid  item  Style={{width:'15%',marginLeft:'15px'}}>
              <CustomTabs className={classes.tabsAlignment}/>
            </Grid>
              <Grid item xs={12}>
                <SingleStrandGraph />
                  
              </Grid>
                <Grid item>
                {crypto.name=='Bitcoin' && 
                <CoinDescription
                  head= {"About Bitcoin"}
                 body={ "The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis each satoshi is worth 0.00000001 bitcoin."}

                />
                }
                {
                  crypto.name=='Ethereum' &&
                
                  <CoinDescription
                  head= {"About Ethereum"}
                 body={ "Ethereum is the second-biggest cryptocurrency by market cap after Bitcoin. It is also a decentralized computing platform that can run a wide variety of applications — including the entire universe of DeFi.Everything from financial tools and games to complex databases are already running on the Ethereum blockchain. And its future potential is only limited by developers’ imaginations. As the nonprofit Ethereum Foundation puts it: “Ethereum can be used to codify, decentralize, secure and trade just about anything."}

                />
                }

                
                {
                  crypto && crypto.name=='Litecoin'  && 
                  
                  <CoinDescription
                  
                  head= {"About Litecoin"}
                 body={ "Litecoin is one of the first cryptocurrencies. It was created as a fork of Bitcoin and offers faster transaction times and lower costs."}

                />
                &&
                console.log(crypto.id,"uioiu")
                }
                {
                  crypto &&  crypto.id=='ADA' &&
                  <CoinDescription
                  head= {"About Cardano"}
                 body={ "From being a lesser-known cryptocurrency, Cardano (ADA) has raced to become third-largest after its price surged touched an all-time high surpassing Binance’s native token, as per market valuation."}

                />
                }
                {
                  crypto.name=='Binance Coin' &&
                  <CoinDescription
                  head= {"About Binance Coin"}
                 body={ "Binance Coin (BNB) is a cryptocurrency that can be used to trade and pay fees on the Binance cryptocurrency exchange. The Binance Exchange is the largest cryptocurrency exchange in the world as of January 2018, facilitating more than 1.4 million transactions per second."}

                />
                }
                {
                  crypto.name=='Dogecoin' &&
                  <CoinDescription
                  head= {"About Dogecoin"}
                 body={ "Dogecoin is the new Bitcoin. Maybe, it’s too early to say that but in the next few months Dogecoin may emerge as the cryptocurrency of 2021. It’s already on path, witnessing a massive surge since the start of the year."}

                />
                }
                {
                  crypto.name=='Polkadot' &&
                  <CoinDescription
                  head= {"About Polkadot"}
                 body={ "The Polkadot protocol is designed to allow unrelated blockchains to securely talk to each other, so that value or data can flow between, say, the Ethereum and Bitcoin blockchains without any intermediary. It’s also designed to be speedy and scalable, via the use of many parallel blockchains (or “parachains”) that take much of the processing demand off of the main blockchain. The DOT token is used for staking and governance. "}

                />
                }
                {
                  crypto.name=='Solana' &&
                  <CoinDescription
                  head= {"About Solana"}
                 body={ "Solana is one of the fastest programmable blockchains in crypto right now. It's also one of the many coins viewed as potential successors to the Ethereum (ETH) throne."}

                />
                }
                {
                  crypto.name=='Tether' &&
                  <CoinDescription
                  head= {"About Tether"}
                 body={ "Tether is a blockchain-based cryptocurrency whose cryptocoins in circulation are backed by an equivalent amount of traditional fiat currencies, like the dollar, the euro, or the Japanese yen, which are held in a designated bank account. Tether tokens, the native tokens of the Tether network, trade under the USDT symbol"}

                />
                }
                {
                  crypto.name=='Monero' &&
                  <CoinDescription
                  head= {"About Monero"}
                 body={ "Monero (XMR) is an open-source, privacy-oriented cryptocurrency that was launched in 2014.It is built and operates on the concept. These blockchains, which form the underlying technology behind digital currencies, are public ledgers of participants' activities that show all the transactions on the network"}

                />
                }
                </Grid>
                
                              
            </Grid>
         
        </ThemeProvider>
           
    );
}