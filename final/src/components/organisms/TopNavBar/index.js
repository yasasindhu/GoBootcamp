import React from "react";
import ProfileItem from '../../molecules/ProfileItem/index';
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Button from '../../atoms/button/CustomButton';
import { useHistory } from 'react-router';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        //display : 'inline-flex',
        flexDirection : 'row',
        alignItems : 'center',
        // width: '1286px',
		    height: '82px',
    
       // border: '1px solid #ECECF7',
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '34px',
/* identical to box height, or 142% */
    },
   
    headerItemAlignment:{
      // paddingLeft:'16px',
    },
    headerItemFLex:{
        flexGrow:1,
        paddingLeft:'20px'
    },
    divider:{
      // paddingLeft:'20px',
      // paddingRight:'20px',
      borderRight:'solid',
      width:'10px',
    }
}));
const TopNavigation = (props )  => {
    const label = props.label;
    const classes=useStyles();
    const history = useHistory();
    return (
       
      <div>
      
        <Grid container className={classes.root} >
          <Grid item className={classes.headerItemFLex}> <Typography variant="h1">{label}</Typography></Grid>
          <Grid item >
                <Button  variant='contained' text="SELL" color="secondary"
                 onClick={()=>history.push("/sellCrypto")} style={{elevation: 0}}></Button>
                
           </Grid>   
           <div className={classes.divider}>
                  <Divider orientation="vertical" flexItem style={{height:'100%'}} />
                  </div>  
          <Grid item  style={{paddingLeft:"12px"}}>
         
                <Button  variant='contained' text="BUY" color="primary"                
                onClick={()=>history.push("/buyCrypto")}></Button>
           </Grid>   
          
           <Grid item className={classes.headerItemAlignment}>
            <ProfileItem></ProfileItem>
            </Grid>
        </Grid>
      
     </div>
    );
  }
  
  export default TopNavigation;