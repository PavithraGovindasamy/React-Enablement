import { CircleLoader } from "react-spinners";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card.js";
import './Product.css'
import Button from '../../components/Button/Button.js';

export default function Product() {
  const [productData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonmockserver.vercel.app/api/shopping/furniture/categories")
      .then((res) => res.json())
      .then((productData) => {
        setData(productData);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="home-container">
        <div className="home-heading">
        <h1>Your Home,With Love</h1>
        <h3>Come, Choose from millions of products</h3>
        </div>
        {isLoading ? (
          <div className="loader-container">
            <CircleLoader
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <p>Loading bro...wait keep quiet</p>
          </div>
        ) : (
          <>
          <div className="container">
            {productData.map((item,index) => (
              <Card {...item} key={`${item.place}-${index}`}></Card>
            ))}
          </div>
       
          </>
        )
        }

      </div>
    </>
  );
}
