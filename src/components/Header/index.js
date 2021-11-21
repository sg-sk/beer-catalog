import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

const Header = () => (
  <div id='header' className='py-10'>
    <Link to='/' className='inline-block'>
      <img src={Logo} alt='logo' className='h-24' />
    </Link>
  </div>
);

export default Header;
