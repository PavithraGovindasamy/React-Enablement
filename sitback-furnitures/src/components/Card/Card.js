import "./Card.css";
import React from 'react';
import  {useState} from "react-router";
import PropTypes from "prop-types";
import Image from "../Images/Image.js"
import Button from "../Button/Button";
export default function Card({ category, photo, description}) {
  return (
    <div className="cards">
     {/* <img src={require(`images/${category}.png`)} alt="places" /> */}
     <div className="images">
     {photo.length>0 && <Image images={photo} category={category}></Image>} 
     </div>
      <p className="cards-heading">{category}</p>
      <p className="description">{description}</p>
      <Button className="destination-button" label={"SHOP NOW"} ></Button>
    </div>
  );
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};