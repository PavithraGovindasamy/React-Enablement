import React from 'react';
import Image from "../Images/Image.js"
import Button from "../Button/Button";
import './ProductCard.css'
import ShieldIcon from '../../assests/images/shieldIcon.png'
export default function ProductCard({ name, photo, description,guarantee,price}) {

    const prices=price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  
  return (
    <div className="product-cards">
     <div className="images">
     {photo.length>0 && <Image images={photo} className="images" ></Image>} 
     </div>
     <div className='products-details'>
      <p className="product-cards-heading">{name}</p>
      <p className='product-price'> <i className="fa fa-inr"></i> {prices}</p>
      </div>
      
      <p className="product-description">{description}</p>
      <div className='guarantee-details'> 
      <img src={ShieldIcon} alt="shield icon" className='shield-icon'/>  
      <p>{guarantee} YEARS GUARANTEE</p>
      </div>
      <hr></hr>  
     <div className='button-container'>
      <Button id="wishlist-button" label={"ADD TO WISHLIST"} ></Button>
      <Button id="cart-button" label={"ADD TO CART"} ></Button>
      </div>
    </div>
  );
}

