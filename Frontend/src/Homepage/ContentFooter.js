import React from 'react'
import '../Styles/HomeStyles/ContentFooter.css'
import { ContentFooterCard } from './ContentFooterCard';

const contentData = [
    {
      heading: "POLICY INFO",
      links: [
        "Privacy Policy",
        "Terms of Sale",
        "Terms of Use",
        "Report Abuse & Takedown Policy",
      ],
    },
    {
      heading: "COMPANY",
      links: ["About Us", "Core Values", "Careers", "Blog", "Sitemap"],
    },
    {
      heading: "SNAPDEAL BUSINESS",
      links: [
        "Shopping App",
        "Sell on Snapdeal",
        "Advertise on Snapdeal",
        "Media Enquiries",
        "Be an Affiliate",
      ],
    },
    {
      heading: "NEED HELP ?",
      links: ["FAQ", "Contact Us", "Online Shopping"],
    },
  ];
  
export const ContentFooter = () => {
    return (
        <div className="content-links">
          <div className="content-links-container">
            {contentData.map((item, i) => {
              return (
                <ContentFooterCard key={i} heading={item.heading} links={item.links} />
              );
            })}
            <div className="content-links-subscribe">
              <p className="content-links-subscribe-title">SUBSCRIBE</p>
              <input
                className="content-links-input"
                type="text"
                placeholder="Your email address"
              />
              <button className="content-links-btn">SUBSCRIBE</button>
              <p className="content-links-subs">
                Register now to get updates on promotions
              </p>
              <p className="content-links-subs">and</p>
              <p className="content-links-subs">
                coupons.{" "}
                <a href="/#" style={{ fontSize: "12px" }}>
                  Or Download App
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    };
