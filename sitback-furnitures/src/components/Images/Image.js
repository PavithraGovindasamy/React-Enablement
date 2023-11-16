import React from 'react';
import './Images.css'
const Image = ({ images, category }) => {
  console.log('Images component - images:', images);

  const handleImageError = (e) => {
    e.target.style.display = 'none'; 
  };
  return (
    <div className='images-container'>
            <img src={images} alt={category} 
             onError={handleImageError} />

    </div>
  );
};

export default Image;
