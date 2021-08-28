import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import customtheme from "../../theme.jsx";
import Typography from "@material-ui/core/Typography";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

import LocalTaxiOutlinedIcon from "@material-ui/icons/LocalTaxiOutlined";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";
import clsx from "clsx";

const useStyles = makeStyles({
  
  root2: {
   // width: "1287px",
    maxHeight: "90px",
    marginBottom: "10px",
    // padding : '1.5%',
    //padding: "10px",
    //borderRadius: "10px",
    // borderRadius : '10px',
    // '&:hover':{
    //		borderColor:'#5ac568',
    //	},
    //	boxShadow: '0px 0px 5px #ccc',
    paddingLeft: "24px",
  },
  isActive: {
    //border: "1px solid #5ac568",
  },
  
});

function TradeCardDisplayHeaders({}) {
  // const isActive = job.isActive,

  const classes = useStyles();

  return (
    // <div data-testid = "maindivinjobcardsmall">

    <Grid
      container
      className={classes.root2}
      data-testid="maingridinjobcardsmall"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Grid item xs={3}>
        <Typography>Name</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>Price</Typography>

       
      </Grid>

      <Grid item xs={2}>
        <Typography>Change</Typography>
      </Grid>
      <Grid xs={2}>
        <Typography>Market Cap</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>Watch</Typography>
      </Grid>
    </Grid>

    // </div>
  );
}
export default TradeCardDisplayHeaders;
