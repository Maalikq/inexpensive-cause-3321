import React from 'react'
import '../Styles/FooterLinkCard.css'
export const FooterLinkCard = ({title,links}) => {
    return (
        <div className="footerlower-link">
          <span className="footerlower-link-title">{title} : </span>
          {links.map((link, idx) => {
            return (
              <span className="footerlower-link-slash" key={idx}>
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