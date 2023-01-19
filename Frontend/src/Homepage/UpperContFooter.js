import React from 'react'
import '../Styles/UpperContFooter.css'
import paymentIcon from '../Assets/Home/paymentImg.png'
import trustIcon from '../Assets/Home/trust.png'
import helpIcon from '../Assets/Home/help.png'
import shopMobileIcon from '../Assets/Home/shop.png'
import { UpperFootCard } from './UpperFootCard'

const FootData = [
    {
      icon: paymentIcon,
      heading: "100% Secure Payments",
      para: "Moving your card details to a much more secured place",
    },
    {
      icon: trustIcon,
      heading: "TrustPay",
      para: "100% Payment Protection. Easy Return Policy ",
    },
    {
      icon: helpIcon,
      heading: "Help Center",
      para:
        "Got a question? Look no further. Browse our FAQs or submit your query here.",
    },
    {
      icon: shopMobileIcon,
      heading: "Shop on the Go",
      para:
        "Download the app and get exciting app only offers at your fingertips",
    },
  ];
  
export const UpperContFooter = () => {
    return (
        <div className="upperfoot">
          <div className="upperfoot-container">
            {FootData.map((foot, i) => {
              return (
                <UpperFootCard
                  key={i}
                  icon={foot.icon}
                  heading={foot.heading}
                  para={foot.para}
                />
              );
            })}
          </div>
        </div>
      );
    };

