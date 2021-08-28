import SelectCompoment from ".";

export default {
    title: "molecules/SelectCompoment",
    component: SelectCompoment,
};
const Template = (args) => <SelectCompoment {...args} />;


const allSelectItems1 = [
    {id:1,name:"1hr"},
    {id:2,name:"24hr"},
    {id:3,name:"1w"},
    {id:4,name:"1m"},
    {id:5,name:"1y"},

]
export const PrimarySelectCompoment1 = Template.bind({});
PrimarySelectCompoment1.args = {
    allSelectItems : allSelectItems1,
    defaultSelect : '24hr'
    
};

const allSelectItems2 = [
    {id:1,name:"Tradable assets"},
    {id:2,name:"Watchlist"},
    {id:3,name:"All assets"},
    {id:4,name:"Top gainers"},
    {id:5,name:"Top losers"},

]
export const PrimarySelectCompoment2 = Template.bind({});
PrimarySelectCompoment2.args = {
    allSelectItems : allSelectItems2,
    defaultSelect : 'All assets'
    
};