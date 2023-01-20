import React from "react";
import  '../Styles/HomeStyles/Backdrop.css'


export const Backdrop = ({ clicked, hideOnHover }) => {
  return (
    <div
      className={hideOnHover ? "backdrop backdrop-hide" : "backdrop"}
      onClick={clicked}
    ></div>
  );
};


