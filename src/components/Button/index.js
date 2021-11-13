import React from 'react';

const Button = ({ text, callback }) => (
  <button type='button' onClick={callback}>
    {text}
  </button>
);

export default Button;
