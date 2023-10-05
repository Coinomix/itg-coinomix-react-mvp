import React from 'react';
import './CardNewsSmall.scss';
import { CardTags } from '../CardTags';

interface Props {
  imgUrl?: string;
}

export const CardNewsSmall: React.FC<Props> = ({
  imgUrl,
}) => {
  return (
    <div className='cardnews-small'>
      {imgUrl && (
        <img 
          src={imgUrl} 
          className='cardnews-small__image'
          alt=''
        />
      )}
      <div className='cardnews-small__content'>
        <div className='cardnews-small__head'>
          <CardTags />
        </div>

        <div className='cardnews-small__title'>
          <a href='#/' className='cardnews-small__title-link'>
            Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023
          </a>
        </div>
      </div>
    </div>
  );
};
