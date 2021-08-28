import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import customtheme from "../../theme";

import Footer from ".";


export default {
    title: "organisms/Footer",
    component: Footer,
};
const Template = (args) => <ThemeProvider theme={customtheme}> <Footer {...args} /></ThemeProvider>

export const PrimaryFooter = Template.bind({});


PrimaryFooter.args = {
    
};