import React from "react";

import MyImage from "./MyImage";
import Star from './star.png';
import Notification from '../../../../public/images/notification.png';
import AvatarIcon from '../../../../public/images/Rectangle 5.png';
export default {
    title: "atoms/Image",
    component: MyImage,
};
const Template = (args) => <MyImage {...args} />;

export const SmallIconStyle = Template.bind({});

SmallIconStyle.args = {
    src:"https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
    height:"40px",
    width:"40px",
    alt: "An Image"
};

export const MediumIconStyle = Template.bind({});

MediumIconStyle.args = {
    src:Star,
    height:"50px",
    width:"50px",
     alt: "An Image"
};


export const PrimaryImageMap = Template.bind({});

PrimaryImageMap.args = {
    src:Notification,
    height:"30px",
    width:"30px",
    alt: "An Image"
};

export const Avatar = Template.bind({});
Avatar.args = {
    src:AvatarIcon,
    height:"80px",
    width:"80px",
    alt: "An Image"
};