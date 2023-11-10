import { useState, useEffect } from "react";
import Header from "../../components/Header/Header.js";
import "./HomePage.css";
import Card from "../../components/Card/Card.js";
import Footer from "../../components/Footer/Footer.js";

export default function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonmockserver.vercel.app/api/shopping/furniture/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="home-container">
        <h1>Your Home,With Love</h1>
        <h3>Come, Choose from millions of products</h3>

        <div className="container">
          {data.map((item) => (
            <Card {...item}></Card>
          ))}
        </div>
        </div>
        <Footer></Footer>
        <div className="fixed-container">
            
        </div>
     
    </>
  );
}
