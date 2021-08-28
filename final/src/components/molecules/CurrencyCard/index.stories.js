import React from "react";

import CurrencyCard from "./index";


export default {
    title: "molecules/CurrencyCard",
    component: CurrencyCard,
};
const Template = (args) => <CurrencyCard {...args} />;

export const PrimaryProfileDisplay = Template.bind({});


PrimaryProfileDisplay.args = {
    card:{
        logo :"https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" ,
        currency : 'Bitcoin ',
        amount:'$345,678,945',
        percentage:'-1.06%',
        time:'24hrs',
        }
};
// export const SecondayProfileDisplay = Template.bind({});


// SecondaryProfileDisplay.args = {
//     card:{
//         logo :"https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" ,
//         currency : 'Bitcoin ',
//         amount:'$345,678,945',
//         percentage:'+1.06%',
//         color:'#46BF31',
//         time:'24hrs',
//         }
// };