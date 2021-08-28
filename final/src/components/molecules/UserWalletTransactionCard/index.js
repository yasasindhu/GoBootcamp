import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button, Grid, IconButton } from "@material-ui/core";
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
import { RiCheckFill } from "react-icons/ri";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import NumberFormat from 'react-number-format';

const useStyles = makeStyles({
  root: {
    width: "330px",
    height: "308px",
    margin: "20px 30px 20px 60px",
  },
  root2: {
    //width: '1286px',
    //height:"74px",
    height: "86px",
    marginBottom: "10px",
    // padding : '1.5%',
    padding: "24px",
    background:'white',
    //boxShadow: "0px 0px 5px #ccc",
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
  flexItem:{
      flexGrow:1
  },
  imagePadding:{
    padding:'10px',
    alignItems:'center',
     width: '25px',
     height: '25px',
    color: '#20B03F',
    background: '#E9F7EC',
    borderRadius: '100px',
},
imagebox:{
   // paddingLeft:'4%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    // width: '44px',
    // height: '44px',
    // background: '#E9F7EC',
    // borderRadius: '100px',
},
soldAlignment:{
  background: '#E8E8F7',
  borderRadius: '100px',
   width: '40px',
   height: '18px',
  paddingLeft:'8px',
  fontFamily : 'Graphik',
color : '#7D7D89',
fontSize : '14px',
lineHeight : '14px',
letterSpacing : '0.005em',
fontStyle: 'normal',
fontWeight: 'normal',
paddingTop:"5px"

},
  statusAlignment:{
  background: '#E8E8F7',
  borderRadius: '100px',
   width: '76px',
   height: '18px',
  paddingLeft:'7px',
  fontFamily : 'Graphik',
color : '#7D7D89',
fontSize : '14px',
lineHeight : '14px',
letterSpacing : '0.005em',
fontStyle: 'normal',
fontWeight: 'normal',
paddingTop:"5px"
},

});

function UserWalletTransactionCard({ job}) {
    console.log("job**********",job);
  // const isActive = job.isActive,
  const id = job.id;
  const logo = job.logo;
  const currency = job.transaction_details.currency_details.name;
  const change = job.change;
  const marketCap = job.marketCap;
  const amount = job.amount;
 // const volume = job.volume;
  const units = job.transaction_details.units;
  const total_value = job.transaction_details.total_value;
 // const circulatingSupply = job.circulatingSupply;
  const classes = useStyles();
  const currency_id = job.transaction_details.currency_details.id;
  const from ='Jane coper';
  const status = job.wallet_transaction_type;
  const transactionDate = new Date(job.transaction_details.timestamp);
  //console.log("transactionDate",job.transaction_details.timestamp);
  
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleChangeForCard = () => {};

  return (
    // <div data-testid = "maindivinjobcardsmall">

    <Grid
      container
      className={classes.root2}
      data-testid="maingridinjobcardsmall"
      alignItems="center" spacing={1} >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="caption">
              {months[transactionDate.getMonth()]}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2"> {transactionDate.getDate()}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item  className={classes.imagebox}>
								<RiCheckFill className={classes.imagePadding} />
							</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item>
            <Typography variant="body1">{currency}</Typography>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-evenly" spacing={1}>
           
              <Grid item >
                {/* <Typography variant="caption">{status}</Typography> */}

                {status==='SOLD' &&
								<Typography variant="h4" className={classes.soldAlignment}>
									Sold
								</Typography>
								}
								{status==='PURCHASE' &&
								<Typography variant="h4" className={classes.statusAlignment}>
									Purchased
								</Typography>
								}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item  className={classes.flexItem}>


      </Grid>
      {status==='PURCHASE' && 
      <Grid item >
        <Grid container direction="column"  alignItems="flex-end">
        <Grid item>
            <Typography variant="body1">-
            <NumberFormat value={total_value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Typography>
          </Grid>  
          <Grid item >
            <Grid container>
              <Grid item >
                <Typography variant="caption">-{parseFloat(units).toFixed(6)}</Typography>
              </Grid>
              <Grid item >
                <Typography variant="caption"> &nbsp;{currency_id}</Typography>
              </Grid>
            </Grid>
          </Grid>
         
        </Grid>
      </Grid>
      }
        {status==='SOLD' && 
      <Grid item >
        <Grid container direction="column"  alignItems="flex-end">
        <Grid item>
            <Typography variant="body1">+
            <NumberFormat value={total_value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Typography>
          </Grid>  
          <Grid item >
            <Grid container>
              <Grid item >
                <Typography variant="caption">+{parseFloat(units).toFixed(6)}</Typography>
              </Grid>
              <Grid item >
                <Typography variant="caption"> &nbsp;{currency_id}</Typography>
              </Grid>
            </Grid>
          </Grid>
         
        </Grid>
      </Grid>
      }
    </Grid>

    // </div>
  );
}
export default UserWalletTransactionCard;
