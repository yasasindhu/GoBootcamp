import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Grid, Typography } from "@material-ui/core";
import USDCoin from '../../../../public/images/USD Coin.png'

const useStyles = makeStyles({
  root: {
    width: "975px",
    height: "166px",
     borderRadius: "4px",
    // "&:hover": {
    //   borderColor: "#5ac568",
    // },
    // boxShadow: "0px 0px 5px #ccc",
    border:"1px solid #E8E8F7",
    backgroundColor:"white",
    paddingLeft: "24px",
    marginTop: "25px",
    marginBottom: "24px",
  },
  item: {
    width: "925px",
    height: "74px",
     borderRadius: "4px",
    // "&:hover": {
    //   borderColor: "#5ac568",
    // },
    // boxShadow: "0px 0px 5px #ccc",
    border:"1px solid #E8E8F7",
    backgroundColor:"white",
    padding:"16px",
   // paddingRight:"10px",
    
    
  },
  flexItem:{
      flexGrow:1,
      paddingLeft:"12px"
  }
});
function DepositTo(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      
    >
      <Grid item style={{paddingTop:"24px"}}>
        <Typography variant="body1">Deposit to</Typography>
      </Grid>

      <Grid item >
        <Grid container direction="row"  justifyContent="flex-start" alignItems="center" className={classes.item}>
          <div> <img width="32px" height="32px" src={USDCoin}/> </div>
          <Grid item  className={classes.flexItem}>
           
            <Typography variant="caption" >USD Coin</Typography>
          </Grid>
          <Grid item >
          <Typography variant="caption" >Default</Typography>
         
          </Grid>
        </Grid>
      </Grid>

     
    </Grid>
  );
}
export default DepositTo;
