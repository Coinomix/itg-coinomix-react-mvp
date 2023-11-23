import React from 'react';
import './CardBanner.scss';
import { Link } from 'react-router-dom';

interface Props {
  imgUrl?: string;
  height?: string;
  link?: string;
  imgAlt?: string;
}

export const CardBanner: React.FC<Props> = React.memo(({ 
  imgUrl,
  height,
  link = '',
  imgAlt,
}) => {
  return (
    <div className='cardbanner' style={{ height }}>
      {imgUrl && link && (
        <Link to={`https://${link}`} >
          <img
            src={imgUrl}
            className='cardbanner__image'
            alt={imgAlt}
          />
        </Link>
      )}

      {imgUrl && !link && (
        <img
          src={imgUrl}
          className='cardbanner__image'
          alt={imgAlt}
        />
      )}
    </div>
  );
});
