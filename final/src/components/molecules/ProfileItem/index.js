import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton, Fade, ListItemAvatar, Menu, MenuItem, Typography, Grid } from "@material-ui/core";
import MyImage from '../../atoms/MyImage/MyImage';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import customtheme from "../../theme";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AvatarIcon from '../../../../public/images/Rectangle 5.png';


export default function ProfileItem(){

    const useStyles = makeStyles((theme) => ({
        root: {
             display : 'inline-flex',
            // width: '32px',
            // height: '32px',
            //display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
           // padding: '0px 24px 0px 0px',
            //position: 'relative',
            width: '130px',
            height: '32px',
          //  border: '1px solid #ECECF7',
        },
       
      
    }));

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



    return (
       
          <Grid container className={classes.root} justifyContent="flex-end">
            <Grid item>
                    <MyImage 
                        style = {{ width: '32px', height: '32px'}}
                        src={AvatarIcon}
                        height="32px"
                        width="32px"
                        alt="PROFILE IMAGE"
                        data-testid = "myimageinprofileitem"
                    />
              
              </Grid>
              <Grid item>
                    <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}>
                        <ExpandMoreOutlinedIcon />
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Grid>
                </Grid>
       
    );
}