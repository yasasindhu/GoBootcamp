import React from "react";

import BarGraph from "./index";


export default {
    title: "molecules/BarGraph",
    component: BarGraph,
};
const Template = (args) => <BarGraph {...args} />;

export const PrimaryProfileDisplay = Template.bind({});


PrimaryProfileDisplay.args = {
    // details:[2,4,6,9,7,8,3,6,7]
    details:[
        ['', 20.8],
        ['Guangzhou', 13.1],
        [' ', 12.7],
        ['Mumbai', 12.4],
        ['Moscow', 12.2],
        ['São Paulo', 12.0],
        ['Delhi', 11.7],
        ['Kinshasa', 11.5],
        ['Tianjin', 11.2],
        ['Lahore', 11.1],
        ['Jakarta', 10.6],
        ['Dongguan', 10.6],
        ['Lagos', 10.6],
        ['Bengaluru', 10.3],
        ['Seoul', 9.8],
        ['Foshan', 9.3],
        ['Tokyo', 9.3]
    ]
};