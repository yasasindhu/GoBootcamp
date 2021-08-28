import React from "react";

import CoinDescription from "./index";

export default {
    title: "molecules/CoinDescription",
    component: CoinDescription,
};
const Template = (args) => <CoinDescription {...args} />;

export const PrimaryDesciptionCard = Template.bind({});


PrimaryDesciptionCard.args = {
   
    head: "About Bitcoin",
    body : "The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis each satoshi is worth 0.00000001 bitcoin.",
};
