import React from "react";

import TopNavigation from "./index";


export default {
    title: "organisms/Top Navigation",
    component: TopNavigation,
};
const Template = (args) => <TopNavigation {...args} />;

export const PrimaryTopNavigation = Template.bind({});


PrimaryTopNavigation.args = {
    label:"Dashboard"
};