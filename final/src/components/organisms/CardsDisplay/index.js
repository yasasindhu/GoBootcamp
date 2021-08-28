import React,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography , GridList} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { ThemeProvider } from "@material-ui/styles";
import customtheme from '../../theme';
import CurrencyCardDetails from "./CurrencyCardDetails";
import CurrencyCard from '../../molecules/CurrencyCard/index';
import Paper from '@material-ui/core/Paper';
import CurrencyCardExpanded from '../../molecules/CurrencyCardExpanded/index';
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
   
    root2:{
       // display: 'block',
       // width:'930px',,
       height: '350px',
       //overflowY: 'scroll',
    },
    paper: {
        padding:'100px', //grid padding
        textAlign: 'center',
        color: '#20B03F',
        border: '1px solid #20B03F',
      },
      cardAlignment:{
        width:'50%',
      }
    
}));
const CardsDisplay = ()  => {
   
    const classes=useStyles();
   
    
    const[currencyData,setCurrencyData]=useState([]);


const serverURL = useSelector(state=>state.serverURL);
const userId = useSelector(state=>state.userId);
console.log("in cd serverurl",serverURL);
console.log("in cd userId",userId);
//console.log("in cd cards",cards);

const[watchlist,setWatchlist]= useState([]);
useEffect(() => { fetch(serverURL+'/watchlist/'+userId).then((res) => res.json()).then(res => {
      
    const cards = res.currencies;
    cards.map((item)=>
    fetch(serverURL+'/currency/'+item).then((res) => res.json()).then(res => {
      
      //console.log("Boom",res)
      setCurrencyData(currencyData=>[...currencyData,res]);
         })
        
    )
})
}, [])
console.log("in tcd watchlist array",watchlist);
   
    const[bitcoinData,setBitcoinData]=useState({});
    useEffect(() => { fetch(serverURL+'/currency/'+'BTC').then((res) => res.json()).then(res => {
      
      setBitcoinData(res);
         })
         }, [])
 
    console.log("In currencyDate",currencyData);
    console.log("len is",currencyData.length);
    return (
       
      <div>
          <ThemeProvider theme={customtheme}> 
        <Grid  container  className={classes.root2} >
           
            {currencyData.length>=1 && currencyData.map((item) => 
              
              <Grid item className={classes.cardAlignment}>
              <CurrencyCard card={item}/>
              </Grid>
            )
           }
           {currencyData.length==0 && 
            <Grid  item  xs={6}  >
            <CurrencyCardExpanded card={bitcoinData}/>
            </Grid>
           }
          
        </Grid>
           
        </ThemeProvider>
     </div>
    );
  }
  
  export default CardsDisplay;