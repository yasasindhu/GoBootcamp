import { ThemeProvider ,makeStyles} from '@material-ui/styles';
import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const useStyles = makeStyles((theme) => ({
  root: {
    
      //width: '791.49px',
      //height: '246px',
      //border: '1px solid #E8E8F7',
    //  margin:'24px'
  },
}));
const Graph = ({data1,data2,start,end}) => {
  console.log("sedfgjnk",start,"drr",end)
  const classes = useStyles();
  const options = {
    chart: {
      type: "areaspline",
    },
    title: {
      text: "",
      style: {
        display: 'none'
    }
    },
  //   series: [
  //     {
  //       data: [1, 2, 1, 4, 3, 6]
  //     }
  //   ]
  // };
  legend: {
    // layout: 'horizontal',
    // align: 'left',
    // verticalAlign: 'top',
    // x: 400,
    // y: 50,
    // floating: true,
    // //borderWidth: 1,
    // backgroundColor:
    //     Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
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
    // min:start,
    // max:end,
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
    name: 'current value',
    color:'#FFA74F',
    data: data1,
    pointRadius: 0,
  }, {
    name: 'total investment',
  //   color: {
  //     linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
  //     stops: [
  //         //[0, '#003399'],
  //         [1, '#0052FF']
  //     ]
  // },
  color:'#0052FF',
    data: data2,
  }]
  };
  
  return (
    <div className={classes.root}>
      
      <HighchartsReact  
      containerProps={{ style: { height: "266px", display: 'flex' } }} 
       highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Graph;