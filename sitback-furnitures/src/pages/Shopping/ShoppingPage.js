import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header.js'
import Product from '../../components/Product/Product.js'
import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import './ShoppingPage.css'
import ProductCard from '../../components/ProductCard/ProductCard';


export default function ShoppingPage(){
  const [shoppingData,setShoppingData]=useState([]);
  const { productName } = useParams();
  var params = productName.toLowerCase();

//   console.log(productName);
    useEffect(() => {
        fetch(`https://jsonmockserver.vercel.app/api/shopping/furniture/products?category=${params}`)
          .then((res) => res.json())
          .then((shoppingData) => {
            setShoppingData(shoppingData);
            // console.log(productName);
            console.log(shoppingData);
          });
      }, [params]);
    return(
        <>
          <Header />
          <div className="product-container">

          {shoppingData.map((item) => (
            <>
            <ProductCard {...item}></ProductCard>
            </>
          ))}
        </div>
        </>
    )
}