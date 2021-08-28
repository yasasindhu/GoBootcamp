import React from "react";
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
import USDCoin from '../../../../public/images/USD Coin.png'

const useStyles = makeStyles({
  root: {
    width: "330px",
    height: "308px",
    margin: "20px 30px 20px 60px",
  },
  root2: {
    //width: '1286px',
    //height:"74px",
    height: "106px",
    //marginBottom: "10px",
    // padding : '1.5%',
   // padding: "10px",
   background:'white',
   //boxShadow: "0px 0px 5px #ccc",
   borderRadius:"4px",
   border:"1px solid #E8E8F7",
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

function UserWalletCurrencyCard({ job, isActive, renderPages }) {
  // const isActive = job.isActive,

 



  
  

  const classes = useStyles();



  const handlegainsForCard = () => {};

  return (
    // <div data-testid = "maindivinjobcardsmall">

    <Grid
      container
      className={classes.root2}
      data-testid="maingridinjobcardsmall"
      alignItems="center"
      justifyContent="flex-start"
      //spacing={5}
    >
      <Grid item style={{flexGrow:1,margin:'20px'}}>
        <Grid container>
          <div data-testid="firstgridinjobcardsmall">
            <MyImage
              alt={USDCoin}
              src={USDCoin}
              width="56px"
              height="56px"
              data-testid="myimageinjobcardsmall"

              
            />
          </div>
          <Grid item style={{paddingTop:"17px"}}>
           
                <Typography variant="h6">&nbsp;&nbsp;USD Coin</Typography>
             
          </Grid>
        </Grid>
      </Grid>
     
      <Grid item >
        <Button variant="outlined" color="primary">
         CASH DEPOSIT
        </Button>
        <Button variant="outlined" color="primary" style={{marginLeft:'10px',marginRight:'15px'}}>
          WITHDRAWL
        </Button>
      </Grid>
    
    </Grid>

    // </div>
  );
}
export default UserWalletCurrencyCard;
