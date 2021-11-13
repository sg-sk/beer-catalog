import React from 'react';

const Product = ({ imageUrl, title }) => (
  <div>
    <img src={imageUrl} alt='beer' />
    <h3>{title}</h3>
  </div>
);

export default Product;
