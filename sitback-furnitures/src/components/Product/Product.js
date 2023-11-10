import { CircleLoader } from "react-spinners";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card.js";

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
        <h1>Your Home,With Love</h1>
        <h3>Come, Choose from millions of products</h3>
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
          <div className="container">
            {productData.map((item) => (
              <Card {...item}></Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
