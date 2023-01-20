import React from 'react'
import '../Styles/HomeStyles/FooterLinkCard.css'
export const FooterLinkCard = ({title,links}) => {
    return (
        <div className="footerlower-link">
          <span className="footerlower-link-title">{title} : </span>
          {links.map((link, i) => {
            return (
              <span className="footerlower-link-slash" key={i}>
                <a href="/#" className="footerlower-link-a">
                  {link}
                </a>{" "}
                /{" "}
              </span>
            );
          })}
        </div>
      );
    };