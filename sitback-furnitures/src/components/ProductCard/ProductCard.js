import React from 'react';
import Image from "../Images/Image.js"
import Button from "../Button/Button";
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShieldCat,faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import ShieldIcon from '../../assests/images/shieldIcon.png'
export default function ProductCard({ name, photo, description,guarantee,price}) {
    const style = { color: "green", fontSize: "1.5em" }

  
  return (
    <div className="product-cards">
     <div className="images">
     {photo.length>0 && <Image images={photo} className="images" ></Image>} 
     </div>
     <div className='products-details'>
      <p className="product-cards-heading">{name}</p>
      <p className='product-price'>{price}</p>
      </div>
      
      <p className="product-description">{description}</p>
      <div className='guarantee-details'> 
      <img src={ShieldIcon} alt="shield icon" className='shield-icon'/>  
      <p>{guarantee}years guarantee</p>
      </div>
      <hr></hr>  
     
      <Button className="wishlist-button" label={"Add To Wishlist"} ></Button>
      <Button className="cart-button" label={"Add To Cart"} ></Button>
    </div>
  );
}

