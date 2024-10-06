import React, { useState, useEffect } from 'react';
import Image from "../Images/Image.js";
import "./CartCard.css";
import defaultImage from '../../assests/images/photo.jpg';
import Button from '../Button/Button.js';

export default function CardCart({ value }) {
  const size = {
    width: 131,
    height: 91,
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
   

    const fetchItems = () => {
      let items = [];
      if (value === "MY WISHLIST") {
        items = JSON.parse(localStorage.getItem("wishlistInfo")) || [];
      } else if (value === "MY CART") {
        items = JSON.parse(localStorage.getItem("cartInfo")) || [];
      }
      setCartItems(items);
    };

    fetchItems();
  }, [value]);
 
  return (
    <>
      {value && (
        <div className="cartCard-container">
          <ul className="cart-list">
            {cartItems.map((item, index) => {
              const { name, photo, price, quantity } = item;
              return (
                <li key={index}>
                  <Image images={photo ? photo : defaultImage} size={size} isAbsolute   onLoad={() => console.log('Image loaded successfully')} 
 />
                  <div className="cartCard-header">
                    <p className="cartCart-tag">{name}</p>
                    <p className="cartWishlist-tag">
                      <i className="fa fa-inr"></i>{" "}
                      {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                    <div className="quantity-tag">
                      <p>+</p>
                      <p>{quantity}</p>
                      <p>-</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
         
        </div>
      )}
    </>
  );
}
