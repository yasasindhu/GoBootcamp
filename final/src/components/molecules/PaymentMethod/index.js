import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import PaymentCards from "./PaymentCards";
import { Grid, Typography } from '@material-ui/core';
import PaymentCard from '../PaymentCard';
import CheckoutWalletCard from '../CheckoutWalletCard';

const useStyles = makeStyles({
    root: {
      width: "975px",
      height: "166px",
      borderRadius: "4px",
      "&:hover": {
        borderColor: "#5ac568",
      },
     // boxShadow: "0px 0px 5px #ccc",
      paddingLeft:"24px",
      marginTop:"25px",
      border:"1px solid #E8E8F7",
      backgroundColor:"white",
     // border:"solid"
   

     
    },
 
   
});
function PaymentCardsDisplay({walletBalance}){
    const classes = useStyles();
    
    return(
        
        <Grid container className={classes.root} direction="row" >
            
            <Grid item style={{paddingTop:"24px"}}>
                <Typography variant="body1">Payment method</Typography>
               
               </Grid>
              
           
                <Grid item>
                  <CheckoutWalletCard walletBalance={walletBalance}/>
               
               </Grid>
         
           
            </Grid>
            

       


    );
}
export default PaymentCardsDisplay;