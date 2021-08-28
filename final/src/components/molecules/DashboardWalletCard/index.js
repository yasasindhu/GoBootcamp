import React, { useEffect, useState }  from "react";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';
import clsx from "clsx";
import { useSelector } from "react-redux";
import USDCoin from '../../../../public/images/USD Coin.png'
import NumberFormat from 'react-number-format';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
	
	root2: {
		// width: '370px',
		 Height: '58px',
		 padding: "10px",
		// display: 'flex',
		// flexDirection: 'row',
		// justifyContent: 'space-between',
		// alignItems: 'center',
        // '&:hover':{
		// 	borderColor:' #0052FF',
		// },
		// boxShadow: '0px 1px 10px rgba(44, 44, 44, 0.08)',
		// margin: '4px 0px',
	},
	isActive:{
		border: "1px solid #5ac568",
	},
	imagePadding:{
			paddingLeft:'24px',
	},
	spacing: {
		
		color:'#5f7381',
		display: 'flex',
		flexDirection: 'row',
		gap: '10px',
        fontSize: '12px',
        fontWeight: '500',
        paddingLeft:'80%',
	},
	inCol: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
    
    padding : {
        paddingTop : '0',
        lineHeight : 1.33
    },
    jobInfoPadding : {
        paddingLeft : '40px'
    },
	
    PercentagePadding:{
         paddingLeft:'80%',
        // paddingTop:'10%',
    },
	idAlignment:{
		fontFamily : 'Graphik',
		color : '#7D7D89',
		fontSize : '14px',
		lineHeight : '14px',
		letterSpacing : '0.005em',
		fontStyle: 'normal',
		fontWeight: 'normal',
	}

});

function DashboardWalletCard({isActive}) {
    const classes = useStyles();
    const serverURL = useSelector(state=>state.serverURL);
const userId = useSelector(state=>state.userId);
const history = useHistory();
    const[walletBalance,setWalletBalance]=useState(0);
    useEffect(() => { fetch(serverURL+'/walletBalance/'+userId).then((res) => res.json()).then(res => {
      setWalletBalance(res.current_wallet_balance);

    })
    }, [])
    function clickHandler(){
        history.push("/showUserWalletScreen")
    }
   
     
	
	
		return (
                	
				
						<Grid container >
							<Grid item xs={1} className={classes.imagePadding}>
								<MyImage alt={USDCoin} src={USDCoin} width="42px" height="42px"/>
							</Grid>
							<Grid item xs={8} className={classes.jobInfoPadding} >
								<Typography gutterBottom variant="h3" >
									USD Coin
								</Typography>
                                <Typography variant="h4" className={classes.idAlignment}>
									US Dollar
								</Typography>


							
							</Grid>
                            {/* <Grid item xs={1} data-testid = "thirdgridinjobcardsmall"></Grid> */}
							<Grid item xs={2} className={classes.inCol}   alignItems='center'>
								<div className={classes.spacing} >
									<Typography  variant="h3" >
                                    <NumberFormat value={walletBalance} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  
									</Typography>
                            </div>
                                   
							</Grid>
						</Grid>
				
			
              
		);
	}
    export default DashboardWalletCard;