import React from "react";

import PortfolioCard from "./index";
import DownloadImg from '../../../../public/images/Frame 11.png';
export default {
    title: "molecules/Portfolio Card",
    component: PortfolioCard,
};

const Template = (args) => <PortfolioCard {...args} />;

export const PrimaryPortfolioCard = Template.bind({});


PrimaryPortfolioCard.args = {
    job:{
    logo :"https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" ,
    currency : 'Bitcoin ',
    status: 'BTC',
    amount:'$345,678,945',
    percentage:'+1.06%',
    color:'#46BF31',
    }
};