import React, { useEffect, useState } from "react";
import '../Styles/HomeStyles/SideSignin.css'
import { RegisterButton } from "./RegisterButton";
import { LoginButton } from "./LoginButton";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SideSignin = ({setNum}) => {
   const token = localStorage.getItem('token');
   const [random,setrandom] = useState(0)
   const handleLogout =()=>{
    localStorage.removeItem('token');
    setrandom(random+1)
    window.location.href="/"

   }
   useEffect(()=>{

   },[random])
  return (
    <div className="signin-card">
      <ul>
        <li>
          <i className="fa-solid fa-user"></i>
          <p>Your Account</p>
        </li>
        <li>
        <i className="fa-solid fa-box"></i>
          
          <p>
         <Link to="/user/orderhistory"> Your Orders</Link>
          </p>
        </li>
        <li>
        <i className="fa-regular fa-heart"></i>
          
          <p>
          Shortlist
          </p>
        </li>
      </ul>
      {token ? <Button onClick={handleLogout} >Logout</Button> :<><p>If you are a new user</p>
      <RegisterButton/>
      <LoginButton setrandom={setrandom}  /></>}
      
    </div>
  );
};


