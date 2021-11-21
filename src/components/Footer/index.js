import React from 'react';

import { LINKEDIN_URL, GITHUB_URL } from '../../config';

import Logo from '../../assets/logo.png';
import Linkedin from '../../assets/linkedin-brands.svg';
import Github from '../../assets/github-square-brands.svg';

const Footer = () => {
  return (
    <div id='footer' className='bg-gray-100'>
      <div className='flex flex-col gap-4 py-7'>
        <div className='flex justify-center'>
          <img src={Logo} alt='logo' className='h-24' />
        </div>
        <div className='flex justify-center'>
          <p>© 2021 Stephen Kwan. All Rights Reserved.</p>
        </div>
        <div className='flex justify-center gap-4'>
          <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
            <img src={Linkedin} alt='LinkedIn-logo' className='h-10' />
          </a>
          <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
            <img src={Github} alt='Github-logo' className='h-10' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
