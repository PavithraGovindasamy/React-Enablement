import Header from "../../components/Header/Header.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ConfirmationPage.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import {ClipLoader } from "react-spinners";
import Cart from      '../../components/Cart/Cart.js'
import HomePage from "../Home/HomePage.js";


export default function ConfirmationPage() {
  const [shoppingData, setShoppingData] = useState([]);
  const { productName } = useParams();
//   var params = productName.toLowerCase();
  const [isLoading, setIsLoading] = useState(true);


  return (
    <>
      <Header />
     <div className="confirmation-message-container">
        <h2>Order Confirmation</h2>
        <p>Thank you for shopping with us.The items will be delivered within 7days</p>
        <div></div>
     <div></div>
     <div></div>
      <div></div>
     </div>
        {/* {
          isLoading?(
            <div className="loader-container ">
            <ClipLoader
              aria-label="Loading Spinner"
              data-testid="loader"
              
            />
            </div>
          ):(
            <div className="shopping-container">
                <div className="product-container">
            {shoppingData.map((item) => (
              <ProductCard key={`${item.id}`} {...item}></ProductCard>
            ))}
            </div>
            <Cart/>

            </div>
          
          )
        }
   */}
 

     <HomePage></HomePage>
      
    </>
  );
}
