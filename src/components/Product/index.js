import React from 'react';

import { Link } from 'react-router-dom';

const Product = ({ beerId, imageUrl, title, alcoholByVolume }) => (
  <div>
    <Link to={`/${beerId}`}>
      <div className='bg-gray-100 py-11 rounded transition duration-150 ease-in-out transform hover:scale-105'>
        <img
          src={imageUrl}
          alt='beer-product-img'
          className='flex h-48 w-full object-scale-down'
        />
      </div>
    </Link>
    <div className='mt-3'>
      <h3 className='font-bold'>{title}</h3>
      <p>{alcoholByVolume} ABV</p>
    </div>
  </div>
);

export default Product;
