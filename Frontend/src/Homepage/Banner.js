import React, { useState } from "react";
import '../Styles/HomeStyles/Banner.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import bob from '../assets/Banner/bob.jpg'
import health from '../assets/Banner/Health.jpg'
import kurtaset from '../assets/Banner/kurtaset.jpg'
import leftarrow from '../assets/Banner/leftIcon.png'
import rightarrow from '../assets/Banner/rightIcon.png'
import westernwear from '../assets/Banner/westernwear.jpg'
import kitchen from '../assets/Banner/kitchen.jpg'



const bannerCarouselData = [
    { src: bob, alt: "bob" },
    { src: health, alt: "health" },
    { src: westernwear, alt: "westernwear" },
    { src: kurtaset, alt: "kurtaset" },
    { src: kitchen, alt: "kitchen" },
  ];
  
  const carouselNavigationButtons = [
    "BOB",
    "Health",
    "Westernwear",
    "Kurta Sets",
    "Kitchen Need",
  ];
export const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="banner-carousel">
      <Carousel
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={
          <img
            src={leftarrow}
            alt="prev icon"
            style={{
              background: "#eee",
              height: "40px",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
        }
        nextIcon={
          <img
            src={rightarrow}
            alt="next icon"
            className="next-icon"
            style={{
              background: "#eee",
              height: "40px",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
        }
      >
        {bannerCarouselData.map((banner, i) => {
          return (
            <Carousel.Item interval={5000} key={i}>
              <img
                className="d-block w-100"
                src={banner.src}
                alt={banner.alt}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="banner-carousel__btn-container">
        {carouselNavigationButtons.map((button, i) => {
          return (
            <button
              key={i}
              className={
                index === i
                  ? "banner-carousel__button active"
                  : "banner-carousel__button"
              }
              onClick={() => handleSelect(i)}
            >
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
};
