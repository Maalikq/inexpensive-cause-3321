import logo from './logo.svg';
import './App.css';
import {TopNav} from "./Homepage/TopNav"
import { NavBar } from './Homepage/NavBar';
import React, { useEffect, useState } from "react";
import MainRoute from './Routes/MainRoute';
import Footer from "./Homepage/Footer";
import { UpperContFooter } from "./Homepage/UpperContFooter";
import { ContentFooter } from "./Homepage/ContentFooter";
import {Payment} from "./Homepage/Payment";
import { FooterLinks } from "./Homepage/FooterLinks";
import {About} from "./Homepage/About";
function App() {

  
  const [showHamburger, setShowHamburger] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 850 && !showHamburger) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  
  }, []);

  return (
    <>
    <TopNav/>
      <NavBar showHamburger={showHamburger} />
   

     <MainRoute/>
     
     <UpperContFooter />
     <ContentFooter />
     <Payment />
     <FooterLinks />
     <About />
     <Footer/>  
    </>
  );
}

export default App;
