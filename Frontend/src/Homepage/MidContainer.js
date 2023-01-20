import React from "react";
import paymentIcon from "../Assets/paymentImg.png";
import trustIcon from "../Assets/trust.png";
import helpIcon from "../Assets/help.png";
import shopMobileIcon from "../Assets/shop.png";
import '../Styles/HomeStyles/MidContainer.css'

const MidContainer = () => {
  return  (
    <div className="footer">
      <div className="foot">
        <div className="informa">
          <div className="secure-payments">
            <img src={paymentIcon} alt="payment" />
            <p>100% secure payments</p>
            <p>
              Moving your card details to a much more secured place
            </p>
          </div>
          <div className="trustpay">
            <img src={trustIcon} alt="trust" />
            <p>Trustpay</p>
            <p>100% Payment Protection. Easy Return Policy</p>
          </div>
          <div className="help-center">
            <img src={helpIcon} alt="help" />
            <p>help center</p>
            <p>
              Got a question? Look no further. Browse our FAQs or submit your query here.
            </p>
          </div>
          <div className="shop-on-go">
            <img src={shopMobileIcon}alt="shpmb" />
            <p>shop on the go</p>
            <p>
              Download the app and get exciting app only offers at your fingertips
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidContainer