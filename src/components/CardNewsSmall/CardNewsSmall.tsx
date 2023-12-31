import React from 'react';
import './CardNewsSmall.scss';
import { CardTags } from '../CardTags';
import { ArticleData } from '../../types/articleType';
import { Link } from 'react-router-dom';

interface Props {
  imgUrl?: string;
  article: ArticleData;
}

export const CardNewsSmall: React.FC<Props> = React.memo(({
  imgUrl,
  article,
}) => {
  const imageArticle = imgUrl ? imgUrl : article.attributes.image.data.attributes.formats.medium.url;

  return (
    <Link to={`/${article.attributes.tags.data[0].attributes.slug}/${article.attributes.slug}`} style={{width: '100%'}}>
      <div className='cardnews-small'>
        {imageArticle && (
          <img
            src={imageArticle}
            className='cardnews-small__image'
            alt={article.attributes.title}
          />
        )}
        <div className='cardnews-small__content'>
          <div className='cardnews-small__head'>
            <CardTags tags={article.attributes.tags.data} />
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
});
