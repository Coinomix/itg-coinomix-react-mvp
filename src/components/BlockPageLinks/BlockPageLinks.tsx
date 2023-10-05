import React from 'react';
import './BlockPageLinks.scss'
import { Link } from 'react-router-dom';

export const BlockPageLinks = () => {
  return (
    <div className='block-page-links'>
      <Link to='/digital' className='block-page-links__link'>
        Digital
      </Link>
      <Link to='/analytics' className='block-page-links__link'>
        Analytics
      </Link>
      <Link to='/exchange' className='block-page-links__link'>
        Exchange
      </Link>
      <Link to='/directory' className='block-page-links__link'>
        Directory
      </Link>
      <Link to='/blogs' className='block-page-links__link'>
        Blogs
      </Link>
      <Link to='#' className='block-page-links__link'>
        Tags
      </Link>
      <Link to='#' className='block-page-links__link'>
        Privacy Policy
      </Link>
      <Link to='#' className='block-page-links__link'>
        Terms
      </Link>
      <Link to='#' className='block-page-links__link'>
        Cookies
      </Link>
    </div>
  );
};
