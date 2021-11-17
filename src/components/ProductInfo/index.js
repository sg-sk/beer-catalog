import React from 'react';

const ProductInfo = ({
  imageUrl,
  name,
  tagline,
  description,
  alcoholByVolume,
  firstBrewed,
}) => (
  <div className='grid gap-10 grid-cols-1 md:grid-cols-2'>
    <div className='py-20 bg-gray-100 rounded'>
      <img
        src={imageUrl}
        alt='beer-product'
        className='h-96 w-full object-scale-down'
      />
    </div>
    <div className='flex flex-col gap-5'>
      <h1 className='text-3xl md:text-5xl xl:text-6xl'>{name}</h1>
      <h3 className='text-xl md:text-2xl xl:text-3xl font-light italic'>
        {tagline}
      </h3>
      <p className='text-lg md:text-xl text-justify'>{description}</p>
      <p className='text-lg md:text-xl font-bold'>
        {alcoholByVolume} ABV | First brewed on {firstBrewed}
      </p>
    </div>
  </div>
);

export default ProductInfo;
