import React from "react";
import '../Styles/SideSubList.css'


export const SideSubList = ({ title, list }) => {
  return (
    <div className="sub-list">
      <p className="sub-list-title">{title}</p>
      <ul className="sub-list-ul">
        {list.map((item, idx) => {
          return (
            <li key={idx} className="sub-list-li" style={{ cursor: "pointer" }}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};


