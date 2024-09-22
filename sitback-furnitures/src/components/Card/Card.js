import "./Card.css";
import React from 'react';
import  {useNavigate} from "react-router";
import PropTypes from "prop-types";
import Image from "../Images/Image.js"
import Button from "../Button/Button";
import './Card.css';
export default function Card({ category, photo, description}) {
    
  const navigate=useNavigate();
  const handleClick=()=>{
      navigate(`/categories/${category}`)    
  }
  
  return (
    <div className="cards">
     <div className="card-images">
     {<Image images={photo} category={category}></Image>} 
     </div>
      <p className="cards-heading">{category}</p>
      <p className="description">{description}</p>
      <Button className="active" label={"SHOP NOW"} clicked={handleClick} ></Button>
    </div>
  );
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};