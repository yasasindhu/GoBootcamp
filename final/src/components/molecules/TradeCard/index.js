import React,{useEffect,useState} from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from "../../theme.jsx";
import Typography from "@material-ui/core/Typography";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

import LocalTaxiOutlinedIcon from "@material-ui/icons/LocalTaxiOutlined";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { modifyWishlist } from "../../../redux/CryptoActions";
import NumberFormat from 'react-number-format';
const useStyles = makeStyles({
  root: {
    width: "330px",
    height: "308px",
    margin: "20px 30px 20px 60px",
  },
  root2: {
   // width: "1287px",
    //height:"74px",
    maxHeight: "74px",
    marginBottom: "10px",
    // padding : '1.5%',
    //padding: "10px",
    borderRadius: "4px",
    //border:"solid",
    //"&:hover": {
    // borderColor:'#0365f2',
    //},
    backgroundColor:'white',
    border:'1px #E8E8F7 solid',
    paddingLeft:"24px",
    paddingTop:"10px",
    paddingBottom:"10px"
    //boxShadow: "0px 0px 5px #ccc",
  },
  isActive: {
    // border: "1px solid #5ac568",
  },
  logo_urlPadding: {
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
  companypriceTypoHeader: {
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
});

function TradeCard({ job, watchlist}) {
  // const isActive = job.isActive,
  // console.log(job.id);
  // console.log(job.name);

  // console.log(job.market_cap);
  // console.log(job.price);
  const intervalSelected=useSelector(state=>state.interval);
  console.log("in tc watchlist array",watchlist);
  
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
  
  function startDate1drfc3339Date(d) {
    return d.getUTCFullYear()  + '-' +
         f(d.getUTCMonth() +1) + '-' +
         f(d.getUTCDate()-1)      + 'T' +
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
  const[gains,setGains]=useState(0);
  
  
  const serverURL = useSelector(state=>state.serverURL);
const userId = useSelector(state=>state.userId);
console.log("in tc serverurl",serverURL);
console.log("in tc userId",userId);
console.log("see",intervalSelected);
//console.log("yup78",rfc3339Date(new Date()));

  useEffect(() => { 
    
    fetch(serverURL+'/currency/'+job.id+'/timeline?start='+selectBasedonInterval(intervalSelected)+'&interval='+ customizeInterval(intervalSelected)).then((res) => res.json()).then(res => {
    console.log("inside fetch",res.gains);
      setGains(Math.round(res.gains*100)/100);
      console.log("Boom");
     console.log("d is gain in currency card",Math.round(res.gains*100)/100);
     
  })

  }, [intervalSelected])
  console.log("inter",intervalSelected);
  
  
  
  const id = job.id;
  const logo_url = job.logo_url;
  const name = job.name;
 
  const market_cap = job.market_cap;
  const price = job.price;
  const classes = useStyles();
  const nameType = job.nameType;
  const dispatch = useDispatch();

  //  check if currency id is present in watchlist
  
  var currencyIndex = -1
  if(watchlist)
  {
    currencyIndex = watchlist.indexOf(id);
  }
  
  console.log("*****" + currencyIndex);

  var flag = false
  if(currencyIndex!=-1){
    flag=true
  }
  
  const [state,setState]=useState(flag)


  function modifyWishlist(){
   const currencyCheckedFlag=  document.getElementById(id+'id').checked;
   if(currencyCheckedFlag){
    
    console.log("in tc adding currency to watchlist");
   

     fetch(serverURL+'/watchlist/'+userId+'/'+id+'?addToList=true', {
       method: 'PUT',
     
     })
    

   }
   else{
    console.log("in tc removing currency to watchlist");
    setState(false)
     fetch(serverURL+'/watchlist/'+userId+'/'+id, {
       method: 'PUT',
     
     })
    


   }
   
  }

  const handlegainsForCard = () => {};
  function currencyFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000 && num <1000000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }
    else if(num > 1000000000 && num <1000000000000){
      return (num/1000000000).toFixed(1) + 'B'; // convert to M for number from > 1 million 
    }
    else if(num > 1000000000000){
      return (num/1000000000000).toFixed(1) + 'T'; // convert to M for number from > 1 million 
  }
    else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}

  return (
    // <div data-testid = "maindivinjobcardsmall">

    <Grid
      container
      className={classes.root2}
      data-testid="maingridinjobcardsmall"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Grid item xs={3}>
        <Grid container>
          <div data-testid="firstgridinjobcardsmall">
            <MyImage
              alt={logo_url}
              src={logo_url}
              width="44px"
              height="44px"
              data-testid="myimageinjobcardsmall"
            />
          </div>
          &nbsp; &nbsp;
          <Grid item xs={3}>
            <Typography variant="body1">{name}</Typography>

            <Typography variant="overline">{id}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body2"><NumberFormat value={price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="body2"
          style={gains > 0 ? { color: "green" } : { color: "red" }}
        >
          {gains > 0 ? "+" : ""}
          {gains}%
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2">{currencyFormatter(market_cap)}</Typography>
      </Grid>
      <Grid item xs={2}>
        {currencyIndex > -1 && (

          <Checkbox
            //onChange={() => dispatch(modifyWishlist(id))}
            onChange={modifyWishlist}
            id={id+'id'}
            icon={<StarOutlineIcon />}
            checkedIcon={<StarIcon />}
            name="checkedH"
            style={{ color: "blue" }}
            checked={state}
          />
        )}
        {currencyIndex === -1 && (
          <Checkbox
           // onChange={() => dispatch(modifyWishlist(id))}
           onChange={modifyWishlist}
           id={id+'id'}
            icon={<StarOutlineIcon />}
            checkedIcon={<StarIcon />}
            name="checkedH"
            style={{ color: "blue" }}
          />
        )}
      </Grid>
    </Grid>

    // </div>
  );
}
export default TradeCard;
