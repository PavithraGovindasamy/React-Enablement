import "./Cart.css";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router";
import ConfirmationModal from "../../Model/ConfirmationModal";

export default function Cart({
  cartItems,
  wishlistItems,
  setCartItems,
  handleAddToCart,
  activeTabs,
  setActiveTabs,
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartInfo")) || [];
    const storedWishlistItems = JSON.parse(localStorage.getItem("wishlistInfo")) || [];
    const storedActiveTab = localStorage.getItem("activeTab") || "MY CART"; 

    setCartItems(storedCartItems);
    setActiveTabs(storedActiveTab);
  }, [setCartItems, setActiveTabs]);

  const handlePlaceOrder = () => {
    setModalOpen(true);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    navigate(`/confirmOrder`, { state: { cartItems } });
    localStorage.removeItem("cartInfo");
    localStorage.removeItem("wishlistInfo");
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const isCartEmpty = cartItems.length === 0;
  const isWishlistEmpty = wishlistItems.length === 0;

  if (isCartEmpty && isWishlistEmpty) {
    return null;
  }

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toLocaleString();
  };

  const handleQuantityChange = (item, change) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.name === item.name) {
        const newQuantity = cartItem.quantity + change;
        return { ...cartItem, quantity: Math.max(newQuantity, 0) };
      }
      return cartItem;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cartInfo", JSON.stringify(updatedCart));
  };

  const handleTabSwitch = (tab) => {
    setActiveTabs(tab);
    localStorage.setItem("activeTab", tab); 
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <a
          className={`cart-tag ${activeTabs === "MY CART" ? "active-link" : ""}`}
          onClick={() => handleTabSwitch("MY CART")}
        >
          MY CART
        </a>
        <a
          className={`wishlist-tag ${activeTabs === "MY WISHLIST" ? "active-link" : ""}`}
          onClick={() => handleTabSwitch("MY WISHLIST")}
        >
          MY WISHLIST
        </a>
      </div>

      {activeTabs === "MY CART" && cartItems.length > 0 && (
        <>
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="image-wrapper">
                  <img src={item.photo} alt={item.name} className="cart-item-image" />
                </div>
                <div className="cart-item-details">
                  <div id="cart-item-name">{item.name}</div>
                  <div id="cart-item-price">&#x20b9;{item.price}</div>
                </div>
                <div className="cart-button-container">
                  <p onClick={() => handleQuantityChange(item, -1)}>-</p>
                  <p>{item.quantity}</p>
                  <p onClick={() => handleQuantityChange(item, 1)}>+</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-amount">
              <p className="cart-total-label">TOTAL AMOUNT</p>
              <p className="cart-total-amount">&#x20b9; {calculateTotalPrice()}</p>
            </div>
            <div>
              <Button className="active" label="PLACE ORDER" clicked={handlePlaceOrder} />
              <ConfirmationModal
                title="Confirm Order"
                message="Are you sure you want to place this order?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                isOpen={isModalOpen}
              />
            </div>
          </div>
        </>
      )}

      {activeTabs === "MY WISHLIST" && wishlistItems.length > 0 && (
        <div className="cart-list">
          {wishlistItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="image-wrapper">
                <img src={item.photo} alt={item.name} className="wishlist-item-image" />
              </div>
              <div className="wishlist-item-details">
                <div id="cart-item-name">{item.name}</div>
                <div id="cart-item-price">&#x20b9;{item.price}</div>
              </div>
              <div className="wishlist-button-container">
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
