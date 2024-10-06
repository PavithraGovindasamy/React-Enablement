import "./Cart.css";
import Button from "../Button/Button.js";
import { useState } from "react";

export default function Cart({ cartItems, wishlistItems }) {
  const [button, setButton] = useState("MY CART");

  const isCartEmpty = cartItems.length === 0;
  const isWishlistEmpty = wishlistItems.length === 0;

  if (isCartEmpty && isWishlistEmpty) {
    return "";
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <a
          className={`cart-tag ${button === "MY CART" ? "active" : ""}`}
          label="MY CART"
          onClick={() => setButton("MY CART")}
        >
          MY CART
        </a>
        <a
          className={`wishlist-tag ${button === "MY WISHLIST" ? "active" : ""}`}
          label="MY WISHLIST"
          onClick={() => setButton("MY WISHLIST")}
        >
          MY WISHLIST
        </a>
      </div>

      {button === "MY CART" && cartItems.length > 0 && (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.photo}
                alt={item.name}
                className="cart-item-image"
              />
               <div id="cart-item-name" > 
                {item.name}
              </div>
              <div id="cart-item-price">{item.price}</div>
            </div>
          ))}
        </div>
      )}

      {button === "MY WISHLIST" && wishlistItems.length > 0 && (
        <div className="cart-list">
          {wishlistItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.photo}
                alt={item.name}
                className="wishlist-item-image"
              />
              <div> 
                {item.name}
              </div>
              <div>{item.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
