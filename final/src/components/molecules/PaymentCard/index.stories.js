import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import customtheme from "../../theme";
import PaymentCard from ".";


export default {
  title: "molecules/PaymentCard",
  component: PaymentCard,
};
const Template = (args) =><ThemeProvider theme={customtheme}>  <PaymentCard {...args} /></ThemeProvider>

export const PaymentCardPrimary = Template.bind({});
PaymentCardPrimary.args = {
  key:1,
  imgSrc :"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/773px-Mastercard-logo.svg.png" ,
  cardEndNumber : 'Ended in :...8845',
  usedText:'Last time used : Thu, Mar 18 2021',
 
  
  
};




