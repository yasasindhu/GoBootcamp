import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import customtheme from "../../theme";
import CryptoCard from ".";


export default {
  title: "molecules/CryptoCard",
  component: CryptoCard,
};
const Template = (args) =><ThemeProvider theme={customtheme}>  <CryptoCard {...args} /></ThemeProvider>

export const CryptoCardPrimary = Template.bind({});
CryptoCardPrimary.args = {
  job:{
  logo :"https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" ,
  currencyName : 'Bitcoin',
  oneUnitTargetCurrencyEqualRupees:'345678945',
 
  
  }
};




