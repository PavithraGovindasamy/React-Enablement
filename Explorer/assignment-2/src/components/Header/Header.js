import React from "react";
import logo from "../../assets/images/logo/logo.png";
import './Header.css'
import { useNavigate } from "react-router";

export default function Header (){

  const navigate=useNavigate()
  return (
    <div className="header">
      <div className="image-container">
        <img src={logo} alt="logoImage" onClick={() => navigate(`/`)} />
      </div>
      <div className="menu-container">
        <ul>
          <li>Hotels</li>
          <li>Bikes</li>
          <li>Restaurants</li>
        </ul>
      </div>
    </div>
  );
};

