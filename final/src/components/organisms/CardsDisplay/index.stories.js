import React from "react";

import CardsDisplay from "./index";


export default {
    title: "organisms/Cards Display",
    component: CardsDisplay,
};
const Template = (args) => <CardsDisplay {...args} />;

export const PrimaryCardsDisplay = Template.bind({});


PrimaryCardsDisplay.args = {
    
};