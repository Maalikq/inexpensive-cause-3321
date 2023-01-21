import React, { Component } from "react";




import '../Styles/HomeStyles/HomeMid.css'
import { HomeSidebar } from "./HomeSidebar";
import { Banner } from "./Banner";
import { ProductCaro } from "./ProductCaro";
import { Pincode } from "./PinCode";

export class HomeMid extends Component {
  render() {
    return (
      <div className="main-bar">
        <div className="main-bar__container">
          <div className="main-bar__sidebar">
            <HomeSidebar />
          </div>
          <div className="main-bar__carousel">
            <div className="main-bar__pin-cont">
              <div className="main-bar__banner-carousel">
                <Banner />
              </div>
              <div className="main-bar__pin">
                <Pincode />
              </div>
            </div>
            <h2 className="main-bar__trending">TRENDING PRODUCTS</h2>
            <div className="main-bar__products-carousel">
              <ProductCaro />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


