import React from 'react';

const NotFound = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-center'>
        <h1 className='font-bold text-base md:text-2xl'>
          We couldn't find what you were looking for 😥
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
