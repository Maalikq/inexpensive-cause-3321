import React from "react";
import '../Styles/Payment.css'

import PaymentImg from "../Assets/Home/paymentsec.png";
import facebook from "../Assets/Home/facebook.png";
import twitter from "../Assets/Home/twitter.png";
import instagram from "../Assets/Home/instagram.png";
import linkedin from "../Assets/Home/linkedin.png";
import youtube from "../Assets/Home/youtube.png";
import telegram from "../Assets/Home/telegram.png";
import whatsapp from "../Assets/Home/whatsapp.png";



const socialIcons = [facebook, twitter,instagram,linkedin,youtube,telegram,whatsapp];

export const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-container">
        <div className="pay-section">
          <p>PAYMENT</p>
          <img src={PaymentImg} alt="payments " />
        </div>
        <div className="payment-social">
          <p>CONNECT</p>
          <nav>
            {socialIcons.map((img, i) => {
              return <img className="socialIcon" key={i} src={img} alt="social" />;
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};


