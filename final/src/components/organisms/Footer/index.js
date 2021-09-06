import React from "react";
import ProfileItem from '../../molecules/ProfileItem/index';
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Button from '../../atoms/button/CustomButton';

import SelectCompoment from "../../molecules/SelectComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'inline-flex',
        flexDirection : 'row',
        alignItems : 'center',
        //width: '1286px',
		//maxHeight: '82px',
        height:'106px',
        //marginLeft:'80px',
       //border: '1px solid #ECECF7',
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '34px',
/* identical to box height, or 142% */
borderTop: '1px solid #E8E8F7',
    },
    buttonAlignment:{
        display : 'inline-flex',
        paddingLeft:'62%',
        gap:'16px',
        fontStyle:'normal',
        fontWeight: '500',
        fontSize: '100px',
        lineHeight: '42px',
        letterSpacing: '0.005em',

    },
    FooterItem:{
        paddingLeft:'24px',
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '0.01em',
        color: '#0052FF'
    },
    FooterItemFlex:{
        paddingLeft:'24px',
        flexGrow: 1,
    },
    FooterItemLast:{
       // paddingRight:'24px',
        paddingLeft:'24px',
    },
  
}));
const Footer = (  )  => {
    const allSelectItems = [
        {id:1,name:"English"},
        {id:2,name:"French"},
        {id:3,name:"Chinese"}]
    const classes=useStyles();
    return (
      
      <div>
          
        <Grid container className={classes.root}  >
            <Grid item >
           <Typography className={classes.FooterItem}> Dashboard</Typography>
           </Grid>
           <Grid item >
           <Typography className={classes.FooterItem} > Careers</Typography>
           </Grid>
           <Grid item >
           <Typography className={classes.FooterItem}> Legal & Privacy</Typography>
           </Grid>
           <Grid item className={classes.FooterItemFlex}>
          
           </Grid>
           <Grid item >
                <SelectCompoment allSelectItems={allSelectItems} defaultSelect='English'/>
              
           </Grid>
           <Grid item className={classes.FooterItemLast}>
               
           <Button  variant='outlined' text="NEED HELP" color="primary"></Button>
          </Grid>
        </Grid>
       
     </div>
    );
  }
  
  export default Footer;