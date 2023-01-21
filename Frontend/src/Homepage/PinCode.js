import React from "react";

import locationImg from "../Assets/cards/location.jpg";

import '../Styles/HomeStyles/PinCode.css'

export const Pincode = () => {
  return (
    <div className="pincode">
      <div className="pinocde-container">
        <img src={locationImg} alt="pincode" />
        <p className="pincode-heading">Your Delivery Pincode</p>
        <div className="pincode-dash"></div>
        <p className="pincode-para">
          Enter your pincode to check availability and faster delivery options
        </p>
        <input type="text" placeholder="Enter Pincode" />
        <div>
          <button className="pincode-submit">SUBMIT</button>
          <button className="pincode-next">NEXT</button>
        </div>
      </div>
    </div>
  );
};


