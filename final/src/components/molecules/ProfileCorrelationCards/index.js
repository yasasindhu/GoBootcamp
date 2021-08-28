import React  from "react";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';
import clsx from "clsx";

const useStyles = makeStyles({
	
	root2: {
		width: '370px',
		Height: '58px',
		padding: "10px",
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
        '&:hover':{
			borderColor:' #0052FF',
		},
		boxShadow: '0px 1px 10px rgba(44, 44, 44, 0.08)',
		margin: '4px 0px',
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
        paddingLeft:'20%',
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
        paddingLeft : '14%'
    },
	
    PercentagePadding:{
         paddingLeft:'100%',
    }

});

export default function JobCard({
	job, isActive, renderPages
}) {
	// const isActive = job.isActive,
	const id = job.id
	const logo = job.logo
	const currency = job.currency
	const status = job.status
	const amount = job.amount
	const classes = useStyles()
	const percentage=job.percentage
	
	
	
		return (
                	 <ThemeProvider theme={customtheme}>
				<Card variant="outlined" className= {clsx(classes.root2, {[classes.isActive]: isActive})} >

						<Grid container >
							<Grid item xs={1} className={classes.imagePadding}>
								<MyImage alt={logo} src={logo} width="44px" height="44px"/>
							</Grid>
							<Grid item xs={8} className={classes.jobInfoPadding} >
								<Typography gutterBottom variant="h3" >
									{currency}
								</Typography>

								<Typography variant="h4">
									{status}
								</Typography>
								
							</Grid>
                            {/* <Grid item xs={1} data-testid = "thirdgridinjobcardsmall"></Grid> */}
							<Grid item xs={2} className={classes.inCol}   alignItems='center'>
								<div className={classes.spacing} >
									<Typography  variant="h3" >
										{amount}
									</Typography>
                            </div>
                                    <div >
									<Typography variant="h4" className={classes.PercentagePadding}>
										{percentage}
									</Typography>
								</div>
							</Grid>
						</Grid>
				
				</Card>
                </ThemeProvider>
		);
	}