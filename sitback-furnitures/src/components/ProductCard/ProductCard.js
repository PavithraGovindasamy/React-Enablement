import Image from "../Images/Image.js";
import Button from "../Button/Button";
import './ProductCard.css';
import ShieldIcon from '../../assests/images/shieldIcon.png';
import defaultImage from '../../assests/images/photo.jpg';

export default function ProductCard({ name, photo, description, guarantee, price, onAddToCart, onAddToWishlist, isHighlighted, onCardClick, quantity }) {
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleAddToCart = () => {

    const newProduct = { name, photo, price, quantity: 1 }; 
    onAddToCart(newProduct); 
    onCardClick();  
  };

  const handleAddToWishlist = () => {

    const newProduct = { name, photo, price }; 
    onAddToWishlist(newProduct);
    onCardClick(); 
  };

  const onImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className={`product-cards ${isHighlighted ? 'highlighted' : ''}`} onClick={onCardClick}> 
      <div className="images">
        {photo && (
          <Image
            images={photo ? photo : defaultImage}
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
        />
        <Button
          className="active"
          label="ADD TO CART"
          clicked={handleAddToCart}
        />
      </div>
    </div>
  );
}
