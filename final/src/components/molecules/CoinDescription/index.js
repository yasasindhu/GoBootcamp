import React from 'react';
import { makeStyles ,ThemeProvider} from '@material-ui/core/styles';
import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import PageIcon from '../../../../public/images/page.png';
import GlobeIcon from '../../../../public/images/globe.png';
const useStyles = makeStyles((theme) => ({
    root: {
        display : 'inline-flex',
        boxSizing: "borderBox",
        flexDirection : 'column',
        alignItems: 'left',
        paddingTop: "20px", 
        paddingBottom: "20px",
        // width: "810px",
        // height: "66px",
        marginLeft:'24px'
    },
    body:{
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '0.01em',
        paddingBottom:'24px',
        paddingTop:'8px',
        color: '#000000',
    },
    tag:{
        display:'flex',
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '0.01em',
        color:'#0052FF',
        paddingLeft:'10px',
    },
    about:{
        display:'flex', 
        padding:'11px',
    }
}));
const CoinDescription= ({ head,body}) => {
    const classes = useStyles();

 return (
     <Grid className={classes.root}>
    <ThemeProvider theme={customtheme} >
        <Typography  variant="h3" data-testId='heading'>{head}</Typography>
        <Box p={1} bgcolor="background.paper">
        
        </Box>
        <Typography  className={classes.body} >{body}</Typography>
        <Typography  variant="h3" data-testId='heading'>Resources</Typography>
        <Grid item className={classes.about}>
        <img src={GlobeIcon} alt={GlobeIcon} />
        <Typography  className={classes.tag} >Official Website</Typography>
        </Grid>
        <Grid item className={classes.about}>
        <img src={PageIcon} alt={PageIcon}/>
        <Typography  className={classes.tag} >White Paper</Typography>
        </Grid>
     </ThemeProvider>
     </Grid>
 )

}
export default CoinDescription