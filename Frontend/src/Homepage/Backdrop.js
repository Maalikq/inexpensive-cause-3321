import React from "react";



export const Backdrop = ({ clicked, hideOnHover }) => {
  return (
    <div
      className={hideOnHover ? "backdrop backdrop-hide" : "backdrop"}
      onClick={clicked}
    ></div>
  );
};


