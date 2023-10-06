import React from 'react';
import './CardNews.scss';
import classNames from 'classnames';
import { CardTags } from '../CardTags';
import { CardNewsType } from '../../types/enums';
import { Link } from 'react-router-dom';
import { ArticleAttributes } from '../../types/articleType';
import { formateDate } from '../../utils/helpers';

interface Props {
  imgUrl?: string;
  type?: CardNewsType;
  article: ArticleAttributes;
}

export const CardNews: React.FC<Props> = ({
  imgUrl = '',
  type,
  article,
}) => {

  const publishData = formateDate(article.publish_date);

  return (
    <Link to={`/${article.categories.data[0].attributes.slug}/${article.slug}`} >
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
            <CardTags categories={article.categories.data} />

            <div className={classNames('cardnews__title', {
            'cardnews__title-top': type === CardNewsType.top,
          })}>

              <Link to={article.slug} className='cardnews__title-link'>
                {article.title}
              </Link>
            </div>
          </div>

          <div className='cardnews__footer'>
            <ul className='cardnews__author'>
              <li>
                <span className='cardnews__author-link'>{`by ${article.author.data.attributes.name}`}</span>
              </li>
              <li>{publishData}</li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};
