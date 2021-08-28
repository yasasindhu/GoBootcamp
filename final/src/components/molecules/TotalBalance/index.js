import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import NumberFormat from 'react-number-format';

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
    //paddingRight:"10px",
    
    
  },
  flexItem:{
      flexGrow:1,
      paddingLeft:"8px"

  }
});
function TotalBalance(props) {
  const checkoutCrypto = useSelector(state =>state.checkoutCrypto);
  const inputAmount = useSelector(state=>state.inputAmount);
  const classes = useStyles();
  const serverURL = useSelector(state=>state.serverURL);
  const userId = useSelector(state=>state.userId);

  const cryptoBalance=useSelector(state=>state.cryptoBalance);
  




  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      
    >
      <Grid item style={{paddingTop:"24px"}}>
        <Typography variant="body1">Total Balance</Typography>
      </Grid>

      <Grid item style={{paddingBottom:"24px",paddingTop:"12px"}}>
        <Grid container direction="row"  justifyContent="flex-start" alignItems="center"  className={classes.item}>
           <div><img src={checkoutCrypto.logo_url} height="32px" width="32px"/> </div>
          <Grid item  className={classes.flexItem}>
            
            <Typography variant="caption" >&nbsp;&nbsp;{checkoutCrypto.name}</Typography>
          </Grid>
          <Grid item>
          <Typography variant="subtitle1" >
          <NumberFormat value={parseFloat(cryptoBalance).toFixed(6)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
          </Grid>
          <Grid item >
          <Typography variant="subtitle1" >&nbsp;{checkoutCrypto.id}</Typography>
          </Grid>
        </Grid>
      </Grid>

     
    </Grid>
  );
}
export default TotalBalance;
