import React from "react";

import SingleStrandGraph from "./index";


export default {
    title: "molecules/SingleStrandGraph",
    component: SingleStrandGraph,
};
const Template = (args) => <SingleStrandGraph {...args} />;

export const PrimaryProfileDisplay = Template.bind({});


PrimaryProfileDisplay.args = {
    details:[
        // ['', '20.8'],
        // ['Guang', 13.1],
        // [' ', 12.7],
        // ['Mumbai', 12.4],
        // ['Moscow', 12.2],
        // ['São Paulo', 12.0],
        // ['Delhi', 11.7],
        // ['Kinshasa', 11.5],
        // ['Tianjin', 11.2],
        // ['Lahore', 11.1],
        // ['Jakarta', 10.6],
        // ['Dongguan', 10.6],
        // ['Lagos', 10.6],
        // ['Bengaluru', 10.3],
        // ['Seoul', 9.8],
        // ['Foshan', 9.3],
        // ['Tokyo', 9.3]
        [
            "2021-08-18T10:00:00Z",
            "25690.35730501"
            ],
            [
            "2021-08-14T09:00:00Z",
            "15452.1922959"
            ],
            [
            "2021-08-12T08:00:00Z",
            "45332.41925163"
            ],
            [
            "2021-08-11T07:00:00Z",
            "35014.88294324"
            ],
            [
            "2021-08-10T06:00:00Z",
            "05478.09295335"
            ],
            [
            "2021-08-09T05:00:00Z",
            "45524.25749915"
            ],
            [
            "2021-08-08T04:00:00Z",
            "15167.71744425"
            ],
            [
            "2021-08-02T03:00:00Z",
            "45167.33465259"
            ]
    ]
};