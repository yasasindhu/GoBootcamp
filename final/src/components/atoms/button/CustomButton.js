import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import customtheme from "../../theme";


const Mybutton = ({variant,text,color,onClick}) => {
  console.log({color});
  return (
    <ThemeProvider theme={customtheme}>
      <Button variant={variant} color={color} onClick={onClick} 

>
        {text}
      </Button>
     
    </ThemeProvider>
  );
};



export default Mybutton;