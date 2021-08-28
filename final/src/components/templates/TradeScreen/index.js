import React from "react";


import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";




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
        height: "600vh",
      },
  sideNav: {
    backgroundColor: '#e7fce0',
    height:"1088px",
  },
  banner: {
    
    backgroundColor: '#B2BEB5',
    height:'40px',
    
    
  },
  content: {
    backgroundColor: 'white',
    height:"1000px"

   
  },
  rightPanel: {
     
      //smarginLeft:'50%',
    backgroundColor: '#71fed4',
  //  marginTop:'100px',
  },
  rightAlignment:{
    backgroundColor: '#e7fce0',
    marginTop:'5px',
    height: "100vh",
   
  },
  middleContainer:{

    width:'100%',
    height:'100%',
   

  },
  filterboxStyle:
  {

    height:'500px',



  },

}));

const TradeTemplate = (props) => {
  const style = useStyle();

  return (
    <div clasName={style.root}> 


    
 
     
      <Paper className={style.paper}>
        <Grid container className={style.container} direction="row" spacing={2}>

          <Grid item xs={2} className={style.sideNav}>
            {props.sideNav}
         

          </Grid>
          
          <Grid item xs={10} >

          <Grid container direction="column" spacing={2}>

            <Grid item  className={style.banner}>

            </Grid>


            <Grid item>

            <Grid container direction ="row" className={style.middleContainer} >


              <Grid item className={style.content}  xs={9} >



              </Grid>

             
            </Grid>
            <Grid item  className={style.banner}  >
            </Grid>
            
            </Grid>
              
            </Grid>
            
        
         
         </Grid>
        </Grid>

       
        
      </Paper>
     
  

 
      
          </div>

  
  );
};


export default TradeTemplate;