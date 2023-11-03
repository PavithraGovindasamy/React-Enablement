import React from "react";
import logo from "../../assets/images/logo/logo.png";
import './Header.css'
export default function Header (){
  return (
    <div className="header">
      <div className="image-container">
        <img src={logo} alt="logoImage" />
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

