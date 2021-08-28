import React ,{useState,useEffect} from "react";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from "react-redux";  
import { RiArrowRightUpLine } from "react-icons/ri";
import { RiArrowRightDownLine } from "react-icons/ri";

const useStyles = makeStyles({
	
	root2: {
		width: '1040px',
		Height: '130px',
		marginBottom: '24px',
    marginLeft:'10px',
		padding: "24px",
        borderRadius : '4px',
        '&:hover':{
			borderColor:'1px solid #E8E8F7',
		},
    border: '1px solid #E8E8F7',
	},
	
	isActive:{
		border: "1px solid #5ac568",
	},
	// logo_urlPadding: {
	// 	//padding: "5% 3% 3% 5%",
	// 	paddingLeft:'7%',
	// 	paddingTop:'7%',
	// 	paddingRight:'3%',
	// 	paddingBottom:'3%'
	// },
	header: {
		 display: "flex",
		 justifyContent: "space-between",
		 alignItems: "center",
		 objectFit:'contain',
	},
	spacing: {
		
		color:'#5f7381',
		display: 'flex',
		flexDirection: 'row',
		gap: '10px',
        fontSize: '12px',
        fontWeight: '500',
        paddingLeft:'20%',
        display: 'flex',
	},
	inCol: {
		
    width:'80%',
    //border:'solid'
	},
  
    
    padding : {
        paddingTop : '0',
        lineHeight : 1.33
    },
    cardInfoPadding : {
       // paddingLeft: '20px',
        width:'10%'
    },
	moreIconPadding :{
		color : '#5f7381',
	},
    graphAlignmnent:{
    
        display: 'flex',
        height: "58.38px" ,
        width:'60%',
    border: '1px solid #E8E8F7',
    },
    PercentagePadding:{
         paddingLeft:'90%',
        // paddingTop:'10%',
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
      marginTop:'20px',
  },

});

export default function cardCard({
	card, isActive, renderPages
}) {
	// const isActive = card.isActive,
  const[gains,setGains]=useState(0);
  const[dailyData,setDailyData]=useState([]);
  var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

 

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
  console.log( rfc3339Date(dt),'new dt in currency card expanded');
  return rfc3339Date(dt);
  
 

}
console.log("********************date="+ rfc3339Date(new Date()));
 
  //console.log(new Date().format("DD-MM-YYYY hh:mm:ss"),"d is selected date");
  console.log("yup23",rfc3339Date(new Date()));

  const serverURL = useSelector(state=>state.serverURL);
const userId = useSelector(state=>state.userId);
console.log("in cc serverurl",serverURL);
console.log("in cc userId",userId);
console.log("id is",card.id);
  useEffect(() => { fetch(serverURL+'/currency/BTC/timeline?start='+selectBasedonInterval()+'&interval=1h').then((res) => res.json()).then(res => {
      console.log("inside fetch",res.gains);
        setGains(Math.round(res.gains*100)/100);
        setDailyData(res.timelines);
        console.log("Boom",res.timelines);
       console.log("d is gain in currency card",Math.round(res.gains*100)/100);
    })
    }, [])
    
	console.log(card.logo_url)
  const id=card.id;
  const market_cap = card.market_cap;
	
	const logo_url = card.logo_url
	const name = card.name
	const price = card.price
	const classes = useStyles()
	const percentage=card.percentage
	const statusColor='+10%'
    const timeStamp='24h'
	const handleChangeForCard = () =>{
		
	
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
    
    var y=createArray(12, 2);
    var StartInterval=9999999999;
    var EndInterval=0;

   

    var j=0;
    var countOfDisplayedData=0;
    
    for(var i=dailyData.length-1;i>=0 && countOfDisplayedData<12;i=i-2){
     
      console.log(new Date(dailyData[i][0]).getDate()," ",dailyData[i][1],"Go month");
      //y[i][0]=new Date(monthlyData[i][0]).toString();
       y[j][0]=(new Date(dailyData[i][0]).getHours()).toString();
       console.log(y[j][0],"this is current date");
      if(StartInterval>Number(dailyData[i][1]))
      StartInterval=Number(dailyData[i][1]);
      if(EndInterval<Number(dailyData[i][1]))
      EndInterval=Number(dailyData[i][1]);
       y[j][1]=Number(dailyData[i][1]);
      countOfDisplayedData++;
      j++;
      console.log(j,"this is j value");
    }
    console.log(y,"this is graph array")
    var Color='#20B03F';
    if(gains<0){
      Color='#B71A33';
    }
    

    const options = {
      chart: {
        type: "areaspline",
      },
      title: {
        text: '',
        style: {
            display: 'none'
        }
      },
    
    legend: {
    //   layout: 'horizontal',
    //   align: 'left',
    //   verticalAlign: 'top',
    //   x: 400,
    //   y: 50,
    //   floating: true,
    //   //borderWidth: 1,
    //   backgroundColor:
    //       Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    enabled: false
    },
    xAxis: {
      // categories: [
      //     'Monday',
      //     'Tuesday',
      //     'Wednesday',
      //     'Thursday',
      //     'Friday',
      //     'Saturday',
      //     'Sunday'
      // ],
       visible: false,
      type: 'category',
      labels: {
          rotation: 0,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
    },
    yAxis: {
      title: {
          text: 'Fruit units'
      },
      min: StartInterval,
      max:  EndInterval,
      visible: false
    },
    tooltip: {
      shared: true,
      valueSuffix: ' units'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
          fillOpacity: 0.1,
      },
      series: {
        marker: {
            enabled: false
        }
    }
      
    },
    series: [
      
      {
      name: 'currencyPrice',
      color: Color,
      data: y,
      pointRadius: 0,
    }]
    };
  
	
		return (
                // <div data-testid = "maindivincardcardsmall">
                	 <ThemeProvider theme={customtheme}>
				<Card variant="outlined" className= {classes.root2} data-testid = "cardincardcardsmall" onClick = { handleChangeForCard }>

						<Grid container data-testid = "maingridincardcardsmall">
							<Grid item xs={1} data-testid = "firstgridincardcardsmall">
								<MyImage alt={logo_url} src={logo_url} width="44px" height="44px" data-testid = "myimageincardcardsmall"/>
							</Grid>
							<Grid item  className={classes.cardInfoPadding} data-testid = "secondgridincardcardsmall">
								<Typography gutterBottom variant="h3" data-testid = "nameincardcardsmall">
									{name}
								</Typography>
                                
                                <Typography gutterBottom variant="h3">								
                                <NumberFormat value={parseFloat(price).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                               </Typography>
                                <Typography className={classes.timeStampPadding} gutterBottom variant="h3">								
									{timeStamp}
								</Typography>
								
								
							</Grid>
                            <Grid item  className={classes.inCol} data-testid = "fourthgridinjobcardsmall"  alignItems='center'>
								<div className={classes.spacing} data-testid = "innergridinjobcardsmall">
                { gains>=0 &&
                  <Typography  className={classes.spacing} style={{
                                    fontSize:'12px',
                                    paddingLeft:'96%',
                                   // display: 'flex',
                                   color:'#20B03F'
									}}>
                  
                 	
                  <NumberFormat value={parseFloat(gains).toFixed(2)} displayType={'text'} thousandSeparator={true}  prefix={'+'} suffix={'%'}/>
									</Typography>
                  }
                  	{ gains<0 &&
                  <Typography  className={classes.spacing} style={{
                                    fontSize:'12px',
                                    paddingLeft:'96%',
                                  // paddingRight:'0px',
                                   color:'#B71A33'
									}}>
                  
                    <NumberFormat value={parseFloat(gains).toFixed(2)} displayType={'text'} thousandSeparator={true}  prefix={'+'} suffix={'%'}/>
                
									</Typography>
                  }
                 
                                </div>
                               
                               
							              <HighchartsReact  className={classes.graphAlignmnent}
                                 containerProps={{ style: { height: "78.38px" ,width:'117%' } }} 
                                // constructorType={"chart"}
                                 highcharts={Highcharts}
                                  options={options} />
                            </Grid>

						</Grid>
				
				</Card>
                </ThemeProvider>
			// </div>
		);
	}