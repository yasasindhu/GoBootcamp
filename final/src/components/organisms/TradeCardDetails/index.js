import { Grid } from "@material-ui/core";
import React,{useEffect,useState} from "react";
import TradeCard from "../../molecules/TradeCard/index";
import TradeCardDetails from "./TradeCardDetails";
import axios from 'axios';
import { useSelector } from "react-redux";




export default function RenderTradeCardsForPage2(props){
    const[currency,setCurrency]= useState([]);
    const jobsInFindJobs = TradeCardDetails
    const serverURL = useSelector(state=>state.serverURL);
const userId = useSelector(state=>state.userId);
console.log("in tcd serverurl",serverURL);
console.log("in tcd userId",userId);

    // useEffect(() => { fetch('http://localhost:8000/currency').then((res) => res.json()).then(res => {
      
    //     setCurrency(res);
    // })
    // }, [])
    useEffect(() => { fetch(serverURL+'/currency').then((res) => res.json()).then(res => {
      
        setCurrency(res);
    })
    }, [])
    console.log("this is currency array",currency);

    const[watchlist,setWatchlist]= useState([]);
    useEffect(() => { fetch(serverURL+'/watchlist/'+userId).then((res) => res.json()).then(res => {
      
        setWatchlist(res.currencies);
    })
    }, [])
    console.log("in tcd watchlist array",watchlist);
    
    return(
            <Grid container direction="row">
          
                                        
            {currency.map((item) => (
               
                <TradeCard  job={item} watchlist={watchlist}/>
            ))
            }
            </Grid>
           
    );
}