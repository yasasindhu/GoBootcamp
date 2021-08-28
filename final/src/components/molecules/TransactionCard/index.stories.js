import React from "react";

import TransactionCard from "./index";
import DownloadImg from '../../../../public/images/Frame 11.png';
export default {
    title: "molecules/Transaction Card",
    component: TransactionCard,
};

const Template = (args) => <TransactionCard {...args} />;

export const PrimaryTransactionCard = Template.bind({});


PrimaryTransactionCard.args = {
    job:{
    
    currency : 'Bitcoin',
    status: 'Purchased',
    amount:'+0.00016784 BTC',
    changeInAmount:'+₹2,830',
    color:'#46BF31',
    currentDate:'July 01',
    }
};