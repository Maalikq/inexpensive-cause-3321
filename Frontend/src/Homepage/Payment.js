import React from "react";
import '../Styles/HomeStyles/Payment.css'

import PaymentImg from "../assets/Home/paymentsec.png";
import facebook from "../assets/Home/facebook.png";
import twitter from "../assets/Home/twitter.png";
import instagram from "../assets/Home/instagram.png";
import linkedin from "../assets/Home/linkedin.png";
import youtube from "../assets/Home/youtube.png";
import telegram from "../assets/Home/telegram.png";
import whatsapp from "../assets/Home/whatsapp.png";



const socialIcons = [facebook ,twitter,instagram,linkedin,youtube,telegram,whatsapp];

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
            {socialIcons.map((img, idx) => {
              return <img className="socialIcon" key={idx} src={img} alt="social" />;
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};



