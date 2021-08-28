import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { ThemeProvider } from "@material-ui/styles";
import customtheme from '../../theme';
import CustomizedTabs from '../Tabs/index';
import CustomizedGraphs from '../../molecules/graph/index';
import DataReport from '../../../../public/images/dataReport.png';
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import NumberFormat from 'react-number-format';
import { GridOnOutlined } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
    root: {
     
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        paddingTop:'24px',
    },
    root2:{
      //width:'840px',
      height:'420px',
     // backgroundColor:'pink',
       display: 'flex',
      
       paddingLeft:'5px',
    },
    divider: {
      paddingTop:'50px',
      border:'solid',
      paddingLeft:'24px'
      },
      header:{
          paddingLeft:'24px',
          paddingRight:'12px',
          display:'flex',
          
      },
      discover:{
        fontWeight: '500',
        fontSize: '14px',
        color: '#0052FF',
        height: '16px',
        lineHeight: '16px',
        paddingLeft:'12px',
      },
      positivePercentage:{
          color:'#20B03F',
         
          paddingRight:'24px',
          display:'flex',
          fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        letterSpacing: '0.005em',
       
      },
      negativePercentage:{
          color:'#B71A33',
         
          display:'flex',
          fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        letterSpacing: '0.005em',
       
      },
      amount:{
        display:'flex',
      paddingLeft:'24px',
      paddingRight:'3px',
        fontSize: '24px',
        lineHeight: '34px',
        fontStyle: 'normal',
        fontWeight: 'normal',
       // margingLeft:'24px'
       paddingTop:'8px',
       paddingRight:'30px'
      },
      amountAlignment:{
          display:'flex',
         
      },
      graph:{
        //width:'500px',
        height:'300px',
      },
      dataReport:{
        paddingLeft:'275px',
        paddingRight:'329px',
        
      },
      listItem1: {
       display:'flex',
       width:'10px',
       height:'10px',
       backgroundColor:'#FFA74F',
       borderRadius:'100%',
       marginLeft:'67%',
      

      },
      labelAlignment:{
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        /* identical to box height, or 117% */
  
        letterSpacing: '0.005em',
        marginLeft:'4px'
        
      },
      listItem2:{
        display:'flex',
        width:'10px',
        height:'10px',
        backgroundColor:'#0052FF',
        borderRadius:'100%',
        marginLeft:'20px'
      },
      headingAlignment:{
        paddingTop:'32px',
        paddingBottom:'12px',
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '22px',
        letterSpacing: '0.005em',
        marginLeft:'14px',
      },
      timeStampPadding:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:'15px',
        paddingTop:'2px',
        paddingBottom:'2px',
        width: '41px',
        height: '18px',
        background: '#E8E8F7',
        borderRadius: '100px',
        //margin: '8px 0px',
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        letterSpacing: '0.005em',
        color: '#7D7D89',
        textAlign:'center',
        marginLeft:'650px',
    },
    graphAlignment:{
      //paddingLeft:'12%',
     // backgroundColor:'red',
     //border:'solid',
     width:'100%',
     margin:'14px',
     paddingBottom:'24px',
     height:'90%',
    }
     
}));

const WatchList = (  )  => {
  
    const classes=useStyles();
   
    const[investment,setInvestment]=useState([]);
    const[portfolioDetails,setPortfolioDetails]=useState([]);
    const serverURL = useSelector(state=>state.serverURL);
    const userId = useSelector(state=>state.userId);
    function f(n) {    // Format integers to have at least two digits.
      return n < 10 ? '0' + n : n;
    }
    
    function rfc3339Date(d) {
      return d.getUTCFullYear()   + '-' +
           f(d.getUTCMonth()+1 ) + '-' +
           f(d.getUTCDate())      + 'T' +
           f(d.getUTCHours())     + ':' +
           f(d.getUTCMinutes())   + ':' +
           f(d.getUTCSeconds())   + 'Z';
    };
    function selectBasedonInterval(){
  
      var dt = new Date();
    dt.setDate( dt.getDate() - 1 );
   // console.log( rfc3339Date(dt),'new dt in currency card',rfc3339Date(new Date()),card.id);
    return rfc3339Date(dt);
    
   
  
  }
  console.log("usertfghjn",userId);
    useEffect(() => { fetch(serverURL+'/portfolio/'+userId+'/timeline?start='+selectBasedonInterval()+'&interval=1h').then((res) => res.json()).then(res => {
      
       setInvestment(res);
       setPortfolioDetails(res.portfolio_details);
       console.log("finiu",res.portfolio_details);
    })
    }, [])
    console.log(portfolioDetails.length,"detaols");
   
    var currentAmount=0;
    var totalAmount=0;
    const totalPercentage=investment.total_investment_gain;
    const currentPercentage=investment.current_value_gain;
   
  
    if(portfolioDetails.length>0){
      currentAmount=portfolioDetails[portfolioDetails.length-1].current_price;
      totalAmount=portfolioDetails[portfolioDetails.length-1].invested_price;
      console.log(portfolioDetails[0].timestamp,"time");
      }

      
      function createArray(length) {
        var arr = new Array(length || 0),
            i = length;
      
        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = createArray.apply(this, args);
        }
      
        return arr;
      }
      
      if(portfolioDetails.length>0){
        var y=createArray(24, 2);
        var StartInterval=9999999999;
        var EndInterval=0;
        var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var j=0;
        var countOfDisplayedData=0;
        console.log(portfolioDetails,"ans is date");
        //console.log(portfolioDetails[0],"dftghj");
        for(var i=portfolioDetails.length-1;i>=0 && countOfDisplayedData<24;i--){
 
         y[i][0]=new Date(portfolioDetails[i].timestamp).getHours().toString(),
         console.log(y[i][0],"this is what ",new Date(portfolioDetails[i].timestamp));
         y[i][1]=portfolioDetails[i].current_price,
         console.log(y[i][0],"time ma",y[i][1],"complete",portfolioDetails[i].timestamp);
         if(StartInterval>y[i][1]){
           StartInterval=y[i][1]
         }
         if(EndInterval<y[i][1]){
           EndInterval=y[i][1]
         }
         countOfDisplayedData++;
        }
        countOfDisplayedData=0;
        var array_2=createArray(24, 2);
       
        var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var j=0;
        var countOfDisplayedData=0;
        for(var i=portfolioDetails.length-1;i>=0 && countOfDisplayedData<24;i--){
 
          array_2[i][0]=new Date(portfolioDetails[i].timestamp).getHours().toString(),
          array_2[i][1]=portfolioDetails[i].invested_price,
         console.log(array_2[i][0],"time ma",array_2[i][1]);
         if(StartInterval>y[i][1]){
          StartInterval=y[i][1]
        }
        if(EndInterval<y[i][1]){
          EndInterval=y[i][1]
        }
        }
        countOfDisplayedData++;
      
      }
      






    return (
       
      <div>
          <ThemeProvider theme={customtheme}> 
          <Typography className={classes.headingAlignment}>My portfolio value</Typography>
          <Card  className={classes.headingAlignment}>
        <Grid  container  className={classes.root2} direction="row">
       
       
            <Grid container item className={classes.root} >
            <Grid container item   style={{display:'flex'}} >
                
                   <Grid item >
                            <Grid container direction="column">
                              <Grid item style={{display:'flex'}}>
                              <Typography variant='h4' className={classes.header}> Current Value</Typography>
                              {Number(currentPercentage)>=0 && 
                            <Typography  className={classes.positivePercentage}>
                            +{parseFloat(currentPercentage).toFixed(2)}
                              </Typography>
                            }
                            { Number(currentPercentage)<0 && 
                            <Typography  className={classes.negativePercentage}>
                            
                              {parseFloat(currentPercentage).toFixed(2)}
                              </Typography>
                            }
                              </Grid>
                              <Grid item className={classes.amountAlignment}>
                              <Typography  className={classes.amount}>
                  
                              <NumberFormat value={parseFloat(currentAmount).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                              </Typography>
                    </Grid>
                    
                   </Grid>
                   
                    </Grid>
                    
                    {/* <Grid item style={{display:'flex'}}>
                    <Typography>wsedfghjk</Typography>
                    </Grid> */}
                    <Divider orientation="vertical" flexItem classname={classes.divider}/> 
                    <Grid item style={{display:'flex'}}>
                              <Grid container direction="column">
                              <Grid item style={{display:'flex'}}>
                              <Typography variant='h4' className={classes.header}> Total value</Typography>
                              {Number(totalPercentage)>=0 && 
                            <Typography  className={classes.positivePercentage}>
                            +{parseFloat(totalPercentage).toFixed(2)}
                              </Typography>
                            }
                            { Number(totalPercentage)<0 && 
                            <Typography  className={classes.negativePercentage}>
                            
                              {parseFloat(totalPercentage).toFixed(2)}
                              </Typography>
                            }
                              </Grid>
                              <Grid item className={classes.amountAlignment}>
                              <Typography  className={classes.amount}>
                  
                              <NumberFormat value={parseFloat(totalAmount).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                              </Typography>
                              </Grid>
                              {/* <Divider orientation="vertical" flexItem style={{boder:'solid',display:'flex'}}/> */}
                            </Grid>
                                    
                    
                          
                          
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                        <Grid item>
                        <Typography className={classes.timeStampPadding} gutterBottom variant="h3">								
                                24h
                        </Typography>
                        </Grid>
                        <Grid item style={{display:'flex',paddingTop:'12px'}}>
                                  <div className={classes.listItem1}></div>
                  <Typography className={classes.labelAlignment}>Current Income</Typography>
                  <div className={classes.listItem2}></div>
                  <Typography  className={classes.labelAlignment}>Total Investment</Typography>
                        </Grid>
                       
                    </Grid>
                        </Grid>
                   </Grid>
                   </Grid>
                   
                   
                
                  
           <Grid className={classes.amountAlignment}>
           
           {/* <Divider orientation="vertical" flexItem classname={classes.divider}/> */}
         
          
           </Grid>
          
           
           
          
           
         
            <Grid  item  className={classes.graphAlignment}>
           
            { portfolioDetails.length>0 &&
            <CustomizedGraphs data1={y} data2={array_2} start={StartInterval} end={EndInterval}/>

            }
            {portfolioDetails.length==0  &&
            <img src={DataReport} alt={DataReport} className={classes.dataReport}/>
            }
          
            </Grid>
            
           
      
    
     </Grid>
        </Card>
        </ThemeProvider>
     </div>
    );
  }
  
  export default WatchList;