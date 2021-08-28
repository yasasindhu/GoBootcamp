import React from "react";
import WalletTransactionCard from ".";
import { ThemeProvider } from "@material-ui/styles";
import customtheme from "../../theme";



export default {
  title: "molecules/WalletTransactionCard",
  component: WalletTransactionCard,
};
const Template = (args) => <ThemeProvider theme={customtheme}><WalletTransactionCard {...args} /></ThemeProvider>

export const WalletTransactionCardPrimary = Template.bind({});
WalletTransactionCardPrimary.args = {
  job:{
  currency : 'Bitcoin',
  change: 1.06,
  CurrencyType:'BTC',
  from:'Jane coper',
  transactionType:'Purchased',
  currencyUnits:'0.0010',
  rupeeAmount:'900'
  
  }
};




