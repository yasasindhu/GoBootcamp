import React from "react";

import PriceCorrelation from "./index";

export default {
    title: "organisms/Price Correlation",
    component: PriceCorrelation,
};
const Template = (args) => <PriceCorrelation {...args} />;

export const Primary = Template.bind({});

Primary.args = {
   
    currentPercentage:"+8.06",
    currentAmount:"₹ 11,900,204",
};