import { ThemeProvider ,makeStyles} from '@material-ui/styles';
import React,{useState,useEffect} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
     
      // width: '1191px',
      // height: '246px',
      padding:'24px',
      //border: '1px solid #E8E8F7',
      //margin:'24px'
  },
}));
const SingleStrandGraph = ({ currenctmonthlyData}) => {
  const classes = useStyles();
  const[monthlyData,setMonthlyData]=useState([]);
  const[dailyData,setDailyData]=useState([]);
  const[hourlyData,setHourlyData]=useState([]);
  const[weeklyData,setWeeklyData]=useState([]);
  const[yearlyData,setYearlyData]=useState([]);

  const intervalSelected=useSelector(state=>state.interval);
console.log(intervalSelected+"this is selected interval");
console.log(monthlyData,"these are monthlyData");
console.log("HIHeloo")
const crypto = useSelector(state => state.crypto);
const serverURL = useSelector(state=>state.serverURL);
var flag='false'
console.log("in singleStrand="+crypto.id);
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
  function StartDateForYearlyDatarfc3339Date(d) {
    return d.getUTCFullYear()-10   + '-' +
         f(d.getUTCMonth()+1 ) + '-' +
         f(d.getUTCDate())      + 'T' +
         f(d.getUTCHours())     + ':' +
         f(d.getUTCMinutes())   + ':' +
         f(d.getUTCSeconds())   + 'Z';
  };
  function StartDateFor1Yrfc3339Date(d) {
    return d.getUTCFullYear()-1   + '-' +
         f(d.getUTCMonth()+ 2) + '-' +
         f(d.getUTCDate())      + 'T' +
         f(d.getUTCHours())     + ':' +
         f(d.getUTCMinutes())   + ':' +
         f(d.getUTCSeconds())   + 'Z';
  };
  function StartDateFor1Mrfc3339Date(d) {
    return d.getUTCFullYear()   + '-' +
         f(d.getUTCMonth()) + '-' +
         f(d.getUTCDate()-1)      + 'T' +
         f(d.getUTCHours())     + ':' +
         f(d.getUTCMinutes())   + ':' +
         f(d.getUTCSeconds())   + 'Z';
  };
  function StartDateFormonthlyDatarfc3339Date(d) {
    return d.getUTCFullYear()   + '-' +
         f(d.getUTCMonth()+ 1) + '-' +
         f(d.getUTCDate()-1)      + 'T' +
         f(d.getUTCHours())     + ':' +
         f(d.getUTCMinutes())   + ':' +
         f(d.getUTCSeconds())   + 'Z';
  };
  function StartDateForWeeklyDatarfc3339Date(d) {
    return d.getUTCFullYear()   + '-' +
         f(d.getUTCMonth()+ 1) + '-' +
         f(d.getUTCDate()-12)      + 'T' +
         f(d.getUTCHours())     + ':' +
         f(d.getUTCMinutes())   + ':' +
         f(d.getUTCSeconds())   + 'Z';
  };
  function selectBasedonInterval(intervalSelected){
    console.log("interval selected45678",intervalSelected);
   
    
    if(intervalSelected=='1m'){
      var dt = new Date();
    dt.setDate( dt.getDate() - 31 );
    console.log( rfc3339Date(dt),'new dt');
    return rfc3339Date(dt);
    }
    if(intervalSelected=='24h'){
      var dt = new Date();
    dt.setDate( dt.getDate() - 1 );
    console.log( rfc3339Date(dt),'new dt in 24h',rfc3339Date(new Date()));
    return rfc3339Date(dt);
    }
    if(intervalSelected=='1w'){
      var dt = new Date();
    dt.setDate( dt.getDate() - 12);
    console.log( rfc3339Date(dt),'new dt');
    return rfc3339Date(dt);
    }
    if(intervalSelected=='1y'){
      var dt = new Date();
    dt.setDate( dt.getDate() - 365);
    console.log( rfc3339Date(dt),'new dt for monthy');
    return rfc3339Date(dt);
    }

  }
   
  
    useEffect(() => { fetch(serverURL+'/currency/'+crypto.id+'/timeline?start='+StartDateFor1Yrfc3339Date(new Date())+'&end='+rfc3339Date(new Date())+'&interval=1m').then((res) => res.json()).then(res => {
      console.log("inside fetch single strand",res.timelines);
       setMonthlyData(res.timelines);
       flag='true'
      console.log(res.timelines);
    })
    }, [intervalSelected])
  
 
  console.log("hello",intervalSelected)
  const id='BTC';
  console.log("selection is",id);
    console.log("start interval",StartDateFormonthlyDatarfc3339Date(new Date()),"end is",rfc3339Date(new Date()));
    useEffect(() => { fetch(serverURL+'/currency/'+crypto.id+'/timeline?start='+selectBasedonInterval(intervalSelected)+'&end='+rfc3339Date(new Date())+'&interval=1h').then((res) => res.json()).then(res => {
      setHourlyData(res.timelines);
      console.log(res.timelines,'hey hour 123');
    })
    }, [intervalSelected])

    useEffect(() => { fetch(serverURL+'/currency/'+crypto.id+'/timeline?start='+selectBasedonInterval(intervalSelected)+'&end='+rfc3339Date(new Date())+'&interval=1w').then((res) => res.json()).then(res => {
      setWeeklyData(res.timelines);
      console.log(res.timelines,'hey week');
    })
    }, [intervalSelected])

    //1M data
    useEffect(() => { fetch(serverURL+'/currency/'+crypto.id+'/timeline?start='+selectBasedonInterval(intervalSelected)+'&end='+rfc3339Date(new Date())+'&interval=1d').then((res) => res.json()).then(res => {
      setDailyData(res.timelines);
      console.log(res.timelines,'hey day');
    })
    }, [intervalSelected])

    //yearly data
    // useEffect(() => { fetch('http://35.232.173.71:3000/currency/ETH/timeline?start='+StartDateForYearlyDatarfc3339Date(new Date())+'&end='+rfc3339Date(new Date())+'&interval=1y').then((res) => res.json()).then(res => {
    //   setYearlyData(res.timelines);
    //   console.log(res.timelines,'hey year');
    // })
    // }, [])

    
  // if(intervalSelected!='24h'){
  //   setHourlyData([]);
  // }
  
  
  

    /*one week data*/
    // useEffect(() => { fetch('http://35.232.173.71:3000/currency/ETH/timeline?start=2019-08-10T00:00:00Z&end='+rfc3339Date(new Date())+'&interval=1w').then((res) => res.json()).then(res => {
    //   console.log("inside fetch single strand",res.timelines);
    //    setMonthlyData(res.timelines);
      
    // })
    // }, [])
    


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

var  months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

if( intervalSelected=='1y'){
 
var j=0;
console.log(monthlyData,'Hi month');
var countOfDisplayedData=0;
if(monthlyData && monthlyData.length>=12){
for(var i=monthlyData.length-1;i>=0 && countOfDisplayedData<12;i--){
 
  console.log(monthlyData[i][0]," ",monthlyData[i][1],"Go months",new Date(monthlyData[i][0]));
  //y[i][0]=new Date(monthlyData[i][0]).toString();
   y[j][0]=months[new Date(monthlyData[i][0]).getMonth()];
   console.log(y[j][0],"this is current month");
  if(StartInterval>Number(monthlyData[i][1]))
  StartInterval=Number(monthlyData[i][1]);
  if(EndInterval<Number(monthlyData[i][1]))
  EndInterval=Number(monthlyData[i][1]);
   y[j][1]=Number(monthlyData[i][1]);
  countOfDisplayedData++;
  j++;
  console.log(countOfDisplayedData,"this is j value in months",i);
  flag='false'
}
}
}

else if( intervalSelected=='1w'){
 
  var j=0;
  var countOfDisplayedData=0;
  if(weeklyData){
  for(var i=weeklyData.length-1;i>=0 && countOfDisplayedData<12;i=i-1){
   
    console.log(weeklyData[i][0]," ",weeklyData[i][1],"Go weeklyData");
    //y[i][0]=new Date(monthlyData[i][0]).toString();
     y[j][0]=months[new Date(weeklyData[i][0]).getMonth()]+new Date(weeklyData[i][0]).getDate();
     console.log(y[j][0],"this is current date");
    if(StartInterval>Number(weeklyData[i][1]))
    StartInterval=Number(weeklyData[i][1]);
    if(EndInterval<Number(weeklyData[i][1]))
    EndInterval=Number(weeklyData[i][1]);
     y[j][1]=Number(weeklyData[i][1]);
    countOfDisplayedData++;
    j++;
    console.log(j,"this is j value");
  }
  }
  }
  
  else if( intervalSelected=='24h'){
  var j=0;
  console.log("hi 24h",hourlyData);
  var countOfDisplayedData=0;
  // for(var i=hourlyData.length-1;i>=0;i=i-1){
   //console.log(hourlyData[i][0],"final",new Date(hourlyData[i][0]).getHours()+5,"timepass",new Date(hourlyData[i][0]).getHours());
  // }
  if(hourlyData){
console.log(hourlyData.length,"rocket");
  for(var i=0;i<hourlyData.length&& countOfDisplayedData<12;i=i+1){
    console.log(hourlyData[i][0],"final",new Date(hourlyData[i][0]).getHours()+5,"timepass",new Date(hourlyData[i][0]).getHours());  
    console.log(hourlyData[i][0]," ",hourlyData[i][1],"Go hourlydata",new Date(hourlyData[i][0]),Date.parse(hourlyData[i][0]));
    //y[i][0]=new Date(monthlyData[i][0]).toString();
    console.log("hi 24h");
    console.log(new Date(hourlyData[i][0]),"before");
     y[j][0]=new Date(hourlyData[i][0]).getHours().toString();//+months[new Date(hourlyData[i][0]).getMonth()];
    console.log(y[j][0],"after");
     
     console.log(y[j][0],"this is daily data");
    if(StartInterval>Number(hourlyData[i][1]))
    StartInterval=Number(hourlyData[i][1]);
    if(EndInterval<Number(hourlyData[i][1]))
    EndInterval=Number(hourlyData[i][1]);
     y[j][1]=Number(hourlyData[i][1]);
    countOfDisplayedData++;
    j++;
    console.log(j,"this is j value");
  }
 y.reverse();
  }
  
}
if( intervalSelected=='1m'){
 
  var j=0;
  var countOfDisplayedData=0;
  if(dailyData){
  for(var i=dailyData.length-1;i>=0 && countOfDisplayedData<12;i=i-2){
   
    console.log(new Date(dailyData[i][0]).getDate()," ",dailyData[i][1],"Go month");
    //y[i][0]=new Date(monthlyData[i][0]).toString();
     y[j][0]=months[new Date(dailyData[i][0]).getMonth()]+new Date(dailyData[i][0]).getDate().toString();
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
  }
  }
  

// else if(intervalSelected=='all'){

 
//     var j=0;
//     var countOfDisplayedData=0;
    
//     for(var i=yearlyData.length-1;i>=0 && countOfDisplayedData<12;i--){
     
//      // console.log(monthlyData[i][0]," ",monthlyData[i][1],"Go months");
//       //y[i][0]=new Date(monthlyData[i][0]).toString();
//        y[j][0]=new Date(yearlyData[i][0]).getUTCFullYear().toString();
//        console.log(y[j][0],"this is current year");
//       if(StartInterval>Number(yearlyData[i][1]))
//       StartInterval=Number(yearlyData[i][1]);
//       if(EndInterval<Number(yearlyData[i][1]))
//       EndInterval=Number(yearlyData[i][1]);
//        y[j][1]=Number(yearlyData[i][1]);
//       countOfDisplayedData++;
//       j++;
//       console.log(j,"this is j value");
//     }
    
// }
//console.log(monthlyData[0],"this is minimum value");

  const options = {
    lang: {
      thousandsSep: ','
    },
    chart: {
      type: "areaspline",
    },
    title: {
      text: "",
      style: {
        display: 'none'
    }
    },
  
  legend: {
   
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
       text: '',
      style: {
        display: 'none'
    }
    },
     min: StartInterval,
     max:  EndInterval,
  },
 
  tooltip: {
    shared: true,
    valuePrefix: '$'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    areaspline: {
        fillOpacity: 0.3,
    },
    series: {
      marker: {
          enabled: false
      }
  }
    
  },
  series: [
    
    {
    name: 'currentPrice',
    color:'#FFA74F',
    data: y,
    pointRadius: 0,
  }]
  };
  
  return (
    <div className={classes.root}>
      
      <HighchartsReact  
      
       highcharts={Highcharts} 
      
       options={options} />
    </div>
  );
};

export default SingleStrandGraph;