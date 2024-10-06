import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import ProductCard from "../../components/ProductCard/ProductCard";
import Cart from "../../components/Cart/Cart.js";
import { useParams } from "react-router";
import { ClipLoader } from "react-spinners";
import "./ShoppingPage.css";

export default function ShoppingPage() {
  const [shoppingData, setShoppingData] = useState([]);
  const { productName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartInfo')) || []);
  const [wishlistItems, setWishlistItems] = useState(() => JSON.parse(localStorage.getItem('wishlistInfo')) || []);
  const [highlightedProductId, setHighlightedProductId] = useState(null);

  var params = productName.toLowerCase();

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

  const handleAddToCart = (newProduct) => {
    const existingProductIndex = cartItems.findIndex(item => item.name === newProduct.name);

    if (existingProductIndex > -1) {
      const updatedCart = [...cartItems];
      setCartItems(updatedCart);
      localStorage.setItem('cartInfo', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cartItems, newProduct];
      setCartItems(updatedCart);
      localStorage.setItem('cartInfo', JSON.stringify(updatedCart));
    }
  };

  const handleAddToWishlist = (newProduct) => {
    const existingProductIndex = wishlistItems.findIndex(item => item.name === newProduct.name);
    if (existingProductIndex > -1) {
      const updatedWishlist = [...wishlistItems];
      setCartItems(updatedWishlist);
      localStorage.setItem('wishlistInfo', JSON.stringify(updatedWishlist));
    } else {
      const updatedWishlist = [...wishlistItems, newProduct];
      setWishlistItems(updatedWishlist);
      localStorage.setItem('wishlistInfo', JSON.stringify(updatedWishlist));
    }
   
  };

  const handleCardClick = (id) => {
    setHighlightedProductId(id);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loader-container">
          <ClipLoader aria-label="Loading Spinner" data-testid="loader" />
        </div>
      ) : (
        <div className="shopping-container">
          <div className="product-container">
            {shoppingData.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                isHighlighted={highlightedProductId === item.id} 
                onCardClick={() => handleCardClick(item.id)} 
                quantity={0}
              />
            ))}
          </div>
          <Cart cartItems={cartItems} wishlistItems={wishlistItems} />
        </div>
      )}
    </>
  );
}
