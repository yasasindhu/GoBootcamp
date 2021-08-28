import React, { useEffect, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid, Radio } from "@material-ui/core";
import customtheme from "../../theme.jsx";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import './index.css';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from "react-redux";
import { addCheckoutCryptoToStore, addCryptoBalanceToStore } from "../../../redux/CryptoActions";
import tick from "../../../../public/images/Check icon.png"



const useStyles = makeStyles({
  root: {
    width: "330px",
    height: "308px",
    margin: "20px 30px 20px 60px",
  
  },
  root2: {
    width: "180px",
	height:"156px",
   //maxHeight: "74px",
    marginBottom: "10px",
    // padding : '1.5%',
   // padding: "10px",
    
   // borderRadius: "1px",
  
   "&:hover": {
    borderColor:'blue',
   // border:"solid",
    borderRadius: "1px",
    boxShadow: "0px 0px 5px #ccc",
   },
   // boxShadow: "0px 0px 5px #ccc",
	
  },
  isActive: {
   // border: "1px solid #5ac568",
  },
  logoPadding: {
    //padding: "5% 3% 3% 5%",
    paddingLeft: "7%",
    paddingTop: "7%",
    paddingRight: "3%",
    paddingBottom: "3%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    objectFit: "contain",
  },
  spacing: {
    // display: "flex",
    // width : '65px',
    // paddingRight: "1%",
    // justifyContent: "space-around",
    //color:'#5f7381',
    //flexGrow: '0',
    display: "flex",
    flexDirection: "row",
    //justifyContent: 'flex-spacearound',
    //paddingRight:"7%",
    //alignItems: 'center',
    gap: "10px",
    fontSize: "16px",
    fontWeight: "400",
    // paddingLeft:'30px',
  },
  inCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  iconGrp: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "flexStart",
    alignItems: "center",
    paddingTop: "3%",
    gap: "8px",
  },
  roleTypoHeader: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#324552",
    lineHeight: 1.33,
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "0.2px",
  },
  companyamountTypoHeader: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#5f7381",
    lineHeight: 1.57,
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "0.1px",
    paddingTop: "2%",
  },

  padding: {
    paddingTop: "0",
    lineHeight: 1.33,
  },
  jobInfoPadding: {
    paddingLeft: 0,
    paddingRight: "15%",
  },
  moreIconPadding: {
    color: "#5f7381",
  },
  currencySpacing: {
     paddingTop:'12px'
  },
  amountSpacing: {
    paddingTop:'2px'
 },
 isActive:{
  border: "1px solid #5ac568",
},
});

function CryptoCard({ card,parentCallback,portfolioList}) {
  // const isActive = job.isActive,
  const id=card.id;
	const logo_url = card.logo_url
	const name = card.name
	const price = card.price
  const market_cap = card.market_cap;



  const classes = useStyles();
 var test='test';
 var gridcard = 'gridcard';


 const dispatch = useDispatch();
    const [data,setData] = useState({
       id:"",
       logo_url:"",
       name:"",
       price:"",
       market_cap:""
     
  });
  const newData = {...data};
  newData['id']=id
  newData['logo_url']=logo_url
  newData['name']=name
  newData['price']=price
  newData['market_cap']=market_cap
  useEffect(()=>{
    setData(newData)
  },[]);

  const cryptoCards = useSelector(state=>state.cryptoCards);
  
  const handleChangeForCard = (id) => {
      dispatch(addCheckoutCryptoToStore(data));

    // iterate over all cards and show tick mark of only selected card
     for(let i=0;i<cryptoCards.length ;i++){
      //console.log("final code",cryptoCards[i].id);
      if(cryptoCards[i].id!=data.id){
       // console.log("came here in if",data.id);
       document.getElementById("test"+cryptoCards[i].id).style.visibility= "hidden";
      // document.getElementById("gridcard"+cryptoCards[i].id).style. borderColor='blue';
      // document.getElementById("gridcard"+cryptoCards[i].id).style. borderRadius='blue';
      document.getElementById("gridcard"+cryptoCards[i].id).style.border= "none";
      }
       else
       document.getElementById("test"+cryptoCards[i].id).style.visibility= "visible";
       document.getElementById("gridcard"+data.id).style.border= "2px solid #0052FF";
       document.getElementById("gridcard"+data.id).style.borderRadius= "4px";
      
       //document.getElementById("gridcard"+cryptoCards[i].id).style.borderRadius='1px'
       //document.getElementById("gridcard"+cryptoCards[i].id).style.color='#0052FF'
       //document.getElementById("gridcard"+cryptoCards[i].id).style.boxShadow="0px 0px 5px #ccc"
     } 

     for(var i=0;i<portfolioList.length;i++){
      console.log("in cc size12345="+portfolioList[i].currency_details.id);
      console.log("in cc size1234567="+data.id);
      if(portfolioList[i].currency_details.id==data.id){
       dispatch(addCryptoBalanceToStore(portfolioList[i].current_price));
       
       
        break;
      }
    }

  
  };
  

  return (

    <>
 
   
   
      <Grid 
        container
		className={classes.root2}
        data-testid="maingridinjobcardsmall"
        alignItems="center"
        direction="column"
        id={gridcard+id}
       onClick = {() => handleChangeForCard(id) }
       >
      
        <Grid item style={{paddingLeft:"130px"}}>
            <div id={test+id} style={{visibility:"hidden"}} alignItems="right">
              <img src={tick} width="30px" height="30px"/>
            </div>
         </Grid>
         <Grid item>   
              <MyImage
                alt={logo_url}
                src={logo_url}
                width="56px"
                height="56px"
                data-testid="myimageinjobcardsmall"/>
             </Grid>
            <Grid item className={classes.currencySpacing}>
              <Typography variant="body1">{name}</Typography>

             
            </Grid>
            <Grid item className={classes.amountSpacing}>
          <Typography variant="caption">
           <NumberFormat value={price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
        </Grid>
      
      </Grid>
    </>
    // </div>
  );
}
export default CryptoCard;