import React from "react";

import TradeCard from ".";


export default {
  title: "molecules/TradeCard",
  component: TradeCard,
};
const Template = (args) => <TradeCard {...args} />;

export const TradeCardPrimary = Template.bind({});
TradeCardPrimary.args = {
  job:{
    "id": "ADA",
    "name": "Cardano",
    "logo_url": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ada.svg",
    "market_cap": 63814799360,
    "price": 2.00397403,
    "currency_code": "USD"
  }
};



