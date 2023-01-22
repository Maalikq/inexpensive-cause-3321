import React from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/HomeStyles/SideSubList.css'


export const SideSubList = ({ title, list }) => {
  const navigate = useNavigate()
  return (
    <div className="sub-list">
      <p className="sub-list-title">{title}</p>
      <ul className="sub-list-ul">
        {list.map((item, idx) => {
          return (
            
            <li key={idx} className="sub-list-li" style={{ cursor: "pointer" }} onClick={()=>navigate(item.link ?? "#")}>
               {item.title}
              
            </li>
             
          );
        })}
      </ul>
    </div>
  );
};


