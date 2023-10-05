import React from 'react';
import './CardNews.scss';
import classNames from 'classnames';
import { CardTags } from '../CardTags';
import { CardNewsType } from '../../types/enums';
import { Link } from 'react-router-dom';

interface Props {
  imgUrl?: string;
  type?: CardNewsType;
}

export const CardNews: React.FC<Props> = ({
  imgUrl = '',
  type,
}) => {
  return (
    <div className='cardnews' style={{ height: type }}>
      {imgUrl && (
        <img
          src={imgUrl}
          className='cardnews__image'
          alt=''
        />
      )}
      <div className='cardnews__content'>
        <div className='cardnews__header'>
          <CardTags />

          <div className={classNames('cardnews__title', {
          'cardnews__title-top': type === CardNewsType.top,
        })}>

            <Link to='/article' className='cardnews__title-link'>
              Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023
            </Link>
          </div>
        </div>

        <div className='cardnews__footer'>
          <ul className='cardnews__author'>
            <li>
              <a href='#/' className='cardnews__author-link'>by Chris Moore</a>
            </li>
            <li>January 2, 2023</li>
            <li>9:00 AM GMT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
