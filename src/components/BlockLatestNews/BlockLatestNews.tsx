import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './BlockLatestNews.scss';
import arrowIcon from '../../assets/images/arrow_icon.svg';
import { ArticleData } from '../../types/articleType';

interface Props {
  articles: ArticleData[];
}

export const BlockLatestNews: React.FC<Props> = memo(({ articles }) => {
  return (
    <div className='latestnews'>
      <div className='latestnews__header'>
        <h1 className='latestnews__title'><Link to='/latest-news'>Latest news</Link></h1>
        <Link to='/latest-news'>
          <img className='latestnews__arrowicon' src={arrowIcon} alt='Latest news icon' />
        </Link>
      </div>

      <div className='latestnews__container'>
        {articles.map(article => {
          return (
            <div key={article.id} className='latestnews__item'>
            <Link to={`/${article.attributes.tags.data[0].attributes.slug}/${article.attributes.slug}`} className='latestnews__item-link'>
              <h2 className='latestnews__item-title'>{article.attributes.title}</h2>
            </Link>
            <p className='latestnews__item-description'>{article.attributes.description}</p>
            <hr className='latestnews__item-hr' />
            </div>
          )
        })}
      </div>

    </div>
  );
});
