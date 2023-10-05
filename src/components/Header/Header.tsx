import React from 'react';
import './Header.scss';
import logoCoinomix from '../../assets/images/coinimix-logo.svg';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header className='header'>
      
      <Link to='/'>
        <img src={logoCoinomix} alt='Coinimix logo' className='header__logo' />
      </Link>
 
    </header>
  );
};
