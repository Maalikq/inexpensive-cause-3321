
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/HomeStyles/Home.css'
import upbtnicon from  '../Assets/Products/upbtnicon.png'


import { HomeMid } from './HomeMid';
import {DownloadApp} from './DownloadApp';





export const  Home=()=> {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
  
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
       <HomeMid />
     <DownloadApp />
    
 
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


