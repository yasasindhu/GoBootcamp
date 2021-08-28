import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root2: {
    
   // borderRadius: "1px",
   // "&:hover": {
    //  borderColor: "#5ac568",
    //},
    borderBottom: "1px #E8E8F7 solid",

    marginBottom:"10px",
    
     

	
  },
  tabsStyle:{
   // paddingLeft:"15px",
    textTransform: "none",
    //styleName: beta/subtitle 2;
fontFamily: "Graphik",
fontSize: "20px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "28px",
letterSpacing: "0em",
textAlign: "left",

    

  }
});
function CheckoutTabs({label1,label2,parentCallback}) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // sending selected tab value to parent using parent callback
   parentCallback(newValue);
  };

  return (
    <div className={classes.root2}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
       
      >
        <Tab label={label1} className={classes.tabsStyle}/>
        <Tab label={label2} className={classes.tabsStyle}/>
      </Tabs>
    </div>
  );
}
export default CheckoutTabs;