import React from 'react';
import { Link } from 'react-router-dom';
import './CardLatestNews.scss';
import { ArticleData } from '../../types/articleType';
import { CardTags } from '../CardTags';
import { formateDate } from '../../utils/helpers';

interface Props {
  article: ArticleData;
}

export const CardLatestNews: React.FC<Props> = ({ article }) => {
  const articleData = article.attributes;
  const articleUrl = `/${articleData.categories.data[0].attributes.slug}/${articleData.slug}`;

  return (
    <Link to={articleUrl}>
    <div className='card-latest-news'>
      <div className='card-latest-news__container'>
        <div className='card-latest-news__body'>
          <div className='card-latest-news__body-image'>
              <img className='card-latest-news__image' src={articleData.image.data.attributes.formats.medium.url} alt={articleData.title} />

            <div className='card-latest-news__header'>
              <CardTags categories={articleData.categories.data} isArrow={false} />

              <div className='card-latest-news__author'>
                  <span className='card-latest-news__author-link'>{articleData.author.data.attributes.name}</span>
                  <p className='card-latest-news__author-date'>{formateDate(articleData.publish_date)}</p>
              </div>
            </div>
          </div>

          <div className='card-latest-news__body-content'>
            <h3 className='card-latest-news__body-title'>
                  <Link to={articleUrl} className='card-latest-news__title'>
                    {articleData.title}
                  </Link>
              </h3>

              <p className='card-latest-news__body-description'>
                {articleData.description}
              </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}
