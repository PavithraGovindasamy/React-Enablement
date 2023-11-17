import CardCart from "../CartCard/CartCard";
import './Cart.css'

export default function Cart() {
  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <p className="cart-tag">MY CART</p>
          <p className="wishlist-tag">MY WISHLIST</p>
        </div>
        <CardCart/>
      </div>
    </>
  );
}
