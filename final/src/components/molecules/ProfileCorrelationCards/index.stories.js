import React from "react";

import PriceCorrelationCards from "./index";

export default {
    title: "molecules/Price Correlation Cards",
    component: PriceCorrelationCards,
};

const Template = (args) => <PriceCorrelationCards {...args} />;

export const PrimaryPriceCorrelationCards = Template.bind({});


PrimaryPriceCorrelationCards.args = {
    job:{
    logo :"https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" ,
    currency : 'Bitcoin ',
    status: 'Moves tightly together',
    amount:'₹3,285,553.73',
    percentage:'100%',
  
    }
};