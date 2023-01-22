import React from "react";

import ratingIcon from "../assets/cards/star.png";
import heartIcon from "../assets/cards/heart.png";
import '../Styles/HomeStyles/ProductCard.css'


export const ProductCard = ({ imgSrc, alt, title, oldPrice, newPrice, offer }) => {
  
  return (
    <div className="product-card">
      <div className="product-card__container">
        <div className="product-card__img">
          <img src={heartIcon} alt="heart" className="product-card-heart" />
          <img src={imgSrc} alt={alt} />
        </div>
        <div className="product-card__title">
          <p>{title}</p>
        </div>
        <div className="product-card__rating">
          <img src={ratingIcon} alt="rating icon" />
        </div>
        <div className="product-card__price">
          <span className="product-card__old-price">Rs {oldPrice}</span>
          <span className="product-card__new-price">Rs {newPrice}</span>
          <span className="product-card__offer">{offer}OFF</span>
        </div>
      </div>
    </div>
  );
};

