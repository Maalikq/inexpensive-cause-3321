import React, { useState } from "react";
import '../Styles/HomeStyles/NavBar.css'

import Grabdeal from '../assets/GRABDEAL.png'
import searchIcon from "../assets/Home/searchIcon.png";
import shoppingCartIcon from "../assets/Home/cart.png";
import userIcon from "../assets/Home/user.png";
import trendingIcon from "../assets/Home/trending.svg";
import {GiHamburgerMenu} from 'react-icons/gi'
import { Backdrop } from "./Backdrop";
import { HomeSidebar } from "./HomeSidebar";
import { SideSignin } from "./SideSignin";
import { useDisclosure } from "@chakra-ui/react";
import Cart from "../components/Cart";

export const NavBar = ({ showHamburger }) => {
  const [show, setShow] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const togglesearch = () => {
    setShow(!show);
  };

  return (
    <div className="top-bar">
      <div className="top-bar__container">
        <div className="top-bar__logo">
          <img
            src={Grabdeal}
            alt="snapdeal-logo"
          />
        </div>
        <div
          className="top-bar-hamburger"
          style={{ display: showHamburger ? "block" : "none" }}
        >
          <GiHamburgerMenu className="GiHamburgerMenu" />
          <div className="hamburger-sidebar">
            <HomeSidebar style={{ borderRadius: "0px" }} />
            <Backdrop hideOnHover />
          </div>
        </div>
        <div className="top-bar__side-content">
          <div className="top-bar__searchbar">
            <div className="top-bar__searchbar__container">
              <input
                type="text"
                onClick={togglesearch}
                placeholder="Search products & brands"
                style={{
                  borderBottomLeftRadius: show ? "0px" : "3px",
                  background: show ? "#eee" : "#fff",
                }}
              />
              <div
                className="search-dropdown"
                style={{ display: show ? "block" : "none" }}
              >
                <ul>
                  <li>
                    <img className="trending" src={trendingIcon} alt="trending" />
                    Tending Searches
                  </li>
                  <li onClick={togglesearch}>Shoes for Men</li>
                  <li onClick={togglesearch}>Fancy Sarees</li>
                  <li onClick={togglesearch}>Phone Mobile</li>
                  <li onClick={togglesearch}>Watch Women</li>
                  <li onClick={togglesearch}>Timmer</li>
                  <li onClick={togglesearch}>Men watch</li>
                  <li onClick={togglesearch}>Jewellery Set</li>
                </ul>
                <Backdrop clicked={togglesearch} />
              </div>
              <button className={"searchBtn"} onClick={togglesearch}>
                <img
                  src={searchIcon}
                  alt="search"
                  style={{
                    height: "16px",
                  }}
                />
                <span>Search</span>
              </button>
            </div>
          </div>
          <div className="top-bar__cart-sign">
            <div className="top-bar__cart">
              <div onClick={handleOpen} style={{ display: "flex" }}>
                <p>Cart</p>
                <img
                  src={shoppingCartIcon}
                  alt="shopping cart"
                  style={{ height: "20px", margin: "3px 0px 0px 6px" }}
                />
              </div>

              <Cart isOpen={isOpen} onClose={onClose}/>
            </div>
            <div className="top-bar__sign-in-wrapper">
              <div  className="top-bar__sign-in">
                <p>
                  Sign in
                </p>
                <img
                  src={userIcon}
                  alt="profile user"
                  style={{ height: "30px", marginLeft: "5px" }}
                />
              </div>
              <div className="sign-in-hover">
                <SideSignin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


