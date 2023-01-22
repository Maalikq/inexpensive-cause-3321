import React from "react";
import mb from '../assets/Home/mobile.png'
import "../Styles/HomeStyles/TopNav.css";

export const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-container">
        <div className="top-nav-title">
          <p>Brand Waali Quality.Bazaar Waali Deal!</p>
        </div>
        <div className="top-nav-navbar">
          <nav>
            <ul className="top-nav-list">
              <li>
                <a href="/#">Impact@Snapdeal</a>
              </li>
              <li>
                <a href="/#">GiftCards</a>
              </li>
              <li>
                <a href="/#">HelpCenter</a>
              </li>
              <li>
                <a href="/#">Sell On Snapdeal</a>
              </li>
              <li>
                <a href="/#">
                  <img
                    src={mb}
                    alt="mobileIcon"
                    style={{ height: "20px", margin: "0px 3px 2px 0px" }}
                  />
                  
                </a>
              </li>
                <p className="downloadApp">
                Download App
                </p>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};


