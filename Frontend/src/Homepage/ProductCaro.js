import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import chappal from '../Assets/Products/chappal.jpg'
import mala from '../Assets/Products/mala.jpg'
import chopper from '../Assets/Products/chopper.jpg'
import glove from '../Assets/Products/glove.jpg'
import trim from '../Assets/Products/trim.jpg'
import wallet from '../Assets/Products/wallet.jpg'
import watch from '../Assets/Products/watch.jpg'
import woodenspat from '../Assets/Products/woodenspa.jpg'
import leftarrow from '../Assets/Banner/leftIcon.png'
import rightarrow from '../Assets/Banner/rightIcon.png'
import { ProductCard } from './ProductCard';
import '../Styles/ProductCaro.css'

const productsCarouselData = [
    [
      {
        src: chappal,
        alt: "chappal",
        title: "ASIAN Brown Daily Slippers",
        oldPrice: "499",
        newPrice: "433",
        offer: "13%",
      },
      {
        src: mala,
        alt: "mala",
        title:
          "Shiv Shakti Kavach 5 Mukhi Rudraksha Mala With Shiv Trishul & Damru Brass Necklace Brass Brass Pendant Set",
        oldPrice: "399",
        newPrice: "194",
        offer: "51%",
      },
      {
        src: wallet,
        alt: "wallet",
        title: "PRd PU Tan Casual regular Wallet",
        oldPrice: "999",
        newPrice: "191",
        offer: "81%",
      },
      {
        src: watch,
        alt: "watch",
        title:
          "David Miller White Dial Tan Brown PU Leather Strap Men's Watch - DMRCM4C",
        oldPrice: "399",
        newPrice: "299",
        offer: "25%",
      },
    ],
    [
      {
        src: trim,
        alt: "trim",
        title:
          "Exerciser Single Spring Tummy Trimmer Best for Home Exercise waist Trimmer",
        oldPrice: "699",
        newPrice: "313",
        offer: "55%",
      },
      {
        src: glove,
        alt: "golve",
        title:
          "Shopoholic Magic Silicone Srub Rubber Universal Size Cleaning Glove 1 Pair- Reusable",
        oldPrice: "999",
        newPrice: "460",
        offer: "54%",
      },
      {
        src: chopper,
        alt: "chopper",
        title: "NAIYUE Plastic chopper",
        oldPrice: "499",
        newPrice: "175",
        offer: "65%",
      },
      {
        src: woodenspat,
        alt: "Wooden spatula",
        title: "WORTHY SHOPPEE Wood Spatula 5 Pcs",
        oldPrice: "299",
        newPrice: "149",
        offer: "50%",
      },
    ],
  ];

export const ProductCaro = () => {
  return (
    <>
      <div className="desktop-only">
        <Carousel
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
              style={{
                background: "#eee",
                height: "40px",
                borderRadius: "50%",
                padding: "10px",
              }}
            />
          }
        >
          {productsCarouselData.map((slide, i) => {
            return (
              <Carousel.Item key={i}>
                <div className="products-carousel__slider">
                  {slide.map((product, i) => {
                    return (
                      <ProductCard
                        key={i}
                        imgSrc={product.src}
                        alt={product.alt}
                        title={product.title}
                        oldPrice={product.oldPrice}
                        newPrice={product.newPrice}
                        offer={product.offer}
                      />
                    );
                  })}
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      <div className="mobile-only">
        <Carousel
          style={{ background: "#fff" }}
          prevIcon={
            <img src={leftarrow} alt="prev icon" style={{ height: "20px" }} />
          }
          nextIcon={
            <img src={rightarrow} alt="next icon" style={{ height: "20px" }} />
          }
        >
          {productsCarouselData[1].map((product, i) => {
            return (
              <Carousel.Item key={i}>
                <ProductCard
                  imgSrc={product.src}
                  alt={product.alt}
                  title={product.title}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  offer={product.offer}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

