import * as React from 'react';
import './LatestNews.scss';
import { CardLatestNews } from '../CardLatestNews';
import { CardBanner } from '../CardBanner';
import bannerEpicurus from '../../assets/images/banners/banner_epicurus.png';
import bannerItg from '../../assets/images/banners/banner_itg.svg';
import { ArticleData } from '../../types/articleType';
import { Loader } from '../Loader';

interface Props {
  articles: ArticleData[];
};

const LatestNews: React.FC <Props> = ({ articles }) => {
  return (
      <main className='latest-news-page'>
        <div className='latest-news-page__container'>
          <div className='latest-news-page__content'>
            {articles.map(article => {
              return (
                <CardLatestNews key={article.id} article={article} />
              )
            })}

          </div>
          <div className='latest-news-page__sidebar'>

            <CardBanner imgUrl={bannerEpicurus} link='epicurus.io' />

            <CardBanner imgUrl={bannerItg} link='itg-investments.com' />

          </div>
        </div> 
      </main>
  );
};

export default LatestNews;
