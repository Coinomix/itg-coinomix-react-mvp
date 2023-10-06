import React from 'react';
import './CardNewsSmall.scss';
import { CardTags } from '../CardTags';
import { Article } from '../../types/articleType';
import { Link } from 'react-router-dom';

interface Props {
  imgUrl?: string;
  article: Article;
}

export const CardNewsSmall: React.FC<Props> = ({
  imgUrl,
  article,
}) => {
  return (
    <Link to={article.attributes.slug} >
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
            <CardTags categories={article.attributes.categories.data} />
          </div>

          <div className='cardnews-small__title'>
            {/* <Link to={article.attributes.slug} className='cardnews-small__title-link'> */}
              {article.attributes.title}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Link>
  );
};
