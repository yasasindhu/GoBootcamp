import React from "react";
import SideNavBar from ".";


export default {
    title: "molecules/SideNav",
    component: SideNavBar,
};
const Template = (args) => <SideNavBar {...args} />;



export const SideNavPrimary = Template.bind({});

SideNavPrimary.args = {
    selectedIndex: 0,
    typographyDivStyle : {
        padding : '10px',
        justifyContent : 'center',
    }
};
