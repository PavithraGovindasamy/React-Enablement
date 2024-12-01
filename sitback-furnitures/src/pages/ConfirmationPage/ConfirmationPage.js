import Header from "../../components/Header/Header.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ConfirmationPage.css";
import { ClipLoader } from "react-spinners";
import Cart from "../../components/Cart/Cart.js";
import HomePage from "../Home/HomePage.js";
import { useLocation, Link } from "react-router-dom";
import Image from "../../components/Images/Image.js"

/**
 * Page which displays the order details once the payment is over
 * @returns ConfirmationPage
 */
export default function ConfirmationPage() {
  const [shoppingData, setShoppingData] = useState([]);
  const { productName } = useParams();
  //   var params = productName.toLowerCase();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { cartItems } = location.state || {};
  
  return (
    <>
    <div className="confirmation-message-container">
    <div className="confirmation-modal" >
      <div className="order-confirmation">
      <h2 className="order-confirmation-heading">Order Confirmation</h2>
        <p>
          Thank you for shopping with us.The items will be delivered within
          7days
        </p>
      </div>
       
       
        <div className="confirmation-page-container">
        {cartItems.map((item) => (
               <div 
               className={`confirmation-cards`} 
             >      <div className="images">
                   {item.photo && (
                     <Image
                       images={item.photo}
                       className="images"
                     />
                   )}
                 </div>
                 <div className="products-details">
                   <p className="product-cards-heading">{item.name}</p>
                   <p className="product-price">
                     <i className="fa fa-inr"></i> {item.price}
                   </p>
                   
                 </div>
                 <p className="product-quantity">Quantity: {item.quantity}</p>
                 <p className="cart-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

</p>
                 </div>
            ))}
      </div>
      </div>
    </div>
    
      

      <HomePage></HomePage>
    </>
  );
}
