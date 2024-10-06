
import React, { useState } from 'react';
import './Images.css';
import defaultImage from '../../assests/images/photo.jpg';

const Image = ({ images, category, size, isAbsolute,id }) => {
  const [currentSrc,setCurrentSrc]=useState(images || defaultImage);

  const onImageError = (e) => {
    setCurrentSrc(defaultImage);
    console.log("HEY IMAGE ERROR "+e+"sjs"+defaultImage);
  }

  const imageStyle = isAbsolute
    ? {
        width: size.width,
        height: size.height,
        borderRadius: '17px',
        position: 'absolute'
      }
      :{};
    

  return (
    <div className="images-container">
      <img
        id={id}
        src={currentSrc}
        alt={category}
        onError={onImageError} 
        style={imageStyle}
      />
    </div>
  );
};

export default Image;
