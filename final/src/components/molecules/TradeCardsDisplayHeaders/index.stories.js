import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import customtheme from "../../theme";

import TradeCardsDisplayHeaders from ".";


export default {
  title: "molecules/TradeCardsDisplayHeaders",
  component: TradeCardsDisplayHeaders,
};
const Template = (args) => <ThemeProvider theme={customtheme}> <TradeCardsDisplayHeaders {...args} /></ThemeProvider>

export const TradeCardsDisplayPrimary = Template.bind({});
TradeCardsDisplayPrimary.args = {
 
};




