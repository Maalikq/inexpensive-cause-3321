
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/HomeStyles/Home.css'
import upbtnicon from  '../Assets/Products/upbtnicon.png'
import {TopNav} from './TopNav'
import { NavBar } from './NavBar';
import { HomeMid } from './HomeMid';
import {DownloadApp} from './DownloadApp';
import { UpperContFooter } from "./UpperContFooter";
import { ContentFooter } from "./ContentFooter";
import {Payment} from "./Payment";
import { FooterLinks } from "./FooterLinks";
import {About} from "./About";
import Footer from "./Footer";



export const  Home=()=> {
  const [showHamburger, setShowHamburger] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 850 && !showHamburger) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
      if(window.scrollY >300){
        setIsVisible(true);
        
      }else{
        setIsVisible(false);

      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <TopNav />
      <NavBar showHamburger={showHamburger} />
     <HomeMid />
     <DownloadApp />
     <UpperContFooter />
     <ContentFooter />
     <Payment />
     <FooterLinks />
     <About />
     <Footer />
      {isVisible && (
     <a className="btnup" href="#root">
            <button className="upbtn" type="button" title="Hit to Top">
              <img  src={upbtnicon} alt="btnicon" style={{margin:"auto"}} />            
            </button>
          </a>

      )}
    </div>
  );
}


