import './Cart.css';
import Button from "../Button/Button.js";
import { useState } from 'react';

export default function Cart({ cartItems, wishlistItems }) {
  const [button, setButton] = useState('MY CART');

  return (
    <div className="cart-container">
      <div className="cart-header">
        <Button
          className="cart-tag"
          label="MY CART"
          clicked={() => setButton("MY CART")}
          onSelected={button === "MY CART"}
        >
          MY CART
        </Button>
        <Button
          className="wishlist-tag"
          label="MY WISHLIST"
          clicked={() => setButton("MY WISHLIST")}
          onSelected={button === "MY WISHLIST"}
        >
          MY WISHLIST
        </Button>
      </div>
      
      {button === "MY CART" ? (
        <div className="cart-list">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.photo} alt={item.name} className="cart-item-image" />
                <p>{item.name} - ${item.price}</p>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      ) : (
        <div className="cart-list">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.photo} alt={item.name} className="wishlist-item-image" />
                <p>{item.name} - ${item.price}</p>
              </div>
            ))
          ) : (
            <p>Your wishlist is empty.</p>
          )}
        </div>
      )}
    </div>
  );
}
