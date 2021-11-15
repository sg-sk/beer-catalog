import React from 'react';

const Grid = ({ children }) => (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>
    {children}
  </div>
);

export default Grid;
