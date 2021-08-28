import React from "react";

import WatchList from "./index";


export default {
    title: "organisms/My Porfolio Value",
    component: WatchList,
};
const Template = (args) => <WatchList {...args} />;

export const PrimaryWatchList = Template.bind({});


PrimaryWatchList.args = {
    currentPercentage:'+8.06',
    currentAmount:'₹ 11,900,204',
    totalPercentage:'-8.06',
    totalAmount:'₹ 11,900,204',
};

export const SecondaryWatchList = Template.bind({});
SecondaryWatchList.args = {
    currentPercentage:'+0',
    currentAmount:'₹ 000000',
    totalPercentage:'-0',
    totalAmount:'₹ 0000',
};