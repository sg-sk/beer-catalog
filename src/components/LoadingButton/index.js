import React from 'react';

const LoadingButton = ({ text, callback }) => (
  <button
    type='button'
    onClick={callback}
    className='px-20 sm:px-32 md:px-64 xl:px-96 py-3 rounded bg-black text-white'
  >
    {text}
  </button>
);

export default LoadingButton;
