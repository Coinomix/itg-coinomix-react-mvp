import React from 'react';
import { Link } from 'react-router-dom';
import './BlockLatestNews.scss';
import arrowIcon from '../../assets/images/arrow_icon.svg';

export const BlockLatestNews = () => {
  return (
    <div className='latestnews'>
      <div className='latestnews__header'>
        <h3 className='latestnews__title'><Link to='/latest-news'>Latest news</Link></h3>
        <Link to='/latest-news'>
          <img className='latestnews__arrowicon' src={arrowIcon} alt='Latest news icon' />
        </Link>
      </div>
      
      <div className='latestnews__container'>
        <div className='latestnews__item'>
          <Link to='/article' className='latestnews__item-link'>
            <h3 className='latestnews__item-title'>Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</h3>
          </Link>
          <p className='latestnews__item-description'>Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</p>
          <hr className='latestnews__item-hr' />
        </div>

        <div className='latestnews__item'>
          <Link to='/article' className='latestnews__item-link'>
            <h3 className='latestnews__item-title'>Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</h3>
          </Link>
          <p className='latestnews__item-description'>Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</p>
          <hr className='latestnews__item-hr' />
        </div>

        <div className='latestnews__item'>
          <Link to='/article' className='latestnews__item-link'>
            <h3 className='latestnews__item-title'>Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</h3>
          </Link>
          <p className='latestnews__item-description'>Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</p>
          <hr className='latestnews__item-hr' />
        </div>

        <div className='latestnews__item'>
          <Link to='/article' className='latestnews__item-link'>
            <h3 className='latestnews__item-title'>Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</h3>
          </Link>
          <p className='latestnews__item-description'>Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023</p>
          <hr className='latestnews__item-hr' />
        </div>
      </div>
      
    </div>
  );
};
