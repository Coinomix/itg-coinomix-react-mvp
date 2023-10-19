import React from 'react';
import './CardNewsTop.scss';
// import { CardTags } from '../CardTags';
import arrowIcon from '../../assets/images/arrow_icon.svg';
import imgCity from '../../assets/images/demo/city.png';

export const CardNewsTop = () => {
  return (
    <div className='cardnewstop'>
      <div className='cardnewstop__left'>
          <img 
            src={imgCity}
            className='cardnewstop__image'
          />
        <div className='cardnewstop__tags'>
          {/* <CardTags isArrow={false} /> */}
        </div>
      </div>
      <div className='cardnewstop__right'>
        <div className='cardnewstop__header'>
          <a href='#/'>
            <h3 className='cardnewstop__title'>
              Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023
            </h3>
          </a>
          <p className='cardnewstop__description'>
            The decision by the US Securities and Exchange Commission (SEC) to file a complaint against Binance caused frustration in the cryptocurrency community. Binance says it cooperated.
          </p>
        </div>
        <div className='cardnewstop__footer'>
          <div className='cardnewstop__author'>
            <a href='#/'>
              <img src='../../assets/images/header/demo_user.jpg' alt='Demo user author' className='cardnewstop__author-photo' />
            </a>
            <div className='cardnewstop__author-name'>
              <a href='#/' className='cardnewstop__author-link'>Chris Moore</a>
              <span className='cardnewstop__date'>Sep 10, 2023</span>
            </div>
          </div>
          <a href='#/'>
            <img className='cardtags__arrowicon' src={arrowIcon} alt='Arrow Icon' />
          </a>
        </div>
      </div>
    </div>
  );
};
