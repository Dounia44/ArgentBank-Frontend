import iconchat from "../assets/icons/icon-chat.png";
import iconchat2x from "../assets/icons/icon-chat@2x.png";
import iconchat3x from "../assets/icons/icon-chat@3x.png";

import iconmoney from "../assets/icons/icon-money.png";
import iconmoney2x from "../assets/icons/icon-money@2x.png";
import iconmoney3x from "../assets/icons/icon-money@3x.png";

import iconsecurity from "../assets/icons/icon-security.png";
import iconsecurity2x from "../assets/icons/icon-security@2x.png";
import iconsecurity3x from "../assets/icons/icon-security@3x.png";

const features = [
  {
    id: 1,
    src: iconchat,
    srcSet: `${iconchat} 1x, ${iconchat2x} 2x, ${iconchat3x} 3x`,
    width: 100,
    height: 100,
    alt: "chat icon",
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    id: 2,
    src: iconmoney,
    srcSet: `${iconmoney} 1x, ${iconmoney2x} 2x, ${iconmoney3x} 3x`,
    width: 100,
    height: 100,
    alt: "chat icon",
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  {
    id: 3,
    src: iconsecurity,
    srcSet: `${iconsecurity} 1x, ${iconsecurity2x} 2x, ${iconsecurity3x} 3x`,
    width: 100,
    height: 100,
    alt: "chat icon",
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

export default features;
