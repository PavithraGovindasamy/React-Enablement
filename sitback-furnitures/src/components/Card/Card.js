import "./Card.css";
import React from 'react';
import  {useState} from "react-router";
import PropTypes from "prop-types";
import Image from "../Images/Image.js"

export default function Card({ category, photo, description}) {
  return (
    <div className="cards">
     {/* <img src={require(`images/${category}.png`)} alt="places" /> */}
     <div className="images">
     {photo.length>0 && <Image images={photo} category={category}></Image>} 
     </div>
      <p className="cards-heading">{category}</p>
      <p className="description">{description}</p>
    </div>
  );
}

Card.propTypes = {
  place: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};