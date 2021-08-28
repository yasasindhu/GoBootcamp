import { Button, Grid, Paper, Tab, Tabs, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUserId } from "../../../redux/CryptoActions";
import { makeStyles } from "@material-ui/core/styles";
import Logo from '../../../../public/images/Minet Logo.svg'
const useStyle = makeStyles((theme) => ({
  root: {
   flexGrow: 1,
  
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#FAFCFF",
    height:"100vh",
    width:"100%"
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important"
  }
}));  

function LoginPage() {
  const style = useStyle();
  // const dispatch = useDispatch();
  const serverURL = useSelector((state) => state.serverURL);
  const [data, setData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    picture: "",
  });
  const [signInEmail,setSignInEmail]=useState('') 
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    //alert(newValue)
   
    
  };


  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  var emailEntered = '';
  const handleSignInEmail = (e) => {
    emailEntered=e.target.value
  }
  const signUpForm = () => {
    

    // dispatch(addToBooks(data));
    //console.log(data);
    if(data.name==='' || data.address ==='' || data.email ==='' || data.phone ==='' || data.picture ===''){
     
      document.getElementById("errorMessage").innerHTML= "Please fill in all fields";
    }
    else {
    console.log("serverUrl", serverURL);
    fetch(serverURL + "/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        console.log("result = ", result);
        if(result.error){
         // alert("user already exist")
        
         document.getElementById("errorMessage").innerHTML= "User with email already exists";
        }
        else{
        console.log("userId = ", result.Id);
        // store userid in reduxstore
        dispatch(addUserId(result.Id));
        history.push("/dashboardScreen");
      }
      })
      .catch((error) => {
        console.log(error);
        alert("error occured")
      });
    }  
  };

  const SignInForm = () => {
    // dispatch(addToBooks(data));
   // alert("came to loginform");
   console.log("emailEntered",emailEntered);
   if(emailEntered===''){
     
    document.getElementById("errorMessage").innerHTML= "Please enter email";
  }
  else {
  // console.log("signInEmail",signInEmail);
    fetch(serverURL + "/users?email="+emailEntered, {
     
      method: "GET",
     
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        if(result.error){
          // alert("user already exist")
          document.getElementById("errorMessage").innerHTML= "User with this email does not exist";
         }
         else{
         console.log("userId = ", result.id);
         // store userid in reduxstore
         dispatch(addUserId(result.id));
         history.push("/dashboardScreen");
       }
      })
      .catch((error) => {
        console.log(error);
      });
  }      
  };
  const paperStyle = { padding: "30px 20px", width: 500, margin: "70px" ,border: '1px solid #ECECF7'};
  return (
    <div clasName={style.root}>
       <Paper className={style.paper}>
    <Grid container justifyContent="center" >
      
      <Grid item xs={10} style={{marginTop:"50px"}}>
                                         
                                     <center>         
                                         <img src={Logo} width="72px" height="72px"/> 
                                         </center> 
                                     
       
      </Grid>
      <Paper  style={paperStyle}>
      <center><p id="errorMessage" style={{color:"red"}}></p></center>
      
      <Grid xs={10} >
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        style={{marginLeft:"60px"}}
        onChange={handleChange}
        
        aria-label="disabled tabs example"
      >
        <Tab label={'Sign Up'} />
        <Tab label={'Sign In'} />
      </Tabs>
      <br/>
      { value ===0 && 
        <>
         <Grid container spacing={3} justifyContent="center" alignItems="center" style={{marginLeft:"15px"}}>
           <Grid item xs={10}>
          <TextField
            fullWidth
            label="Name"
            id="name"
            value={data.name}
            
            placeholder="Enter name"
            onChange={(e) => handleInput(e)}
          />
          </Grid>
          <Grid item xs={10}>
          <TextField
            fullWidth
            label="Address"
            id="address"
          
            value={data.address}
            placeholder="Enter address"
            onChange={(e) => handleInput(e)}
          />
          </Grid>
          <Grid item xs={10}>
          <TextField
            fullWidth
            label="Email"
            id="email"
           
            placeholder="Enter email"
            onChange={(e) => handleInput(e)}
          />
          </Grid>
          <Grid item xs={10}>
          <TextField
            fullWidth
            label="Phone"
          
            id="phone"
            placeholder="Enter phone"
            onChange={(e) => handleInput(e)}
          />
          </Grid>
          <Grid item xs={10}>
          <TextField
            fullWidth
            label="Picture"
            id="picture"
           
            placeholder="Enter picture"
            onChange={(e) => handleInput(e)}
          />
          </Grid>
          <br/>
          <Grid item xs={10}>
            <center>
          <Button
            variant="contained"
            id="name"
            color="primary"
            style={{marginTop:"20px"}}
            onClick={signUpForm}
          >
            SIGN UP
          </Button>
          </center>
          </Grid>
          </Grid>
          </>
      }
     

       {value === 1 && 
          <>
             <Grid container spacing={3} justifyContent="center" alignItems="center" style={{marginLeft:"15px"}}>
           <Grid item xs={10}>
            <TextField
            fullWidth
            label="Email"
            id="email"
           
            onChange={(e) => handleSignInEmail(e)}
            placeholder="Enter email"
            
          />
          </Grid>
          <Grid item xs={10}>
          <center>
            <Button
            variant="contained"
            id="name"
            color="primary"
            style={{marginLeft:"10px"}}
            style={{marginTop:"20px"}}
            onClick={SignInForm}
          >
            SIGN IN
          </Button>
          </center>
          </Grid>
          </Grid>
          </>
    }
    </Grid>
      </Paper>
    </Grid>
    </Paper>
    </div>
  );
}
export default LoginPage;
