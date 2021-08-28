import React  from "react";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';
import clsx from "clsx";
import NumberFormat from 'react-number-format';
import  './index.css';
const useStyles = makeStyles({
	
	root2: {
		//width: '370px',
		Height: '58px',
		padding: "10px",
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight:'14px',
        // '&:hover':{
		// 	borderColor:' #0052FF',
		// },
		//boxShadow: '0px 1px 10px rgba(44, 44, 44, 0.08)',
		margin: '4px 0px',
	},
	isActive:{
		border: "1px solid #5ac568",
	},
	imagePadding:{
			paddingLeft:'15px',
			width:'8%',

	},
	spacing: {
		
		color:'#5f7381',
		display: 'flex',
		flexDirection: 'row',
		gap: '10px',
        fontSize: '12px',
        fontWeight: '500',
        //paddingLeft:'50%',
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
        paddingLeft : '40px',
		//width:'20%'
    },
	
    PercentagePadding:{
         paddingLeft:'95%',
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
paddingTop:'4px'
	},
	amountAlignment:{
		//paddingRight:'0px',
	paddingLeft:'40%',
	//paddingRight:'24px',
	}

});

export default function JobCard({
	job, isActive, renderPages
}) {
	// const isActive = job.isActive,
	// const id = job.id
	// const logo = job.logo
	// const currency = job.currency
	// const status = job.status
	// const amount = job.amount
	// const classes = useStyles()
	// const percentage=job.percentage
	// const statusColor=job.color
    // when portfolio api code implemented comment below consts
	 const id = job.currency_details.id
	 const logo = job.currency_details.logo_url
	 const currency = job.currency_details.name
	const status = job.status
	 const amount = job.current_price
	 const classes = useStyles()
	 const percentage=job.gains
	 var prefix='$ '
	 var statusColor='red'
	 var symbol = '-'
	 console.log("ptge",job.currency_details.id);
	 if(percentage>=0){
		 statusColor='green'
		 symbol ='+'
	 }
	
	
	
		return (
			<Grid
			container
			className={classes.root2}
			data-testid="maingridinjobcardsmall"
			alignItems="center" spacing={0} >
			
			<Grid item  className={classes.imagePadding} >
			<MyImage alt={logo} src={logo} width="44px" height="44px"/>
								  </Grid>
			<Grid item>
			  <Grid container direction="column" alignItems="flex-start" >
				<Grid item>
				  <Typography variant="body1">{currency}</Typography>
				</Grid>
				<Grid item>
				  <Grid container >
				 
					<Grid item >
					<Typography  className={classes.idAlignment}>{job.currency_details.id}</Typography>
					</Grid>
				  </Grid>
				</Grid>
			  </Grid>
			</Grid>
			<Grid item  className={classes.flexItem}>
			</Grid>
			<Grid item  className={classes.flexItem}>
			</Grid>
			<Grid item  className={classes.flexItem}>
			</Grid>
			<Grid item  className={classes.flexItem}>
			</Grid>
			<Grid item  className={classes.flexItem}>
			</Grid>
			<Grid item >
			  <Grid container direction="column"  alignItems="flex-end">
			  <Grid item>
				  <Typography variant="body1">
				  <NumberFormat value={parseFloat(amount).toFixed(2)} displayType={'text'} thousandSeparator={true}  prefix={'$'}/>
				 </Typography>
				</Grid>  
				<Grid item >
				  <Grid container>
					<Grid item >
					{percentage>=0 && <Typography  style={{
									color:statusColor,
                                    fontSize:'12px',
                                   
									}}>
								      			

							+{parseFloat(percentage).toFixed(2)}%
									</Typography>
									}
									{
										percentage<0 &&
										<Typography  style={{
									color:statusColor,
                                    fontSize:'12px',
                                  
									}}>
								      			

								{parseFloat(percentage).toFixed(2)}%
									</Typography>
								
									}
					</Grid>
					{/* <Grid item >
					  <Typography variant="caption"> &nbsp;{currency_id}</Typography>
					</Grid> */}
				  </Grid>
				</Grid>
			   
			  </Grid>
			</Grid>
			
			  
		  </Grid>
	  
		  // </div>
		);
	  }
	  