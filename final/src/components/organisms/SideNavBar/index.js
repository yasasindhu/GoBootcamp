import React  from 'react';
import { Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, SvgIcon, ThemeProvider,Tooltip,Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import customtheme from '../../theme';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Logo from '../../../../public/images/logo.png';
import Vector from '../../../../public/images/Vector.png';
import Trade from '../../../../public/images/trade.png';
import Dashboard from '../../../../public/images/dashboard-3-line 1.png';
import Notification from '../../../../public/images/notification.png';
import Logout from '../../../../public/images/logout.png';
import { RiLogoutBoxLine } from "react-icons/ri";
import { RiNotification3Line } from "react-icons/ri";
import { RiPieChartLine } from "react-icons/ri";
import { RiDashboard3Line } from "react-icons/ri";
import { RiStockLine } from "react-icons/ri";





function Boom (props){
    console.log(props)
    const {comp} = props
    return class extends React.Component {
        render() {
           return <comp />;
       }
     };
}



const sideNavItems = [
    {
        icon: DashboardOutlinedIcon ,
        label: "Dashboard"
    },
    {
        icon: WorkOutlineOutlinedIcon,
        label: "Find Jobs"
    },
    {
        icon: TurnedInNotOutlinedIcon,
        label: "Saved Jobs"
    },
    {
        icon: MenuBookOutlinedIcon,
        label: "Practice Test"
    },
    {
        icon: DateRangeOutlinedIcon,
        label: "News & Events"
    },
    {
        icon: HelpOutlineOutlinedIcon,
        label: "Need Help?"
    },
    {
        icon: ContactPhoneOutlinedIcon,
        label: "Contact Us"
    },
    {
        icon: SettingsOutlinedIcon,
        label: "Settings"
    }
]


const useStyles = makeStyles((theme) => ({
   
    root: {
        // width: '80px',
        // height:'1000px',
        
        // backgroundColor: theme.palette.background.paper,
        //borderRight: 'auto solid ',
        // borderRadius : '0px',
        // '&:hover':{
		// 	borderColor:'#5ac568',
           
		// },
        // '.sb-show-main.sb-main-padded ':{
        //     padding:'0px',
        //     backgroundColor:'red',
        // },

		// boxShadow: '0px 0px 5px #ccc',
        "&:sb-main-padded":{
            padding:'0px',
          },
        
    },
    headerStyle: {
       // padding: '10px',
        paddingLeft: '5px',
        display: 'flex',
        justifyContent: 'center',
    },
    listItemStyle: {
       // '&:hover' : {
       //     backgroundColor: 'blue'
       // }	,
        justifyContent: 'center',
        height: '56px',
        width: '80px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 10px',
        cursor: 'pointer',
        marginTop: '2px',
        marginBottom: '2px',
    },
    selectedItemStyle: {
       // backgroundColor: 'rgba(90, 197, 104, 0.15)',
        borderRadius: '10px',
        height: '56px',
        width: '80px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 10px',
        cursor: 'pointer',
        marginTop: '2px',
        marginBottom: '2px',
    },
   
    
    icon: {
        color: '#9bbdcb',
        width: '24px',
        height: '24px', 
    },
    
   
   
   
   
     
}));

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
    },
  }));

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
  
    return <Tooltip arrow classes={classes} {...props} />;
  }



export default function SideNavBar (props){

    const classes = useStyles();
    const history = useHistory();
  //  const stateForSideNavBarTab = useSelector((state => state.sideNavBar))
   // const dispatch = useDispatch();
    //const history = useHistory();

  //  const selectedIndex = stateForSideNavBarTab.selectedTab
  const selectedIndex = 0;

    const handleListItemClick = (index) => {
        dispatch(changeTabInSideNavBar(index))
    };

    

    
    return (

        <div  data-testid='main' className={classes.root} style={{padding:'0px'}}>
          
            <div data-testid='headingName'>
            <List>
                    <ThemeProvider theme={customtheme}>
                        <Grid direction = "column" container className={selectedIndex === 0 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(0); }} >
                                        <Grid item >
                                         
                                               
                                                <img src={Logo}/> 
                                           
                                            
                                        </Grid>
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 1 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(1); history.replace("/") }} >
                        <Grid item >
                                               
                                                
                                                <BootstrapTooltip title="Dashboard" arrow placement="right" classes={{ tooltip: classes.customWidth }}> 
                                                <IconButton  onClick={()=>history.push("/dashboardScreen")}>
                                              <RiDashboard3Line className={classes.hoverItem}/>
                                              </IconButton>
                                               </BootstrapTooltip>
                                           </Grid>
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 2 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(2); console.log("CLicked Saved Jobs"); history.replace("/savedJobs") }} >
                        <Grid item >
                                                {/* <Boom comp={item.icon}  /> */}
                                               
                                                <BootstrapTooltip title="Portfolio" arrow placement="right" classes={{ tooltip: classes.customWidth }}> 
                                                <IconButton >
                                              <RiPieChartLine className={classes.hoverItem}/>
                                              </IconButton>
                                               </BootstrapTooltip>
                                              
                              </Grid>            
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 3 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(3); }} >
                        <Grid item >
                                                 
                        <BootstrapTooltip title="Stock" arrow placement="right" classes={{ tooltip: classes.customWidth }}> 
                                                <IconButton >
                                              <RiStockLine className={classes.hoverItem}/>
                                              </IconButton>
                                               </BootstrapTooltip>
                                              
                                          </Grid>
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 4 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(4); }} >
                        <Grid item >
                        
                                                <BootstrapTooltip title="Notification" arrow placement="right" classes={{ tooltip: classes.customWidth }}> 
                                                <IconButton>
                                              <RiNotification3Line className={classes.hoverItem}/>
                                              </IconButton>
                                               </BootstrapTooltip>
                                              
                                          </Grid>
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 5 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(5); }} >
                        <Grid item >
                                              
                                                <BootstrapTooltip title="Logout" arrow placement="right" classes={{ tooltip: classes.customWidth }}> 
                                                <IconButton>
                                                
                                              <RiLogoutBoxLine className={classes.hoverItem}/>
                                               
                                               </IconButton>
                                               </BootstrapTooltip>
                                               
                                         </Grid>
                        </Grid>
                        
                      
                  
                    </ThemeProvider>
                </List>
           
               
            </div>
        </div>
    );

}