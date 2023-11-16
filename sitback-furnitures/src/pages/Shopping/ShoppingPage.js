import Header from "../../components/Header/Header.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ShoppingPage.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import {ClipLoader } from "react-spinners";

export default function ShoppingPage() {
  const [shoppingData, setShoppingData] = useState([]);
  const { productName } = useParams();
  var params = productName.toLowerCase();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://jsonmockserver.vercel.app/api/shopping/furniture/products?category=${params}`
    )
      .then((res) => res.json())
      .then((shoppingData) => {
        setShoppingData(shoppingData);
        setIsLoading(false);
      });
  }, [params]);
  return (
    <>
      <Header />
     
        {
          isLoading?(
            <div className="loader-container ">
            <ClipLoader
              aria-label="Loading Spinner"
              data-testid="loader"
              
            />
            </div>
          ):(
            <div className="product-container">
            {shoppingData.map((item) => (
              <ProductCard key={`${item.id}`} {...item}></ProductCard>
            ))}
            </div>
          )
        }
      
     
      
    </>
  );
}
