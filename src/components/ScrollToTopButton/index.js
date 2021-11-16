import React from 'react';
import BackToTopArrow from '../../assets/chevron-circle-up-solid.svg';

const ScrollToTopButton = () => (
  <button
    id='scrollToTopButton'
    type='button'
    className='fixed bottom-8 right-4'
    onClick={() => {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }}
  >
    <img src={BackToTopArrow} alt='back-to-top' className='h-10 w-10' />
  </button>
);

export default ScrollToTopButton;
