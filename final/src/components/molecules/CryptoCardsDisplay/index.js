import React,{useEffect,useState} from "react";
import CryptoCard from "../CryptoCard";
import { makeStyles } from "@material-ui/core/styles";
import CryptoCardDetails from "./CryptoCardDetails";
import { Grid, RadioGroup, Typography } from '@material-ui/core';
import { addCryptoCardsToStore } from "../../../redux/CryptoActions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
    root: {
      width: "975px",
      height: "414px",
      borderRadius : '4px',
      // '&:hover':{
      //     borderColor:'#5ac568',
         
      // },
     // boxShadow: '0px 0px 5px #ccc',
     border:"1px solid #E8E8F7",
     backgroundColor:"white",
      overflow:'auto',
     // border:"solid"

     
    },
    headerFlex:{
        flexGrow:1,
      //  paddingLeft:"24px",
       // paddingTop:"24px",
       marginTop:"24px",
       marginLeft:"24px",
       marginBottom:"16px"

    },
    content:{
        marginLeft:"24px"
    }
});
function CrytoCardsDisplay(props){
    const classes = useStyles();
   // const jobsInFindJobs = CryptoCardDetails

    const[currency,setCurrency]= useState([]);
    // useEffect(() => { fetch('http://localhost:8000/currency').then((res) => res.json()).then(res => {
      
    //     setCurrency(res);
    // })
    // }, [])
    const dispatch = useDispatch();
    const serverURL = useSelector(state=>state.serverURL);
    const userId = useSelector(state=>state.userId);
    console.log("in ccd serverurl",serverURL);
    console.log("in ccd userId",userId);

    useEffect(() => { fetch(serverURL+'/currency').then((res) => res.json()).then(res => {
      
        setCurrency(res);
        console.log("*******gk12345***********"+res.length);
        // store number of crypto cards to store
        console.log("gk gk 1",res[0].name);
      dispatch(addCryptoCardsToStore(res));
    })
    }, [])

    const [portfolioList,setPortfolioList]=useState([])
  
 
  useEffect(() => { fetch(serverURL+'/portfolio/'+userId).then((res) => res.json()).then(res => {
    
    setPortfolioList(res.portfolio_list)
    // set bitcoin as default buy and sell
    if(document.getElementById("testBTC")){
      document.getElementById("testBTC").style.visibility= "visible";
      document.getElementById("gridcardBTC").style.border= "2px solid #0052FF";
      document.getElementById("gridcardBTC").click();
     }

  })
  }, [])



    return(
        
        <Grid container className={classes.root} direction="row" justifyContent="space-evenly" >
            <Grid item className={classes.headerFlex}><Typography variant="body1"> Choose crypto</Typography></Grid>
            <Grid item className={classes.content}>
                <Grid container direction="row"   justifyContent="flex-start">
            
                
            {currency.map((item) => (
                <Grid item>
               <CryptoCard card={item} parentCallback={props.parentCallback} portfolioList={portfolioList}/>
               </Grid>
           ))
           }
         
          
           </Grid>
            </Grid>
            

        </Grid>


    );
}
export default CrytoCardsDisplay;