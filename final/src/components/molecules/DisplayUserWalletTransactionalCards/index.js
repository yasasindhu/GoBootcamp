import { Grid } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import { makeStyles} from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import WalletTransactionCard from "../WalletTransactionCard";
import UserWalletTransactionCard from "../UserWalletTransactionCard";
const useStyles = makeStyles({
root2: {
   // width: '1286px',
    //height:"74px",
    //height: "106px",
    //marginBottom: "10px",
    // padding : '1.5%',
   // padding: "10px",
  //  borderRadius: "1px",
    //border:"solid",
    //"&:hover": {
    // borderColor:'#0365f2',
    //},
   // boxShadow: "0px 0px 5px #ccc",
   backgroundColor:"white"
  },
});


function DisplayUserWalletTransactionalCards(props){
    const classes = useStyles();
    
    
    const[transactions,setTransactions]=useState([]);

    const serverURL = useSelector(state=>state.serverURL);
const userId = useSelector(state=>state.userId);
console.log("in duwt serverurl",serverURL);
console.log("in duwt userId",userId);
    useEffect(() => { fetch(serverURL+'/walletTransactions/'+userId).then((res) => res.json()).then(res => {
      setTransactions(res);
      console.log("userwallettransactions*****",res);

    })
    }, [])
    console.log('tis',transactions);
    const jobsInFindJobs = transactions

    return(
            <Grid container direction="row"   className={classes.root2}>
          
                                        
            {jobsInFindJobs.map((item) => (
               
                <UserWalletTransactionCard job={item}/>
            ))
            }
            </Grid>
           
    );
}
export default DisplayUserWalletTransactionalCards;