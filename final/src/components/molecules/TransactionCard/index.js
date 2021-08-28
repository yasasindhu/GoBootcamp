import React  from "react";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';
import clsx from "clsx";
import { RiCheckFill } from "react-icons/ri";
import Vector from "../../../../public/images/Vector.png"
import NumberFormat from 'react-number-format';

const useStyles = makeStyles({
	
	root2: {
		// width: '370px',
		// Height: '92px',
		//padding: "10px",
		//display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		//boxShadow: '0px 1px 10px rgba(44, 44, 44, 0.08)',
		//margin: '4px 0px',
		paddingBottom:'4%',
		paddingRight:'14px',
	},
	isActive:{
		border: "1px solid #5ac568",
	},
	imagePadding:{
			padding:'10px',
			alignItems:'center',
			 width: '25px',
			 height: '25px',
			color: '#20B03F',
			background: '#E9F7EC',
			borderRadius: '100px',
	},
	imagebox:{
			paddingLeft:'24px',
			//display: 'flex',
			flexDirection: 'row',
			alignItems: 'flex-start',
			// width: '44px',
			// height: '44px',
			// background: '#E9F7EC',
			// borderRadius: '100px',
	},
	spacing: {
		
		 display: 'flex',
		 flexDirection: 'row',
		 //width: '150px',
		 
		 paddingLeft:'40%',
		 borderColor:' #0052FF',
		 marginRight:'24px',
	},
	Percentagespacing:{
		display: 'flex',
		flexDirection: 'row',
		//width: '150px',
		paddingLeft:'60%',
		borderColor:' #0052FF',
		//paddingRight:'14px',
	},
	inCol: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	soldAlignment:{
		background: '#E8E8F7',
		borderRadius: '100px',
		 width: '40px',
		 height: '18px',
		paddingLeft:'8px',
		paddingRight:'8px',
		paddingTop:'2px',
		paddingBottom:'2px',
		fontFamily : 'Graphik',
		color : '#7D7D89',
		fontSize : '14px',
		lineHeight : '14px',
		letterSpacing : '0.005em',
		fontStyle: 'normal',
		fontWeight: 'normal',
		marginTop:'4px',
	},
    statusAlignment:{
		background: '#E8E8F7',
		borderRadius: '100px',
		 width: '76px',
		 height: '18px',
		 paddingLeft:'8px',
		 paddingRight:'8px',
		 paddingTop:'2px',
		 paddingBottom:'2px',
		fontFamily : 'Graphik',
color : '#7D7D89',
fontSize : '14px',
lineHeight : '14px',
letterSpacing : '0.005em',
fontStyle: 'normal',
fontWeight: 'normal',
marginTop:'4px',
	},
    padding : {
        paddingTop : '0',
        lineHeight : 1.33
    },
    jobInfoPadding : {
        paddingLeft : '5%'
    },
	
    PercentagePadding:{
		 width: '60px',
		paddingLeft:'60%',
		 paddingBottom:'8px',
    },
	dateAlignment:{
		paddingLeft:'0px',
		paddingBottom:'8px',
		fontFamily: 'Graphik',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '14px',
		lineHeight: '16px',
		letterSpacing: '0.005em',
	},
	percentageStyling:{
		fontFamily: 'Graphik',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '14px',
		lineHeight: '16px',
		letterSpacing: '0.005em',
		color: '#7D7D89',
		paddingTop:'4px'
	}

});

export default function JobCard({
	job, isActive, renderPages
}) {
	

	const currency = job.currency_details.name
	console.log(job.currency_details.id,"yes id");
	const status = job.status
	const amount = job.units
	const classes = useStyles()
	const changeInAmount=job.total_value
	const date=new Date(job.timestamp)
	console.log(new Date(job.timestamp),"timeStamp");
	function cutDecimals(number,decimals){
		return number.toLocaleString('fullwide', {maximumFractionDigits:decimals})
	  }
	  
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	  ];
	
		return (
			<Grid
			container
			className={classes.root2}
			data-testid="maingridinjobcardsmall"
			alignItems="center" spacing={0} >
			
			
			<Grid item  className={classes.imagebox}>
			<Typography  className={classes.dateAlignment}>
							{months[date.getMonth()]}{  date.getDate()}
								</Typography>
								<RiCheckFill className={classes.imagePadding} />
			
			</Grid>
			<Grid item>
			  <Grid container direction="column" alignItems="flex-start" >
				<Grid item>
				  <Typography variant="body1">{currency}</Typography>
				</Grid>
				<Grid item>
				  <Grid container >
				 
					<Grid item >
					{status=='SOLD' &&
								<Typography variant="h4" className={classes.soldAlignment}>
									Sold
								</Typography>
								}
								{status=='PURCHASED' &&
								<Typography variant="h4" className={classes.statusAlignment}>
									Purchased
								</Typography>
								}
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
			  {status=='SOLD' &&
									<Typography  variant="h3" style={{paddingLeft:'0px'}}>
									<NumberFormat value={cutDecimals(amount,6)} displayType={'text'} thousandSeparator={true} prefix={'-'} suffix={job.currency_details.id}/>
									</Typography>
								}
								{
									status=='PURCHASED' &&
									<Typography  variant="h3" style={{paddingLeft:'0px'}}>
									<NumberFormat value={cutDecimals(amount,6)} displayType={'text'} thousandSeparator={true} prefix={'+'} suffix={job.currency_details.id}/>
									</Typography>
								}
				</Grid>  
				<Grid item >
				  <Grid container>
					<Grid item >
					{status=='SOLD' &&
									<Typography className={classes.percentageStyling} >
									<NumberFormat value={changeInAmount} displayType={'text'} thousandSeparator={true} prefix={'-$'} suffix={job.currency_details.id}/>
									</Typography>
								}
								{
									status=='PURCHASED' &&
									<Typography className={classes.percentageStyling} >
									<NumberFormat value={changeInAmount} displayType={'text'} thousandSeparator={true} prefix={'+$'} suffix={job.currency_details.id}/>
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
	  