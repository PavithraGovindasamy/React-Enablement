import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import cover from "../../assets/images/banner.webp";
import "./ExplorerPage.css";
import { useNavigate } from "react-router";
import Footer from "../../components/Footer/Footer";

export default function ExplorerPage() {
  const [data, setData] = useState([]);
  const [option,setOptions]=useState('');
  const navigate=useNavigate()

  useEffect(() => {
    fetch("https://nijin-server.vercel.app/api/explorer")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const handleExploreClick = () => {
    if (option) {
      navigate(`/details/${option}`);
    } 
  };
  

  return (
    <>
      <Header />
      {/* Promo and search section */}
      <div className="promo-section">
        <div className="explorer-section">
          <p className="explorer-heading">WELCOME TO EXPLORER</p>
          <p className="explorer-description">
            Your Adventure Travel Expert in the <span>SOUTH</span>
          </p>
          <select className="city" label="city" onChange={(e)=>setOptions(e.target.value)}>
            <option value="">Choose</option>
            <option value="pollachi">pollachi</option>
            <option value="thanjavur">Thanjavur</option>
            <option value="chidambaram">chidambaram</option>
            <option value="masinagudi">Masinagudi</option>
            <option value="kumbakkonam">Kumbakkonam</option>
            <option value="tirunelveli">Tirunelveli</option>
          </select>
          <Button className="explorer-button" label={"EXPLORE"} clicked={handleExploreClick}></Button>

        </div>
        <div className="explorer-image">
          <img src={cover} alt="coverImage" />
        </div>
      </div>
      {/* destination  section */}
      <div className="destination-section">
        <p className="destination-heading">Destinations</p>
        <p className="destination-content">
          Just for you. Because you and your bike are special to us!
        </p>
        <div className="container">
          {data.map((item) => (
            <Card {...item}></Card>
          ))}
        </div>
      </div>
      {/* form-section */}
      <Footer></Footer>
      <p>{option}</p>
    </>
  );
}
