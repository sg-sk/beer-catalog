import React from 'react';

import NotFoundImage from '../../assets/not-found.gif';

const NotFound = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-center'>
        <h1 className='font-bold text-base md:text-2xl'>
          We couldn't find what you were looking for 😥
        </h1>
      </div>
      <div className='flex justify-center'>
        <img
          src={NotFoundImage}
          alt='not-found'
          className='h-60 md:h-96 w-full object-scale-down'
        />
      </div>
    </div>
  );
};

export default NotFound;
