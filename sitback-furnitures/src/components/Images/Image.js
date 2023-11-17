
import React from 'react';
import './Images.css';

const Image = ({ images, category, size, isAbsolute }) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  const imageStyle = isAbsolute
    ? {
        position: 'absolute',
        marginLeft: '24px',
        marginTop: '110px',
        width: size.width,
        height: size.height,
        borderRadius: '17px'
      }
      :{};
    

  return (
    <div className="images-container">
      <img
        src={images}
        alt={category}
        onError={handleImageError}
        style={imageStyle}
      />
    </div>
  );
};

export default Image;
