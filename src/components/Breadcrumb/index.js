import React from 'react';

import { Link } from 'react-router-dom';

const Breadcrumb = ({ beerName }) => (
  <div className='flex gap-2'>
    <Link to='/'>
      <span className='underline text-md md:text-2xl'>Home</span>
    </Link>
    <span className='text-md md:text-2xl'>|</span>
    <span className='text-md md:text-2xl font-bold'>{beerName}</span>
  </div>
);

export default Breadcrumb;
