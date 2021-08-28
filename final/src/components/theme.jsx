import { createTheme } from "@material-ui/core/styles";
import '../constants.css';
const customtheme = createTheme({
  palette: {
    primary: {
      main: "#0052FF",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#FFA74F",
      contrastText: "white",
    },
  },

  // props: {
  //   MuiTypography: {
  //     variantMapping: {
  //       h1: 'h1',
  //       h2: 'h1',
  //       h3: 'h1',
  //       h4: 'h1',
  //       h5: 'h1',
  //       h6: 'h1',
  //       subtitle1: 'h2',
  //       subtitle2: 'h2',
  //       body1: 'span',
  //     }
  //   },

  
    
 
  overrides:{
   
  // makeStyles-paper-2:{

  // }
  makeStyles:{
    padding:'0px',
    paper:{
      padding:'1000px'
    }
  },
    MuiRadio: {
      root: {
        padding: 6
      }
    },
    MuiButton: {
      root: {
          minWidth:'120px' ,
          textTransform: 'none',
          height:"42px",
          //styleName: gamma/Button;
fontFamily: "Graphik",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "500",
lineHeight: "42px",
letterSpacing: "0.005em",
texteAlign: "left",


      }
    },
    MuiTypography:{
      body1:{
       
      fontSize: '2rem',
      color: 'red',
    }
    
    },
  
    MuiStepLabel:{
      label:{
        "&$completed":{
          color: "#5ac568",
          fontWeight: "bold"
        },
        "&$active":{
          color: "#5ac568",
          fontWeight: "bold"
        },
      },
    },
    MuiSvgIcon:{
      root:{
        width: '1.5em',
        height: '1.5em',
      },
    },
    MuiTypography:{
      body1:{
        fontFamily: "Graphik",
        fontWeight: "500",
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '22px',
        letterSpacing: '0.5%',
        color:'#4B4B60'
      },
      body2:{
        fontFamily: "Graphik",
       // fontWeight: "bolder",
       fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0.01em',
        textAlign: 'left'
      },
      overline:{
        fontFamily: "Graphik",
        // fontWeight: "bolder",
        fontSize: '12px',
         fontStyle: 'normal',
         fontWeight: 400,
         lineHeight: '14px',
         letterSpacing: '0.005em',
         textAlign: 'left',
         color:'#343446'
        
         
      }
    },
    MuiStepConnector:{
      root:{
        flex:"0.05",
      },
    },
    MuiInputBase : {
      root : {
        width : '220px',
        height : '40px'
      }
    },
    MuiTab : {
      root : {
          '@media (min-width: 600px)': {
              height: '48px',
              minWidth : '48px'
          },
          borderBottomColor : '#0000ff'
      },
      textColorInherit : {
          '&$selected': {
              backgroundColor:  '#5ac568',
              color : 'white',
              borderBottomColor : '#0000ff',
              '&:hover' : {
                  backgroundColor: '#5ac568'
              }	
          }
      }
    },
    MuiBox : {
      root : {
          padding : '0px 24px 24px 0px',
        }
    },
    MuiButtonBase : {
      root : {
          borderRadius : '50%',
          borderBottomColor : '#0000ff'
      }
    },
    MuiPaper : {
      root : {
          variant : 'elevation',
          elevation0 : 0
      } 
    },
    MuiAppBar : {
      colorTransparent : {
          boxShadow : 'none'
      }
    },
    // MuiSvgIcon:{
    //   root: {
    //     padding: "0px 0px 0px 20px"
    //   }
    // },
    PrivateTabIndicator : {
      colorSecondary : {
          backgroundColor : 'transparent'
      }
    },
    
  },
  typography: {
    fontFamily: 'Graphik',
    subtitle1:{
      fontFamily: 'Graphik',
      fontSize: '20px',
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '28px',
      color:"#343446"
    },
    subtitle2:{
      fontFamily: 'Graphik',
      fontSize: '20px',
      fontWeight: 400,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '28px',
      color:"#343446"
    },
    body2:{
      fontFamily: 'Graphik',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.57,
      letterSpacing: '0.1px',
    },
    body3:{
      fontFamily: 'Graphik',
      fontSize: '1000px',
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.31,
      letterSpacing: '0.1px',
      color:'#19293b'
    },
    caption:{
      fontFamily: 'Graphik',
      fontSize: '14px',
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '16px',
      letterSpacing: '0.5%',
      color:'#7D7D89'
      
    },
    caption2:{
      fontFamily: 'Graphik',
      fontSize: '14px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '16px',
      letterSpacing: '0.5%',
      color:'#7D7D89'
      
    },
  

  /*topnav bar header*/
h1:{
  fontFamily : 'Graphik',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '24px',
  lineHeight: '34px',
  color: '#343446'
  },
    h2:{
      //headers
      fontFamily : 'Graphik',
      color : '#19293b',
      fontSize : '16px',
      lineHeight : 1.5,
      letterSpacing : '0.1px',
      fontWeight:'500',
    },
  
   /*h3 used for currencyName */
h3: {
fontSize : '16px',
fontFamily : 'Graphik',
fontWeight : '500',
color : '#343446',
lineHeight : '22px',
fontStyle: 'normal',
letterSpacing : '0.005em'

},
/*h4 is used for currencyName in shortForm*/
h4:{
fontFamily : 'Graphik',
color : '#7D7D89',
fontSize : '14px',
lineHeight : '14px',
letterSpacing : '0.005em',
fontStyle: 'normal',
fontWeight: 'medium',
},
    h5: {
      fontFamily : 'Graphik',
      fontSize : '12px',
      fontWeight : 500,
      color : '#19293b',
      lineHeight : 1.33,
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing : '0.2px',
      paddingTop : '7%'  
    },
    h6:{
      fontFamily : 'Graphik',
      fontWeight : 400,
      fontSize : '24px',
      fontWeight : 'normal',
      color : '#343446',
      lineHeight : '34px',
          
    },
    overline:{
      fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '28px',
        color: '#343446',
        
    },
  },
  TrainOutlinedIcon: {
  },
  Dialog:{
    root:{
      width: '625px',
      height: '426px',
    }
  },
  Checkbox:{
    root:{
      width: '10px',
      height: '10px',
    }
  },
  CloseIcon:{
    root:{
      width: '24px',
      height: '24px',
    }
  },
  // Radio:{
    // root:{
    //   color: '#00ff00',
    // '&$checked': {
    //   color: green[600],
    // },
    // }
  // }


});

export default customtheme;







// import { createTheme } from "@material-ui/core/styles";
// import '../constants.css';
// const customtheme = createTheme({
//   palette: {
//     primary: {
//       main: "#5ac568",
//       contrastText: "#fafafa",
//     },
//     secondary: {
//       main: "#9bbdcb",
//       contrastText: "#9bbdcb",
//     },
//   },

//   // props: {
//   //   MuiTypography: {
//   //     variantMapping: {
//   //       h1: 'h1',
//   //       h2: 'h1',
//   //       h3: 'h1',
//   //       h4: 'h1',
//   //       h5: 'h1',
//   //       h6: 'h1',
//   //       subtitle1: 'h2',
//   //       subtitle2: 'h2',
//   //       body1: 'span',
//   //     }
//   //   },
//   overrides:{

   

//     MuiRadio: {
//       root: {
//         padding: 6
//       }
//     },
//     MuiButton: {
//       root: {
//           textTransform: 'none'
//       }
//     },
//     MuiTypography:{
//       body1:{
       
//       fontSize: '2rem',
//       color: 'red',
//     }
    
//     },
  
//     MuiStepLabel:{
//       label:{
//         "&$completed":{
//           color: "#5ac568",
//           fontWeight: "bold"
//         },
//         "&$active":{
//           color: "#5ac568",
//           fontWeight: "bold"
//         },
//       },
//     },
//     MuiSvgIcon:{
//       root:{
//         width: '1.5em',
//         eight: '1.5em',
//       },
//     },
//     MuiTypography:{
//       body1:{
//         fontFamily: "Graphik",
//         fontWeight: "bolder",
//       },
//       body2:{
//         fontFamily: "Graphik",
//         fontWeight: "bolder",
//       },
//     },
//     MuiStepConnector:{
//       root:{
//         flex:"0.05",
//       },
//     },
//     MuiInputBase : {
//       root : {
//         width : '500px',
//         //height : '60px'
//       }
//     },
//     MuiTab : {
//       root : {
//           '@media (min-width: 600px)': {
//               height: '48px',
//               minWidth : '48px'
//           },
//           borderBottomColor : '#0000ff'
//       },
//       textColorInherit : {
//           '&$selected': {
//               backgroundColor:  '#5ac568',
//               color : 'white',
//               borderBottomColor : '#0000ff',
//               '&:hover' : {
//                   backgroundColor: '#5ac568'
//               }	
//           }
//       }
//     },
//     MuiBox : {
//       root : {
//           padding : '0px 24px 24px 0px',
//         }
//     },
//     MuiButtonBase : {
//       root : {
//           borderRadius : '50%',
//           borderBottomColor : '#0000ff'
//       }
//     },
//     MuiPaper : {
//       root : {
//           variant : 'elevation',
//           elevation0 : 0
//       } 
//     },
//     MuiAppBar : {
//       colorTransparent : {
//           boxShadow : 'none'
//       }
//     },
//     // MuiSvgIcon:{
//     //   root: {
//     //     padding: "0px 0px 0px 20px"
//     //   }
//     // },
//     PrivateTabIndicator : {
//       colorSecondary : {
//           backgroundColor : 'transparent'
//       }
//     },
    
//   },
//   typography: {
//     fontFamily: 'Graphik',
//     subtitle1:{
//       fontFamily: 'Graphik',
//       fontSize: '16px',
//       fontWeight: 500,
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       lineHeight: 1.5,
//       letterSpacing: '0.1px',
//     },
//     body2:{
//       fontFamily: 'Graphik',
//       fontSize: '14px',
//       fontWeight: 'normal',
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       lineHeight: 1.57,
//       letterSpacing: '0.1px',
//     },
//     body3:{
//       fontFamily: 'Graphik',
//       fontSize: '10000px',
//       fontWeight: 600,
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       lineHeight: 1.31,
//       letterSpacing: '0.1px',
//       color:'#19293b'
//     },
//     caption:{
//       fontFamily: 'Graphik',
//       fontSize: '12px',
//       fontWeight: 500,
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       lineHeight: 1.33,
//       letterSpacing: '0.2px',
//     },

//     h1:{
//       //paragraph
//       fontFamily : 'Graphik',
//         color : '#5f7381',
//         fontSize : '14px',
//         lineHeight : 1.57,
//         letterSpacing : '0.1px',
//         textAlign:'left',
//         fontWeight:'normal',
//     },
//     h2:{
//       //headers
//       fontFamily : 'Graphik',
//       color : '#19293b',
//       fontSize : '16px',
//       lineHeight : 1.5,
//       letterSpacing : '0.1px',
//       fontWeight:'500',
//     },
  
//     h3: {
//         fontSize : '18px',
//         fontFamily : 'Graphik',
//         fontWeight : '500',
//         color : '#324552',
//         lineHeight : 1.33,
//         fontStretch: 'normal',
//         fontStyle: 'normal',
//         letterSpacing : '0.2px'
//     },
//     h4:{
//         fontFamily : 'Graphik',
//         color : '#5f7381',
//         fontSize : '12px',
//         lineHeight : 1.33,
//         letterSpacing : '0.2px',
//         textAlign:'left',
//     },
//     h5: {
//       fontFamily : 'Graphik',
//       fontSize : '12px',
//       fontWeight : 500,
//       color : '#19293b',
//       lineHeight : 1.33,
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       letterSpacing : '0.2px',
//       paddingTop : '7%'  
//     },
//     h6:{
//       fontSize : '14px',
//       fontWeight : 'normal',
//       color : '#5f7381',
//       lineHeight : 1.57,
//       fontStretch: 'normal',
//       fontStyle: 'normal',
//       letterSpacing : '0.1px',
//       paddingTop : '2%'
//     },
//     overline:{
//       fontSize : '18px',
//       fontWeight : '500',
//       color : '#5ac568',
//       textTransform: 'none',
//       fontFamily : 'Graphik',
//       gap:'100px',
//     },
//   },
//   TrainOutlinedIcon: {
//   },
//   Dialog:{
//     root:{
//       width: '625px',
//       height: '426px',
//     }
//   },
//   Checkbox:{
//     root:{
//       width: '10px',
//       height: '10px',
//     }
//   },
//   CloseIcon:{
//     root:{
//       width: '24px',
//       height: '24px',
//     }
//   },
//   // Radio:{
//     // root:{
//     //   color: '#00ff00',
//     // '&$checked': {
//     //   color: green[600],
//     // },
//     // }
//   // }


// });

// export default customtheme;