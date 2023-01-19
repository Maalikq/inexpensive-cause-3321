import React from "react";

import user from "../Assets/sidebar/user.svg";
import order from "../Assets/sidebar/order.svg";
import shortlist from "../Assets/sidebar/shortlist.png";


import '../Styles/SideSignin.css'

export const SideSignin = () => {
  return (
    <div className="signin-card">
      <ul>
        <li>
          <img className="signicon" src={user} alt="account" /> Your Account
        </li>
        <li>
          <img className="signicon" src={order} alt="order" style={{ marginRight: "5px" }} />
          Your Orders
        </li>
        <li>
          <img className="signicon" src={shortlist} alt="shortlist" style={{ marginRight: "5px" }} />
          Shortlist
        </li>
      </ul>
      <p>If you are a new user</p>
      <p>Register</p>
      <button>LOGIN</button>
    </div>
  );
};


