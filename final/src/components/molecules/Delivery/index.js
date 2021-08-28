import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Grid, Typography } from "@material-ui/core";
import SelectCompoment from "../SelectComponent";

const useStyles = makeStyles({
  root: {
    width: "710px",
    height: "156px",
    borderRadius: "1px",
    "&:hover": {
      borderColor: "#5ac568",
    },
    boxShadow: "0px 0px 5px #ccc",
    paddingLeft: "24px",
    marginTop: "25px",
  },
  item: {
    width: "663px",
    height: "74px",
    borderRadius: "1px",
    "&:hover": {
      borderColor: "#5ac568",
    },
    boxShadow: "0px 0px 5px #ccc",
    paddingLeft:"10px",
    paddingRight:"10px",
    
    
  },
  flexItem:{
      flexGrow:1
  },
  deliverySelect:{
    width:'663px',
    height:'74px'
},
  
});
const allSelectItems1 = [
    { id: 1, name: "instant: 2-5 minutes Delivery fees:0.001 BTC" },
    { id: 2, name: "Standard: 4 hours Delivery fees:0.001 BTC" },
    { id: 3, name: "Fast: 120 hours Delivery fees:0.00001 BTC" },
   
  ];
function Delivery(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction="column"
     
      
    >
      <Grid item>
        <Typography variant="body1">Select Speed Delivery</Typography>
      </Grid>

      <Grid item  className={classes.deliverySelect}>
        <SelectCompoment allSelectItems={allSelectItems1} fullWidth defaultSelect="Standard: 4 hours Delivery fees:0.001 BTC"/>
      </Grid>

     
    </Grid>
  );
}
export default Delivery;
