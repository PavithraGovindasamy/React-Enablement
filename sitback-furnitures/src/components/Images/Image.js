import React from 'react';
import './Images.css'
const Image = ({ images, category }) => {
  console.log('Images component - images:', images);

  return (
    <div className='images-container'>
            <img src={images} alt={category}  />

    </div>
  );
};

export default Image;
