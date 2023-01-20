import React from "react";



import '../Styles/HomeStyles/SideProductList.css'
import { SideSubList } from "./SideSubList";

export const SideProductList = ({ listData, img }) => {
  return (
    <div className="product-list">
      <div className="product-list-container">
        <div className="product-list-column">
          {listData.map((item, idx) => {
            return <SideSubList key={idx} title={item.title} list={item.list} />;
          })}
        </div>
        <div className="product-list-column">
          {listData.map((item, idx) => {
            return <SideSubList key={idx} title={item.title} list={item.list} />;
          })}
        </div>
        <div className="product-list-column">
          {listData.map((item, idx) => {
            return <SideSubList key={idx} title={item.title} list={item.list} />;
          })}
        </div>
        <div className="product-list-column">
          <img src={img} alt="banner" style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

