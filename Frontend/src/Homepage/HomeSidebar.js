import React from "react";

import '../Styles/HomeStyles/HomeSidebar.css';
import mobileIcon from "../assets/sidebar/mobile.png";
import livingIcon from "../assets/sidebar/living.png";
import homeIcon from "../assets/sidebar/home.png";
import fashionIcon from "../assets/sidebar/fashion.png";
import beautyIcon from "../assets/sidebar/beauty.png";
import qrImg from "../assets/sidebar/qrcode.png";
import { allOffersData, mobilesData } from "./HomeSidebarData";
import mens from '../assets/sidebar/mens.jpg'
import women from "../assets/sidebar/women.jpg";
import sidehome from "../assets/sidebar/sidehome.jpg";
import toy from "../assets/sidebar/toy.jpg";
import sidebeauty from "../assets/sidebar/sidebeauty.jpg";
import { SideProductList } from "./SideProductList";
import {NavLink} from 'react-router-dom'


const topCategoriesData = [
  {
    name: "Mens's Fashion",
    imgSrc: mobileIcon,
    listData: allOffersData,
    img: mens,
    link:"/products/tshirt",
    
  },
  {
    name: "Women's Fashion",
    imgSrc: livingIcon,
    listData: allOffersData,
    img: women,
    link:"/products/skinCare"
  },
  {
    name: "Women's Sarees",
    imgSrc: homeIcon,
    listData: allOffersData,
    img: sidehome,
    link:"/products/sarees"
  },
  {
    name: "Toys,kids' Fashion & m...",
    imgSrc: fashionIcon,
    listData: allOffersData,
    img: toy,
  },
  {
    name: "Beauty,Health & Daily ....",
    imgSrc: beautyIcon,
    listData: allOffersData,
    img: sidebeauty,
  },
];

const moreCategoriesData = [
  { name: "Men's Fashion", listData: allOffersData, img: mens ,link:"/products/shoes" },
  { name: "Women's Fashion", listData: mobilesData, img: toy },
  {
    name: "Toys, Kids' Fashion & more",
    listData: allOffersData,
    img: mens,
  },
  {
    name: "Beauty, Health & Daily Needs",
    listData: mobilesData,
    img: toy,
  },
  {
    name: "Sports, Fitness & Outdoor",
    listData: allOffersData,
    img: mens,
  },
  { name: "Car & Motorbike", listData: mobilesData, img: toy },
  { name: "Hobbies", listData: allOffersData, img: mens },
  { name: "Books, Media & Music", listData: mobilesData, img: toy },
];

const trendingData = [
  "Women Tops",
  "Toy Car",
  "Necklace Set",
  "Lehenga Choli Women",
  "Kurti Combo",
];

export const HomeSidebar = (props) => {
  return (
    <div className="sidebar" style={{ ...props.style }}>
      <div className="sidebar-container">
        <div className="sidebar-hoverable">
          <h2
            className="sidebar-h2"
            style={{ marginTop: "0px", paddingTop: "15px" }}
          >
            TOP CATEGORIES
          </h2>
          <ul className="sidebar__top">
            {topCategoriesData.map((item, i) => {
              return (
                <li key={i} className="sidebar-li sidebar__top-li">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    style={{ height: "28px" }}
                  />
                  <p>
                    <NavLink to={item.link}>

                  {item.name}
                    </NavLink>
                  </p>
                  <div className="product-list-wrapper">
                    <SideProductList listData={item.listData} img={item.img} />
                  </div>
                </li>
              );
            })}
          </ul>
          <h2 className="sidebar-h2">MORE CATEGORIES</h2>
          <ul className="sidebar__more">
            {moreCategoriesData.map((item, i) => {
              return (
                <li key={i} className="sidebar-li sidebar__more-li">

                  {item.name}
                  <div className="product-list-wrapper">
                    <NavLink to={item.link}>
                    <SideProductList listData={item.listData} img={item.img} />
                  </NavLink>
                  </div>
                </li>
              );
            })}
            <a href="/#">See All Categories</a>
          </ul>
        </div>
        <h2 className="sidebar-h2">TRENDING SEARCHES</h2>
        <ul className="sidebar__trending">
          {trendingData.map((item, i) => {
            return (
              <li key={i} className="sidebar-li">
                <i className="fa-solid fa-magnifying-glass"></i>
               
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-qr">
        <img src={qrImg} alt="qr-code" className="qr-img" />
        <div className="qr-content">
          <p className="qr-info">Enjoy Convenient Order Tracking</p>
          <p className="qr-download">Scan to download app</p>
        </div>
      </div>
    </div>
  );
};


