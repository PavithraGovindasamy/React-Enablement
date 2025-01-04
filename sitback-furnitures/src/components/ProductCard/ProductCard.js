import React, { useState, useEffect } from "react";
import Image from "../Images/Image.js";
import Button from "../Button/Button";
import './ProductCard.css';
import ShieldIcon from '../../assests/images/shieldIcon.png';
import defaultImage from '../../assests/images/photo.jpg';

export default function ProductCard({ 
  name, 
  photo, 
  description, 
  guarantee, 
  price, 
  onAddToCart, 
  onAddToWishlist, 
  onCardClick, 
  quantity ,
  hasItemsInCart,
  hasItemsInWishlist
}) {
  const [activeButton, setActiveButton] = useState("cart");
  const [isInWishlist, setIsInWishlist] = useState(false); 
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const [wishlistItems, setWishlistItems] = useState(
    () => JSON.parse(localStorage.getItem("wishlistInfo")) || []
  );

  // Check if the product is in the wishlist 
  useEffect(() => {
    const productInWishlist = wishlistItems.some(item => item.name === name);
    setIsInWishlist(productInWishlist);
  }, [wishlistItems, name]);

  const handleAddToCart = () => {
    const newProduct = { name, photo, price, quantity: 1 }; 
    onAddToCart(newProduct); 
    onCardClick();  
    setActiveButton("cart"); 
  };

  const handleAddToWishlist = () => {
    if (!isInWishlist) { 
      const newProduct = { name, photo, price }; 
      onAddToWishlist(newProduct);
      setIsInWishlist(true); 
      onCardClick(); 
    }
  };

  const onImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div 
      className={`product-cards ${hasItemsInCart || hasItemsInWishlist ? 'products-flex' : ''}`} 
      onClick={onCardClick}
    >
      <div className="images">
        {photo && (
          <Image
            images={photo}
            className="images"
            onError={onImageError}
          />
        )}
      </div>
      <div className="products-details">
        <p className="product-cards-heading">{name}</p>
        <p className="product-price">
          <i className="fa fa-inr"></i> {formattedPrice}
        </p>
      </div>
      <p className="product-description">{description}</p>
      <div className="guarantee-details">
        <img src={ShieldIcon} alt="shield icon" className="shield-icon" />
        <p>{guarantee} YEARS GUARANTEE</p>
      </div>

      <hr />
      <div className="button-container">
        <Button
          id="wishlist-button"
          label="ADD TO WISHLIST"
          clicked={handleAddToWishlist}
          disabled={isInWishlist} 
        />
        <Button
          id="cart-button"
          label="ADD TO CART"
          clicked={handleAddToCart}
          onSelected={activeButton === "cart"}
        />
      </div>
    </div>
  );
}
