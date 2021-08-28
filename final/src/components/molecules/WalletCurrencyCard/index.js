import React, { useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button, Grid } from "@material-ui/core";
import customtheme from "../../theme.jsx";
import Typography from "@material-ui/core/Typography";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { RiArrowRightUpLine } from "react-icons/ri";
import { RiArrowRightDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";


const useStyles = makeStyles({
  root: {
    width: "330px",
    height: "308px",
    margin: "20px 30px 20px 60px",
  },
  root2: {
   // width: '1286px',
    //height:"74px",
    height: "106px",
    //marginBottom: "10px",
    // padding : '1.5%',
   //// padding: "10px",
    borderRadius: "4px",
    //border:"solid",
    //"&:hover": {
    // borderColor:'#0365f2',
    //},
    background:'white',
    //boxShadow: "0px 0px 5px #ccc",
    border:"1px solid #E8E8F7",
    padding:"24px",
    
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
});

// function modifyWishlist(){
  
//   if(watchListFlag){
//     setwatchListFlag(false)
//    console.log("in tc adding currency to watchlist");
//    fetch(serverURL+'/watchlist/'+userId+'/'+id, {
//     method: 'PUT',
  
//   })

    
   

//   }
//   else{
//    console.log("in tc removing currency to watchlist");
//    setwatchListFlag(true)
//    fetch(serverURL+'/watchlist/'+userId+'/'+id+'?addToList=true', {
//     method: 'PUT',
  
//   })
   


//   }
  
//  }

function WalletCurrencyCard({ job, isActive, renderPages }) {
  // const isActive = job.isActive,

 


 
  const logo_url = job.logo_url;
  const name = job.name;
  const gains = job.gains;
  const market_cap = job.market_cap;
  const amount = job.amount;
  const volume = job.volume;
  const circulatingSupply= job.circulatingSupply;
  const classes = useStyles();
  const id = job.id;
console.log("this is wallet",gains);
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


const serverURL = useSelector(state=>state.serverURL);
const userId = useSelector(state=>state.userId);
const [watchListFlag,setwatchListFlag]=useState('true');
function modifyWishlist(){
 
   if(watchListFlag==='true'){
   setwatchListFlag('false')
   console.log("in wcc removing currency to watchlist");
  

   fetch(serverURL+'/watchlist/'+userId+'/'+id, {
      method: 'PUT',
    
    })
   

  }
   else{

   console.log("in wcc adding currency to watchlist");
   setwatchListFlag('true')
   fetch(serverURL+'/watchlist/'+userId+'/'+id+'?addToList=true', {
    method: 'PUT',
  
  })
   


   }
  
 }

  const handlegainsForCard = () => {};

  return (
    // <div data-testid = "maindivinjobcardsmall">

    <Grid
      container
      className={classes.root2}
      data-testid="maingridinjobcardsmall"
      alignItems="center"
      justifyContent="space-evenly"
      //spacing={5}
    >
      <Grid item>
        <Grid container>
          <div data-testid="firstgridinjobcardsmall" >
            <MyImage
              alt={logo_url}
              src={logo_url}
              width="56px"
              height="56px"
              data-testid="myimageinjobcardsmall"
            />
          </div>
          &nbsp;&nbsp;
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h6">{name}</Typography>
              </Grid>
              <Grid item>
                <Grid container alignContent="center"  justifyContent="space-evenly">
                  <Grid item>
                    <Typography variant="body1">{id}</Typography>
                  </Grid>
                  <Grid item>
                    {gains > 0 ? (
                      <RiArrowRightUpLine color="green" />
                    ) : (
                      <RiArrowRightDownLine color="red" />
                    )}
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="overline"
                      style={gains > 0 ? { color: "green" } : { color: "red" }}
                    >
                      {gains > 0 ? "+" : ""}
                      {gains}%
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAE7CAMAAABtx3orAAAAGFBMVEX///8AAADn5+fW1tbOzs7T09P5+fn09PTVHLJ7AAABSElEQVR4nO3OyQnEMAAAsVxO+u94U4FhmYcJSBVo2+Af93U9qw9Tx76P1YepN3iuPkwJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWAlWgpVgJVgJVoKVYCVYCVaClWAlWL3BsfowdY/zWX3gY35C1QiUh6PUCAAAAABJRU5ErkJggg=="  height="45px"/>
      </Grid>
      <Grid item style={{paddingLeft:"10px"}}>
        <Grid container direction="column">
          <Grid item><Typography variant="caption2">Market cap</Typography></Grid>
          <Grid item><Typography variant="body1">{currencyFormatter(market_cap)}</Typography></Grid>
        </Grid>
      </Grid>
      {/* <Grid item xs={1} data-testid = "thirdgridinjobcardsmall"></Grid> */}
      <Grid item style={{paddingLeft:"10px"}}>
        <Grid container direction="column">
         
        </Grid>
      </Grid>
      <Grid item style={{flexGrow: 1,paddingLeft:'10px'}}>
        <Grid container direction="column" >
               </Grid>
      </Grid>
     
      <Grid item >
        {watchListFlag === 'true' && 
        <Button variant="outlined" color="primary" startIcon={<StarIcon color="blue"/>} onClick={modifyWishlist}>
          ADDED TO WATCHLIST
        </Button>
        }
        {watchListFlag === 'false' && 
          <Button variant="outlined" color="primary"     startIcon={<StarOutlineIcon/>} onClick={modifyWishlist}>
          ADDED TO WATCHLIST
        </Button>
       }

      </Grid>
    
    </Grid>

    // </div>
  );
}
export default WalletCurrencyCard;
