import React from 'react';

const Product = ({ imageUrl, title, description }) => (
  <div>
    <img src={imageUrl} alt='beer' />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Product;
