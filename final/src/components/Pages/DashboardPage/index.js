import React, { useEffect, useState } from "react";


import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SideNavBar from "../../organisms/SideNavBar/index";
import TopNavigation from "../../organisms/TopNavBar";
import SearchItem from '../../molecules/SearchItem/index';
import SelectComponent from '../../molecules/SelectComponent/index';
import TradeCardDetails from "../../organisms/TradeCardDetails/index";
import Footer from '../../organisms/Footer/index';
import CardsDisplay from "../../organisms/CardsDisplay";
import WatchList from '../../organisms/WatchList/index';
import Porfolio from '../../organisms/Porfolio/index';
import Graph from '../../organisms/Graph/index';
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Divider from '@material-ui/core/Divider';
// const useStyle = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: "blue",
//       },
//       paper: {
//         padding: theme.spacing(2),
//         backgroundColor: "white",
//       },
//       container: {
//         height: "1000vh",
//       },
//   sideNav: {

//     height:"1088px",
//     width:'90px',

//   },
//   banner: {


//     backgroundColor:'red',


//   },
//   content: {
//     backgroundColor: 'white',
//    // height:"560px",
//     //flexGrow:1,
//     width:'950px',
//     height:"900px"

//   },
//   rightPanel: {

//     backgroundColor: '#71fed4',
//     width: '410px',
//     height: '741px',
//   //  marginTop:'100px',
//   },
//   rightAlignment:{
//     backgroundColor: '#e7fce0',
//     marginTop:'5px',
//     height: "100vh",

//   },
//   middleContainer:{

//     width:'1800px',
//     height:'100%',


//   },
//   filterboxStyle:
//   {

//     height:'500px',



//   },

// }));

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "white",
  },
  container: {
    //height: "600vh",
    display: 'flexRight'
  },
  sideNav: {
    //backgroundColor: ' E8E8F7',
    // height:"1088px",
    width: '5%',
    borderRight: '1px #E8E8F7 solid',
  },
  divider: {
    width: '10px',
    //height:'100px',
    fontWeight: '500',
    border: '1px solid #ECECF7',
  },
  banner: {

    //backgroundColor: '#B2BEB5',
    //  height:'82px',
    width: '100%',
    // width:'2200px',
    //paddingLeft:'80px',
    //borderTop:'1px #E8E8F7 solid',


  },
  footer: {
    borderTop: '1px #E8E8F7 solid',
  },
  content: {
    backgroundColor: '#FAFCFF',
    height: "1000px",
    width: '1250px',
    //marginLeft:'10px',

  },
  rightPanel: {

    //smarginLeft:'50%',
    //backgroundColor: '#71fed4',
    //  marginTop:'100px',
    width: '430px',
  },
  rightAlignment: {
    backgroundColor: '#e7fce0',
    marginTop: '5px',
    height: "100vh",

  },
  middleContainer: {

    width: '100%',
    //width:'1700px',
    height: '100%',
    borderTop: '1px #E8E8F7 solid',

  },
  filterboxStyle:
  {

    height: '500px',



  },
  dashboard: {
    width: '95%',
    paddingLeft: '24px',
    borderBottom: '1px #E8E8F7 solid',
  }

}));


const Dashboard = (props) => {
  const style = useStyle();




  return (
    <div clasName={style.root}>





      <Paper className={style.paper}>


        <Grid container className={style.container} direction="row" spacing={0}>

          <Grid item className={style.sideNav}>
            {props.sideNav}
            <SideNavBar />


          </Grid>
          <Grid item className={style.dashboard} >


            <Grid container direction="column" spacing={0}>


              <Grid item className={style.banner}>
                <Divider orientation="vertical" flexItem classname={style.divider} />
                <TopNavigation label={'Dashboard'} />

              </Grid>


              <Grid item>

                <Grid container direction="row" className={style.middleContainer} spacing={2} >



                  <Grid item className={style.content} xs={8}>


                    <WatchList />
                    <CardsDisplay />
                    <Graph />



                  </Grid>


                  <Grid item className={style.rightPanel} xs={4}>

                    <Porfolio />


                  </Grid>



                  <Grid item className={style.banner}>
                    <Footer />
                  </Grid>

                </Grid>
              </Grid>




            </Grid>







          </Grid>
        </Grid>



      </Paper>





    </div>


  );
};


export default Dashboard;