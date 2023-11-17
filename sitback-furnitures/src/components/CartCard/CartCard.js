import Image from "../Images/Image.js";
import photo from '../../assests/images/couches.png'
import './CartCard.css'
export default function CardCart() {
    const size = {
        width: 131, 
        height: 91,
      };
  return (
    <>
      <div className="cartCard-container">
      <Image images={photo} size={size} isAbsolute />
        <div className="cartCard-header">
          <p className="cartCart-tag">MY CART</p>
          <p className="cartWishlist-tag">MY WISHLIST</p>
        </div>
      </div>
    </>
  );
}
